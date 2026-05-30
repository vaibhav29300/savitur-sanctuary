import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">PranaSanctuary</a>
          <p className="footer__tagline">
            Healing the body, mind, and soul through the ancient wisdom of Pranic energy.
          </p>
          <p className="footer__copy">© 2024 Pranic Healing Sanctuary. All rights reserved.</p>
        </div>

        <div className="footer__nav-group">
          <h4>Navigation</h4>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#offerings">Courses</a>
            <a href="#founder">Founder</a>
          </nav>
        </div>

        <div className="footer__nav-group">
          <h4>Services</h4>
          <nav>
            <a href="#pranic-healing">Pranic Healing</a>
            <a href="#offerings">Offerings</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer__nav-group">
          <h4>Legal</h4>
          <nav>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </nav>
        </div>
      </div>

      <div className="footer__bottom">
        <p>Built with love for healing and wellness.</p>
      </div>
    </footer>
  )
}
