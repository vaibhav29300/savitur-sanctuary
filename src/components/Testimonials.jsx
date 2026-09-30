import './Testimonials.css'

const GOOGLE_REVIEWS_URL = 'https://share.google/uR7J6xdT0lyTPmnV1'

const reviews = [
  {
    id: 'sindhuja-p',
    author: 'Sindhuja P',
    rating: 5,
    date: 'Sep 2026',
    text: "Chandni Ma'am's teaching was excellent. I could easily understand. The environment adds good vibes. Thank you.",
  },
  {
    id: 'lalitha-simha',
    author: 'Lalitha Simha',
    rating: 5,
    date: 'Jul 2026',
    text: 'I would like to thank Mrs Chandini Ji, for being my mentor, instructor and guide throughout the Pranic Healing Session. The Course was very knowledgeable, insightful and presented in a scientific manner. The concepts were explained very clearly with practical techniques that were easy to understand and apply. It\'s a valuable learning experience that enhanced my understanding of energy, healing and overall well-being. I recommend this beautiful course to anyone looking to uplift and heal not only themselves but for the upliftment of humanity and spread the light of healing and happiness to all.',
  },
  {
    id: 'ss',
    author: 'SS',
    rating: 5,
    date: 'Feb 2026',
    text: 'I attended a 2-day Basic Pranic Healing course with Chandni and had a very positive experience. Her explanations were clear, logical, and presented in a scientific manner, which made the concepts easy to understand and remember. The sessions were well paced and not overwhelming at all, especially for someone new to this field. I thoroughly enjoyed the course and learned a lot. The tips and techniques shared were simple, practical, and easy to incorporate into daily life. Overall, it was an insightful and enriching experience, and I would highly recommend her sessions to anyone curious about Pranic Healing.',
  },
  {
    id: 'sudeep-sagar',
    author: 'Sudeep Sagar',
    rating: 5,
    date: 'Feb 2026',
    text: 'I recently completed the basic course and found it to be an excellent experience. Chandni\'s constant support and guidance made a significant difference throughout the learning journey. I highly recommend this place to anyone considering a Pranic Healing course.',
  },
  {
    id: 'shobha-g',
    author: 'Shobha G',
    rating: 5,
    date: 'Feb 2026',
    text: 'Recently finished the 2days course by Chandni. It was a great experience and knowledge. Amazing session',
  },
]

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
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
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="testimonials__label">— Google Reviews</p>
          <h1 className="testimonials__title">Pranic Healing Reviews from Our Community</h1>
          <div className="testimonials__source">
            <span className="testimonials__google" aria-hidden="true">G</span>
            <span><strong>4.9</strong> from 9 Google reviews</span>
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noreferrer">View all reviews</a>
          </div>
        </div>

        <div className="testimonials__grid">
          {reviews.map((review) => (
            <article className="testimonial-card" key={review.id}>
              <div className="testimonial-card__topline">
                <Stars rating={review.rating} />
                <span className="testimonial-card__date">{review.date}</span>
              </div>
              <p className="testimonial-card__text">{review.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar" aria-hidden="true">{initials(review.author)}</div>
                <div>
                  <div className="testimonial-card__name">{review.author}</div>
                  <div className="testimonial-card__role">Google review</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
