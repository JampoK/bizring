'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h2 className="text-display mb-4">Terjadi Kesalahan</h2>
      <p className="text-body text-midnight-ink mb-6">Mohon maaf, sesuatu tidak berjalan semestinya.</p>
      <Button variant="primary" onClick={() => reset()}>Coba Lagi</Button>
    </div>
  )
}
