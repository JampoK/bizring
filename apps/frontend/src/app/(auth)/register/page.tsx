'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Card } from '@/components/ui/card'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const role = formData.get('role') as string

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password, role }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Registration failed')

      router.push('/login?registered=true')
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
          <h1 className="text-2xl font-semibold text-midnight-ink tracking-[0.008px]">Create your account</h1>
          <p className="text-slate-grille mt-1 tracking-[0.014px]">Join BizRing and start connecting</p>
        </div>

        {error && (
          <div className="bg-warm-mist text-amber-pop p-3 rounded-sm mb-4 text-[0.875rem] tracking-[0.014px]">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Full Name"
            name="name"
            type="text"
            required
            placeholder="John Doe"
          />
          <Input
            label="Email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            required
            placeholder="Min. 8 characters"
            hint="At least 8 characters"
            minLength={8}
          />
          <Select
            label="I am a"
            name="role"
            defaultValue="business_owner"
            options={[
              { value: 'business_owner', label: 'Business Owner' },
              { value: 'investor', label: 'Investor' },
            ]}
          />
          <Button type="submit" className="w-full" size="lg" loading={loading}>
            {loading ? 'Creating account...' : 'Create Account'}
          </Button>
        </form>

        <p className="text-[0.75rem] text-stone-whisper mt-4 text-center tracking-[0.017px]">
          By creating an account, you agree to our{' '}
          <Link href="/terms" className="underline hover:text-oceanic-deep">Terms</Link> and{' '}
          <Link href="/privacy" className="underline hover:text-oceanic-deep">Privacy Policy</Link>.
        </p>

        <p className="text-[0.875rem] text-slate-grille mt-6 text-center tracking-[0.014px]">
          Already have an account?{' '}
          <Link href="/login" className="text-deep-teal font-medium hover:underline">
            Sign in
          </Link>
        </p>
      </Card>
    </div>
  )
}
