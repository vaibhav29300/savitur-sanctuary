import { useEffect, useState } from 'react'
import './Testimonials.css'

const GOOGLE_REVIEWS_URL = 'https://share.google/uR7J6xdT0lyTPmnV1'

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function reviewDate(value) {
  return new Intl.DateTimeFormat('en-IN', {
    month: 'short',
    year: 'numeric',
  }).format(new Date(value))
}

function Stars({ rating }) {
  return (
    <div className="testimonial-card__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className={index < rating ? 'is-filled' : ''} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [reviewData, setReviewData] = useState({
    reviews: [],
    averageRating: null,
    totalReviewCount: null,
  })
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const controller = new AbortController()

    async function loadReviews() {
      try {
        const response = await fetch('/api/reviews', {
          headers: { Accept: 'application/json' },
          cache: 'no-store',
          signal: controller.signal,
        })
        const data = await response.json()

        if (!response.ok) throw new Error(data.error || 'Unable to load reviews')

        setReviewData({
          reviews: Array.isArray(data.reviews) ? data.reviews : [],
          averageRating: data.averageRating,
          totalReviewCount: data.totalReviewCount,
        })
        setStatus('ready')
      } catch (error) {
        if (error.name !== 'AbortError') {
          setStatus((currentStatus) => (currentStatus === 'ready' ? currentStatus : 'error'))
        }
      }
    }

    loadReviews()
    const refreshInterval = window.setInterval(loadReviews, 5 * 60 * 1000)

    return () => {
      controller.abort()
      window.clearInterval(refreshInterval)
    }
  }, [])

  const { reviews, averageRating, totalReviewCount } = reviewData

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="testimonials__label">— Google Reviews</p>
          <h2 className="testimonials__title">Recent Stories from Our Community</h2>
          <div className="testimonials__source">
            <span className="testimonials__google" aria-hidden="true">G</span>
            {averageRating && totalReviewCount ? (
              <span><strong>{Number(averageRating).toFixed(1)}</strong> from {totalReviewCount} Google reviews</span>
            ) : (
              <span>Verified reviews from Google</span>
            )}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">View all reviews</a>
          </div>
        </div>

        {status === 'loading' && (
          <div className="testimonials__grid" aria-label="Loading Google reviews">
            {Array.from({ length: 3 }, (_, index) => (
              <div className="testimonial-card testimonial-card--loading" key={index} aria-hidden="true">
                <div className="testimonial-card__loading-line testimonial-card__loading-line--short" />
                <div className="testimonial-card__loading-line" />
                <div className="testimonial-card__loading-line" />
                <div className="testimonial-card__loading-line testimonial-card__loading-line--medium" />
              </div>
            ))}
          </div>
        )}

        {status === 'ready' && reviews.length > 0 && (
          <div className="testimonials__grid">
            {reviews.map((review) => (
              <article className="testimonial-card" key={review.id}>
                <div className="testimonial-card__topline">
                  <Stars rating={review.rating} />
                  <span className="testimonial-card__date">{reviewDate(review.createdAt)}</span>
                </div>
                <p className={`testimonial-card__text${review.text ? '' : ' testimonial-card__text--rating-only'}`}>
                  {review.text || `Rated Savitur ${review.rating} stars on Google.`}
                </p>
                <div className="testimonial-card__author">
                  {review.photoUrl ? (
                    <img
                      className="testimonial-card__avatar"
                      src={review.photoUrl}
                      alt=""
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="testimonial-card__avatar" aria-hidden="true">{initials(review.author)}</div>
                  )}
                  <div>
                    <div className="testimonial-card__name">{review.author}</div>
                    <div className="testimonial-card__role">Google review</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {status === 'ready' && reviews.length === 0 && (
          <div className="testimonials__notice">No Google reviews are available yet.</div>
        )}

        {status === 'error' && (
          <div className="testimonials__notice">
            Reviews could not be loaded right now.{' '}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">Read them on Google</a>.
          </div>
        )}
      </div>
    </section>
  )
}
