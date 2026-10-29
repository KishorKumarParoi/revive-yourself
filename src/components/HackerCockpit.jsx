import React, { Suspense, useState, useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei'
import HackerRoom from './HackerRoom'
import CanvasLoader from './CanvasLoader'
import { RotateCw, ZoomIn, Eye, Sparkles, Monitor, Activity, ShieldCheck } from 'lucide-react'

// Floating Cyberpunk Energy Node
const CyberEnergyCore = () => {
  return (
    <Float speed={2.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={[6, 3, -4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color="#00ffff"
          emissive="#00b4d8"
          emissiveIntensity={1.5}
          distort={0.4}
          speed={3}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  )
}

const CyberPlasmaNode = () => {
  return (
    <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
      <mesh position={[-6, 4, 3]}>
        <torusGeometry args={[0.8, 0.15, 16, 50]} />
        <meshStandardMaterial
          color="#ff007f"
          emissive="#ff007f"
          emissiveIntensity={2}
          wireframe
        />
      </mesh>
    </Float>
  )
}

const HackerCockpit = () => {
  const [cameraView, setCameraView] = useState('default') // default | desk | cinematic
  const [autoRotate, setAutoRotate] = useState(true)
  const [isInView, setIsInView] = useState(true)
  const controlsRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }
    return () => observer.disconnect()
  }, [])

  const cameraPresets = {
    default: { pos: [0, 5, 15], target: [0, 0, 0], fov: 65 },
    desk: { pos: [0, 2, 7], target: [0, 0, 0], fov: 50 },
    cinematic: { pos: [12, 6, 12], target: [0, 0, 0], fov: 55 },
  }

  const applyPreset = (preset) => {
    setCameraView(preset)
    const target = cameraPresets[preset]
    if (controlsRef.current) {
      controlsRef.current.target.set(...target.target)
      controlsRef.current.object.position.set(...target.pos)
      controlsRef.current.object.fov = target.fov
      controlsRef.current.object.updateProjectionMatrix()
      controlsRef.current.update()
    }
  }

  return (
    <section
      id="cockpit"
      ref={sectionRef}
      className="relative w-full h-screen min-h-[700px] bg-black overflow-hidden flex flex-col justify-between"
    >
      {/* 3D Canvas */}
      <div className="absolute inset-0 w-full h-full" style={{ touchAction: 'pan-y' }}>
        <Canvas
          className="w-full h-full"
          frameloop={isInView ? 'always' : 'never'}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          dpr={[1, 1.5]}
        >
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera
              makeDefault
              position={cameraPresets.default.pos}
              fov={cameraPresets.default.fov}
              near={0.1}
              far={1000}
            />

            <OrbitControls
              ref={controlsRef}
              autoRotate={autoRotate}
              autoRotateSpeed={1.8}
              enableZoom={false}
              enablePan={false}
              enableDamping={true}
              dampingFactor={0.06}
              minDistance={4}
              maxDistance={35}
              target={[0, 0, 0]}
            />

            {/* Hacker Room Model */}
            <HackerRoom
              position={[0, -3.8, 0]}
              scale={[0.09, 0.09, 0.09]}
              rotation={[0, Math.PI, 0]}
            />

            {/* Floating Cyberpunk Tech Nodes */}
            <CyberEnergyCore />
            <CyberPlasmaNode />

            {/* Lighting Design */}
            <ambientLight intensity={1.2} />

            <directionalLight
              position={[12, 18, 12]}
              intensity={2.0}
              castShadow
            />

            {/* Neon Cyan Accent Light */}
            <pointLight
              position={[-8, 6, 6]}
              intensity={2.5}
              color="#00ffff"
              distance={80}
            />

            {/* Neon Magenta Accent Light */}
            <pointLight
              position={[8, 4, -6]}
              intensity={2.0}
              color="#ff007f"
              distance={60}
            />

            {/* Neon Deep Purple Backlight */}
            <pointLight
              position={[0, -2, -8]}
              intensity={1.8}
              color="#8338ec"
              distance={50}
            />

            <color attach="background" args={['#030308']} />
          </Suspense>
        </Canvas>
      </div>

      {/* Cyber HUD Overlay Top Bar */}
      <div className="relative z-10 w-full p-4 sm:p-6 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 bg-black/70 backdrop-blur-md border border-cyan-500/30 px-3.5 py-2 rounded-xl text-xs font-mono shadow-[0_0_20px_rgba(0,0,0,0.8)] pointer-events-auto">
          <Monitor className="size-4 text-cyan-400" />
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-wider text-[11px]">3D HACKER COCKPIT</span>
            <span className="text-[9.5px] text-gray-400">STATUS: INTERACTIVE RIGID GLTF // 60 FPS</span>
          </div>
        </div>

        {/* Camera Preset Controls */}
        <div className="hidden sm:flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-cyan-500/30 p-1 rounded-xl text-xs font-mono pointer-events-auto shadow-lg">
          <button
            onClick={() => applyPreset('default')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-[11px] ${
              cameraView === 'default' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Tactical (Default)
          </button>
          <button
            onClick={() => applyPreset('desk')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-[11px] ${
              cameraView === 'desk' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Desk Close-Up
          </button>
          <button
            onClick={() => applyPreset('cinematic')}
            className={`px-2.5 py-1 rounded-lg transition cursor-pointer text-[11px] ${
              cameraView === 'cinematic' ? 'bg-cyan-500 text-black font-bold' : 'text-gray-400 hover:text-white'
            }`}
          >
            Isometric
          </button>
        </div>
      </div>

      {/* Cyber HUD Overlay Bottom Bar */}
      <div className="relative z-10 w-full p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2 bg-black/70 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl text-xs font-mono text-gray-300 pointer-events-auto shadow-lg">
          <span className="size-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Drag to orbit • Pinch/Scroll to zoom • Touch supported</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition cursor-pointer ${
              autoRotate
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                : 'bg-black/60 border-white/10 text-gray-400 hover:text-white'
            }`}
          >
            <RotateCw className={`size-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
            <span>{autoRotate ? 'Auto-Rotate: ON' : 'Auto-Rotate: OFF'}</span>
          </button>

          <a
            href="#terminal"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-mono text-xs font-bold shadow-[0_0_15px_rgba(255,0,128,0.4)] transition"
          >
            <span>NEXT: TERMINAL</span>
            <span>↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default HackerCockpit
