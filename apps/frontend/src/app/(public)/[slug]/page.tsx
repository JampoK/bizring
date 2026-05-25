import React from 'react'
import { Container } from '@/components/ui/Container'
import { ContentCard } from '@/components/ui/ContentCard'
import { Badge } from '@/components/ui/Badge'
import { PrimaryFilledButton } from '@/components/ui/PrimaryFilledButton'
import { OutlineAccentButton } from '@/components/ui/OutlineAccentButton'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi' // For back navigation

// Dummy data for businesses (same as directory page for consistency)
const dummyBusinesses = [
  {
    slug: 'bizmatch-consulting',
    name: 'BizMatch Consulting',
    description: 'Specializing in business matching and strategic partnerships for SMEs.',
    category: 'Consulting',
    location: 'Jakarta',
    fullDescription: `BizMatch Consulting offers tailored advisory services to small and medium-sized enterprises (SMEs) looking to expand their market reach and forge meaningful strategic alliances. Our expertise spans across various industries, providing in-depth market analysis, partnership identification, and negotiation support. We believe in fostering long-term relationships and empowering businesses to achieve sustainable growth in competitive landscapes. Our team comprises seasoned consultants with extensive experience in regional and international markets, ensuring our clients receive top-tier guidance and support.`,
    contactEmail: 'contact@bizmatch.com',
    website: 'https://www.bizmatch.com',
  },
  {
    slug: 'tech-innovate-solutions',
    name: 'Tech Innovate Solutions',
    description: 'Leading provider of custom software development and IT solutions.',
    category: 'Technology',
    location: 'Bandung',
    fullDescription: `Tech Innovate Solutions is at the forefront of digital transformation, delivering bespoke software development and comprehensive IT solutions. From mobile applications to enterprise-level systems, our agile development approach ensures high-quality, scalable, and secure technology products. We partner with businesses to leverage cutting-edge technologies, optimize operations, and drive innovation. Our commitment to excellence and client satisfaction makes us a trusted technology partner.`,
    contactEmail: 'info@techinnovate.com',
    website: 'https://www.techinnovate.com',
  },
  {
    slug: 'green-energy-partners',
    name: 'Green Energy Partners',
    description: 'Investing in sustainable energy projects across Southeast Asia.',
    category: 'Investment',
    location: 'Surabaya',
    fullDescription: `Green Energy Partners is dedicated to accelerating the transition to a sustainable future by investing in promising renewable energy projects. We focus on opportunities that deliver both significant environmental impact and strong financial returns. Our portfolio includes solar, wind, and hydro projects, and we actively seek collaborations with innovators and developers in the green technology sector. We offer capital, strategic guidance, and a network of industry experts to help projects succeed.`,
    contactEmail: 'invest@greenenergy.com',
    website: 'https://www.greenenergy.com',
  },
  {
    slug: 'creative-marketing-hub',
    name: 'Creative Marketing Hub',
    description: 'Innovative digital marketing strategies for brand growth.',
    category: 'Marketing',
    location: 'Medan',
    fullDescription: `Creative Marketing Hub crafts bespoke digital marketing strategies designed to elevate brands and engage target audiences effectively. Our services encompass everything from SEO and content marketing to social media campaigns and analytics. We pride ourselves on creativity, data-driven insights, and a proven track record of helping businesses achieve their marketing objectives. Let us transform your brand's online presence and drive measurable results.`,
    contactEmail: 'hello@creativehub.com',
    website: 'https://www.creativehub.com',
  },
  {
    slug: 'fashion-forward-boutique',
    name: 'Fashion Forward Boutique',
    description: 'Curated collection of modern and ethical apparel.',
    category: 'Retail',
    location: 'Yogyakarta',
    fullDescription: `Fashion Forward Boutique is a premier destination for modern and ethically sourced apparel. We curate a unique collection that embodies contemporary style while adhering to principles of sustainability and fair trade. Our passion lies in offering high-quality fashion that makes a positive impact, both on the wearer and the world. Discover timeless pieces and support responsible fashion with us.`,
    contactEmail: 'shop@fashionforward.com',
    website: 'https://www.fashionforward.com',
  },
]

interface BusinessDetailPageProps {
  params: {
    slug: string
  }
}

export default function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  const { slug } = params
  const business = dummyBusinesses.find((b) => b.slug === slug)

  if (!business) {
    return (
      <Container className="py-8 text-center">
        <h1 className="text-display">Business Not Found</h1>
        <p className="text-body mt-4">The business you are looking for does not exist.</p>
        <Link href="/directory">
          <PrimaryFilledButton className="mt-8">Back to Directory</PrimaryFilledButton>
        </Link>
      </Container>
    )
  }

  return (
    <Container className="py-8 space-y-8">
      <Link href="/directory" className="inline-flex items-center text-midnight-ink hover:text-electric-blue transition-colors">
        <FiArrowLeft className="mr-2" /> Back to Directory
      </Link>

      <ContentCard>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-heading-lg">{business.name}</h1>
          <div className="flex gap-2">
            <Badge variant="default">{business.category}</Badge>
            <Badge variant="default">{business.location}</Badge>
          </div>
        </div>
        <p className="text-body-sm text-stone-whisper mb-6">{business.description}</p>
        <p className="text-body text-midnight-ink mb-6">{business.fullDescription}</p>

        <div className="flex gap-4">
          <Link href={business.website} target="_blank" rel="noopener noreferrer">
            <Button variant="primary">Visit Website</Button>
          </Link>
          <Link href={`mailto:${business.contactEmail}`}>
            <Button variant="outline">Contact Business</Button>
          </Link>
        </div>
      </ContentCard>
    </Container>
  )
}
