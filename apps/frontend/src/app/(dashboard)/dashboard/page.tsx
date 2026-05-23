import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { Card } from '@/components/ui/card'
import { Shell } from '@/components/ui/shell'

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

export default async function DashboardPage() {
  const user = await getUser()

  if (!user) {
    redirect('/login')
  }

  return (
    <Shell>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Welcome, {user.name}</h1>
        <p className="text-gray-500 mt-2">Manage your business profile and investments</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500">Role</h3>
            <p className="text-2xl font-bold mt-1 capitalize">
              {user.roles?.[0]?.replace('_', ' ') || 'Member'}
            </p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="text-lg font-medium mt-1">{user.email}</p>
          </div>
        </Card>
        <Card>
          <div className="p-6">
            <h3 className="text-sm font-medium text-gray-500">Status</h3>
            <p className="text-2xl font-bold mt-1 text-green-600">Active</p>
          </div>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <a
                href="/directory"
                className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <p className="font-medium">Browse Directory</p>
                <p className="text-sm text-gray-500">Discover businesses and opportunities</p>
              </a>
              <a
                href="/dashboard/businesses"
                className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <p className="font-medium">My Businesses</p>
                <p className="text-sm text-gray-500">Manage your business profiles</p>
              </a>
              <a
                href="/dashboard/data-rooms"
                className="block p-3 rounded-lg border hover:bg-gray-50 transition-colors"
              >
                <p className="font-medium">Data Rooms</p>
                <p className="text-sm text-gray-500">Access shared documents</p>
              </a>
            </div>
          </div>
        </Card>

        <Card>
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-gray-500 text-sm">No recent activity.</p>
          </div>
        </Card>
      </div>
    </Shell>
  )
}
