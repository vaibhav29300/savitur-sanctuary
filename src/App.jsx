import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'
import Home from './pages/Home'
import Courses from './pages/Courses'
import Services from './pages/Services'
import TestimonialsPage from './pages/TestimonialsPage'
import ContactPage from './pages/ContactPage'
import Whitefield from './pages/Whitefield'
import Admin from './pages/Admin'
import './App.css'

function ScrollToLocation() {
  const location = useLocation()

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.hash) {
        let targetId = location.hash.slice(1)

        try {
          targetId = decodeURIComponent(targetId)
        } catch {
          // Keep the original hash if it is not valid URI-encoded text.
        }

        const target = document.getElementById(targetId)
        if (target) {
          const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 72
          const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight
          window.scrollTo({ top: Math.max(0, targetTop), behavior: 'smooth' })
          return
        }
      }

      window.scrollTo({ top: 0, behavior: 'auto' })
    })

    return () => window.cancelAnimationFrame(frame)
  }, [location.pathname, location.hash, location.key])

  return null
}

function App() {
  const { pathname } = useLocation()
  const isAdmin = pathname.startsWith('/admin')

  return (
    <div className="app">
      <SEO />
      {!isAdmin && <Navbar />}
      <ScrollToLocation />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pranic-healing-whitefield" element={<Whitefield />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      {!isAdmin && <Footer />}
    </div>
  )
}

export default App
