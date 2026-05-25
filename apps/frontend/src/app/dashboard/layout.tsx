import Link from 'next/link'
import LogoutButton from './logout-button'

const navItems = [
  { href: '/dashboard', label: 'Overview' },
  { href: '/dashboard/data-rooms', label: 'Data Rooms' },
  { href: '/dashboard/settings', label: 'Settings' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex bg-canvas">
      <aside className="w-64 bg-fog-gray flex flex-col">
        <div className="p-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-midnight-ink rounded-sm flex items-center justify-center">
              <span className="text-surface-white font-bold text-sm">B</span>
            </div>
            <span className="text-lg font-bold text-midnight-ink">BizRing</span>
          </Link>
        </div>

        <nav className="flex-1 px-4">
          <p className="px-4 text-xs font-medium text-stone-whisper uppercase tracking-[0.017px] mb-2">Menu</p>
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
      <main className="flex-1">{children}</main>
    </div>
  )
}
