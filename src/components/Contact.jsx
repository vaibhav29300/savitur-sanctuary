import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <div className="contact__info">
          <p className="contact__label">— Get in Touch</p>
          <h2 className="contact__title">Begin Your Healing Journey Today</h2>
          <p className="contact__text">
            Ready to experience the profound benefits of Pranic Healing? Reach out to us to book
            a session, join a course, or simply learn more about our offerings.
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
                <div className="contact__detail-label">Phone</div>
                <div className="contact__detail-val">+91 98765 43210</div>
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
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success">
              <div className="contact__success-icon">✓</div>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
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
                />
              </div>
              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="How can we help you? Tell us about your wellness goals…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="contact__submit">
                Send Message <span>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
