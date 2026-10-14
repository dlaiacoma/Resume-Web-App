// Injects server-rendered HTML into dist/index.html so the page's full content
// is in the HTML itself: fast first paint, and crawlers, recruiters' tools and
// link previews see everything without running JavaScript.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const templatePath = path.join(root, 'dist', 'index.html');
const serverEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const template = await readFile(templatePath, 'utf8');
const marker = '<!--app-html-->';
if (!template.includes(marker)) {
  throw new Error(`Prerender marker ${marker} not found in dist/index.html`);
}

const { render } = await import(pathToFileURL(serverEntry).href);
const appHtml = render();
if (!appHtml || appHtml.length < 1000) {
  throw new Error(`Prerendered HTML looks empty (${appHtml?.length ?? 0} chars)`);
}

await writeFile(templatePath, template.replace(marker, appHtml));
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`Prerendered dist/index.html (${appHtml.length.toLocaleString()} chars of HTML)`);
