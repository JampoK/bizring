import { z } from 'zod'

/**
 * Server-only environment variables schema
 * These are never exposed to the client bundle
 */
const serverEnvSchema = z.object({
  // Database
  DB_HOST: z.string().min(1, 'DB_HOST is required'),
  DB_PORT: z.coerce.number().default(5432),
  DB_USER: z.string().min(1, 'DB_USER is required'),
  DB_PASSWORD: z.string().min(1, 'DB_PASSWORD is required'),
  DATABASE_URL: z.string().url().optional(),

  // Authentication
  JWT_SECRET: z.string().min(32, 'JWT_SECRET must be at least 32 characters'),
  JWT_EXPIRES_IN: z.string().default('7d'),
  JWT_ISSUER: z.string().default('linkedin-for-businesses'),

  // Rate limiting
  API_RATE_LIMIT: z.coerce.number().default(1000),

  // Payload CMS
  PAYLOAD_SECRET: z.string().min(32, 'PAYLOAD_SECRET must be at least 32 characters'),
})

/**
 * Public environment variables (exposed to client)
 * Must be prefixed with NEXT_PUBLIC_
 */
const publicEnvSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default('LinkedIn for Businesses'),
  NEXT_PUBLIC_APP_URL: z.string().url().default('http://localhost:3000'),
  NEXT_PUBLIC_API_URL: z.string().url().default('http://localhost:3000/api'),
})

export type ServerEnv = z.infer<typeof serverEnvSchema>
export type PublicEnv = z.infer<typeof publicEnvSchema>

let cachedServerEnv: ServerEnv | null = null
let cachedPublicEnv: PublicEnv | null = null

export function validateEnv(): { server: ServerEnv; public: PublicEnv } {
  const serverEnv = serverEnvSchema.parse(process.env)
  const publicEnv = publicEnvSchema.parse(process.env)

  cachedServerEnv = serverEnv
  cachedPublicEnv = publicEnv

  return { server: serverEnv, public: publicEnv }
}

export function getServerEnv(): ServerEnv {
  if (!cachedServerEnv) {
    cachedServerEnv = serverEnvSchema.parse(process.env)
  }
  return cachedServerEnv
}

export function getPublicEnv(): PublicEnv {
  if (!cachedPublicEnv) {
    cachedPublicEnv = publicEnvSchema.parse(process.env)
  }
  return cachedPublicEnv
}

// Self-executing validation when run directly
if (require.main === module) {
  try {
    const { server, public: pub } = validateEnv()
    console.log('✅ Environment validation passed')
    console.log(`   Server vars: ${Object.keys(server).length} loaded`)
    console.log(`   Public vars: ${Object.keys(pub).length} loaded`)
    process.exit(0)
  } catch (err) {
    if (err instanceof z.ZodError) {
      console.error('❌ Environment validation failed:')
      for (const issue of err.issues) {
        console.error(`   - ${issue.path.join('.')}: ${issue.message}`)
      }
    } else {
      console.error('❌ Unexpected error:', err)
    }
    process.exit(1)
  }
}