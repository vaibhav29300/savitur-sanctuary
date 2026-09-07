import './Testimonials.css'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer, Bengaluru',
    text: 'After just three sessions, my chronic back pain reduced dramatically. The healers at Savitur are deeply compassionate and skilled. A truly transformative experience.',
    initials: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Business Owner, Bangalore',
    text: 'I was skeptical at first, but Pranic Healing changed my perspective on wellness completely. My energy levels are consistently high and my anxiety is almost gone.',
    initials: 'RK',
  },
  {
    name: 'Ananya Iyer',
    role: 'Teacher, Kannamangala',
    text: 'The Twin Hearts Meditation sessions are incredible. I feel a deep sense of peace and clarity after every session. This center is a true blessing for our community.',
    initials: 'AI',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <p className="testimonials__label">— Testimonials</p>
          <h2 className="testimonials__title">Healing Stories from Our Community</h2>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <div className="testimonial-card__quote">"</div>
              <p className="testimonial-card__text">{t.text}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
