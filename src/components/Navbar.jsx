import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const isHome = location.pathname === '/'

  return (
    <header className={`navbar ${scrolled || !isHome ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">PranaSanctuary</Link>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {navLinks.map(({ label, to }) => {
            const isHash = to.includes('#')
            if (isHash) {
              const [path, hash] = to.split('#')
              return (
                <Link
                  key={label}
                  to={to}
                  className="navbar__link"
                  onClick={() => {
                    setMenuOpen(false)
                    if (location.pathname === path || (path === '/' && location.pathname === '/')) {
                      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  {label}
                </Link>
              )
            }
            return (
              <NavLink
                key={label}
                to={to}
                end
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            )
          })}
          <Link to="/#contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>
            Book Session
          </Link>
        </nav>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
