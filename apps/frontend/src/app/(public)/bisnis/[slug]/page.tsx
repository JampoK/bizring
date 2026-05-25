import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/button'

export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Nanti akan di-fetch dari Payload
  return { title: `Detail Bisnis | BizRing Indonesia` }
}

export default async function BusinessDetailPage({ params }: { params: { slug: string } }) {
  // Simulasi data
  const business = {
    name: 'Warung Kopi Nusantara',
    category: 'Franchise',
    location: 'Jawa Barat',
    description: 'Detail lengkap bisnis kopi kekinian dengan sistem kemitraan terbaik di Indonesia.',
    isVerified: true
  }

  return (
    <Container className="py-12 space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-display mb-2">{business.name}</h1>
          <div className="flex gap-2">
            <Badge variant="default">{business.category}</Badge>
            <Badge variant="default">{business.location}</Badge>
            {business.isVerified && <Badge variant="default">Verified</Badge>}
          </div>
        </div>
      </div>

      <ContentCard>
        <h2 className="text-heading-sm mb-4">Tentang Bisnis</h2>
        <p className="text-body text-midnight-ink">{business.description}</p>
      </ContentCard>

      <div className="flex gap-4">
        <Button variant="primary">Hubungi Sekarang</Button>
        <Button variant="outline">Simpan Peluang</Button>
      </div>
    </Container>
  )
}
