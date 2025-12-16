import { useRef } from 'react'
import Hero from './components/Hero'
import Scene from './components/Scene'
import Scene2 from './components/Scene2'
import Scene3 from './components/Scene3'

const App = () => {
  const sceneRef = useRef(null)
  const aboutRef = useRef(null)
  const scene2Ref = useRef(null)
  const scene3Ref = useRef(null)

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

      <section
        ref={scene2Ref}
        className="relative w-full min-h-screen flex justify-center items-center">
        <Scene2 />
      </section>

      <section className='min-h-screen relative'>
        kkp
      </section>


      <section
        ref={scene3Ref}
        className="relative w-full min-h-screen flex justify-center items-center">
        <Scene3 />
      </section>
    </main>
  )
}

export default App