import React, { useState } from 'react'

const App = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className='w-full min-h-screen mx-auto overflow-hidden relative'
      onMouseMove={handleMouseMove}
    >
      {/* Animated background gradient cursor */}
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
        {/* Hero Section */}
        <div className='text-center space-y-8 px-5 max-w-4xl'>
          {/* Floating badge */}
          <div className='inline-block'>
            <div className='glow-cyan px-6 py-2 rounded-full border border-cyan-400 border-opacity-50 bg-black-300 bg-opacity-50'>
              <p className='text-cyan-300 text-sm font-semibold tracking-widest'>✨ WELCOME TO THE FUTURE</p>
            </div>
          </div>

          {/* Main heading */}
          <div className='space-y-4'>
            <h1 className='text-6xl sm:text-7xl font-bold leading-tight'>
              <span className='block gradient-text'>Revive Yourself</span>
              <span className='block text-white mt-4'>In The Digital Age</span>
            </h1>
            <p className='text-xl text-white-600 max-w-2xl mx-auto leading-relaxed'>
              Discover extraordinary digital experiences that transform your perspective and ignite innovation
            </p>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 justify-center pt-8'>
            <button className='btn-primary group'>
              <span className='relative z-10 flex items-center gap-2'>
                Get Started
                <svg className='w-5 h-5 group-hover:translate-x-1 transition-transform' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                </svg>
              </span>
            </button>
            <button className='btn-secondary'>
              Explore More
            </button>
          </div>

          {/* Stats Section */}
          <div className='grid grid-cols-3 gap-8 pt-16 border-t border-white border-opacity-10'>
            {[
              { number: '500+', label: 'Projects' },
              { number: '100%', label: 'Satisfaction' },
              { number: '24/7', label: 'Support' },
            ].map((stat, index) => (
              <div key={index} className='space-y-2'>
                <p className='text-3xl font-bold gradient-text'>{stat.number}</p>
                <p className='text-white-600'>{stat.label}</p>
              </div>
            ))}
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
      <div className='fixed top-1/2 right-1/4 w-36 h-36 rounded-full blur-3xl opacity-15 bg-gradient-to-br from-yellow-400 to-orange-500 float' style={{ animationDelay: '4s' }}></div>
    </div>
  )
}

export default App