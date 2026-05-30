import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Welcome to Savitur Sanctuary</h1>
        <p className="hero__subtitle">Discover the Art of Pranic Healing and Energy Balance</p>
        <a href="#about" className="hero__btn">
          Start Your Journey <span>→</span>
        </a>
      </div>
    </section>
  )
}
