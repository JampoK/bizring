'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'
import { Card } from '@/components/ui/ContentCard'

export default function LoginPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Login failed')

      router.push('/dashboard')
      router.refresh()
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-canvas">
      <Card padding="lg" className="w-full max-w-[448px]">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-midnight-ink rounded-sm flex items-center justify-center">
              <span className="text-surface-white font-bold">B</span>
            </div>
          </Link>
          <h1 className="text-2xl font-semibold text-midnight-ink tracking-[0.008px]">Welcome back</h1>
          <p className="text-slate-grille mt-1 tracking-[0.014px]">Sign in to your BizRing account</p>
        </div>

        {error && (
          <div className="bg-warm-mist text-amber-pop p-3 rounded-sm mb-4 text-[0.875rem] tracking-[0.014px]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            autoComplete="email"
          />
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-[0.875rem] font-medium text-oceanic-deep">Password</label>
              <Link href="/forgot-password" className="text-[0.875rem] text-deep-teal hover:underline tracking-[0.014px]">
                Forgot?
              </Link>
            </div>
            <Input
              name="password"
              type="password"
              required
              placeholder="••••••••"
              autoComplete="current-password"
            />
          </div>
          <Button type="submit" className="w-full" size="lg" loading={loading}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <p className="text-[0.875rem] text-slate-grille mt-6 text-center tracking-[0.014px]">
          Don&apos;t have an account?{' '}
          <Link href="/register" className="text-deep-teal font-medium hover:underline">
            Create one free
          </Link>
        </p>
      </Card>
    </div>
  )
}
