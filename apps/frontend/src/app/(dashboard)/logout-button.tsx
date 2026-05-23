'use client'

export default function LogoutButton() {
  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' })
    window.location.href = '/login'
  }

  return (
    <button
      onClick={handleLogout}
      className="block text-gray-700 hover:text-primary text-sm"
    >
      Sign Out
    </button>
  )
}
