import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'
import { BackToTop } from '@/components/BackToTop'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Portfolio />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
