import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.showmine.io'
  const routes = ['', '/lead-generation', '/testimonials', '/career', '/shop-migration', '/management-system', '/ai-consulting', '/about-us']
  const now = new Date().toISOString()
  return routes.map((path) => ({
    url: `${base}${path || '/'}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}


