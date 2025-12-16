import { PerspectiveCamera, OrbitControls, Float } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef, useEffect, useState } from 'react'
import { Instances, Model } from './HackerRoomSpecialized.jsx'
import CanvasLoader from './CanvasLoader.jsx'
import { Scroll, SearchIcon } from 'lucide-react'

const Scene = () => {
    const canvasRef = useRef(null)
    const orbitControlsRef = useRef(null)
    const [scrollEnabled, setScrollEnabled] = useState(false)

    useEffect(() => {
        const handleWheel = (e) => {
            // Only prevent scroll if scrollEnabled is false AND cursor is over Canvas
            if (!scrollEnabled && canvasRef.current?.contains(e.target)) {
                e.preventDefault()

                // Zoom functionality using OrbitControls methods
                if (orbitControlsRef.current) {
                    const zoomSpeed = 0.1
                    const direction = e.deltaY > 0 ? 1 : -1

                    // Get current camera position and target
                    const camera = orbitControlsRef.current.object
                    const target = orbitControlsRef.current.target

                    // Calculate direction vector from target to camera
                    const dx = camera.position.x - target.x
                    const dy = camera.position.y - target.y
                    const dz = camera.position.z - target.z

                    // Calculate current distance
                    const currentDistance = Math.sqrt(dx * dx + dy * dy + dz * dz)

                    // Calculate new distance
                    const newDistance = currentDistance + direction * zoomSpeed * currentDistance

                    // Clamp between min and max distance
                    const minDistance = 80
                    const maxDistance = 400
                    const clampedDistance = Math.max(minDistance, Math.min(maxDistance, newDistance))

                    // Calculate zoom factor
                    const zoomFactor = clampedDistance / currentDistance

                    // Update camera position
                    camera.position.x = target.x + dx * zoomFactor
                    camera.position.y = target.y + dy * zoomFactor
                    camera.position.z = target.z + dz * zoomFactor

                    // Update controls
                    orbitControlsRef.current.update()
                }
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: false })
        return () => window.removeEventListener('wheel', handleWheel, { passive: false })
    }, [scrollEnabled])

    const toggleScrollZoom = () => {
        setScrollEnabled(!scrollEnabled)
    }

    const scrollToNextSection = () => {
        const nextSection = document.querySelector('section:nth-of-type(3)')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollToPreviousSection = () => {
        const previousSection = document.querySelector('section:nth-of-type(1)')
        if (previousSection) {
            previousSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div ref={canvasRef} className='w-full h-full relative'>
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={<CanvasLoader />}>

                    <PerspectiveCamera
                        makeDefault
                        position={[-100, 200, 250]}
                        fov={90}
                        near={0.1}
                        far={10000}
                    />

                    <OrbitControls
                        ref={orbitControlsRef}
                        autoRotate
                        autoRotateSpeed={2}
                        enableZoom={false}  // Disabled - we handle zoom manually
                        enablePan={true}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={80}
                        maxDistance={400}
                        target={[0, 20, 0]}
                        rotateSpeed={1}
                        zoomSpeed={0}
                        panSpeed={1}
                    />

                    <Float
                        speed={1.5}
                        rotationIntensity={0.5}
                        floatIntensity={0.5}
                    >
                        <Instances>
                            <Model scale={[2.5, 2.5, 2.5]} position={[0, -100, 0]} />
                        </Instances>
                    </Float>

                    {/* Lighting */}
                    <ambientLight intensity={0.7} />
                    <pointLight position={[150, 150, 150]} intensity={1.5} distance={500} decay={2} />
                    <pointLight position={[-150, 100, -150]} intensity={1} color="#00d4ff" distance={400} decay={2} />
                    <pointLight position={[0, 200, -200]} intensity={0.8} color="#ff006e" distance={400} decay={2} />
                    <pointLight position={[200, 80, 0]} intensity={0.6} color="#8338ec" distance={300} decay={2} />
                    <directionalLight position={[100, 200, 100]} intensity={0.8} castShadow />

                    <color attach="background" args={['#010103']} />

                </Suspense>
            </Canvas>

            {/* Control Panel */}
            <div className='absolute bottom-10 left-10 z-10 space-y-4'>

                {/* Help Text */}
                <div className='bg-black-300 bg-opacity-70 backdrop-blur-sm rounded-lg p-4 border border-white-700 border-opacity-30'>
                    <p className='text-cyan-400 font-semibold mb-3 text-sm'>3D Controls:</p>
                    <p className='text-gray-300 text-xs mb-2'>🖱️ <span className='text-white'>Left Drag</span> - Rotate</p>
                    <p className='text-gray-300 text-xs mb-2'>⌨️ <span className='text-white'>Middle Drag</span> - Pan</p>
                    <p className='text-gray-300 text-xs'>📜 <span className='text-white'>Scroll</span> - {scrollEnabled ? 'Page Navigation' : 'Zoom In/Out'}</p>
                </div>

                {/* Scroll Toggle Button */}
                <button
                    onClick={toggleScrollZoom}
                    className={`w-full px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border ${scrollEnabled
                        ? 'bg-green-500 bg-opacity-20 border-green-400 text-green-50 hover:bg-opacity-30'
                        : 'bg-blue-500 bg-opacity-20 border-blue-400 text-blue-50 hover:bg-opacity-30'
                        }`}
                >
                    {scrollEnabled ? (
                        <>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                            </svg>
                            Scroll: Page Navigation
                        </>
                    ) : (
                        <>
                            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm6 0a1 1 0 100-2 1 1 0 000 2z' clipRule='evenodd' />
                            </svg>
                            Scroll: Zoom 3D
                        </>
                    )}
                </button>
            </div>

            {/* Navigation Buttons */}
            <div className='absolute bottom-10 right-10 z-10 flex gap-3'>

                {/* Scroll Up Button */}
                <button
                    onClick={scrollToPreviousSection}
                    className='bg-cyan-500 bg-opacity-20 border border-cyan-400 text-cyan-50 hover:bg-opacity-30 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2'
                    title='Go to Hero Section'
                >
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 10l7-7m0 0l7 7m-7-7v18' />
                    </svg>
                    <span className='hidden sm:inline text-sm font-semibold'>Up</span>
                </button>

                {/* Scroll Down Button */}
                <button
                    onClick={scrollToNextSection}
                    className='bg-fuchsia-500 bg-opacity-20 border border-fuchsia-400 text-fuchsia-50 hover:bg-opacity-30 px-4 py-3 rounded-lg transition-all duration-300 flex items-center gap-2'
                    title='Go to About Section'
                >
                    <span className='hidden sm:inline text-sm font-semibold'>Down</span>
                    <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                    </svg>
                </button>
            </div>

            {/* Scroll Status Indicator */}
            {!scrollEnabled && (
                <div className='absolute top-10 right-10 z-10 bg-blue-500 bg-opacity-20 border border-blue-800 text-blue-50 px-4 py-2 rounded-lg text-sm font-semibold animate-pulse'>
                    <SearchIcon className='w-4 h-4 inline-block mr-1 mb-1' />
                    Zoom Mode Active
                </div>
            )}

            {scrollEnabled && (
                <div className='absolute top-10 right-10 z-10 bg-green-500 bg-opacity-20 border border-green-500 text-green-50 px-4 py-2 rounded-lg text-sm font-semibold animate-pulse'>
                    <Scroll className='w-4 h-4 inline-block mr-1 mb-1' />
                    Page Scrolling Active
                </div>
            )}
        </div>
    )
}

export default Scene