import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'BizRing — The LinkedIn for Businesses',
  description: 'Connect with verified businesses, discover investment opportunities, and access secure data rooms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
