import Link from 'next/link'
import LogoutButton from './logout-button'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 border-r p-6 bg-gray-50">
        <nav className="space-y-4">
          <div className="font-bold text-lg mb-4">Dashboard</div>
          <Link href="/dashboard" className="block text-gray-700 hover:text-primary">
            Overview
          </Link>
          <Link href="/dashboard/data-rooms" className="block text-gray-700 hover:text-primary">
            Data Rooms
          </Link>
          <Link href="/dashboard/settings" className="block text-gray-700 hover:text-primary">
            Settings
          </Link>
          <div className="mt-8">
            <LogoutButton />
          </div>
        </nav>
      </aside>
      <main className="flex-grow p-8">{children}</main>
    </div>
  )
}
