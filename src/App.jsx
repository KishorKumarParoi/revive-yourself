import { useRef } from 'react'
import Hero from './components/Hero'
import Scene from './components/Scene'

const App = () => {
  const sceneRef = useRef(null)
  const aboutRef = useRef(null)

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen">
        <Hero aboutRef={aboutRef} />
      </section>

      {/* 3D Scene Section */}
      <section
        ref={sceneRef}
        className="relative w-full h-screen flex items-center justify-center"
      >
        <Scene />
      </section>

      {/* <section className='min-h-screen relative'></section> */}

      {/* About / Other Sections */}
      <section
        ref={aboutRef}
        className="relative w-full min-h-screen py-20 px-5"
      >
        <div className="max-w-4xl mx-auto text-white">
          <h2 className="text-5xl font-bold mb-8">About Section</h2>
          <p className="text-lg text-white-600 mb-4">
            Your content here...
          </p>
        </div>
      </section>
    </main>
  )
}

export default App