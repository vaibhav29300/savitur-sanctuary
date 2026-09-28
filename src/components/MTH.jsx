import { Link } from 'react-router-dom'
import './MTH.css'

export default function MTH() {
  return (
    <section id="mth" className="mth">
      <div className="mth__inner">
        <div className="mth__intro-grid">
          <div className="mth__visual" aria-hidden="true">
            <div className="mth__halo mth__halo--outer" />
            <div className="mth__halo mth__halo--middle" />
            <div className="mth__moon">
              <svg viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="43" fill="currentColor" opacity="0.14" />
                <path
                  d="M79 27c-7 5-11.5 13.2-11.5 22.5 0 15.2 12.3 27.5 27.5 27.5 2.8 0 5.5-.4 8-1.2C96.8 89.8 82.8 99.5 66.5 99.5 44.7 99.5 27 81.8 27 60S44.7 20.5 66.5 20.5c4.4 0 8.6.7 12.5 2z"
                  fill="currentColor"
                />
                <path d="M35 34l2.4 5.6L43 42l-5.6 2.4L35 50l-2.4-5.6L27 42l5.6-2.4L35 34z" fill="currentColor" opacity="0.75" />
                <path d="M95 18l1.5 3.5L100 23l-3.5 1.5L95 28l-1.5-3.5L90 23l3.5-1.5L95 18z" fill="currentColor" opacity="0.65" />
              </svg>
            </div>
          </div>

          <div className="mth__content">
            <p className="mth__label">— Discover the Practice</p>
            <h2 className="mth__title">What is Meditation on Twin Hearts (MTH)?</h2>
            <p className="mth__intro">
              A guided spiritual practice that awakens the heart and crown energy centres while
              blessing the Earth with peace, loving-kindness, and goodwill.
            </p>

            <Link
              to={`/contact?interest=${encodeURIComponent('Meditation on Twin Hearts (MTH)')}`}
              className="mth__cta"
            >
              Join an MTH Session <span>→</span>
            </Link>
          </div>
        </div>

        <div className="mth__principles">
          <article className="mth-card">
            <span className="mth-card__number">01</span>
            <div className="mth-card__icon" aria-hidden="true">♡</div>
            <h3>The Two Hearts</h3>
            <p>
              It focuses on activating two subtle energy centers (chakras)—the{' '}
              <strong>Anahata</strong> (heart chakra, the center for emotional heart) and the{' '}
              <strong>Sahasrara</strong> (crown chakra, the center for divine connection).
            </p>
          </article>

          <article className="mth-card">
            <span className="mth-card__number">02</span>
            <div className="mth-card__icon" aria-hidden="true">◎</div>
            <h3>The Practice</h3>
            <p>
              Practitioners act as channels to bless the entire Earth with loving-kindness,
              peace, joy, and goodwill.
            </p>
          </article>

          <article className="mth-card">
            <span className="mth-card__number">03</span>
            <div className="mth-card__icon" aria-hidden="true">✦</div>
            <h3>The Mechanism</h3>
            <p>
              It combines principles of loving-kindness, focused prayer, and self-healing
              visualization.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}
