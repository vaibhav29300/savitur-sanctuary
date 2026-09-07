import { Link } from 'react-router-dom'
import './Courses.css'

const courses = [
  {
    id: 'basic',
    interest: 'Basic Pranic Healing',
    level: 'Level 1',
    title: 'Basic Pranic Healing',
    subtitle: 'The Foundation',
    duration: '2 Days',
    prerequisite: 'None',
    color: '#4a7c59',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80&fit=crop',
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
    interest: 'Advanced Pranic Healing',
    level: 'Level 2',
    title: 'Advanced Pranic Healing',
    subtitle: 'Colour Prana & Accelerated Healing',
    duration: '2 Days',
    prerequisite: 'Basic Pranic Healing',
    color: '#5b6bbf',
    image: '/courses/advanced.svg',
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
    interest: 'Pranic Psychotherapy',
    level: 'Level 3',
    title: 'Pranic Psychotherapy',
    subtitle: 'Healing the Mind & Emotions',
    duration: '2 Days',
    prerequisite: 'Advanced Pranic Healing',
    color: '#7b5ea7',
    image: '/courses/psychotherapy.svg',
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
    interest: 'Achieving Oneness with the Higher Soul (AOHS)',
    level: 'Level 4',
    title: 'Achieving Oneness with the Higher Soul',
    subtitle: 'Meditation for Soul Realisation',
    duration: '2 Days',
    prerequisite: 'Basic Pranic Healing',
    color: '#c9a84c',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80&fit=crop',
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
    interest: 'Arhatic Yoga',
    level: 'Advanced',
    title: 'Arhatic Yoga',
    subtitle: 'The Synthesis of Yoga Practices',
    duration: 'Preparatory (2 Days) + Ongoing',
    prerequisite: 'Basic Pranic Healing + Character Building',
    color: '#2a2d5e',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80&fit=crop',
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
]

export default function Courses() {
  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero__inner">
          <p className="courses-hero__label">— Pranic Healing Courses</p>
          <h1 className="courses-hero__title">Learn to Heal with Prana</h1>
          <p className="courses-hero__sub">
            Globally recognised workshops developed by Grand Master Choa Kok Sui,
            now available at Savitur, Bengaluru. All courses are taught by licensed Pranic
            Healing instructors.
          </p>
          <Link to="/contact" className="courses-hero__cta">Enquire About Courses →</Link>
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
              <div className="course-card__image" style={{ borderColor: `${course.color}44` }}>
                {/* Background photo */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="course-card__photo"
                />
                {/* Colour-tinted overlay */}
                <div
                  className="course-card__photo-overlay"
                  style={{ background: `linear-gradient(170deg, ${course.color}55 0%, ${course.color}bb 100%)` }}
                />

                <div className="course-card__level-badge" style={{ background: course.color }}>
                  {course.level}
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
                <Link
                  to={`/contact?interest=${encodeURIComponent(course.interest)}`}
                  className="course-card__cta"
                  style={{ background: course.color }}
                >
                  Register Interest
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="courses-more">
        <div className="courses-more__inner">
          <p className="courses-more__label">— Beyond Savitur</p>
          <h2 className="courses-more__title">Looking for Other Courses?</h2>
          <p className="courses-more__text">
            Explore the full range of Pranic Healing &amp; Arhatic Yoga workshops offered
            worldwide through the World Pranic Healing Foundation.
          </p>
          <a
            href="https://www.worldpranichealing.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="courses-more__cta"
          >
            Visit World Pranic Healing Foundation →
          </a>
        </div>
      </div>
    </div>
  )
}
