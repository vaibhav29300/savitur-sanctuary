import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MTHAnnouncements.css'

const announcements = [
  {
    eyebrow: 'Monthly at the Centre',
    title: 'Full Moon MTH',
    text: 'The centre conducts MTH every full moon.',
  },
  {
    eyebrow: 'Join from Anywhere',
    title: 'Online MTH',
    text: 'Schedule for online MTH to be announced online.',
  },
]

export default function MTHAnnouncements() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [])

  const show = (index) => {
    setActive((index + announcements.length) % announcements.length)
  }

  const announcement = announcements[active]

  return (
    <section className="mth-announcements" aria-labelledby="mth-announcements-title">
      <div className="mth-announcements__inner">
        <div className="mth-announcements__heading">
          <p className="mth-announcements__label">— MTH Announcements</p>
          <h2 id="mth-announcements-title">Gather. Meditate. Bless.</h2>
        </div>

        <div className="mth-carousel" aria-live="polite">
          <button
            type="button"
            className="mth-carousel__arrow"
            onClick={() => show(active - 1)}
            aria-label="Previous announcement"
          >
            ‹
          </button>

          <div className="mth-carousel__content" key={announcement.title}>
            <span className="mth-carousel__eyebrow">{announcement.eyebrow}</span>
            <h3>{announcement.title}</h3>
            <p>{announcement.text}</p>
            <Link
              to={`/contact?interest=${encodeURIComponent('Meditation on Twin Hearts (MTH)')}`}
              className="mth-carousel__link"
            >
              Register your interest <span>→</span>
            </Link>
          </div>

          <button
            type="button"
            className="mth-carousel__arrow"
            onClick={() => show(active + 1)}
            aria-label="Next announcement"
          >
            ›
          </button>
        </div>

        <div className="mth-carousel__dots" aria-label="Choose an announcement">
          {announcements.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`mth-carousel__dot${index === active ? ' mth-carousel__dot--active' : ''}`}
              onClick={() => show(index)}
              aria-label={`Show ${item.title}`}
              aria-current={index === active ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
