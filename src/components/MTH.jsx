import { Link } from 'react-router-dom'
import './MTH.css'

export default function MTH() {
  return (
    <section id="mth" className="mth">
      <div className="mth__inner">
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
          <p className="mth__label">— Meditation on Twin Hearts</p>
          <h2 className="mth__title">MTH at Savitur</h2>
          <p className="mth__intro">
            Join our community in a guided meditation for peace, illumination, and planetary
            blessing.
          </p>

          <div className="mth__schedule">
            <div className="mth__schedule-item">
              <span className="mth__schedule-number">01</span>
              <div>
                <h3>Full Moon MTH</h3>
                <p>The centre conducts MTH every full moon.</p>
              </div>
            </div>
            <div className="mth__schedule-item">
              <span className="mth__schedule-number">02</span>
              <div>
                <h3>Online MTH</h3>
                <p>Schedule for online MTH to be announced online.</p>
              </div>
            </div>
          </div>

          <Link
            to={`/contact?interest=${encodeURIComponent('Meditation on Twin Hearts (MTH)')}`}
            className="mth__cta"
          >
            Join an MTH Session <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
