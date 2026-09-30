import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner about__inner--text-only">
        <div className="about__content">
          <p className="about__label">— About the Centre</p>
          <h2 className="about__title">A Pranic Healing Centre in Bangalore</h2>
          <p className="about__text">
            Savitur is a Centre for Pranic Healing &amp; Arhatic Yoga located in Kannamangala,
            Bangalore, serving the surrounding Whitefield and East Bangalore community.
            Established in 2022, the purpose of the centre is to spread the
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
          <Link to="/pranic-healing-whitefield" className="about__link about__link--secondary">
            Pranic Healing near Whitefield <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
