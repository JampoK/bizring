import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Shell } from '@/components/ui/shell'

interface Business {
  id: string
  name: string
  slug: string
  tagline: string
  description: string
  industry: string
  stage: string
  location: string
  verificationStatus: string
  fundingGoal: number
  fundingRaised: number
  teamSize: number
  foundedYear: number
  website: string
}

async function getBusinesses(): Promise<Business[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/businesses`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function DirectoryPage() {
  const businesses = await getBusinesses()

  return (
    <div className="bg-canvas">
      <Shell>
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-midnight-ink tracking-[0.006px]">Business Directory</h1>
          <p className="text-slate-grille mt-2 tracking-[0.013px]">
            Discover innovative businesses and investment opportunities
          </p>
        </div>

        {businesses.length === 0 ? (
          <Card className="p-12 text-center">
            <p className="text-slate-grille text-lg">No businesses listed yet.</p>
            <p className="text-stone-whisper text-sm mt-2">
              Be the first to{' '}
              <Link href="/register" className="text-deep-teal hover:underline">
                register your business
              </Link>
              .
            </p>
          </Card>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {businesses.map((business) => (
              <Link key={business.id} href={`/business/${business.slug}`}>
                <Card className="h-full cursor-pointer">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h2 className="text-lg font-semibold text-midnight-ink">{business.name}</h2>
                      <Badge
                        variant={
                          business.verificationStatus === 'verified'
                            ? 'success'
                            : 'default'
                        }
                      >
                        {business.verificationStatus}
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-grille mb-2 tracking-[0.014px]">{business.tagline}</p>
                    <p className="text-sm text-stone-whisper line-clamp-2 mb-4 tracking-[0.014px]">
                      {business.description}
                    </p>
                    <div className="flex flex-wrap gap-2 text-[0.75rem] text-stone-whisper tracking-[0.017px]">
                      {business.industry && <span>{business.industry}</span>}
                      {business.stage && <span>• {business.stage}</span>}
                      {business.location && <span>• {business.location}</span>}
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </Shell>
    </div>
  )
}
