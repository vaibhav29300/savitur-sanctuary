import { Link } from 'react-router-dom'
import './Services.css'

const services = [
  {
    id: 'courses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    color: '#5b6bbf',
    title: 'Pranic Healing Courses',
    tagline: 'Basic Pranic Healing through Achieving Oneness with the Higher Soul',
    items: [
      { name: 'Basic Pranic Healing', note: 'Foundation course — no prerequisites' },
      { name: 'Advanced Pranic Healing', note: 'Colour prana & accelerated healing techniques' },
      { name: 'Pranic Psychotherapy', note: 'Healing emotional & psychological conditions' },
      { name: 'Achieving Oneness with the Higher Soul (AOHS)', note: 'Meditation for soul realisation & spiritual growth' },
    ],
    cta: 'View All Courses',
    ctaLink: '/courses',
  },
  {
    id: 'healings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" opacity="0.15" fill="currentColor" stroke="none"/>
        <circle cx="12" cy="12" r="10"/>
        <circle cx="12" cy="12" r="4"/>
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
      </svg>
    ),
    color: '#c9a84c',
    title: 'Healing Sessions',
    tagline: 'No-touch energy healing for the full spectrum of life challenges',
    items: [
      { name: 'Physical Healing', note: 'Headaches, back pain, infections, and chronic physical conditions' },
      { name: 'Psychological Healing', note: 'Stress, anxiety, depression, phobias, trauma, and addictions' },
      { name: 'Financial Healing', note: 'Clearing energy blockages that affect abundance and prosperity' },
      { name: 'Relationship Healing', note: 'Healing cords, karmic ties, and interpersonal conflict' },
    ],
    cta: 'Book a Healing',
    interest: 'Healing Session — Physical',
  },
  {
    id: 'fengshui',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="15" rx="2" opacity="0.15" fill="currentColor" stroke="none"/>
        <rect x="2" y="7" width="20" height="15" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    color: '#2a7a5e',
    title: 'Feng Shui Solutions',
    tagline: 'Energetic harmonisation of homes and offices',
    items: [
      {
        name: 'Home Feng Shui',
        note: 'Clearing stagnant energy and enhancing positive flows in your home for health, harmony, and prosperity.',
      },
      {
        name: 'Office & Business Feng Shui',
        note: 'Optimising the energy of commercial spaces for productivity, growth, and financial abundance.',
      },
    ],
    cta: 'Request Consultation',
    interest: 'Feng Shui Consultation (Home / Office)',
  },
  {
    id: 'property',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" opacity="0.15" fill="currentColor" stroke="none"/>
        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    color: '#c0392b',
    title: 'Healings for Disputed Properties',
    tagline: 'Energetic clearing to help resolve property-related disputes and legal conflicts',
    items: [
      {
        name: 'Property Dispute Healing',
        note: 'Clearing negative thought energy, cords, and emotional imprints connected to disputed land or property.',
      },
      {
        name: 'Legal Matter Energy Clearing',
        note: 'Addressing the energetic roots of ongoing legal and financial property conflicts using Pranic Healing principles.',
      },
    ],
    cta: 'Book a Consultation',
    interest: 'Healings for Disputed Properties',
  },
  {
    id: 'meditation',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z" opacity="0.15" fill="currentColor" stroke="none"/>
        <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    color: '#7b5ea7',
    title: 'Meditation Sessions',
    tagline: 'Guided group meditations for peace, blessings, and spiritual growth',
    items: [
      {
        name: 'Twin Hearts Meditation (THM)',
        note: 'A powerful meditation for peace, illumination, and planetary healing. Open to all — no prerequisites.',
      },
      {
        name: 'Arhatic Yoga Meditations',
        note: 'Advanced meditations for Arhatic Yoga practitioners to accelerate spiritual development.',
      },
    ],
    cta: 'Join a Meditation',
    interest: 'Twin Hearts Meditation (THM)',
  },
  {
    id: 'nurturing',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" opacity="0.15" fill="currentColor" stroke="none"/>
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    color: '#c9a84c',
    title: 'Nurturing Sessions',
    tagline: 'Ongoing support for sustained healing and spiritual growth',
    items: [
      {
        name: 'Individual Nurturing',
        note: 'Personalised one-on-one sessions providing ongoing healing, guidance, and support for your growth.',
      },
      {
        name: 'Group Nurturing',
        note: 'Community sessions combining healing, sharing, and collective energy work in a supportive environment.',
      },
    ],
    cta: 'Enquire About Nurturing',
    interest: 'Nurturing Session',
  },
]

export default function Services() {
  return (
    <div className="services-page">
      <div className="services-hero">
        <div className="services-hero__inner">
          <p className="services-hero__label">— Our Services</p>
          <h1 className="services-hero__title">What We Offer at Savitur</h1>
          <p className="services-hero__sub">
            A complete range of Pranic Healing services for your physical, emotional, mental,
            and spiritual wellbeing — all under one roof in Kannamangala, Bengaluru.
          </p>
          <p className="services-hero__sub">
            Our Nurturing Sessions are dedicated follow-up gatherings for students who have
            completed our Pranic Healing courses, designed to hand-hold and guide you on your
            continued journey. Through regular practice, doubt-clearing, and shared experiences
            in a warm, supportive environment, we help you strengthen your techniques, deepen
            your understanding, and confidently apply the teachings in everyday life.
          </p>
        </div>
      </div>

      <div className="services-grid-wrap">
        <div className="services-grid">
          {services.map((svc) => (
            <div className="service-card" key={svc.id} id={svc.id}>
              <div className="service-card__top">
                <div className="service-card__icon" style={{ color: svc.color, background: `${svc.color}15` }}>
                  {svc.icon}
                </div>
                <div>
                  <h2 className="service-card__title" style={{ color: svc.color }}>{svc.title}</h2>
                  <p className="service-card__tagline">{svc.tagline}</p>
                </div>
              </div>

              <ul className="service-card__items">
                {svc.items.map((item) => (
                  <li key={item.name}>
                    <div className="service-card__item-name">
                      <span className="service-card__dot" style={{ background: svc.color }} />
                      {item.name}
                    </div>
                    {item.note && (
                      <p className="service-card__item-note">{item.note}</p>
                    )}
                  </li>
                ))}
              </ul>

              <Link
                to={svc.interest
                  ? `/contact?interest=${encodeURIComponent(svc.interest)}`
                  : svc.ctaLink}
                className="service-card__cta"
                style={{ color: svc.color, borderColor: `${svc.color}40` }}
              >
                {svc.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
