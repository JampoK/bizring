import path from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import hpp from 'hpp'
import next from 'next'
import { getPayload } from 'payload'
import config from './payload.config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const dev = process.env.NODE_ENV !== 'production'
const frontendDir = path.resolve(dirname, '../../frontend')

const app = next({ dev, dir: frontendDir })
const handle = app.getRequestHandler()

const startServer = async () => {
  await app.prepare()

  const server = express()
  server.use(express.json({ limit: '10kb' }))
  server.use(cookieParser())

  // CORS — allow Vercel frontend to call this API
  server.use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://*.vercel.app',
        process.env.FRONTEND_URL || '',
      ].filter(Boolean),
      credentials: true,
    })
  )

  // Security headers
  server.use(
    helmet({
      contentSecurityPolicy: dev ? false : undefined,
      crossOriginEmbedderPolicy: false,
    })
  )

  // Prevent HTTP parameter pollution
  server.use(hpp())

  // Rate limiting
  const generalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many requests, please try again later' },
  })
  server.use(generalLimiter)

  const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    standardHeaders: true,
    legacyHeaders: false,
    message: { error: 'Too many auth attempts, please try again later' },
  })

  const payload = await getPayload({ config })

  // Health check
  server.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() })
  })

  // Businesses API
  server.get('/api/businesses', async (_req, res) => {
    try {
      const result = await payload.find({
        collection: 'businesses',
        where: { 'trust.verificationStatus': { equals: 'verified' } },
        limit: 100,
      })
      res.json(result.docs)
    } catch (err: any) {
      res.status(500).json({ error: err.message || 'Failed to fetch businesses' })
    }
  })

  server.get('/api/businesses/:slug', async (req, res) => {
    try {
      const result = await payload.find({
        collection: 'businesses',
        where: { slug: { equals: req.params.slug } },
        limit: 1,
      })
      if (result.docs.length === 0) {
        return res.status(404).json({ error: 'Business not found' })
      }
      res.json(result.docs[0])
    } catch (err: any) {
      res.status(500).json({ error: err.message || 'Failed to fetch business' })
    }
  })

  // Auth: Login (rate limited)
  server.post('/api/auth/login', authLimiter, async (req, res) => {
    try {
      const { email, password } = req.body
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' })
      }
      const result = await payload.login({
        collection: 'users',
        data: { email, password },
      })
      if (!result.token) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }
      res.cookie('payload-token', result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
      })
      res.json({ user: result.user })
    } catch (err: any) {
      res.status(401).json({ error: 'Authentication failed' })
    }
  })

  // Auth: Register (rate limited)
  server.post('/api/auth/register', authLimiter, async (req, res) => {
    try {
      const { name, email, password, role } = req.body
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email, and password required' })
      }
      const user = await payload.create({
        collection: 'users',
        data: { name, email, password, roles: [role || 'business_owner'] },
      })
      res.json({ user })
    } catch (err: any) {
      res.status(400).json({ error: err.message || 'Registration failed' })
    }
  })

  // Auth: Logout
  server.post('/api/auth/logout', (_req, res) => {
    res.clearCookie('payload-token', { path: '/' })
    res.json({ message: 'Logged out' })
  })

  // Auth: Me
  server.get('/api/auth/me', async (req, res) => {
    try {
      const cookieHeader = req.headers.cookie || ''
      const tokenMatch = cookieHeader.match(/payload-token=([^;]+)/)
      const token = tokenMatch ? tokenMatch[1] : null
      if (!token) return res.status(401).json({ user: null })

      const result = await payload.auth({
        headers: { ...req.headers, authorization: `JWT ${token}` } as any,
      })
      res.json({ user: result.user })
    } catch {
      res.status(401).json({ user: null })
    }
  })

  // Delegate everything else to Next.js
  server.all('*', (req, res) => handle(req, res))

  const PORT = Number(process.env.PORT) || 3001
  server.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`)
    console.log(`📋 Admin panel: ${payload.getAdminURL()}\n`)
  })
}

startServer().catch((err) => {
  console.error('Gagal menjalankan server:', err)
  process.exit(1)
})