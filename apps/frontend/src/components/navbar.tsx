'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-surface-white">
      <div className="container-default">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-midnight-ink rounded-sm flex items-center justify-center">
              <span className="text-surface-white font-bold text-sm">B</span>
            </div>
            <span className="text-xl font-bold text-midnight-ink">BizRing</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/directory" className="text-sm text-midnight-ink font-medium hover:text-oceanic-deep transition-colors">
              Directory
            </Link>
            <Link href="/#features" className="text-sm text-midnight-ink font-medium hover:text-oceanic-deep transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm text-midnight-ink font-medium hover:text-oceanic-deep transition-colors">
              How It Works
            </Link>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign In</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-sm hover:bg-fog-gray"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6 text-midnight-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-midnight-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-ash-cloud animate-fade-in">
            <div className="flex flex-col gap-1">
              <Link href="/directory" className="px-4 py-2.5 text-sm text-midnight-ink hover:bg-fog-gray rounded-sm">
                Directory
              </Link>
              <Link href="/#features" className="px-4 py-2.5 text-sm text-midnight-ink hover:bg-fog-gray rounded-sm">
                Features
              </Link>
              <Link href="/#how-it-works" className="px-4 py-2.5 text-sm text-midnight-ink hover:bg-fog-gray rounded-sm">
                How It Works
              </Link>
              <div className="flex gap-2 mt-3 pt-3 border-t border-ash-cloud">
                <Link href="/login" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full">Sign In</Button>
                </Link>
                <Link href="/register" className="flex-1">
                  <Button size="sm" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
