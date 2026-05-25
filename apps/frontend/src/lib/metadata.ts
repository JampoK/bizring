/**
 * Shared metadata utilities for SEO
 */

export const BASE_TITLE = 'BizRing — Marketplace B2B & Waralaba Indonesia'

export function createMetadata({ 
  title, 
  description, 
  canonicalPath 
}: { 
  title: string
  description: string
  canonicalPath: string
}) {
  return {
    title: `${title} | BizRing`,
    description,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_APP_URL}${canonicalPath}`,
    },
    openGraph: {
      title,
      description,
      siteName: 'BizRing',
    },
  }
}
