import { Link } from 'react-router-dom'
import './Whitefield.css'

const offerings = [
  {
    title: 'Personal Pranic Healing sessions',
    text: 'Book a no-touch energy healing session based on the methods taught by Grand Master Choa Kok Sui.',
    link: '/services#healings',
    action: 'Explore healing sessions',
  },
  {
    title: 'Pranic Healing courses',
    text: 'Learn foundational and advanced Pranic Healing techniques through workshops taught by licensed instructors.',
    link: '/courses',
    action: 'View courses',
  },
  {
    title: 'Meditation and nurturing',
    text: 'Join Meditation on Twin Hearts and follow-up nurturing sessions that support continued learning and practice.',
    link: '/services#meditation',
    action: 'See meditation sessions',
  },
]

export default function Whitefield() {
  return (
    <div className="local-page">
      <section className="local-hero">
        <div className="local-hero__inner">
          <nav className="local-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true">/</span>
            <span>Pranic Healing Whitefield</span>
          </nav>
          <p className="local-hero__label">Savitur · Kannamangala, East Bangalore</p>
          <h1>Pranic Healing near Whitefield, Bangalore</h1>
          <p className="local-hero__intro">
            Savitur Pranic Healing Centre welcomes people from Whitefield and nearby East
            Bangalore communities for personal healing sessions, Pranic Healing courses,
            Meditation on Twin Hearts and Arhatic Yoga practice.
          </p>
          <div className="local-hero__actions">
            <Link to="/contact" className="local-button local-button--primary">
              Book or enquire
            </Link>
            <a
              href="https://share.google/uR7J6xdT0lyTPmnV1"
              target="_blank"
              rel="noopener noreferrer"
              className="local-button local-button--secondary"
            >
              Get directions
            </a>
          </div>
        </div>
      </section>

      <section className="local-section" aria-labelledby="whitefield-centre-heading">
        <div className="local-section__inner local-section__intro-grid">
          <div>
            <p className="local-section__eyebrow">A local centre for East Bangalore</p>
            <h2 id="whitefield-centre-heading">Pranic Healing for the Whitefield community</h2>
          </div>
          <div className="local-section__copy">
            <p>
              Our centre is located in Kannamangala, Bengaluru, making Savitur a local option
              for people looking for Pranic Healing in the Whitefield area. Since 2022, the
              centre has offered a calm space for learning, meditation and guided energy-healing
              practices.
            </p>
            <p>
              Whether you are completely new to Pranic Healing or continuing your practice,
              contact us before visiting so we can guide you to the right session, course or
              upcoming gathering.
            </p>
          </div>
        </div>
      </section>

      <section className="local-section local-section--cream" aria-labelledby="offerings-heading">
        <div className="local-section__inner">
          <p className="local-section__eyebrow">What you can explore</p>
          <h2 id="offerings-heading">Healing, courses and meditation near Whitefield</h2>
          <div className="local-offerings">
            {offerings.map((offering) => (
              <article className="local-offering" key={offering.title}>
                <h3>{offering.title}</h3>
                <p>{offering.text}</p>
                <Link to={offering.link}>{offering.action} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="local-section" aria-labelledby="visit-heading">
        <div className="local-section__inner local-visit">
          <div>
            <p className="local-section__eyebrow">Plan your visit</p>
            <h2 id="visit-heading">Savitur Pranic Healing Centre</h2>
            <address>
              Kannamangala, Bengaluru, Karnataka<br />
              <a href="tel:+917045256527">+91 70452 56527</a><br />
              <a href="mailto:savitur.pranichealing@gmail.com">
                savitur.pranichealing@gmail.com
              </a>
            </address>
          </div>
          <div className="local-visit__note">
            <h3>Before you come</h3>
            <p>
              Sessions and courses are scheduled in advance. Send an enquiry or call to confirm
              availability and receive the latest timings and directions from Whitefield.
            </p>
            <Link to="/contact" className="local-text-link">Contact the centre →</Link>
          </div>
        </div>
      </section>

      <section className="local-disclaimer">
        <div className="local-section__inner">
          <p>
            Pranic Healing is a complementary wellness practice and is not a replacement for
            medical diagnosis, treatment or advice from a qualified healthcare professional.
          </p>
        </div>
      </section>
    </div>
  )
}
