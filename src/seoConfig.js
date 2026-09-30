export const SITE_URL = 'https://saviturpranichealing.com'
export const SITE_NAME = 'Savitur Pranic Healing Centre'
export const SOCIAL_IMAGE = `${SITE_URL}/about-centre.webp`

export const PAGE_META = {
  '/': {
    title: 'Pranic Healing Bangalore | Savitur Healing Centre',
    description: 'Pranic Healing in Bangalore at Savitur, Kannamangala. Explore healing sessions, certified Pranic Healing courses, Twin Hearts meditation and Arhatic Yoga.',
  },
  '/pranic-healing-whitefield': {
    title: 'Pranic Healing Whitefield | Savitur Healing Centre',
    description: 'Looking for Pranic Healing in Whitefield? Visit Savitur in Kannamangala for healing sessions, Pranic Healing courses, meditation and Arhatic Yoga.',
  },
  '/services': {
    title: 'Pranic Healing Services in Bangalore | Savitur',
    description: 'Explore Pranic Healing sessions in Bangalore, Meditation on Twin Hearts, Feng Shui consultations, nurturing sessions and community healing camps.',
  },
  '/courses': {
    title: 'Pranic Healing Courses in Bangalore | Savitur',
    description: 'Join Pranic Healing courses in Bangalore, from Basic and Advanced Pranic Healing to Pranic Psychotherapy and spiritual development workshops.',
  },
  '/contact': {
    title: 'Contact Savitur Pranic Healing Centre, Bangalore',
    description: 'Contact Savitur Pranic Healing Centre in Kannamangala, Bangalore for healing sessions, courses, meditation sessions, directions and enquiries.',
  },
  '/testimonials': {
    title: 'Pranic Healing Reviews | Savitur Bangalore',
    description: 'Read experiences shared by students and clients of Savitur Pranic Healing Centre in Kannamangala, Bangalore.',
  },
  '/admin': {
    title: 'Savitur Website Admin',
    description: 'Private administration area for the Savitur website.',
    noindex: true,
  },
}

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

export function getPageMeta(pathname) {
  const path = normalizePath(pathname)
  return PAGE_META[path] || PAGE_META['/']
}

export function getCanonicalUrl(pathname) {
  const path = normalizePath(pathname)
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export function getStructuredData(pathname) {
  const path = normalizePath(pathname)
  const meta = getPageMeta(path)
  const canonicalUrl = getCanonicalUrl(path)
  const businessId = `${SITE_URL}/#business`
  const websiteId = `${SITE_URL}/#website`
  const pageId = `${canonicalUrl}#webpage`
  const graph = [
    {
      '@type': 'HealthAndBeautyBusiness',
      '@id': businessId,
      name: SITE_NAME,
      description: 'A centre for Pranic Healing, meditation and Arhatic Yoga in Kannamangala, Bangalore.',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.webp`,
      image: SOCIAL_IMAGE,
      telephone: '+91-7045256527',
      email: 'savitur.pranichealing@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Kannamangala',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        addressCountry: 'IN',
      },
      areaServed: [
        { '@type': 'City', name: 'Bengaluru' },
        { '@type': 'Place', name: 'Whitefield' },
        { '@type': 'Place', name: 'Kannamangala' },
      ],
      hasMap: 'https://share.google/uR7J6xdT0lyTPmnV1',
      sameAs: ['https://www.instagram.com/savitur.pranichealing/'],
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: { '@id': businessId },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': pageId,
      url: canonicalUrl,
      name: meta.title,
      description: meta.description,
      isPartOf: { '@id': websiteId },
      about: { '@id': businessId },
      inLanguage: 'en-IN',
    },
  ]

  if (path !== '/') {
    const pageName = path === '/pranic-healing-whitefield'
      ? 'Pranic Healing Whitefield'
      : meta.title.split('|')[0].trim()

    graph[2].breadcrumb = { '@id': `${canonicalUrl}#breadcrumb` }
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: canonicalUrl,
        },
      ],
    })
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  }
}
