import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__inner">
        <div className="about__image-wrap">
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80"
            alt="Pranic healing meditation"
            className="about__image"
          />
          <div className="about__image-badge">
            <span className="about__badge-year">Est. 2024</span>
            <span className="about__badge-loc">Bengaluru</span>
          </div>
        </div>

        <div className="about__content">
          <p className="about__label">— About the Centre</p>
          <h2 className="about__title">A Dedicated Space for Profound Rejuvenation</h2>
          <p className="about__text">
            Established in 2024 in the serene locale of Kannamangala, Bengaluru, Savitur Pranic
            Healing Center is a dedicated space for profound rejuvenation. Our mission is to spread
            the light of Pranic Healing, offering a sanctuary where individuals can find balance,
            peace, and restored vitality through ancient energy techniques applied in a modern context.
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <h4>Holistic Approach</h4>
              <p>Treating the energy body to heal the physical.</p>
            </div>
            <div className="about__highlight">
              <h4>Expert Healers</h4>
              <p>Trained in advanced Pranic Healing techniques.</p>
            </div>
          </div>

          <a href="#offerings" className="about__link">
            Learn More About Us <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
