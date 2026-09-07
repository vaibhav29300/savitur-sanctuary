import './Offerings.css'

const offerings = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.2" fill="currentColor" stroke="none"/>
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4z"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
    color: '#c9a84c',
    title: 'Healings',
    description: 'Personalised energy healing sessions to address physical, emotional, and psychological ailments using Pranic Healing techniques.',
    link: '/contact',
    linkText: 'Book a Session',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" opacity="0.2" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="9" r="2.5"/>
        <path d="M12 2v2M12 14v2M5.5 5.5l1.5 1.5M15 8.5l1.5-1.5M3 12h2M19 12h2"/>
      </svg>
    ),
    color: '#5b6bbf',
    title: 'Meditations',
    description: 'Guided Twin Hearts Meditation sessions for peace, illumination, and planetary blessing — open to all levels.',
    link: '/contact',
    linkText: 'Join a Session',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" opacity="0.15" fill="currentColor" stroke="none"/>
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    color: '#5b6bbf',
    title: 'Courses',
    description: 'Globally recognised Pranic Healing certification workshops — from Basic Pranic Healing to Advanced and Psychotherapy levels.',
    link: '/contact',
    linkText: 'View Schedule',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402C1 3.335 4.068 1 7.5 1c1.977 0 3.883.816 5.5 2.25C14.617 1.816 16.523 1 18.5 1 21.932 1 25 3.335 25 7.191c0 4.105-5.37 8.863-11 14.402z" opacity="0" stroke="none"/>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" opacity="0.2" fill="currentColor" stroke="none"/>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    color: '#c0392b',
    title: 'Free Camps',
    description: 'Community outreach healing camps offering complimentary basic Pranic Healing treatments — open to everyone.',
    link: '/contact',
    linkText: 'Find a Camp',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    color: '#2a7a5e',
    title: 'Nurturing Sessions',
    description: 'Supportive group or individual sessions focused on sustained healing, personal growth, and spiritual development.',
    link: '/contact',
    linkText: 'Learn More',
  },
]

export default function Offerings() {
  return (
    <section id="offerings" className="offerings">
      <div className="offerings__inner">
        <div className="offerings__header">
          <h2 className="offerings__title">Our Offerings</h2>
          <p className="offerings__subtitle">
            Discover pathways to wellness through our structured programmes designed to cleanse,
            energise, and balance your life force.
          </p>
        </div>

        <div className="offerings__grid offerings__grid--5">
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
