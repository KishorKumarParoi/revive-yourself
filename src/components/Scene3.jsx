import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import SeaHouse from './SeaHouse'

const Scene3 = () => {
    return (
        <div className='w-full h-screen'>
            <Canvas
                gl={{
                    antialias: true,
                    alpha: true,
                    powerPreference: 'high-performance'
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={<CanvasLoader />}>

                    {/* Camera positioned to see the sea house */}
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 100, 400]}  // Positioned to see house
                        fov={90}
                        near={0.1}
                        far={10000}
                    />

                    {/* Add OrbitControls for interaction */}
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={2}
                        enableZoom={true}
                        enablePan={true}
                        enableDamping={true}
                        dampingFactor={0.05}
                        minDistance={30}
                        maxDistance={400}
                        target={[0, 8, 0]}
                    />

                    {/* Sea House Model */}
                    <SeaHouse
                        scale={1.5}              // Larger scale
                        position={[0, 0, 100]}     // Center position
                        rotation={[0, Math.PI * 0.25, 0]}  // 45 degree rotation
                    />

                    {/* Premium Lighting Setup */}
                    <ambientLight intensity={0.8} />

                    <directionalLight
                        position={[20, 30, 20]}
                        intensity={1}
                        castShadow
                    />

                    <pointLight
                        position={[-20, 20, -20]}
                        intensity={0.8}
                        color="#00d4ff"
                        distance={300}
                    />

                    <pointLight
                        position={[20, 15, -20]}
                        intensity={0.6}
                        color="#ff006e"
                        distance={250}
                    />

                    {/* Background color */}
                    <color attach="background" args={['#010103']} />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Scene3