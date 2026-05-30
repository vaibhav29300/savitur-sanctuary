import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">Savitur Pranic Healing</Link>
          <p className="footer__tagline">
            A Centre for Pranic Healing &amp; Arhatic Yoga in Kannamangala, Bengaluru.
            Healing the body, mind, and soul through the ancient wisdom of energy.
          </p>
          <div className="footer__social">
            <a
              href="https://www.instagram.com/savitur.pranichealing/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              @savitur.pranichealing
            </a>
          </div>
          <p className="footer__copy">© 2024 Savitur Pranic Healing Sanctuary. All rights reserved.</p>
        </div>

        <div className="footer__nav-group">
          <h4>Navigation</h4>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#founder">Founder</Link>
            <Link to="/#contact">Contact</Link>
          </nav>
        </div>

        <div className="footer__nav-group">
          <h4>Courses</h4>
          <nav>
            <Link to="/courses#basic">Basic Pranic Healing</Link>
            <Link to="/courses#advanced">Advanced Pranic Healing</Link>
            <Link to="/courses#psychotherapy">Pranic Psychotherapy</Link>
            <Link to="/courses#aohs">Achieving Oneness (AOHS)</Link>
            <Link to="/courses#arhatic">Arhatic Yoga</Link>
            <Link to="/courses#crystal">Pranic Crystal Healing</Link>
            <Link to="/courses#kriyashakti">Kriyashakti</Link>
          </nav>
        </div>

        <div className="footer__nav-group">
          <h4>Services</h4>
          <nav>
            <Link to="/services#healings">Healing Sessions</Link>
            <Link to="/services#fengshui">Feng Shui Solutions</Link>
            <Link to="/services#property">Disputed Properties</Link>
            <Link to="/services#meditation">Meditation (THM / AY)</Link>
            <Link to="/services#nurturing">Nurturing Sessions</Link>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Built with love for healing and wellness.</p>
      </div>
    </footer>
  )
}
