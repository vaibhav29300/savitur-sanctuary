import './Offerings.css'

const offerings = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.66 4.59 4.74C11.92 11.49 12 11.49 12 11.49s.08 0 .16.01c2.57-.09 4.59-2.17 4.59-4.74C16.75 4.13 14.62 2 12 2z"/>
        <path d="M19.74 16.23c-1.74-1.18-3.9-1.85-6.14-1.85h-3.2c-2.24 0-4.4.68-6.14 1.85C2.95 17.22 2 18.67 2 20.22V22h20v-1.78c0-1.55-.95-3-2.26-3.99z"/>
      </svg>
    ),
    color: '#c9a84c',
    title: 'Healings',
    description: 'Personalized energy healing sessions to address physical and psychological ailments.',
    link: '#services',
    linkText: 'Explore Sessions',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 3c0 0-4 4-4 8s4 8 4 8 4-4 4-8-4-8-4-8z"/>
        <path d="M3 12h18"/>
        <circle cx="12" cy="12" r="2"/>
      </svg>
    ),
    color: '#5b6bbf',
    title: 'Meditations',
    description: 'Guided Twin Hearts Meditation for peace, illumination, and planetary blessing.',
    link: '#services',
    linkText: 'Join Group',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18"/>
        <path d="M9 21V9"/>
      </svg>
    ),
    color: '#5b6bbf',
    title: 'Courses',
    description: 'Learn the science and art of Pranic Healing through structured certification workshops.',
    link: '#courses',
    linkText: 'View Schedule',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    color: '#c0392b',
    title: 'Free Camps',
    description: 'Community outreach healing camps offering complimentary basic energy treatments.',
    link: '#contact',
    linkText: 'Find a Camp',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="offerings">
      <div className="offerings__inner">
        <div className="offerings__header">
          <h2 className="offerings__title">Our Offerings</h2>
          <p className="offerings__subtitle">
            Discover pathways to wellness through our structured programs designed to cleanse,
            energize, and balance your life force.
          </p>
        </div>

        <div className="offerings__grid">
          {offerings.map((item) => (
            <div className="offering-card" key={item.title}>
              <div className="offering-card__icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <h3 className="offering-card__title" style={{ color: item.color }}>
                {item.title}
              </h3>
              <p className="offering-card__desc">{item.description}</p>
              <a href={item.link} className="offering-card__link" style={{ color: item.color }}>
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
