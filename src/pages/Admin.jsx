import { useState, useEffect, useCallback } from 'react'
import './Admin.css'

const SESSION_KEY = 'savitur_admin'

// Shrink a selected image in the browser before upload: keeps payloads small
// (well under serverless limits) and the gallery fast to load.
function resizeImage(file, maxDim = 1600, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      let { width, height } = img
      if (width > maxDim || height > maxDim) {
        if (width >= height) {
          height = Math.round((height * maxDim) / width)
          width = maxDim
        } else {
          width = Math.round((width * maxDim) / height)
          height = maxDim
        }
      }
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height
      canvas.getContext('2d').drawImage(img, 0, 0, width, height)
      resolve(canvas.toDataURL('image/jpeg', quality))
    }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('Could not read image')) }
    img.src = url
  })
}

export default function Admin() {
  const [creds, setCreds] = useState(() => {
    try { return JSON.parse(sessionStorage.getItem(SESSION_KEY)) || null } catch { return null }
  })
  const [loginForm, setLoginForm] = useState({ user: '', password: '' })
  const [loginError, setLoginError] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)

  const [photos, setPhotos] = useState([])
  const [loadingPhotos, setLoadingPhotos] = useState(false)

  const [preview, setPreview] = useState('')
  const [caption, setCaption] = useState('')
  const [desc, setDesc] = useState('')
  const [uploading, setUploading] = useState(false)
  const [notice, setNotice] = useState(null) // { type, text }

  const loggedIn = !!creds

  const loadPhotos = useCallback(async () => {
    setLoadingPhotos(true)
    try {
      const r = await fetch('/api/gallery')
      const d = await r.json()
      setPhotos(Array.isArray(d.photos) ? d.photos : [])
    } catch { /* ignore */ }
    setLoadingPhotos(false)
  }, [])

  useEffect(() => { if (loggedIn) loadPhotos() }, [loggedIn, loadPhotos])

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoginError('')
    setLoggingIn(true)
    try {
      const r = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'login', user: loginForm.user, password: loginForm.password }),
      })
      if (r.ok) {
        const next = { user: loginForm.user, password: loginForm.password }
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(next))
        setCreds(next)
      } else {
        const d = await r.json().catch(() => ({}))
        setLoginError(d.error || 'Login failed.')
      }
    } catch {
      setLoginError('Network error. Please try again.')
    }
    setLoggingIn(false)
  }

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY)
    setCreds(null)
    setPhotos([])
    setPreview('')
    setCaption('')
    setDesc('')
  }

  const onFile = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    setNotice(null)
    try {
      setPreview(await resizeImage(file))
    } catch {
      setNotice({ type: 'error', text: 'Could not read that image. Try another file.' })
    }
  }

  const upload = async () => {
    if (!preview) return
    setUploading(true)
    setNotice(null)
    try {
      const r = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'add', ...creds, image: preview, caption, desc }),
      })
      const d = await r.json().catch(() => ({}))
      if (r.ok) {
        setPhotos(d.photos || [])
        setPreview('')
        setCaption('')
        setDesc('')
        setNotice({ type: 'success', text: 'Photo added to “Life at Savitur”.' })
      } else {
        if (r.status === 401) logout()
        setNotice({ type: 'error', text: d.error || 'Upload failed.' })
      }
    } catch {
      setNotice({ type: 'error', text: 'Network error during upload.' })
    }
    setUploading(false)
  }

  const remove = async (id) => {
    if (!window.confirm('Remove this photo from the gallery?')) return
    setNotice(null)
    try {
      const r = await fetch('/api/gallery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'delete', ...creds, id }),
      })
      const d = await r.json().catch(() => ({}))
      if (r.ok) {
        setPhotos(d.photos || [])
        setNotice({ type: 'success', text: 'Photo removed.' })
      } else {
        if (r.status === 401) logout()
        setNotice({ type: 'error', text: d.error || 'Could not remove photo.' })
      }
    } catch {
      setNotice({ type: 'error', text: 'Network error.' })
    }
  }

  // ── Login screen ──
  if (!loggedIn) {
    return (
      <div className="admin admin--center">
        <form className="admin-login" onSubmit={handleLogin}>
          <h1 className="admin-login__title">Savitur Admin</h1>
          <p className="admin-login__sub">Sign in to manage the “Life at Savitur” gallery.</p>
          <label>Username
            <input
              type="text" autoComplete="username" required
              value={loginForm.user}
              onChange={(e) => setLoginForm({ ...loginForm, user: e.target.value })}
            />
          </label>
          <label>Password
            <input
              type="password" autoComplete="current-password" required
              value={loginForm.password}
              onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            />
          </label>
          {loginError && <p className="admin-error">{loginError}</p>}
          <button type="submit" className="admin-btn" disabled={loggingIn}>
            {loggingIn ? 'Signing in…' : 'Sign In'}
          </button>
        </form>
      </div>
    )
  }

  // ── Dashboard ──
  return (
    <div className="admin">
      <header className="admin-bar">
        <h1>Life at Savitur — Gallery</h1>
        <button className="admin-btn admin-btn--ghost" onClick={logout}>Sign Out</button>
      </header>

      <section className="admin-card">
        <h2>Add a Photo</h2>
        <div className="admin-upload">
          <label className="admin-drop">
            {preview
              ? <img src={preview} alt="Preview" className="admin-drop__preview" />
              : <span className="admin-drop__hint">Tap to choose a photo<br /><small>JPG, PNG or WEBP</small></span>}
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={onFile} hidden />
          </label>

          <div className="admin-fields">
            <label>Caption
              <input type="text" placeholder="e.g. Pranic Healing Class"
                value={caption} onChange={(e) => setCaption(e.target.value)} maxLength={80} />
            </label>
            <label>Description <span className="admin-optional">(optional)</span>
              <input type="text" placeholder="Short line about this moment"
                value={desc} onChange={(e) => setDesc(e.target.value)} maxLength={140} />
            </label>
            <button className="admin-btn" onClick={upload} disabled={!preview || uploading}>
              {uploading ? 'Uploading…' : 'Add to Gallery'}
            </button>
          </div>
        </div>
        {notice && <p className={`admin-${notice.type}`}>{notice.text}</p>}
      </section>

      <section className="admin-card">
        <h2>Current Photos {photos.length > 0 && <span className="admin-count">{photos.length}</span>}</h2>
        {loadingPhotos ? (
          <p className="admin-muted">Loading…</p>
        ) : photos.length === 0 ? (
          <p className="admin-muted">No uploaded photos yet. The gallery is showing the built-in defaults.</p>
        ) : (
          <div className="admin-grid">
            {photos.map((p) => (
              <div className="admin-tile" key={p.id}>
                <img src={p.url} alt={p.caption} />
                <div className="admin-tile__meta">
                  <strong>{p.caption}</strong>
                  {p.desc && <span>{p.desc}</span>}
                </div>
                <button className="admin-tile__del" onClick={() => remove(p.id)} aria-label="Delete photo">×</button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
