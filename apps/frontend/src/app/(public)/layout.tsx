import Link from 'next/link';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b p-4">
        <nav className="container mx-auto flex gap-4">
          <Link href="/" className="font-bold">Home</Link>
          <Link href="/directory">Directory</Link>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <footer className="border-t p-4 text-center text-sm text-gray-500">
        © 2026 LinkedIn for Businesses
      </footer>
    </div>
  );
}
