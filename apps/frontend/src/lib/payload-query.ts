/**
 * Server-only utility to fetch safe data from Payload CMS.
 */

const PAYLOAD_API = process.env.PAYLOAD_PUBLIC_API_URL || 'http://localhost:3001/api'

// Helper untuk data publik (Direktori, Landing Pages)
export async function getPublicBusinesses(params?: { category?: string; location?: string }) {
  const query = new URLSearchParams()
  if (params?.category) query.append('where[category][equals]', params.category)
  if (params?.location) query.append('where[location][equals]', params.location)
  
  // @ts-ignore: Next.js 'next' config works at runtime
  const res = await fetch(`${PAYLOAD_API}/businesses?${query.toString()}`, {
    next: { revalidate: 3600 }, 
  })
  
  if (!res.ok) throw new Error('Failed to fetch businesses')
  const result = await res.json()
  return result.docs
}

// Helper untuk detail bisnis (Halaman Profil)
export async function getPublicBusinessBySlug(slug: string) {
  // @ts-ignore: Next.js 'next' config works at runtime
  const res = await fetch(`${PAYLOAD_API}/businesses?where[slug][equals]=${slug}`, {
    next: { revalidate: 3600 },
  })
  
  if (!res.ok) throw new Error('Failed to fetch business detail')
  const result = await res.json()
  return result.docs[0] || null
}
