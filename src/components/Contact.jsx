import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Contact.css'

const COURSES = [
  'Basic Pranic Healing',
  'Advanced Pranic Healing',
  'Pranic Psychotherapy',
  'Achieving Oneness with the Higher Soul (AOHS)',
  'Arhatic Yoga',
  'Pranic Crystal Healing',
  'Kriyashakti',
]

const SERVICES = [
  'Healing Session — Physical',
  'Healing Session — Psychological',
  'Healing Session — Financial',
  'Healing Session — Relationship',
  'Feng Shui Consultation (Home / Office)',
  'Healings for Disputed Properties',
  'Twin Hearts Meditation (THM)',
  'Arhatic Yoga Meditation',
  'Nurturing Session',
]

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [status, setStatus] = useState('idle')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const interest = searchParams.get('interest')
    if (!interest) return
    setForm(f => ({ ...f, service: interest }))
    // Wait for render then smooth-scroll to the form
    const timer = setTimeout(() => {
      const el = document.getElementById('contact')
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 80)
    return () => clearTimeout(timer)
  }, [searchParams])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm(INITIAL)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">

        {/* ── Left column: info + map ── */}
        <div className="contact__info">
          <p className="contact__label">— Get in Touch</p>
          <h2 className="contact__title">Begin Your Healing Journey Today</h2>
          <p className="contact__text">
            Ready to experience the profound benefits of Pranic Healing? Reach out to us to
            book a session, join a course, or simply learn more about our offerings.
          </p>

          <div className="contact__details">
            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Location</div>
                <div className="contact__detail-val">Kannamangala, Bengaluru, Karnataka</div>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.74 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.65 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">WhatsApp / Phone</div>
                <div className="contact__detail-val">+91 73894 52289</div>
              </div>
            </div>

            <div className="contact__detail">
              <div className="contact__detail-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div className="contact__detail-label">Email</div>
                <div className="contact__detail-val">info@savitursanctuary.com</div>
              </div>
            </div>
          </div>

          {/* Google Maps embed */}
          <div className="contact__map">
            <iframe
              title="Savitur Pranic Healing Centre"
              src="https://maps.google.com/maps?q=savitur+pranic+healing+kannamangala+bangalore&output=embed&z=15"
              width="100%"
              height="240"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href="https://share.google/uR7J6xdT0lyTPmnV1"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__directions"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>

        {/* ── Right column: form ── */}
        <div className="contact__form-wrap">
          {status === 'success' ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Enquiry Received!</h3>
              <p>Thank you for reaching out. We will get back to you shortly.</p>
              <button className="contact__resend" onClick={() => setStatus('idle')}>
                Send another enquiry
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={handleChange}
                    disabled={status === 'sending'}
                  />
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="service">Interested In</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                  required
                >
                  <option value="" disabled>Select a service or course…</option>
                  <optgroup label="── Courses ──">
                    {COURSES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </optgroup>
                  <optgroup label="── Services ──">
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </optgroup>
                  <optgroup label="──────────">
                    <option value="Not sure — need guidance">Not sure — need guidance</option>
                  </optgroup>
                </select>
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message <span className="contact__optional">(optional)</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us a bit about yourself or what you're looking for…"
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === 'sending'}
                />
              </div>

              {status === 'error' && (
                <p className="contact__error">
                  Something went wrong. Please try again or WhatsApp us at +91 73894 52289.
                </p>
              )}

              <button type="submit" className="contact__submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  <><span className="contact__spinner" /> Sending…</>
                ) : (
                  'Send Enquiry'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
