import Layout from '../components/Layout.tsx'
import { usePageSetup } from '../hooks/usePageSetup.ts'
import About from '../sections/About.tsx'
import Contact from '../sections/Contact.tsx'
import Door from '../sections/Door.tsx'
import Hero from '../sections/Hero.tsx'
import Principle from '../sections/Principle.tsx'
import Work from '../sections/Work.tsx'
import { questionsReady } from '../content/questions.ts'

// Layer 1, the surface: scannable in 30 seconds, no gate.
// Layer 2, the door, sits after the work.
export default function Home() {
  usePageSetup('Rita Helwangi, frontend developer')
  return (
    <Layout>
      {/* The first screen fills the window on any size, with the quote on its bottom edge. */}
      <div className="flex min-h-[calc(100svh-76px)] flex-col">
        <Hero />
        <Principle />
      </div>
      <Work />
      <About />
      {/* The door appears once all my answers behind it are written.
          On my own computer (npm run dev) I always see it, to try it out. */}
      {(questionsReady || import.meta.env.DEV) && <Door />}
      <Contact />
    </Layout>
  )
}
