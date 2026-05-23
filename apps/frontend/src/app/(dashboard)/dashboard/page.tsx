import { redirect } from 'next/navigation'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import LogoutButton from '@/app/(dashboard)/logout-button'

interface User {
  id: string
  name: string
  email: string
  roles: string[]
}

async function getUser(): Promise<User | null> {
  try {
    const cookieStore = await cookies()
    const cookieHeader = cookieStore.toString()
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/auth/me`, {
      headers: { cookie: cookieHeader },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const data = await res.json()
    return data.user
  } catch {
    return null
  }
}

const navItems = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/directory', label: 'Directory' },
  { href: '/dashboard/businesses', label: 'My Businesses' },
  { href: '/dashboard/data-rooms', label: 'Data Rooms' },
]

export default async function DashboardPage() {
  const user = await getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <div className="bg-canvas min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-72 bg-fog-gray min-h-[calc(100vh-64px)]">
          <div className="p-6">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 bg-midnight-ink rounded-full flex items-center justify-center">
                <span className="text-surface-white font-semibold text-sm">
                  {user.name?.charAt(0).toUpperCase() || 'U'}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-midnight-ink">{user.name}</p>
                <p className="text-xs text-stone-whisper tracking-[0.017px]">{user.email}</p>
              </div>
            </div>
          </div>

          <nav className="flex-1 px-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-2.5 text-sm text-oceanic-deep rounded-sm hover:bg-canvas transition-colors tracking-[0.014px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="p-4 border-t border-ash-cloud">
            <LogoutButton />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-5xl">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-midnight-ink tracking-[0.006px]">
                Welcome, {user.name}
              </h1>
              <p className="text-slate-grille mt-1 tracking-[0.013px]">
                Manage your business profile and investments
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              <Card>
                <div className="p-6">
                  <p className="text-sm font-medium text-slate-grille tracking-[0.014px]">Role</p>
                  <p className="text-2xl font-semibold text-midnight-ink mt-1 capitalize tracking-[0.008px]">
                    {user.roles?.[0]?.replace('_', ' ') || 'Member'}
                  </p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <p className="text-sm font-medium text-slate-grille tracking-[0.014px]">Email</p>
                  <p className="text-lg font-medium text-midnight-ink mt-1">{user.email}</p>
                </div>
              </Card>
              <Card>
                <div className="p-6">
                  <p className="text-sm font-medium text-slate-grille tracking-[0.014px]">Status</p>
                  <div className="mt-1">
                    <Badge variant="success" dot>Active</Badge>
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Actions + Activity */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-midnight-ink mb-4">Quick Actions</h2>
                  <div className="space-y-3">
                    <Link
                      href="/directory"
                      className="block p-4 bg-fog-gray rounded-sm hover:bg-pale-mint transition-colors"
                    >
                      <p className="font-medium text-midnight-ink">Browse Directory</p>
                      <p className="text-sm text-slate-grille tracking-[0.014px]">Discover businesses and opportunities</p>
                    </Link>
                    <Link
                      href="/dashboard/businesses"
                      className="block p-4 bg-fog-gray rounded-sm hover:bg-pale-mint transition-colors"
                    >
                      <p className="font-medium text-midnight-ink">My Businesses</p>
                      <p className="text-sm text-slate-grille tracking-[0.014px]">Manage your business profiles</p>
                    </Link>
                    <Link
                      href="/dashboard/data-rooms"
                      className="block p-4 bg-fog-gray rounded-sm hover:bg-pale-mint transition-colors"
                    >
                      <p className="font-medium text-midnight-ink">Data Rooms</p>
                      <p className="text-sm text-slate-grille tracking-[0.014px]">Access shared documents</p>
                    </Link>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-midnight-ink mb-4">Recent Activity</h2>
                  <p className="text-slate-grille text-sm tracking-[0.014px]">No recent activity.</p>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
