import './Founder.css'

const roles = [
  'The Founder', 'The Teacher', 'The Author',
  'The Healer', 'The Scientist', 'The Businessman', 'The Philanthropist',
]

export default function Founder() {
  return (
    <section id="founder" className="founder">
      <div className="founder__inner">
        <div className="founder__header">
          <p className="founder__label">— About the Founder</p>
          <h2 className="founder__title">Grand Master Choa Kok Sui</h2>
          <div className="founder__roles">
            {roles.map((role) => (
              <span key={role} className="founder__role-tag">{role}</span>
            ))}
          </div>
        </div>

        <div className="founder__layout">
          <div className="founder__image-col">
            <div className="founder__image-placeholder">
              <svg viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="30" r="18" fill="rgba(201,168,76,0.3)" stroke="#c9a84c" strokeWidth="1.5"/>
                <path d="M10 72c0-16.569 13.431-30 30-30s30 13.431 30 30" fill="rgba(201,168,76,0.15)" stroke="#c9a84c" strokeWidth="1.5"/>
              </svg>
              <span>GMCKS</span>
            </div>
            <div className="founder__dates">
              <div className="founder__date-item">
                <span className="founder__date-label">Born</span>
                <span className="founder__date-val">August 15, 1952<br/>Cebu City, Philippines</span>
              </div>
              <div className="founder__date-item">
                <span className="founder__date-label">Passed</span>
                <span className="founder__date-val">March 19, 2007</span>
              </div>
              <div className="founder__date-item">
                <span className="founder__date-label">Books</span>
                <span className="founder__date-val">27 published works</span>
              </div>
              <div className="founder__date-item">
                <span className="founder__date-label">Reach</span>
                <span className="founder__date-val">100+ countries</span>
              </div>
            </div>
          </div>

          <div className="founder__bio">
            <p>
              Grand Master Choa Kok Sui — known to tens of thousands of Pranic Healers and
              Arhatic Yoga practitioners worldwide as Master Choa, GMCKS or MCKS — is the
              president of the Institute for Inner Studies, Inc. and World Pranic Healing
              Foundation, Inc. He is also founder of Modern Pranic Healing® and Arhatic Yoga®.
            </p>
            <p>
              Grand Master Choa is a spiritual teacher and a true embodiment of his teachings.
              His rare depth of wisdom is a result of the alchemy of his experiences as an
              enlightened guru, chemical engineer, philanthropist, businessman and scientist.
              His more than 30 years of research and proclivity for experimentation on the wise
              use of subtle energy has made him a Master of Energies.
            </p>
            <p>
              Born to a wealthy Chinese family in Cebu City, Philippines, his focus shifted
              early from business to his spiritual mission. As a young boy he read voraciously,
              studying the lives of spiritual beings, and considered himself a walking
              encyclopaedia on esoteric knowledge and healing. Through his spiritual mentors —
              Mang Dabon, Mang Nenet, and Mang Mike — he was able to contact his Sat Guru,
              Mahaguruji Mei Ling, who gently guided and prepared him to fulfil his dharma.
            </p>
            <p>
              As a scientist, Grand Master Choa spent over 30 years researching, experimenting
              and validating the specific techniques introduced in Pranic Healing books,
              workshops and seminars that have now gained worldwide popularity in over 100
              countries. Through his revolutionary system, he demystified the energy healing art
              into a scientific, systematic and pragmatic application relevant to this day and age.
            </p>
            <p>
              As an author, Grand Master Choa wrote 27 books on Pranic Healing and spirituality.
              <em> Miracles Through Pranic Healing</em>, first published in 1984, has been
              translated into 27 languages. To facilitate the global dissemination of Pranic
              Healing, he founded the Institute for Inner Studies Inc. in 1988 and the World
              Pranic Healing Foundation in 1990 to help spread the healing science in developing
              countries.
            </p>
            <p>
              Grand Master Choa also developed the Arhatic Yoga® system — synthesising the
              spiritual paths of love, intelligence and will through advanced breathing
              techniques, meditations, character building and inner purifications — to accelerate
              the evolutionary development of the soul and enable each person to be of greater
              service to mankind and the planet Earth.
            </p>
            <p>
              Today, his teachings circle the globe in the United States, Central and South
              America, India, Western and Eastern Europe, Asia, Africa, the Middle East, Canada,
              Australia and beyond — touching lives and forming Pranic Healing centres,
              foundations and institutes with thousands of teachers and tens of thousands of
              practitioners.
            </p>

            <div className="founder__last-words">
              <h4>His Last Messages to His Students</h4>
              <ul>
                <li>Practice Diligently.</li>
                <li>Purify yourself.</li>
                <li>Spread the Teachings.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
