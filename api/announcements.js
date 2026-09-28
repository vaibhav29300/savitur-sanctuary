import { put, del, list } from '@vercel/blob'

const MANIFEST = 'announcements/manifest.json'

const MTH_INTRO_ANNOUNCEMENT = {
  id: 'default-what-is-mth',
  eyebrow: 'Discover the Practice',
  title: 'What is Meditation on Twin Hearts (MTH)?',
  text: 'A guided spiritual practice that awakens the heart and crown energy centres while blessing the Earth with peace, loving-kindness, and goodwill.',
  imageUrl: '',
}

const DEFAULT_ANNOUNCEMENTS = [
  MTH_INTRO_ANNOUNCEMENT,
  {
    id: 'default-full-moon-mth',
    eyebrow: 'Monthly at the Centre',
    title: 'Full Moon MTH',
    text: 'The centre conducts MTH every full moon.',
    imageUrl: '',
  },
  {
    id: 'default-online-mth',
    eyebrow: 'Join from Anywhere',
    title: 'Online MTH',
    text: 'Schedule for online MTH to be announced online.',
    imageUrl: '',
  },
]

async function readManifest() {
  try {
    const { blobs } = await list({ prefix: MANIFEST })
    const manifest = blobs.find((blob) => blob.pathname === MANIFEST)
    if (!manifest) return null

    const response = await fetch(`${manifest.url}?t=${Date.now()}`, { cache: 'no-store' })
    if (!response.ok) return null

    const data = await response.json()
    if (!Array.isArray(data.announcements)) return null

    return {
      announcements: data.announcements,
      mthIntroSeeded: data.mthIntroSeeded === true,
    }
  } catch {
    return null
  }
}

async function writeManifest(manifest) {
  await put(MANIFEST, JSON.stringify(manifest), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
}

async function loadManifest() {
  const stored = await readManifest()
  if (!stored) {
    return {
      announcements: [...DEFAULT_ANNOUNCEMENTS],
      mthIntroSeeded: true,
    }
  }

  if (!stored.mthIntroSeeded) {
    if (!stored.announcements.some((item) => item.id === MTH_INTRO_ANNOUNCEMENT.id)) {
      stored.announcements.unshift(MTH_INTRO_ANNOUNCEMENT)
    }
    stored.mthIntroSeeded = true
    await writeManifest(stored)
  }

  return stored
}

function clean(value, maxLength) {
  return String(value || '').trim().slice(0, maxLength)
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  if (req.method === 'GET') {
    const { announcements } = await loadManifest()
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json({ announcements })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { action, user, password, image, eyebrow, title, text, id } = req.body ?? {}
  const expectedUser = process.env.ADMIN_USER || 'savitur'
  const userOk = user === expectedUser
  const passOk = !!process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD

  if (!userOk || !passOk) {
    return res.status(401).json({ error: 'Invalid username or password.' })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({ error: 'Announcement storage is not configured yet.' })
  }

  if (action === 'add') {
    const cleanTitle = clean(title, 100)
    const cleanText = clean(text, 300)
    if (!cleanTitle || !cleanText) {
      return res.status(400).json({ error: 'A title and description are required.' })
    }

    let imageUrl = ''
    let imagePath = ''

    if (image) {
      const match = /^data:(image\/(?:jpeg|jpg|png|webp));base64,(.+)$/s.exec(image)
      if (!match) return res.status(400).json({ error: 'Invalid or unsupported image.' })

      const contentType = match[1] === 'image/jpg' ? 'image/jpeg' : match[1]
      const buffer = Buffer.from(match[2], 'base64')
      if (buffer.length > 6 * 1024 * 1024) {
        return res.status(413).json({ error: 'Image too large — please use a smaller photo.' })
      }

      const ext = contentType.split('/')[1] === 'jpeg' ? 'jpg' : contentType.split('/')[1]
      imagePath = `announcements/image-${Date.now()}.${ext}`
      const blob = await put(imagePath, buffer, {
        access: 'public',
        contentType,
        addRandomSuffix: false,
      })
      imageUrl = blob.url
    }

    const manifest = await loadManifest()
    const { announcements } = manifest
    const entry = {
      id: `announcement-${Date.now()}`,
      eyebrow: clean(eyebrow, 60) || 'At Savitur',
      title: cleanTitle,
      text: cleanText,
      imageUrl,
      imagePath,
    }

    announcements.unshift(entry)
    await writeManifest(manifest)
    return res.status(200).json({ success: true, announcement: entry, announcements })
  }

  if (action === 'delete') {
    if (!id) return res.status(400).json({ error: 'No announcement id provided.' })

    const manifest = await loadManifest()
    let { announcements } = manifest
    const target = announcements.find((announcement) => announcement.id === id)
    announcements = announcements.filter((announcement) => announcement.id !== id)
    manifest.announcements = announcements
    await writeManifest(manifest)

    if (target?.imageUrl) {
      try { await del(target.imageUrl) } catch { /* The image may already be gone. */ }
    }

    return res.status(200).json({ success: true, announcements })
  }

  return res.status(400).json({ error: 'Unknown action.' })
}
