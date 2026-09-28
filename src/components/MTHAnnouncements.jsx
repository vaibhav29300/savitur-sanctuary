import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MTHAnnouncements.css'

const DEFAULT_ANNOUNCEMENTS = [
  {
    id: 'default-what-is-mth',
    eyebrow: 'Discover the Practice',
    title: 'What is Meditation on Twin Hearts (MTH)?',
    text: 'A guided spiritual practice that awakens the heart and crown energy centres while blessing the Earth with peace, loving-kindness, and goodwill.',
    imageUrl: '',
  },
  {
    id: 'default-full-moon-mth',
    eyebrow: 'Monthly at the Centre',
    title: 'Full Moon MTH',
    text: 'The centre conducts MTH every full moon.',
    imageUrl: '',
  },
  {
    id: 'default-online-mth',
    eyebrow: 'Join from Anywhere',
    title: 'Online MTH',
    text: 'Schedule for online MTH to be announced online.',
    imageUrl: '',
  },
]

export default function MTHAnnouncements() {
  const [announcements, setAnnouncements] = useState(DEFAULT_ANNOUNCEMENTS)
  const [active, setActive] = useState(0)

  useEffect(() => {
    let cancelled = false

    fetch('/api/announcements')
      .then((response) => (response.ok ? response.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data?.announcements)) {
          setAnnouncements(data.announcements)
          setActive(0)
        }
      })
      .catch(() => {})

    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (announcements.length < 2) return undefined

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % announcements.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [announcements.length])

  const show = (index) => {
    if (!announcements.length) return
    setActive((index + announcements.length) % announcements.length)
  }

  if (!announcements.length) return null

  const visibleAnnouncements = announcements.length > 1
    ? [announcements[active], announcements[(active + 1) % announcements.length]]
    : [announcements[active]]

  return (
    <section className="mth-announcements" aria-labelledby="mth-announcements-title">
      <div className="mth-announcements__inner">
        <div className="mth-announcements__heading">
          <div>
            <p className="mth-announcements__label">— Announcements</p>
            <h2 id="mth-announcements-title">Upcoming Courses &amp; Events</h2>
          </div>
          <p className="mth-announcements__intro">
            Upcoming meditations, gatherings, and centre updates.
          </p>
        </div>

        <div className="mth-carousel">
          <button
            type="button"
            className="mth-carousel__arrow"
            onClick={() => show(active - 1)}
            aria-label="Previous announcement"
            disabled={announcements.length < 2}
          >
            ‹
          </button>

          <div className="mth-carousel__viewport" aria-live="polite">
            <div className="mth-carousel__cards" key={active}>
              {visibleAnnouncements.map((item, position) => {
                const isMth = `${item.title} ${item.text}`.toLowerCase().includes('mth')
                const contactLink = isMth
                  ? `/contact?interest=${encodeURIComponent('Meditation on Twin Hearts (MTH)')}`
                  : '/contact'

                return (
                  <article
                    className={`mth-carousel__card${position === 1 ? ' mth-carousel__card--secondary' : ''}`}
                    key={`${item.id || item.title}-${position}`}
                  >
                    <div className={`mth-carousel__media${item.imageUrl ? '' : ' mth-carousel__media--placeholder'}`}>
                      {item.imageUrl ? (
                        <img
                          className="mth-carousel__image"
                          src={item.imageUrl}
                          alt={item.title}
                        />
                      ) : (
                        <div className="mth-carousel__placeholder" aria-hidden="true">
                          <span className="mth-carousel__sun" />
                          <span className="mth-carousel__symbol">✦</span>
                          <span>Savitur</span>
                        </div>
                      )}
                      <span className="mth-carousel__eyebrow">{item.eyebrow}</span>
                    </div>

                    <div className="mth-carousel__content">
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <Link to={contactLink} className="mth-carousel__link">
                        {isMth ? 'Join an MTH Session' : 'More details'} <span>→</span>
                      </Link>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            className="mth-carousel__arrow"
            onClick={() => show(active + 1)}
            aria-label="Next announcement"
            disabled={announcements.length < 2}
          >
            ›
          </button>
        </div>

        <div className="mth-carousel__dots" aria-label="Choose an announcement">
          {announcements.map((item, index) => (
            <button
              type="button"
              key={item.id || item.title}
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
