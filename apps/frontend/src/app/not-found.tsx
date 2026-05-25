import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-display mb-4">Halaman Tidak Ditemukan</h2>
      <p className="text-body text-midnight-ink mb-6">Maaf, halaman yang Anda cari tidak tersedia.</p>
      <Link href="/">
        <Button variant="primary">Kembali ke Beranda</Button>
      </Link>
    </div>
  )
}
