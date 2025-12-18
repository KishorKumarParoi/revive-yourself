import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import CanvasLoader from './CanvasLoader'
import { PerspectiveCamera, OrbitControls, Float } from '@react-three/drei'
import FlyingBird from './FlyingBird'

// Flying Bird Wrapper Component
function FlyingBirdWithMotion(props) {
    const birdRef = useRef(null)
    const timeRef = useRef(0)

    useFrame((state) => {
        if (birdRef.current) {
            timeRef.current += 0.01

            // Circular Flying Pattern
            const radius = 8
            const speed = 0.5

            birdRef.current.position.x = Math.cos(timeRef.current * speed) * radius
            birdRef.current.position.z = Math.sin(timeRef.current * speed) * radius
            birdRef.current.position.y = 5 + Math.sin(timeRef.current * 2) * 2

            // Rotate bird to face flight direction
            birdRef.current.rotation.y = timeRef.current * speed
        }
    })

    return (
        <group ref={birdRef} {...props}>
            <FlyingBird scale={1.2} />
        </group>
    )
}

const Scene4 = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('section:nth-of-type(9)')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToPreviousSection = () => {
        const previousSection = document.querySelector('section:nth-of-type(7)')
        if (previousSection) {
            previousSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className='w-full h-full absolute inset-0'>
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={<CanvasLoader />}>

                    {/* Camera Setup */}
                    <PerspectiveCamera
                        makeDefault
                        position={[0, -80, 800]}
                        fov={60}
                        near={0.1}
                        far={1000}
                    />

                    {/* Orbit Controls */}
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={1}
                        enableZoom={true}
                        enablePan={true}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={15}
                        maxDistance={150}
                        target={[0, 5, 0]}
                        rotateSpeed={1}
                        zoomSpeed={1}
                        panSpeed={1}
                    />

                    {/* Flying Bird with Motion Animation */}
                    <FlyingBirdWithMotion />

                    {/* Premium Lighting Setup */}
                    <ambientLight intensity={0.8} />

                    {/* Main Directional Light */}
                    <directionalLight
                        position={[20, 20, 20]}
                        intensity={1}
                        castShadow
                    />

                    {/* Warm Fill Light */}
                    <pointLight
                        position={[-20, 15, -20]}
                        intensity={0.8}
                        color="#ff9500"
                        distance={300}
                    />

                    {/* Cool Accent Light */}
                    <pointLight
                        position={[20, 10, -20]}
                        intensity={0.6}
                        color="#00d4ff"
                        distance={250}
                    />

                    {/* Purple Rim Light */}
                    <pointLight
                        position={[0, 15, -25]}
                        intensity={0.5}
                        color="#a855f7"
                        distance={300}
                    />

                    {/* Background */}
                    <color attach="background" args={['#0a0a0f']} />

                </Suspense>
            </Canvas>

            {/* Navigation Buttons - Bottom Right */}
            <div className='absolute bottom-10 right-10 z-10 flex gap-4'>

                {/* Up Button - Orange to Red Gradient */}
                <button
                    onClick={scrollToPreviousSection}
                    className='group relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-500 flex items-center gap-2 bg-linear-to-br from-orange-500 via-orange-400 to-red-600 text-white shadow-2xl shadow-orange-500/50 hover:shadow-orange-500/100 hover:scale-110 active:scale-95 overflow-hidden'
                    title='Go to Previous Scene'
                >
                    <div className='absolute inset-0 bg-linear-to-r from-orange-400 via-orange-300 to-red-500 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg -z-10'></div>
                    <div className='absolute -inset-1 bg-linear-to-r from-orange-300 via-orange-200 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm -z-10'></div>

                    <div className='relative z-20 flex items-center gap-2'>
                        <svg className='w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300 text-white group-hover:text-orange-100' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 15l7-7 7 7' />
                        </svg>
                        <span className='hidden sm:inline text-sm font-bold group-hover:tracking-wider transition-all duration-300 uppercase text-white group-hover:text-orange-100'>Up</span>
                    </div>

                    <div className='absolute inset-0 rounded-full border-2 border-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </button>

                {/* Down Button - Purple to Pink Gradient */}
                <button
                    onClick={scrollToNextSection}
                    className='group relative px-6 py-3 rounded-full font-bold text-sm transition-all duration-500 flex items-center gap-2 bg-linear-to-br from-purple-600 via-pink-500 to-rose-600 text-white shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/100 hover:scale-110 active:scale-95 overflow-hidden'
                    title='Go to Next Scene'
                >
                    <div className='absolute inset-0 bg-linear-to-r from-purple-500 via-pink-400 to-rose-500 opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-lg -z-10'></div>
                    <div className='absolute -inset-1 bg-linear-to-r from-purple-400 via-pink-300 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-sm -z-10'></div>

                    <div className='relative z-20 flex items-center gap-2'>
                        <span className='hidden sm:inline text-sm font-bold group-hover:tracking-wider transition-all duration-300 uppercase text-white group-hover:text-purple-100'>Down</span>
                        <svg className='w-5 h-5 group-hover:translate-y-1 transition-transform duration-300 text-white group-hover:text-purple-100' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M19 9l-7 7-7-7' />
                        </svg>
                    </div>

                    <div className='absolute inset-0 rounded-full border-2 border-purple-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10'></div>
                </button>

            </div>

            {/* Scene Label - Top Right */}
            <div className='absolute top-10 right-10 z-10 px-4 py-2 rounded-full bg-linear-to-r from-orange-500/10 to-purple-500/10 border border-orange-400/30 backdrop-blur-sm'>
                <p className='text-sm font-semibold bg-linear-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent'>🐦 Phoenix Bird</p>
            </div>

            {/* Animated Background Effect */}
            <div className='absolute inset-0 pointer-events-none overflow-hidden'>
                <div className='absolute top-0 left-1/4 w-72 h-72 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse'></div>
                <div className='absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse'></div>
            </div>

        </div>
    )
}

export default Scene4