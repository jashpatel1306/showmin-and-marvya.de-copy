import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Generation Tools – SHOWMINE',
  description: 'AI-powered lead generation, Google Maps scraping, and data enrichment tools built for scale.',
  alternates: {
    canonical: '/lead-generation'
  },
  openGraph: {
    title: 'Lead Generation Tools – SHOWMINE',
    description: 'AI-powered lead generation, Google Maps scraping, and data enrichment tools built for scale.',
    url: 'https://www.showmine.io/lead-generation',
    type: 'website',
    images: [
      {
        url: '/leadgeneration/scraper1.png',
        width: 1200,
        height: 630,
        alt: 'Lead Generation Dashboard'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lead Generation Tools – SHOWMINE',
    description: 'AI-powered lead generation, Google Maps scraping, and data enrichment tools built for scale.',
    images: ['/leadgeneration/scraper1.png']
  }
}

export default metadata


