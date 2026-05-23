import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(`${API_URL}/api/graphql`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          query sitemap {
            Businesses(where: { status: { equals: "verified" } }) {
              docs {
                slug
                updatedAt
              }
            }
          }
        `,
      }),
      cache: 'no-store',
    })

    const data = await res.json()
    const businesses = data.data?.Businesses?.docs || []

    const businessEntries = businesses.map((b: any) => ({
      url: `${BASE_URL}/business/${b.slug}`,
      lastModified: b.updatedAt ? new Date(b.updatedAt) : new Date(),
    }))

    return [
      { url: `${BASE_URL}/`, lastModified: new Date() },
      { url: `${BASE_URL}/directory`, lastModified: new Date() },
      ...businessEntries,
    ]
  } catch {
    return [
      { url: `${BASE_URL}/`, lastModified: new Date() },
      { url: `${BASE_URL}/directory`, lastModified: new Date() },
    ]
  }
}
