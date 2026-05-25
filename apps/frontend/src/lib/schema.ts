/**
 * Helper to generate Schema.org JSON-LD for Business Profile pages
 */
export function generateBusinessSchema(business: {
  name: string
  description?: string
  url: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    url: business.url,
    priceRange: '$$', // Bisa disesuaikan nanti
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: business.category,
    },
  }
}
