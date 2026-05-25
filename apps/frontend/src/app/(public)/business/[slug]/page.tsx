import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/ContentCard'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container as Shell } from '@/components/ui/Container'

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

async function getBusiness(slug: string): Promise<Business | null> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL || ''}/api/businesses/${slug}`,
      { next: { revalidate: 60 } }
    )
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const business = await getBusiness(slug)

  if (!business) {
    return (
      <div className="bg-canvas min-h-[60vh]">
        <Shell>
          <Card className="p-12 text-center">
            <h1 className="text-2xl font-semibold text-midnight-ink mb-4">Business Not Found</h1>
            <p className="text-slate-grille mb-6">
              The business you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/directory">
              <Button>Browse Directory</Button>
            </Link>
          </Card>
        </Shell>
      </div>
    )
  }

  const fundingPercent = business.fundingGoal
    ? Math.round((business.fundingRaised / business.fundingGoal) * 100)
    : 0

  return (
    <div className="bg-canvas">
      <Shell>
        <Link href="/directory" className="text-sm text-deep-teal hover:underline mb-4 inline-block tracking-[0.014px]">
          ← Back to Directory
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-semibold text-midnight-ink tracking-[0.006px]">{business.name}</h1>
                <Badge
                  variant={business.verificationStatus === 'verified' ? 'success' : 'default'}
                >
                  {business.verificationStatus}
                </Badge>
              </div>
              <p className="text-lg text-slate-grille">{business.tagline}</p>
            </div>

            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-midnight-ink mb-4">About</h2>
                <p className="text-slate-grille whitespace-pre-line leading-[1.38]">{business.description}</p>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-midnight-ink mb-4">Funding Progress</h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-grille">Raised</span>
                    <span className="font-medium text-midnight-ink">
                      ${business.fundingRaised.toLocaleString()} / $
                      {business.fundingGoal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-ash-cloud rounded-full h-2">
                    <div
                      className="bg-electric-blue h-2 rounded-full transition-all"
                      style={{ width: `${Math.min(fundingPercent, 100)}%` }}
                    />
                  </div>
                  <p className="text-sm text-electric-blue font-medium tracking-[0.014px]">{fundingPercent}% funded</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <div className="p-6 space-y-4">
                <h2 className="text-lg font-semibold text-midnight-ink">Details</h2>
                <div className="space-y-3 text-sm">
                  {business.industry && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Industry</span>
                      <span className="font-medium text-midnight-ink">{business.industry}</span>
                    </div>
                  )}
                  {business.stage && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Stage</span>
                      <span className="font-medium text-midnight-ink">{business.stage}</span>
                    </div>
                  )}
                  {business.location && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Location</span>
                      <span className="font-medium text-midnight-ink">{business.location}</span>
                    </div>
                  )}
                  {business.teamSize > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Team Size</span>
                      <span className="font-medium text-midnight-ink">{business.teamSize}</span>
                    </div>
                  )}
                  {business.foundedYear > 0 && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Founded</span>
                      <span className="font-medium text-midnight-ink">{business.foundedYear}</span>
                    </div>
                  )}
                  {business.website && (
                    <div className="flex justify-between">
                      <span className="text-slate-grille">Website</span>
                      <a
                        href={business.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-deep-teal hover:underline font-medium"
                      >
                        Visit →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <Button className="w-full">Request Data Room Access</Button>
                <p className="text-[0.75rem] text-stone-whisper mt-2 text-center tracking-[0.017px]">
                  Connect with this business
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Shell>
    </div>
  )
}
