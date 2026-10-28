import React, { useState, useEffect, useRef } from 'react'
import { navLinks, executiveBio } from '../constants/portfolioData'
import { Terminal, Shield, Play, Pause, Volume2, VolumeX, ExternalLink, Download, Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/audio/loop.mp3')
      audioRef.current.loop = true
      audioRef.current.volume = 0.4
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch((err) => {
        console.warn('Audio playback blocked:', err)
      })
    }
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    audioRef.current.muted = !isMuted
    setIsMuted(!isMuted)
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030308]/85 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Cyber Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="size-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.5)] transition duration-300">
            <Terminal className="size-5 text-cyan-400 group-hover:scale-110 transition" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 font-mono text-sm font-bold tracking-wider text-white">
              <span className="text-cyan-400">KKP</span>
              <span className="text-gray-500">//</span>
              <span className="text-gray-200 group-hover:text-cyan-300 transition">ARCHITECT</span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ROOT ACCESS • ZERO-TRUST</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-3 py-1.5 rounded-md text-xs font-mono font-medium text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition border border-transparent hover:border-cyan-500/20"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Cyber Audio Radio + CTA Action Group */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Audio Synthesizer Radio Pill */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(0,212,255,0.15)]">
            <button
              onClick={toggleAudio}
              className="size-5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 flex items-center justify-center transition cursor-pointer"
              title={isPlaying ? "Pause Cyber Ambient" : "Play Cyber Ambient"}
            >
              {isPlaying ? <Pause className="size-3" /> : <Play className="size-3 ml-0.5" />}
            </button>
            <span className="hidden sm:inline font-semibold">{isPlaying ? "SYNTH: ON" : "SYNTH: OFF"}</span>
            <div className={`hidden sm:flex items-end gap-0.5 h-3 ${isPlaying ? "opacity-100" : "opacity-30"}`}>
              <div className={`w-0.5 bg-cyan-400 rounded-full h-full ${isPlaying ? "animate-pulse" : "h-1"}`} />
              <div className={`w-0.5 bg-pink-500 rounded-full h-2/3 ${isPlaying ? "animate-pulse delay-75" : "h-1"}`} />
              <div className={`w-0.5 bg-cyan-400 rounded-full h-4/5 ${isPlaying ? "animate-pulse delay-150" : "h-1"}`} />
            </div>
            {isPlaying && (
              <button onClick={toggleMute} className="text-gray-400 hover:text-white transition cursor-pointer ml-0.5">
                {isMuted ? <VolumeX className="size-3" /> : <Volume2 className="size-3" />}
              </button>
            )}
          </div>

          {/* Quick External Portals */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold transition"
              title="Launch Main Academic Portfolio (kishor.tech)"
            >
              <span>🏛️</span>
              <span>kishor.tech</span>
            </a>
            <a
              href="https://macos.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold transition"
              title="Launch macOS Sequoia Desktop Portfolio (macos.kishor.tech)"
            >
              <span>🍎</span>
              <span>macOS</span>
            </a>
            <a
              href="https://koom.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 border border-pink-500/40 text-pink-300 text-xs font-mono font-semibold transition"
              title="Launch KoomAI Video Intelligence (koom.kishor.tech)"
            >
              <span>⚡</span>
              <span>KoomAI</span>
            </a>
            <a
              href="https://3d.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold transition"
              title="Launch 3D Re-Invent Experience (3d.kishor.tech)"
            >
              <span>🔮</span>
              <span>3D</span>
            </a>
          </div>

          {/* Master Resume PDF / Dossier Section Jump Button */}
          <a
            href="#dossier"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono tracking-wider shadow-[0_0_20px_rgba(0,212,255,0.4)] transition duration-200"
          >
            <Download className="size-3.5" />
            <span className="hidden sm:inline">DOSSIER</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#05050c]/98 border-b border-cyan-500/30 px-5 py-4 space-y-3 backdrop-blur-2xl animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-white/10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-mono text-gray-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Ecosystem Directory */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
              Digital Ecosystem Portals:
            </span>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between"
              >
                <span>🏛️ kishor.tech</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://macos.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center justify-between"
              >
                <span>🍎 macOS Portfolio</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://koom.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono flex items-center justify-between"
              >
                <span>⚡ Koom-AI</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://3d.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center justify-between"
              >
                <span>🔮 3D Re-Invent</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
