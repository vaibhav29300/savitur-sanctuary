import './PranicHealing.css'

export default function PranicHealing() {
  return (
    <section id="pranic-healing" className="pranic">
      <div className="pranic__inner">
        <div className="pranic__icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="9" opacity="0.2" fill="currentColor" stroke="none"/>
            <circle cx="12" cy="12" r="9"/>
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 3v3M12 18v3M3 12h3M18 12h3"/>
          </svg>
        </div>

        <h2 className="pranic__title">What is Pranic Healing?</h2>

        <div className="pranic__body">
          <p>
            Pranic Healing® is a highly evolved and tested system of energy medicine that
            utilises prana to balance, harmonise and transform the body's energy processes. In
            its existing form, Pranic Healing has been painstakingly, systematically,
            scientifically developed, revealed and taught globally by Master Choa Kok Sui.
          </p>
          <p>
            Pranic Healing® is a simple yet powerful and effective system of no-touch energy
            healing. It is based on the fundamental principles that the body is a self-repairing
            living entity, which is capable of healing itself.
          </p>
          <p>
            Prana, Ki or Chi is the life energy which keeps the body alive and healthy. This
            energy is subtle but pervasive. The natural condition of the body's energy is
            balanced. When the body's prana or ki is too much or too little, it becomes
            unhealthy — unable to function properly, and eventually presenting symptoms of
            illness. In Pranic Healing, physical ailments are treated through the subtle energy
            (invisible physical body) of the patient using prana, thereby assisting and
            accelerating the body's natural ability to heal itself.
          </p>
          <p>
            Pranic Healing® requires no drugs or physical contact with the subject. Physical
            contact is not required because the practitioner is working on the energy body, not
            directly on the physical body. It is the energy body or aura that absorbs life
            energy and distributes it throughout the physical body — to the muscles, organs, and
            more. This energy also affects our emotions, our ability to handle stress,
            relationships and even finances.
          </p>
          <p>
            We have major chakras (main energy centres) which control and energise our physical
            body and its different parts and organs. The reason Pranic Healing® works on the
            energy body is that physical illnesses first appear in the aura before manifesting
            as problems in the physical body. So by healing the problem on the energy body, one
            can heal the physical body.
          </p>
        </div>

        <div className="pranic__stats">
          <div className="pranic__stat">
            <span className="pranic__stat-num">30+</span>
            <span className="pranic__stat-label">Years of Research</span>
          </div>
          <div className="pranic__stat-divider" />
          <div className="pranic__stat">
            <span className="pranic__stat-num">100+</span>
            <span className="pranic__stat-label">Countries Worldwide</span>
          </div>
          <div className="pranic__stat-divider" />
          <div className="pranic__stat">
            <span className="pranic__stat-num">27</span>
            <span className="pranic__stat-label">Books by GMCKS</span>
          </div>
          <div className="pranic__stat-divider" />
          <div className="pranic__stat">
            <span className="pranic__stat-num">27</span>
            <span className="pranic__stat-label">Language Translations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
