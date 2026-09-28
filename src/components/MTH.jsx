import { Link } from 'react-router-dom'
import './MTH.css'

export default function MTH() {
  return (
    <section id="mth" className="mth">
      <div className="mth__inner">
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
    </section>
  )
}
