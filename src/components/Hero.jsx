import React, { useState } from 'react'

const Hero = ({ aboutRef }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const scrollToScene = () => {
        const sceneElement = document.querySelector('section:nth-of-type(2)')
        sceneElement?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div
            className='w-full min-h-screen mx-auto overflow-hidden relative'
            onMouseMove={handleMouseMove}
        >
            {/* Animated background */}
            <div
                className='fixed pointer-events-none'
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    width: '200px',
                    height: '200px',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0,
                }}
            >
                <div className='w-full h-full rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400 to-fuchsia-500'></div>
            </div>

            {/* Main content */}
            <div className='relative z-10 w-full min-h-screen flex flex-col justify-center items-center'>
                <div className='text-center space-y-8 px-5 max-w-4xl'>
                    {/* Floating badge */}
                    <div className='inline-block'>
                        <div className='px-6 py-2 rounded-full border border-cyan-400 border-opacity-50 bg-black-300 bg-opacity-50'>
                            <p className='text-cyan-300 text-sm font-semibold tracking-widest'>✨ WELCOME TO THE FUTURE</p>
                        </div>
                    </div>

                    {/* Main heading */}
                    <div className='space-y-4'>
                        <h1 className='text-6xl sm:text-7xl font-bold leading-tight'>
                            <span className='block text-white'>Revive Yourself</span>
                            <span className='block text-white mt-4'>In The Digital Age</span>
                        </h1>
                        <p className='text-xl text-white-600 max-w-2xl mx-auto leading-relaxed'>
                            Discover extraordinary digital experiences that transform your perspective
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
                        <button
                            onClick={scrollToScene}
                            className='btn-primary group'
                        >
                            <span className='relative z-10 flex items-center gap-2'>
                                Explore 3D Scene
                                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className='absolute bottom-10 animate-bounce'>
                    <svg className='w-6 h-6 text-cyan-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                    </svg>
                </div>
            </div>

            {/* Floating elements */}
            <div className='fixed top-20 left-10 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-cyan-400 to-blue-600 float'></div>
            <div className='fixed bottom-20 right-10 w-40 h-40 rounded-full blur-3xl opacity-20 bg-gradient-to-br from-fuchsia-500 to-purple-600 float' style={{ animationDelay: '2s' }}></div>
        </div>
    )
}

export default Hero