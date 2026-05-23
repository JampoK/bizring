import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "BizRing",
  description: "Marketplace connecting business owners and investors in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-xl font-bold text-gray-800">
                BizRing
              </Link>
              <Link href="/" className="text-gray-600 hover:text-blue-500">
                Home
              </Link>
              <Link href="/marketplace" className="text-gray-600 hover:text-blue-500">
                Marketplace
              </Link>
              <Link href="/featured" className="text-gray-600 hover:text-blue-500">
                Featured
              </Link>
              <Link href="/business" className="text-gray-600 hover:text-blue-500">
                Bisnis
              </Link>
              <Link href="/investor" className="text-gray-600 hover:text-blue-500">
                Investor
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </nav>
        <main className="py-8">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2024 BizRing. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}