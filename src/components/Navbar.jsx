import React, { useState, useEffect, useRef } from 'react'
import { navLinks, executiveBio } from '../constants/portfolioData'
import { Terminal, Shield, Play, Pause, Volume2, VolumeX, ExternalLink, Download, Menu, X, Sparkles, FileText } from 'lucide-react'

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

  // Primary desktop navigation links
  const primaryNavLinks = navLinks.slice(0, 6)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#030308]/90 backdrop-blur-2xl border-b border-cyan-500/20 shadow-lg shadow-black/80">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between w-full">
        {/* Cyber Brand Logo */}
        <a href="#hero" className="flex items-center gap-2 group shrink-0">
          <div className="size-8 sm:size-9 rounded-lg bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,255,200,0.5)] transition duration-300">
            <Terminal className="size-4 sm:size-5 text-cyan-400 group-hover:scale-110 transition" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1 font-mono text-xs sm:text-sm font-bold tracking-wider text-white">
              <span className="text-cyan-400">KKP</span>
              <span className="text-gray-500">//</span>
              <span className="text-gray-200 group-hover:text-cyan-300 transition">ARCHITECT</span>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-[10px] font-mono text-emerald-400">
              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ZERO-TRUST • DISTRIBUTED ML</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation (Auto-resizing & clean spacing) */}
        <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5 mx-2">
          {primaryNavLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg text-xs font-mono font-medium text-gray-300 hover:text-cyan-300 hover:bg-cyan-500/10 transition border border-transparent hover:border-cyan-500/20 whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Cyber Audio Radio + Ecosystem + Dossier Action Group */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {/* Audio Synthesizer Radio Pill (Auto-Resizing) */}
          <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-2.5 py-1 rounded-full bg-black/60 border border-cyan-500/30 text-[10px] sm:text-[11px] font-mono text-cyan-300 shadow-[0_0_10px_rgba(0,212,255,0.15)] shrink-0">
            <button
              onClick={toggleAudio}
              className="size-5 rounded-full bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-400 flex items-center justify-center transition cursor-pointer"
              title={isPlaying ? "Pause Cyber Ambient" : "Play Cyber Ambient"}
            >
              {isPlaying ? <Pause className="size-3" /> : <Play className="size-3 ml-0.5" />}
            </button>
            <span className="hidden sm:inline font-semibold whitespace-nowrap">{isPlaying ? "SYNTH: ON" : "SYNTH: OFF"}</span>
            <div className={`flex items-end gap-0.5 h-3 ${isPlaying ? "opacity-100" : "opacity-30"}`}>
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

          {/* Quick External Portals (Visible on wide screens) */}
          <div className="hidden 2xl:flex items-center gap-1.5">
            <a
              href="https://kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-600/20 hover:bg-amber-600/40 border border-amber-500/40 text-amber-300 text-xs font-mono font-semibold transition whitespace-nowrap"
              title="Launch Main Academic Portfolio (kishor.tech)"
            >
              <span>🏛️</span>
              <span>kishor.tech</span>
            </a>
            <a
              href="https://macos.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-blue-600/20 hover:bg-blue-600/40 border border-blue-500/40 text-blue-300 text-xs font-mono font-semibold transition whitespace-nowrap"
              title="Launch macOS Sequoia Desktop Portfolio (macos.kishor.tech)"
            >
              <span>🍎</span>
              <span>macOS</span>
            </a>
            <a
              href="https://koom.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-pink-600/20 hover:bg-pink-600/40 border border-pink-500/40 text-pink-300 text-xs font-mono font-semibold transition whitespace-nowrap"
              title="Launch KoomAI Video Intelligence (koom.kishor.tech)"
            >
              <span>⚡</span>
              <span>KoomAI</span>
            </a>
            <a
              href="https://hacker.kishor.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2 py-1 rounded-lg bg-purple-600/20 hover:bg-purple-600/40 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold transition whitespace-nowrap"
              title="Launch 3D Cyber Hacker Command (hacker.kishor.tech)"
            >
              <span>⚡</span>
              <span>Hacker</span>
            </a>
          </div>

          {/* Master Resume PDF / Dossier Section Jump Button */}
          <a
            href="#dossier"
            className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(0,212,255,0.3)] transition duration-200 shrink-0 whitespace-nowrap"
          >
            <Download className="size-3.5" />
            <span className="hidden min-[420px]:inline">DOSSIER</span>
          </a>

          {/* Mobile / Tablet Menu Toggle (< xl screens) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition border border-white/5 cursor-pointer shrink-0"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="size-5 text-cyan-400" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile / Tablet Cyber Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#05050c]/98 border-b border-cyan-500/30 px-4 sm:px-6 py-4 space-y-4 backdrop-blur-2xl animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto text-left font-mono">
          {/* Full System Module Navigation Links */}
          <div>
            <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2 flex items-center justify-between">
              <span>System Navigation:</span>
              <span className="text-gray-500">10 Modules</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono text-gray-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/5 transition flex items-center justify-between"
                >
                  <span className="truncate">{link.name}</span>
                  <span className="text-[10px] text-gray-500">#</span>
                </a>
              ))}
            </div>
          </div>

          {/* Digital Ecosystem Directory */}
          <div className="border-t border-white/10 pt-3">
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block mb-2">
              Digital Ecosystem Portals:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <a
                href="https://kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono flex items-center justify-between hover:bg-amber-500/20 transition"
              >
                <span>🏛️ kishor.tech</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://macos.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono flex items-center justify-between hover:bg-blue-500/20 transition"
              >
                <span>🍎 macOS</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://koom.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono flex items-center justify-between hover:bg-pink-500/20 transition"
              >
                <span>⚡ KoomAI</span>
                <ExternalLink className="size-3" />
              </a>
              <a
                href="https://hacker.kishor.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center justify-between hover:bg-purple-500/20 transition"
              >
                <span>⚡ Hacker</span>
                <ExternalLink className="size-3" />
              </a>
            </div>
          </div>

          {/* Direct Resume Downloads */}
          <div className="border-t border-white/10 pt-3">
            <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest block mb-2">
              Verified Production Dossier:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <a
                href="/files/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-200 flex items-center justify-between font-mono font-semibold hover:bg-cyan-500/30 transition"
              >
                <span>📄 1-Page Visual Resume (PDF)</span>
                <Download className="size-3.5" />
              </a>
              <a
                href="/files/resume_single_column.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="px-3 py-2 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center justify-between font-mono font-semibold hover:bg-emerald-500/30 transition"
              >
                <span>📑 2-Page ATS Resume (PDF)</span>
                <Download className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
