import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import CanvasLoader from './CanvasLoader'
import { PerspectiveCamera, OrbitControls, Float } from '@react-three/drei'
import FloatingIceland from './FloatingIceland'

const Scene2 = () => {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('section:nth-of-type(5)')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToPreviousSection = () => {
        const previousSection = document.querySelector('section:nth-of-type(3)')
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

                    {/* Enhanced Camera */}
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 15, 50]}
                        fov={60}
                        near={0.1}
                        far={1000}
                    />

                    {/* Orbit Controls for Interaction */}
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={1.5}
                        enableZoom={true}
                        enablePan={true}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={30}
                        maxDistance={200}
                        target={[0, 5, 0]}
                        rotateSpeed={1}
                        zoomSpeed={1}
                        panSpeed={1}
                    />

                    {/* Model with Float Animation */}
                    <Float
                        speed={1}
                        rotationIntensity={0.3}
                        floatIntensity={0.4}
                    >
                        <FloatingIceland
                            scale={1.2}
                            position={[0, 0, 0]}
                            rotation={[0, Math.PI * 0.5, 0]}
                        />
                    </Float>

                    {/* Premium Lighting */}
                    <ambientLight intensity={0.8} />

                    <directionalLight
                        position={[15, 20, 15]}
                        intensity={1}
                        castShadow
                    />

                    <pointLight
                        position={[-15, 15, -15]}
                        intensity={0.8}
                        color="#00d4ff"
                        distance={300}
                    />

                    <pointLight
                        position={[15, 10, -20]}
                        intensity={0.6}
                        color="#ff006e"
                        distance={250}
                    />

                    {/* Background */}
                    <color attach="background" args={['#010103']} />

                </Suspense>
            </Canvas>

            {/* Navigation Buttons - Bottom Right */}
            <div className='absolute bottom-10 right-10 z-10 flex gap-3'>

                {/* Up Button - Cyan to Blue Gradient */}
                <button
                    onClick={scrollToPreviousSection}
                    className='relative group px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 overflow-hidden'
                    title='Go to Scene 1'
                >
                    {/* Gradient Background */}
                    <div className='absolute inset-0 bg-linear-to-r from-cyan-500 via-cyan-400 to-blue-500 opacity-20 group-hover:opacity-30 transition-opacity'></div>

                    {/* Border Gradient */}
                    <div className='absolute inset-0 border border-transparent bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-border rounded-lg opacity-50 group-hover:opacity-100 transition-opacity'></div>

                    {/* Content */}
                    <div className='relative z-10 flex items-center gap-2 text-cyan-300 group-hover:text-cyan-200 transition-colors'>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
                        </svg>
                        <span className='hidden sm:inline text-sm font-semibold'>Up</span>
                    </div>

                    {/* Glow Effect */}
                    <div className='absolute inset-0 bg-linear-to-r from-cyan-400 to-blue-400 rounded-lg opacity-0 group-hover:opacity-20 blur group-hover:blur-lg transition-all duration-300'></div>
                </button>

                {/* Down Button - Magenta to Purple Gradient */}
                <button
                    onClick={scrollToNextSection}
                    className='relative group px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 overflow-hidden'
                    title='Go to Scene 3'
                >
                    {/* Gradient Background */}
                    <div className='absolute inset-0 bg-linear-to-r from-fuchsia-500 via-fuchsia-400 to-purple-500 opacity-20 group-hover:opacity-30 transition-opacity'></div>

                    {/* Border Gradient */}
                    <div className='absolute inset-0 border border-transparent bg-linear-to-r from-fuchsia-400 to-purple-400 bg-clip-border rounded-lg opacity-50 group-hover:opacity-100 transition-opacity'></div>

                    {/* Content */}
                    <div className='relative z-10 flex items-center gap-2 text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors'>
                        <span className='hidden sm:inline text-sm font-semibold'>Down</span>
                        <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                        </svg>
                    </div>

                    {/* Glow Effect */}
                    <div className='absolute inset-0 bg-linear-to-r from-fuchsia-400 to-purple-400 rounded-lg opacity-0 group-hover:opacity-20 blur group-hover:blur-lg transition-all duration-300'></div>
                </button>

            </div>
        </div>
    )
}

export default Scene2