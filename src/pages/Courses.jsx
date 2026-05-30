import { Link } from 'react-router-dom'
import './Courses.css'

const courses = [
  {
    id: 'basic',
    level: 'Level 1',
    title: 'Basic Pranic Healing',
    subtitle: 'The Foundation',
    duration: '2 Days',
    prerequisite: 'None',
    color: '#4a7c59',
    description:
      'The entry point to the world of energy healing. You will learn to feel, scan, cleanse, and energise the energy body (aura) using your hands. This course covers the fundamental principles of Pranic Healing — the bioplasmic body, the major and minor chakras, and the step-by-step protocol to address common ailments.',
    whatYouLearn: [
      'Feel and scan the human aura and chakras',
      'Cleanse diseased energy from the aura',
      'Energise depleted areas using prana from the surroundings',
      'Treat over 40 common ailments including headaches, fever, coughs, and respiratory conditions',
      'Perform self-healing and distance healing',
    ],
  },
  {
    id: 'advanced',
    level: 'Level 2',
    title: 'Advanced Pranic Healing',
    subtitle: 'Colour Prana & Accelerated Healing',
    duration: '2 Days',
    prerequisite: 'Basic Pranic Healing',
    color: '#5b6bbf',
    description:
      'In this course you learn to use colour prana — significantly more potent than white prana — to produce rapid and dramatic healing results. Advanced techniques allow you to treat serious and chronic ailments that would ordinarily require many sessions at the basic level.',
    whatYouLearn: [
      'Utilise the properties of colour prana for different conditions',
      'Apply advanced scanning and energising techniques',
      'Treat serious ailments: cancer, diabetes, heart conditions',
      'Use instructed and uninstructed sub-prana',
      'Perform rapid healing using combinations of colour prana',
    ],
  },
  {
    id: 'psychotherapy',
    level: 'Level 3',
    title: 'Pranic Psychotherapy',
    subtitle: 'Healing the Mind & Emotions',
    duration: '2 Days',
    prerequisite: 'Advanced Pranic Healing',
    color: '#7b5ea7',
    description:
      'Emotional and psychological disorders are caused by negative thoughts and traumatic emotions lodged in the aura and chakras. This course teaches you to safely and effectively extract these from the affected energy centres, addressing phobias, traumas, addictions, stress, anxiety, depression, and more.',
    whatYouLearn: [
      'Safely extract negative thoughts and emotional imprints',
      'Treat phobias, obsessive-compulsive behaviour, and trauma',
      'Address addictions to smoking, alcohol, and drugs',
      'Heal stress, anxiety, depression, and grief',
      'Apply specialised techniques for mental disorders',
    ],
  },
  {
    id: 'aohs',
    level: 'Level 4',
    title: 'Achieving Oneness with the Higher Soul',
    subtitle: 'Meditation for Soul Realisation',
    duration: '2 Days',
    prerequisite: 'Basic Pranic Healing',
    color: '#c9a84c',
    description:
      'One of the most profoundly transformative workshops, AOHS reveals the nature of your soul and its relationship with your incarnated personality. Through specific meditations and techniques you learn to accelerate the union of the lower self with the Higher Soul, facilitating rapid spiritual growth and inner illumination.',
    whatYouLearn: [
      'Understand the structure of the soul and incarnated personality',
      'Practise the meditation on the soul and higher self',
      'Accelerate the downward flow of divine energy',
      'Experience inner stillness and expanded awareness',
      'Activate the spiritual cord and inner divine spark',
    ],
  },
  {
    id: 'arhatic',
    level: 'Advanced',
    title: 'Arhatic Yoga',
    subtitle: 'The Synthesis of Yoga Practices',
    duration: 'Preparatory (2 Days) + Ongoing',
    prerequisite: 'Basic Pranic Healing + Character Building',
    color: '#2a2d5e',
    description:
      'Arhatic Yoga is the jewel in the crown of Grand Master Choa Kok Sui\'s teachings. It synthesises the spiritual paths of love (Bhakti), intelligence (Jnana), will (Raja), and service (Karma) into a complete system designed to rapidly and safely accelerate the spiritual evolution of the practitioner.',
    whatYouLearn: [
      'Advanced breathing techniques to purify the energy body',
      'Specific meditations to activate and develop the chakras',
      'Character-building practices to strengthen virtues',
      'Inner purification techniques to dissolve negative karma',
      'Techniques to strengthen the spiritual will and divine love',
    ],
  },
  {
    id: 'crystal',
    level: 'Specialty',
    title: 'Pranic Crystal Healing',
    subtitle: 'Amplifying Healing with Crystals',
    duration: '2 Days',
    prerequisite: 'Advanced Pranic Healing',
    color: '#c0392b',
    description:
      'Crystals and gemstones are powerful energy tools that can dramatically amplify healing, enhance meditation, and bring positive change when used correctly. This course teaches you the science behind crystals — how to choose, cleanse, activate, and use them for healing and other applications.',
    whatYouLearn: [
      'Understand the energetic properties of different crystals',
      'Cleanse, activate, and consecrate crystals properly',
      'Use crystals as healing tools and power amplifiers',
      'Create protective shields and positive energy fields',
      'Avoid the common harmful effects of improper crystal use',
    ],
  },
  {
    id: 'kriyashakti',
    level: 'Specialty',
    title: 'Kriyashakti',
    subtitle: 'The Art of Materialisation & Financial Healing',
    duration: '2 Days',
    prerequisite: 'Basic Pranic Healing',
    color: '#c9a84c',
    description:
      'Kriyashakti is the science of using thought power and subtle energies to materialise goals in the physical world. This course shows you how to use the power of the mind, directed intention, and energy techniques to manifest prosperity, success, and positive outcomes in work, business, and personal life.',
    whatYouLearn: [
      'Understand how thoughts create physical reality',
      'Use seed thoughts and thoughtforms for manifestation',
      'Apply techniques to attract prosperity and abundance',
      'Perform financial healing for yourself and others',
      'Clear negative financial karma and energy blockages',
    ],
  },
]

export default function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero__inner">
          <p className="courses-hero__label">— Pranic Healing Courses</p>
          <h1 className="courses-hero__title">Learn to Heal with Prana</h1>
          <p className="courses-hero__sub">
            Globally recognised certification courses developed by Grand Master Choa Kok Sui,
            now available at Savitur, Bengaluru. All courses are taught by certified Pranic
            Healing instructors.
          </p>
          <Link to="/#contact" className="courses-hero__cta">Enquire About Courses →</Link>
        </div>
      </div>

      <div className="courses-list">
        <div className="courses-list__inner">
          {courses.map((course, index) => (
            <div
              className={`course-card ${index % 2 === 1 ? 'course-card--reverse' : ''}`}
              key={course.id}
              id={course.id}
            >
              <div className="course-card__image" style={{ background: `linear-gradient(135deg, ${course.color}22 0%, ${course.color}44 100%)`, borderColor: `${course.color}33` }}>
                <div className="course-card__level-badge" style={{ background: course.color }}>
                  {course.level}
                </div>
                <div className="course-card__icon" style={{ color: course.color }}>
                  <svg viewBox="0 0 64 64" fill="none">
                    <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
                    <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.6"/>
                    <circle cx="32" cy="32" r="5" fill="currentColor"/>
                    <line x1="32" y1="4" x2="32" y2="16" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="32" y1="48" x2="32" y2="60" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="4" y1="32" x2="16" y2="32" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="48" y1="32" x2="60" y2="32" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div className="course-card__meta">
                  <div className="course-card__meta-item">
                    <span>Duration</span>
                    <strong>{course.duration}</strong>
                  </div>
                  <div className="course-card__meta-item">
                    <span>Prerequisite</span>
                    <strong>{course.prerequisite}</strong>
                  </div>
                </div>
              </div>

              <div className="course-card__content">
                <p className="course-card__subtitle">{course.subtitle}</p>
                <h2 className="course-card__title" style={{ color: course.color }}>
                  {course.title}
                </h2>
                <p className="course-card__desc">{course.description}</p>
                <div className="course-card__learn">
                  <h4>What You Will Learn</h4>
                  <ul>
                    {course.whatYouLearn.map((item) => (
                      <li key={item}>
                        <span className="course-card__check" style={{ color: course.color }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link to="/#contact" className="course-card__cta" style={{ background: course.color }}>
                  Register Interest
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
