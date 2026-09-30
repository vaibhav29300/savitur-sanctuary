import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { render } from '../.ssr/entry-server.js'
import {
  SOCIAL_IMAGE,
  SITE_NAME,
  getCanonicalUrl,
  getPageMeta,
  getStructuredData,
} from '../src/seoConfig.js'

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(projectRoot, 'dist')
const template = await readFile(path.join(distDir, 'index.html'), 'utf8')
const routes = [
  '/',
  '/services',
  '/courses',
  '/contact',
  '/testimonials',
  '/pranic-healing-whitefield',
]

function escapeAttribute(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function setMeta(html, attribute, key, content) {
  const escaped = escapeAttribute(content)
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*/?>`, 'i')
  const tag = `<meta ${attribute}="${key}" content="${escaped}" />`
  return pattern.test(html) ? html.replace(pattern, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

function createPage(route) {
  const meta = getPageMeta(route)
  const canonicalUrl = getCanonicalUrl(route)
  const schema = JSON.stringify(getStructuredData(route)).replaceAll('<', '\\u003c')
  const appHtml = render(route)
  let html = template

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttribute(meta.title)}</title>`)
  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?\s*>/i,
    `<link rel="canonical" href="${canonicalUrl}" />`,
  )
  html = setMeta(html, 'name', 'description', meta.description)
  html = setMeta(html, 'name', 'robots', 'index, follow')
  html = setMeta(html, 'property', 'og:type', 'website')
  html = setMeta(html, 'property', 'og:locale', 'en_IN')
  html = setMeta(html, 'property', 'og:site_name', SITE_NAME)
  html = setMeta(html, 'property', 'og:title', meta.title)
  html = setMeta(html, 'property', 'og:description', meta.description)
  html = setMeta(html, 'property', 'og:url', canonicalUrl)
  html = setMeta(html, 'property', 'og:image', SOCIAL_IMAGE)
  html = setMeta(html, 'property', 'og:image:alt', SITE_NAME)
  html = setMeta(html, 'name', 'twitter:card', 'summary_large_image')
  html = setMeta(html, 'name', 'twitter:title', meta.title)
  html = setMeta(html, 'name', 'twitter:description', meta.description)
  html = setMeta(html, 'name', 'twitter:image', SOCIAL_IMAGE)
  html = html.replace(
    /<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i,
    `<script type="application/ld+json" data-savitur-schema>${schema}</script>`,
  )
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)

  return html
}

for (const route of routes) {
  const outputDir = route === '/' ? distDir : path.join(distDir, route.slice(1))
  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, 'index.html'), createPage(route))
}

console.log(`Prerendered ${routes.length} indexable routes.`)
