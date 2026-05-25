import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'

interface SeoPageProps {
  params: {
    slug: string
  }
}

// Metadata dinamis berdasarkan slug
export async function generateMetadata({ params }: SeoPageProps) {
  const { slug } = params
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  
  return {
    title: `${title} | BizRing Indonesia`,
    description: `Temukan ${title} terbaik dan terpercaya di BizRing. Marketplace B2B networking & investasi terkemuka di Indonesia.`,
  }
}

export default function SeoPage({ params }: SeoPageProps) {
  const { slug } = params
  const title = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  return (
    <Container className="py-12 space-y-8">
      <h1 className="text-display">{title}</h1>
      
      <ContentCard>
        <p className="text-body text-midnight-ink">
          Selamat datang di halaman {title}. Halaman ini dioptimalkan untuk membantu Anda menemukan peluang bisnis terbaik di pasar Indonesia.
        </p>
      </ContentCard>
      
      {/* Di sini nantinya akan diisi dengan daftar bisnis yang difilter berdasarkan slug */}
    </Container>
  )
}
