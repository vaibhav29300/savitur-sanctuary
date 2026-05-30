import { Link } from 'react-router-dom'
import './Hero.css'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 72
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <img
        src="/grand-master.jpg"
        alt="Grand Master Choa Kok Sui"
        className="hero__bg"
      />
      <div className="hero__vignette-top" />
      <div className="hero__vignette-bottom" />

      <div className="hero__content">
        <p className="hero__eyebrow">Savitur Centre · Bengaluru</p>
        <h1 className="hero__title">
          Heal the Body.<br />
          Calm the Mind.<br />
          <em>Illuminate the Soul.</em>
        </h1>
        <p className="hero__subtitle">
          A centre for Pranic Healing &amp; Arhatic Yoga — rooted in the
          ancient wisdom of Grand Master Choa Kok Sui.
        </p>
        <div className="hero__actions">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo('about')}
          >
            Start Your Journey <span>→</span>
          </button>
          <Link to="/services" className="hero__btn hero__btn--ghost">
            Our Offerings
          </Link>
        </div>

        <p className="hero__contact-line">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.74 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.65 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.1a16 16 0 0 0 6 6l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <Link to="/contact">Contact Us</Link>
          <span>· +91-7389452289</span>
        </p>
      </div>
    </section>
  )
}
