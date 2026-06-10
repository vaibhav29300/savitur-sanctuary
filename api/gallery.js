import { put, del, list } from '@vercel/blob'

const MANIFEST = 'gallery/manifest.json'

async function readManifest() {
  try {
    const { blobs } = await list({ prefix: MANIFEST })
    const m = blobs.find((b) => b.pathname === MANIFEST)
    if (!m) return []
    const r = await fetch(`${m.url}?t=${Date.now()}`, { cache: 'no-store' })
    if (!r.ok) return []
    const data = await r.json()
    return Array.isArray(data.photos) ? data.photos : []
  } catch {
    return []
  }
}

async function writeManifest(photos) {
  await put(MANIFEST, JSON.stringify({ photos }), {
    access: 'public',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  })
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  if (req.method === 'OPTIONS') return res.status(200).end()

  // ── Public: list photos for the gallery ──
  if (req.method === 'GET') {
    const photos = await readManifest()
    res.setHeader('Cache-Control', 'no-store')
    return res.status(200).json({ photos })
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    return res.status(503).json({ error: 'Photo storage is not configured yet.' })
  }

  const { action, user, password, image, caption, desc, id } = req.body ?? {}

  // ── Auth: the real security boundary (secret lives only in env vars) ──
  const userOk = !process.env.ADMIN_USER || user === process.env.ADMIN_USER
  const passOk = !!process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD
  if (!userOk || !passOk) {
    return res.status(401).json({ error: 'Invalid username or password.' })
  }

  if (action === 'login') {
    return res.status(200).json({ success: true })
  }

  if (action === 'add') {
    const match = /^data:(image\/(?:jpeg|jpg|png|webp));base64,(.+)$/s.exec(image || '')
    if (!match) return res.status(400).json({ error: 'Invalid or unsupported image.' })

    const contentType = match[1] === 'image/jpg' ? 'image/jpeg' : match[1]
    const buffer = Buffer.from(match[2], 'base64')
    if (buffer.length > 6 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image too large — please use a smaller photo.' })
    }

    const ext = contentType.split('/')[1] === 'jpeg' ? 'jpg' : contentType.split('/')[1]
    const pathname = `gallery/photo-${Date.now()}.${ext}`
    const blob = await put(pathname, buffer, {
      access: 'public',
      contentType,
      addRandomSuffix: false,
    })

    const photos = await readManifest()
    const entry = {
      id: pathname,
      url: blob.url,
      caption: (caption || '').trim() || 'Life at Savitur',
      desc: (desc || '').trim(),
    }
    photos.unshift(entry)
    await writeManifest(photos)
    return res.status(200).json({ success: true, photo: entry, photos })
  }

  if (action === 'delete') {
    if (!id) return res.status(400).json({ error: 'No photo id provided.' })
    let photos = await readManifest()
    const target = photos.find((p) => p.id === id)
    photos = photos.filter((p) => p.id !== id)
    await writeManifest(photos)
    if (target?.url) {
      try { await del(target.url) } catch { /* already gone */ }
    }
    return res.status(200).json({ success: true, photos })
  }

  return res.status(400).json({ error: 'Unknown action.' })
}
