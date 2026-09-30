import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  SITE_NAME,
  SOCIAL_IMAGE,
  getCanonicalUrl,
  getPageMeta,
  getStructuredData,
  normalizePath,
} from '../seoConfig'

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function upsertCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

function upsertStructuredData(data) {
  let element = document.head.querySelector('script[data-savitur-schema]')
  if (!element) {
    element = document.createElement('script')
    element.type = 'application/ld+json'
    element.dataset.saviturSchema = 'true'
    document.head.appendChild(element)
  }
  element.textContent = JSON.stringify(data)
}

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = normalizePath(pathname)
    const meta = getPageMeta(normalizedPath)
    const canonicalUrl = getCanonicalUrl(normalizedPath)

    document.title = meta.title
    upsertCanonical(canonicalUrl)
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', meta.noindex ? 'noindex, nofollow' : 'index, follow')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', 'en_IN')
    upsertMeta('property', 'og:site_name', SITE_NAME)
    upsertMeta('property', 'og:title', meta.title)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:url', canonicalUrl)
    upsertMeta('property', 'og:image', SOCIAL_IMAGE)
    upsertMeta('property', 'og:image:alt', SITE_NAME)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.title)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', SOCIAL_IMAGE)
    upsertStructuredData(getStructuredData(normalizedPath))
  }, [pathname])

  return null
}
