import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/Badge'
import Link from 'next/link'

// Server-side fetch dummy untuk sementara (segera diganti Payload client)
async function getBusinesses(filters: { minInvestment?: number, province?: string }) {
  // Simulasi query Payload
  return [
    { id: '1', name: 'Warung Kopi Nusantara', minInvestment: 100000000, province: 'Jawa Barat', category: 'Franchise', slug: 'warung-kopi-nusantara' },
    { id: '2', name: 'Laundry Expressindo', minInvestment: 50000000, province: 'DKI Jakarta', category: 'Franchise', slug: 'laundry-expressindo' },
  ]
}

export default async function DirectoryPage({ searchParams }: { searchParams: { minInvestment?: string, province?: string } }) {
  const minInvestment = searchParams.minInvestment ? parseInt(searchParams.minInvestment) : undefined
  const province = searchParams.province
  
  const businesses = await getBusinesses({ minInvestment, province })

  return (
    <Container className="py-12 space-y-8">
      <h1 className="text-display">Direktori Bisnis Indonesia</h1>
      
      {/* Filter Sidebar Placeholder */}
      <div className="flex gap-4 mb-8">
        <select className="border p-2 rounded">
          <option>Semua Provinsi</option>
          <option>DKI Jakarta</option>
          <option>Jawa Barat</option>
        </select>
        <select className="border p-2 rounded">
          <option>Semua Investasi</option>
          <option>&lt; 100 Juta</option>
          <option>100 - 500 Juta</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((b) => (
          <ContentCard key={b.id} className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-heading-sm">{b.name}</h2>
                <Badge variant="default">{b.category}</Badge>
              </div>
              <p className="text-body text-ash-cloud">Lokasi: {b.province}</p>
              <p className="text-body text-midnight-ink font-semibold mt-2">Mulai dari: {b.minInvestment.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</p>
            </div>
            <Link href={`/business/${b.slug}`} className="mt-4">
              <Button variant="primary" className="w-full">Lihat Peluang</Button>
            </Link>
          </ContentCard>
        ))}
      </div>
    </Container>
  )
}
