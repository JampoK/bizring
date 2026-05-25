import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Badge } from '@/components/ui/Badge'
import { FranchiseInquiryModal } from '@/components/franchise/FranchiseInquiryModal'

// Template halaman detail franchise
export default function FranchiseDetailPage({ params }: { params: { slug: string } }) {
  // Simulasi data - nanti akan di-fetch dari API/Payload berdasarkan slug
  const franchise = {
    name: 'Warung Kopi Nusantara',
    investment: 'Mulai dari 100jt',
    duration: '5 Tahun',
    isSTPWReady: false, // Simulasi status
  }

  return (
    <Container className="py-12 space-y-6">
      <div className="flex justify-between items-start">
        <h1 className="text-display">{franchise.name}</h1>
        {!franchise.isSTPWReady && (
          <Badge variant="warning">Review Pending: Dokumen Belum Lengkap</Badge>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <ContentCard>
            <h2 className="text-heading-sm mb-4">Informasi Franchise</h2>
            <p className="text-body text-midnight-ink">
              Detail bisnis kopi kekinian dengan sistem kemitraan terbaik di Indonesia...
            </p>
          </ContentCard>
        </div>

        <div className="lg:col-span-1">
          <ContentCard>
            <h2 className="text-heading-sm mb-4">Mulai dari: {franchise.investment}</h2>
            <FranchiseInquiryModal franchiseName={franchise.name} />
          </ContentCard>
        </div>
      </div>
    </Container>
  )
}
