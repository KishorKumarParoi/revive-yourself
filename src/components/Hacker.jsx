import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'
import HackerRoom from './HackerRoom'
import { useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'

const Hacker = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 480px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(min-width: 769px) and (max-width: 1024px)' })

    // Responsive control values
    const getControlValues = () => {
        if (isSmall) {
            return {
                positionX: { value: 0, min: -20, max: 20, step: 0.5 },
                positionY: { value: -2, min: -20, max: 20, step: 0.5 },
                positionZ: { value: 0, min: -20, max: 20, step: 0.5 },
                scale: { value: 0.06, min: 0.05, max: 2, step: 0.05 },
                rotationX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.05 },
                rotationY: { value: Math.PI, min: -Math.PI * 2, max: Math.PI * 2, step: 0.05 },
                rotationZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.05 },
                cameraX: { value: 0, min: -15, max: 15, step: 1 },
                cameraY: { value: 3, min: 0, max: 15, step: 0.5 },
                cameraZ: { value: 21, min: 3, max: 25, step: 1 },
            }
        } else if (isMobile) {
            return {
                positionX: { value: 0, min: -30, max: 30, step: 0.25 },
                positionY: { value: -3, min: -30, max: 30, step: 0.25 },
                positionZ: { value: 0, min: -30, max: 30, step: 0.25 },
                scale: { value: 0.08, min: 0.05, max: 3, step: 0.05 },
                rotationX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.02 },
                rotationY: { value: Math.PI, min: -Math.PI * 2, max: Math.PI * 2, step: 0.02 },
                rotationZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.02 },
                cameraX: { value: 0, min: -20, max: 20, step: 0.5 },
                cameraY: { value: 4, min: 0, max: 20, step: 0.5 },
                cameraZ: { value: 20, min: 4, max: 35, step: 0.5 },
            }
        } else if (isTablet) {
            return {
                positionX: { value: 0, min: -40, max: 40, step: 0.1 },
                positionY: { value: -4, min: -40, max: 40, step: 0.1 },
                positionZ: { value: 0, min: -40, max: 40, step: 0.1 },
                scale: { value: 0.09, min: 0.05, max: 3.5, step: 0.05 },
                rotationX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                rotationY: { value: Math.PI, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                rotationZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                cameraX: { value: 0, min: -25, max: 25, step: 0.5 },
                cameraY: { value: 5, min: 0, max: 25, step: 0.5 },
                cameraZ: { value: 15, min: 5, max: 40, step: 0.5 },
            }
        } else {
            // Desktop
            return {
                positionX: { value: 0, min: -50, max: 50, step: 0.1 },
                positionY: { value: -4.5, min: -50, max: 50, step: 0.1 },
                positionZ: { value: 0, min: -50, max: 50, step: 0.1 },
                scale: { value: 0.1, min: 0.1, max: 5, step: 0.1 },
                rotationX: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                rotationY: { value: Math.PI, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                rotationZ: { value: 0, min: -Math.PI * 2, max: Math.PI * 2, step: 0.01 },
                cameraX: { value: 0, min: -30, max: 30, step: 0.5 },
                cameraY: { value: 5.5, min: 0, max: 30, step: 0.5 },
                cameraZ: { value: 13.5, min: 5, max: 50, step: 0.5 },
            }
        }
    }

    const controls = useControls('Hacker Room', getControlValues())

    // Get responsive camera settings
    const getCameraSettings = () => {
        if (isSmall) {
            return { minDistance: 3, maxDistance: 25, fov: 60 }
        } else if (isMobile) {
            return { minDistance: 4, maxDistance: 35, fov: 65 }
        } else if (isTablet) {
            return { minDistance: 5, maxDistance: 40, fov: 70 }
        } else {
            return { minDistance: 5, maxDistance: 50, fov: 75 }
        }
    }

    const cameraSettings = getCameraSettings()

    return (
        <div className='w-full h-full absolute inset-0 bg-black'>
            <Canvas
                className='w-full h-full'
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={<CanvasLoader />}>
                    {/* Camera Setup - Responsive */}
                    <PerspectiveCamera
                        makeDefault
                        position={[controls.cameraX, controls.cameraY, controls.cameraZ]}
                        fov={cameraSettings.fov}
                        near={0.1}
                        far={1000}
                    />

                    {/* Orbit Controls - Responsive */}
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={2.5}
                        enableZoom={true}
                        enablePan={true}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={cameraSettings.minDistance}
                        maxDistance={cameraSettings.maxDistance}
                        target={[0, 0, 0]}
                    />

                    {/* Hacker Room Model */}
                    <HackerRoom
                        position={[controls.positionX, controls.positionY, controls.positionZ]}
                        scale={[controls.scale, controls.scale, controls.scale]}
                        rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                    />

                    {/* Ambient Light */}
                    <ambientLight intensity={0.8} />

                    {/* Main Directional Light */}
                    <directionalLight
                        position={[15, 15, 15]}
                        intensity={1.2}
                        castShadow
                    />

                    {/* Cyan Accent Light */}
                    <pointLight
                        position={[-15, 10, 15]}
                        intensity={0.8}
                        color="#00d4ff"
                        distance={300}
                    />

                    {/* Magenta Fill Light */}
                    <pointLight
                        position={[15, 5, -15]}
                        intensity={0.6}
                        color="#ff006e"
                        distance={250}
                    />

                    {/* Background Color */}
                    <color attach="background" args={['#010103']} />

                </Suspense>
            </Canvas>
        </div>
    )
}

export default Hacker