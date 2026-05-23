'use client'

import { Button } from '@/components/ui/button'

export default function LogoutButton() {
  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/login'
  }

  return (
    <button
      onClick={handleLogout}
      className="block w-full text-left px-4 py-2.5 text-sm text-oceanic-deep hover:bg-canvas rounded-sm transition-colors tracking-[0.014px]"
    >
      Sign Out
    </button>
  )
}
