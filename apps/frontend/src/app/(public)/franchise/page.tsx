import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Button } from '@/components/ui/button'

// Template halaman daftar franchise
export default function FranchiseListPage() {
  // Simulasi data - nanti akan di-fetch dari API/Payload
  const franchises = [
    { id: 1, name: 'Warung Kopi Nusantara', investment: 'Mulai dari 100jt', duration: '5 Tahun' },
    { id: 2, name: 'Laundry Expressindo', investment: 'Mulai dari 50jt', duration: '3 Tahun' },
  ]

  return (
    <Container className="py-12 space-y-8">
      <h1 className="text-display">Cari Franchise Indonesia</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {franchises.map(f => (
          <ContentCard key={f.id} className="flex flex-col justify-between">
            <div>
              <h2 className="text-heading-sm mb-2">{f.name}</h2>
              <p className="text-body text-midnight-ink font-semibold">Harga: {f.investment}</p>
              <p className="text-body text-ash-cloud">Durasi: {f.duration}</p>
            </div>
            <div className="mt-4">
              <Button variant="outline" className="w-full">Lihat Detail</Button>
            </div>
          </ContentCard>
        ))}
      </div>
    </Container>
  )
}
