import './PranicHealing.css'

export default function PranicHealing() {
  return (
    <section id="services" className="pranic">
      <div className="pranic__inner">
        <div className="pranic__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2a3 3 0 0 0-3 3c0 1.5.8 2.8 2 3.5V12l-4 2.5V18h10v-3.5L13 12V8.5c1.2-.7 2-2 2-3.5a3 3 0 0 0-3-3z"/>
            <path d="M12 12c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" opacity="0.3" fill="currentColor" stroke="none"/>
          </svg>
        </div>

        <h2 className="pranic__title">What is Pranic Healing?</h2>

        <div className="pranic__body">
          <p>
            Pranic Healing is a highly evolved and tested system of energy medicine developed by
            Grand Master Choa Kok Sui that utilizes prana to balance, harmonize and transform the
            body's energy processes. Prana is a Sanskrit word that means life-force. This invisible
            bio-energy or vital energy keeps the body alive and maintains a state of good health.
          </p>
          <p>
            It is a simple yet powerful &amp; effective system of no-touch energy healing. It is
            based on the fundamental principles that the body is a self-repairing living entity
            that possesses the ability to heal itself and that the healing process is accelerated
            by increasing this life force that is readily available from the sun, air and ground to
            address physical &amp; emotional imbalances.
          </p>
        </div>

        <div className="pranic__stats">
          <div className="pranic__stat">
            <span className="pranic__stat-num">40+</span>
            <span className="pranic__stat-label">Years of Research</span>
          </div>
          <div className="pranic__stat-divider" />
          <div className="pranic__stat">
            <span className="pranic__stat-num">100+</span>
            <span className="pranic__stat-label">Countries Worldwide</span>
          </div>
          <div className="pranic__stat-divider" />
          <div className="pranic__stat">
            <span className="pranic__stat-num">2M+</span>
            <span className="pranic__stat-label">Lives Transformed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
