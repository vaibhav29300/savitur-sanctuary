import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">PranaSanctuary</Link>
          <p className="footer__tagline">
            A Centre for Pranic Healing &amp; Arhatic Yoga in Kannamangala, Bengaluru.
            Healing the body, mind, and soul through the ancient wisdom of energy.
          </p>
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
            <Link to="/courses#arhatic">Arhatic Yoga</Link>
            <Link to="/courses">All Courses</Link>
          </nav>
        </div>

        <div className="footer__nav-group">
          <h4>Services</h4>
          <nav>
            <Link to="/services#healings">Healing Sessions</Link>
            <Link to="/services#meditation">Meditations</Link>
            <Link to="/services#fengshui">Feng Shui</Link>
            <Link to="/services#nurturing">Nurturing</Link>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Built with love for healing and wellness.</p>
      </div>
    </footer>
  )
}
