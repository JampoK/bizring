import React, { useState } from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Badge } from '@/components/ui/Badge'
import { Input } from '@/components/ui/Input'
import { PrimaryFilledButton } from '@/components/ui/PrimaryFilledButton'
import { Pagination } from '@/components/ui/Pagination' // Import Pagination component
import Link from 'next/link'

// Dummy data for businesses
const dummyBusinesses = [
  {
    slug: 'bizmatch-consulting',
    name: 'BizMatch Consulting',
    description: 'Specializing in business matching and strategic partnerships for SMEs.',
    category: 'Consulting',
    location: 'Jakarta',
  },
  {
    slug: 'tech-innovate-solutions',
    name: 'Tech Innovate Solutions',
    description: 'Leading provider of custom software development and IT solutions.',
    category: 'Technology',
    location: 'Bandung',
  },
  {
    slug: 'green-energy-partners',
    name: 'Green Energy Partners',
    description: 'Investing in sustainable energy projects across Southeast Asia.',
    category: 'Investment',
    location: 'Surabaya',
  },
  {
    slug: 'creative-marketing-hub',
    name: 'Creative Marketing Hub',
    description: 'Innovative digital marketing strategies for brand growth.',
    category: 'Marketing',
    location: 'Medan',
  },
  {
    slug: 'fashion-forward-boutique',
    name: 'Fashion Forward Boutique',
    description: 'Curated collection of modern and ethical apparel.',
    category: 'Retail',
    location: 'Yogyakarta',
  },
  {
    slug: 'global-logistics-solutions',
    name: 'Global Logistics Solutions',
    description: 'Efficient and reliable logistics and supply chain management.',
    category: 'Logistics',
    location: 'Semarang',
  },
  {
    slug: 'health-innovations-lab',
    name: 'Health Innovations Lab',
    description: 'Research and development for next-gen medical devices.',
    category: 'Healthcare',
    location: 'Depok',
  },
  {
    slug: 'fintech-pioneers',
    name: 'Fintech Pioneers',
    description: 'Disrupting traditional finance with innovative digital solutions.',
    category: 'Fintech',
    location: 'Tangerang',
  },
  {
    slug: 'eco-farming-ventures',
    name: 'Eco Farming Ventures',
    description: 'Sustainable agricultural practices and organic produce distribution.',
    category: 'Agriculture',
    location: 'Bogor',
  },
  {
    slug: 'education-tech-accelerator',
    name: 'Education Tech Accelerator',
    description: 'Empowering learning through technology and interactive platforms.',
    category: 'Education',
    location: 'Bekasi',
  },
]

export default function DirectoryPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6 // Display 6 businesses per page

  const totalPages = Math.ceil(dummyBusinesses.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentBusinesses = dummyBusinesses.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <Container className="py-8 space-y-8">
      <h1 className="text-display">Business Directory</h1>

      {/* Search and Filter Section */}
      <ContentCard className="flex flex-col md:flex-row gap-4">
        <Input placeholder="Search businesses..." className="flex-grow" />
        <PrimaryFilledButton>Search</PrimaryFilledButton>
      </ContentCard>

      {/* Business List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentBusinesses.map((business) => (
          <ContentCard key={business.slug}>
            <Link href={`/directory/${business.slug}`} className="block">
              <h2 className="text-heading-sm text-midnight-ink hover:text-electric-blue transition-colors mb-2">
                {business.name}
              </h2>
            </Link>
            <p className="text-body-sm text-stone-whisper mb-3">{business.description}</p>
            <div className="flex items-center gap-2">
              <Badge variant="default">{business.category}</Badge>
              <Badge variant="default">{business.location}</Badge>
            </div>
          </ContentCard>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </Container>
  )
}
