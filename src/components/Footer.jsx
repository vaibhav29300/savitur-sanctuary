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
          <p className="footer__copy">© 2026 Savitur Pranic Healing Centre. All rights reserved.</p>
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
        <div className="footer__dev">
          <span>Designed &amp; Developed by</span>
          <a
            href="https://linkedin.com/in/vaibhavshekhar293"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__dev-name"
          >
            {/* LinkedIn icon */}
            <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Vaibhav Shekhar
          </a>
          <span className="footer__dev-sep">·</span>
          <a href="tel:+917389452289" className="footer__dev-contact">+91 73894 52289</a>
        </div>
      </div>
    </footer>
  )
}
