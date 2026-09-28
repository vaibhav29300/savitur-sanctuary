import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://saviturpranichealing.com'
const SITE_NAME = 'Savitur Pranic Healing Centre'
const SOCIAL_IMAGE = `${SITE_URL}/logo.webp`

const PAGE_META = {
  '/': {
    title: 'Savitur Pranic Healing Centre Bengaluru | Arhatic Yoga',
    description: 'Savitur Pranic Healing Centre in Kannamangala, Bengaluru offers healing sessions, Pranic Healing courses, Meditation on Twin Hearts and Arhatic Yoga.',
  },
  '/services': {
    title: 'Pranic Healing Services in Bengaluru | Savitur',
    description: 'Explore Pranic Healing sessions, Meditation on Twin Hearts, Feng Shui consultations, nurturing sessions and healing camps at Savitur Bengaluru.',
  },
  '/courses': {
    title: 'Pranic Healing Courses in Bengaluru | Savitur',
    description: 'Join Pranic Healing certification courses in Bengaluru, from Basic and Advanced Pranic Healing to Pranic Psychotherapy and higher spiritual courses.',
  },
  '/contact': {
    title: 'Contact Savitur Pranic Healing Centre Bengaluru',
    description: 'Contact Savitur Pranic Healing Centre in Kannamangala, Bengaluru for healing sessions, courses, meditation sessions and enquiries.',
  },
  '/testimonials': {
    title: 'Pranic Healing Testimonials | Savitur Bengaluru',
    description: 'Read experiences from students and clients of Savitur Pranic Healing Centre in Bengaluru.',
  },
  '/admin': {
    title: 'Savitur Website Admin',
    description: 'Private administration area for the Savitur website.',
    noindex: true,
  },
}

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

export default function SEO() {
  const { pathname } = useLocation()

  useEffect(() => {
    const normalizedPath = pathname !== '/' ? pathname.replace(/\/$/, '') : '/'
    const meta = PAGE_META[normalizedPath] || PAGE_META['/']
    const canonicalUrl = normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`

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
  }, [pathname])

  return null
}
