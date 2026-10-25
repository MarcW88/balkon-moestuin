import type { MetadataRoute } from 'next';
import { catalog } from '@/lib/catalog';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://balkon-moestuin.nl';

  const sections = catalog.map(group => ({
    url: `${base}/${group.slug}/`,
    changeFrequency: 'monthly' as const,
    priority: 0.8
  }));

  const articles = catalog.flatMap(group =>
    group.articles.map(article => ({
      url: `${base}/${group.slug}/${article.slug}/`,
      changeFrequency: 'monthly' as const,
      priority: 0.6
    }))
  );

  return [
    { url: `${base}/`, changeFrequency: 'weekly', priority: 1 },
    ...sections,
    ...articles
  ];
}
