import { readdir, readFile, writeFile } from 'node:fs/promises';
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
