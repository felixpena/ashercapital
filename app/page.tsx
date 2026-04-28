import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Principles from '@/components/Principles'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav lang="en" />
      <main>
        <Hero lang="en" />
        <About lang="en" />
        <Services lang="en" />
        <Principles lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  )
}
