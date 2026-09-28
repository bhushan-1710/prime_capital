import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://primecapitalpartners.co.uk';
  const routes = [
    '/',
    '/about',
    '/focus',
    '/funding',
    '/funding/scotland',
    '/funding/scotland/bridging',
    '/how-we-work',
    '/connect',
    '/privacy',
    '/terms',
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '/' ? 1 : 0.8,
  }));
}
