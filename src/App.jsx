import { useRef } from 'react'
import Hero from './components/Hero'
import Scene from './components/Scene'
import Scene2 from './components/Scene2'
import Scene3 from './components/Scene3'
import Scene4 from './components/Scene4'
import Hacker from './components/Hacker'
import Other from './components/Other'

const App = () => {
  const aboutRef = useRef(null)
  const hackerRef = useRef(null)

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <Hero aboutRef={aboutRef} />
      </section>

      <section
        ref={hackerRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        <Hacker />
      </section>

      <section className='min-h-screen relative flex justify-center items-center '>
        Kumar
      </section>

      {/* <Other /> */}

    </main>
  )
}

export default App