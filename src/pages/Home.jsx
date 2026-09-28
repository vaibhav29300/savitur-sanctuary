import Hero from '../components/Hero'
import CentreVideo from '../components/CentreVideo'
import About from '../components/About'
import PhotoGallery from '../components/PhotoGallery'
import PranicHealing from '../components/PranicHealing'
import MTHAnnouncements from '../components/MTHAnnouncements'
import Founder from '../components/Founder'

export default function Home() {
  return (
    <>
      <Hero />
      <MTHAnnouncements />
      <About />
      <CentreVideo />
      <PhotoGallery />
      <PranicHealing />
      <Founder />
    </>
  )
}
