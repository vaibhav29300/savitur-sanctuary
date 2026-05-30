import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Offerings from './components/Offerings'
import PranicHealing from './components/PranicHealing'
import Founder from './components/Founder'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Offerings />
        <PranicHealing />
        <Founder />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
