import { useState, useEffect, useCallback } from 'react'
import './PhotoGallery.css'

const photos = [
  {
    src: '/gallery/gallery-1.jpg',
    caption: 'Pranic Healing Class',
    desc: 'Students learning Pranic Healing techniques at our centre',
  },
  {
    src: '/gallery/gallery-2.jpg',
    caption: 'Guided Meditation Session',
    desc: 'Corporate wellness meditation at Signoff Pharmaceuticals',
  },
  {
    src: '/gallery/gallery-3.jpg',
    caption: 'Mega Pranic Healing Camp',
    desc: 'World Health Day — Free healing camp across India',
  },
  {
    src: '/gallery/gallery-4.jpg',
    caption: 'Healing Workshop',
    desc: 'Hands-on Pranic Healing training at the Savitur centre',
  },
]

export default function PhotoGallery() {
  const [active, setActive] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => {
      setActive(index)
      setAnimating(false)
    }, 300)
  }, [animating])

  const prev = useCallback(() => {
    goTo((active - 1 + photos.length) % photos.length)
  }, [active, goTo])

  const next = useCallback(() => {
    goTo((active + 1) % photos.length)
  }, [active, goTo])

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [next])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next])

  return (
    <section className="gallery" id="gallery">
      <div className="gallery__header">
        <p className="gallery__label">— Our Centre</p>
        <h2 className="gallery__title">Life at Savitur</h2>
        <p className="gallery__subtitle">
          Moments of healing, learning, and community from our sessions and camps
        </p>
      </div>

      <div className="gallery__stage">
        <div className={`gallery__slide ${animating ? 'gallery__slide--fade' : ''}`}>
          <img
            src={photos[active].src}
            alt={photos[active].caption}
            className="gallery__img"
          />
          <div className="gallery__overlay">
            <div className="gallery__caption">
              <h3 className="gallery__caption-title">{photos[active].caption}</h3>
              <p className="gallery__caption-desc">{photos[active].desc}</p>
            </div>
          </div>
        </div>

        <button className="gallery__btn gallery__btn--prev" onClick={prev} aria-label="Previous photo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="gallery__btn gallery__btn--next" onClick={next} aria-label="Next photo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="gallery__dots">
          {photos.map((_, i) => (
            <button
              key={i}
              className={`gallery__dot ${i === active ? 'gallery__dot--active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to photo ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="gallery__thumbs">
        {photos.map((photo, i) => (
          <button
            key={i}
            className={`gallery__thumb ${i === active ? 'gallery__thumb--active' : ''}`}
            onClick={() => goTo(i)}
          >
            <img src={photo.src} alt={photo.caption} />
            <span>{photo.caption}</span>
          </button>
        ))}
      </div>
    </section>
  )
}
