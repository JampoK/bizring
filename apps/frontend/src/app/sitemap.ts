import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://bizring.com'

  // Nanti kita ambil data dari Payload API
  // const businesses = await getPublicBusinesses()
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/directory`,
      lastModified: new Date(),
    },
    // Tambahkan bisnis secara dinamis
  ]
}
