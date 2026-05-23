import type { Metadata, ResolvingMetadata } from 'next'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params

  try {
    const res = await fetch(`${API_URL}/api/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query businessMeta($slug: String!) {
            Businesses(where: { slug: { equals: $slug } }) {
              docs {
                name
                description
              }
            }
          }
        `,
        variables: { slug },
      }),
      cache: 'no-store',
    })

    const data = await res.json()
    const business = data.data?.Businesses?.docs?.[0]

    if (business) {
      return {
        title: `${business.name} | Business Profile`,
        description: business.description || `Learn more about ${business.name}.`,
        alternates: { canonical: `/business/${slug}` },
      }
    }
  } catch {
    // fall through to default
  }

  return {
    title: 'Business Not Found',
    description: 'The requested business profile could not be found.',
  }
}
