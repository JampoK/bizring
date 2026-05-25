import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'BizRing — The LinkedIn for Businesses',
  description: 'Connect with verified businesses, discover investment opportunities, and access secure data rooms.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'

  return (
    <html lang="id">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <GoogleAnalytics gaId={GA_ID} />
      </body>
    </html>
  )
}
