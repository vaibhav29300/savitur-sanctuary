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
      </div>
    </section>
  )
}
