import { subpages } from '../content/subpages.js';

const core = {
  de: ['hotel', 'zimmer', 'events', 'greiz', 'kontakt', 'anfahrt', 'gaestemappe'],
  en: ['hotel', 'rooms', 'events', 'greiz', 'contact', 'arrival', 'guest-guide'],
};

export async function GET({ site }: { site: URL }) {
  const base = new URL(import.meta.env.BASE_URL, site);
  const root = ['/de/', '/en/'];
  const main = Object.entries(core).flatMap(([lang, slugs]) => slugs.map((slug) => `/${lang}/${slug}/`));
  const detail = subpages.flatMap((entry) => ['de', 'en'].map((lang) => {
    const languageIndex = lang === 'de' ? 0 : 1;
    return `/${lang}/${entry.parent[languageIndex]}/${entry.slugs[languageIndex]}/`;
  }));
  const pages = [...root, ...main, ...detail];
  const urls = pages.map((path) => `  <url><loc>${new URL(path.replace(/^\/+/, ''), base).toString()}</loc></url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
