import { cp, mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const outputDirectory = fileURLToPath(new URL('../dist/', import.meta.url));
const siteBase = '/schlossberghotel-greiz';

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(path);
      continue;
    }

    const extension = extname(path).toLowerCase();
    if (extension !== '.html' && extension !== '.css') continue;

    let content = await readFile(path, 'utf8');
    if (extension === '.html') {
      content = content.replace(/\b(href|src|poster|action|data-[\w-]+)=(['"])(\/(?!\/)[^'"]*)\2/gi, (match, attribute, quote, value) => {
        if (value === siteBase || value.startsWith(`${siteBase}/`)) return match;
        return `${attribute}=${quote}${siteBase}${value}${quote}`;
      });
    } else {
      content = content.replace(/url\((\s*['"]?)(\/(?!\/)[^)'"\s]+)(['"]?\s*)\)/gi, (match, before, value, after) => {
        if (value === siteBase || value.startsWith(`${siteBase}/`)) return match;
        return `url(${before}${siteBase}${value}${after})`;
      });
    }
    await writeFile(path, content, 'utf8');
  }
}

await walk(outputDirectory);

// Keep the selected first concept intact and publish a second, noindex design
// edition under /version-two/ so both versions can be compared side by side.
const alternateEdition = join(outputDirectory, 'version-two');
await mkdir(alternateEdition, { recursive: true });

for (const language of ['de', 'en']) {
  const source = join(outputDirectory, language);
  const destination = join(alternateEdition, language);
  await cp(source, destination, { recursive: true });

  async function themePages(directory) {
    const entries = await readdir(directory, { withFileTypes: true });
    for (const entry of entries) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await themePages(path);
        continue;
      }
      if (extname(path).toLowerCase() !== '.html') continue;

      let content = await readFile(path, 'utf8');
      content = content.replace(/<body([^>]*)>/i, '<body class="edition-two"$1>');
      content = content.replace(/<meta name="robots"[^>]*>/i, '');
      content = content.replace('</head>', `<meta name="robots" content="noindex,follow" /><link rel="stylesheet" href="${siteBase}/theme-two.css" /></head>`);
      content = content.replaceAll(`${siteBase}/de/`, `${siteBase}/version-two/de/`);
      content = content.replaceAll(`${siteBase}/en/`, `${siteBase}/version-two/en/`);

      const editionLabel = language === 'de' ? 'DESIGN · EDITION 02' : 'DESIGN · EDITION 02';
      const returnLabel = language === 'de' ? 'Zur ersten Version' : 'Original design';
      content = content.replace('</header>', `</header><aside class="edition-switch"><span>${editionLabel}</span><a href="${siteBase}/${language}/">${returnLabel}<span aria-hidden="true"> ↗</span></a></aside>`);
      await writeFile(path, content, 'utf8');
    }
  }

  await themePages(destination);
}

await writeFile(
  join(alternateEdition, 'index.html'),
  `<!doctype html><html lang="de"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,follow"><meta http-equiv="refresh" content="0;url=${siteBase}/version-two/de/"><title>Schlossberghotel Greiz · Edition 02</title></head><body><a href="${siteBase}/version-two/de/">Zur zweiten Designversion</a><script>location.replace('${siteBase}/version-two/de/')</script></body></html>`,
  'utf8',
);
