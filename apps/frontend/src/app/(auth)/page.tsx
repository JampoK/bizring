import React from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/Input'

export default function RegisterPage() {
  return (
    <Container className="flex items-center justify-center min-h-[calc(100vh-theme(spacing.16))] py-12">
      <div className="w-full max-w-md bg-surface-white rounded-md p-8 shadow-md">
        <h1 className="text-heading text-center mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-body font-medium text-midnight-ink mb-1">
              Full Name
            </label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-body font-medium text-midnight-ink mb-1">
              Email Address
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-body font-medium text-midnight-ink mb-1">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="block text-body font-medium text-midnight-ink mb-1">
              Confirm Password
            </label>
            <Input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="••••••••"
              required
            />
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Sign Up
          </Button>
        </form>
        <p className="mt-6 text-center text-body text-midnight-ink">
          Already have an account?{' '}
          <Link href="/login">
            <Button variant="ghost" className="px-0 py-0 text-body">Sign In</Button>
          </Link>
        </p>
      </div>
    </Container>
  )
}
