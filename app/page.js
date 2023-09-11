import HeroSection from './component/HeroSection'
import Navbar from './component/Navbar'
import AboutSection from './component/AboutSection'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  )
}
