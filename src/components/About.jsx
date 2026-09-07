import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__image-wrap">
          <img
            src="/about-centre.webp"
            alt="Savitur Pranic Healing Centre"
            className="about__image"
          />
          <div className="about__image-badge">
            <span className="about__badge-year">Est. 2024</span>
            <span className="about__badge-loc">Bengaluru</span>
          </div>
        </div>

        <div className="about__content">
          <p className="about__label">— About the Centre</p>
          <h2 className="about__title">A Centre for Pranic Healing &amp; Arhatic Yoga</h2>
          <p className="about__text">
            Savitur is a Centre for Pranic Healing &amp; Arhatic Yoga located in the Kannamangala
            area of Bengaluru. Established in 2024, the purpose of the centre is to spread the
            light of Pranic Healing — offering a centre where individuals can find balance,
            peace, and restored vitality.
          </p>
          <p className="about__text">
            We offer a range of services including personalized healings, guided meditations,
            Pranic Healing certification courses, nurturing sessions, and free healing camps for
            the community.
          </p>

          <Link to="/services" className="about__link">
            Explore Our Services <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
