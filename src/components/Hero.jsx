import React, { useState, useEffect } from 'react'
import { executiveBio, productionMetrics, ecosystemPortals } from '../constants/portfolioData'
import { Terminal, Shield, ArrowDown, ExternalLink, Download, Cpu, Sparkles, Activity, Layers, FileText } from 'lucide-react'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  const fullHeadline = "PRINCIPAL AI SYSTEMS ARCHITECT"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setDisplayText(fullHeadline.slice(0, index + 1))
      index++
      if (index >= fullHeadline.length) {
        clearInterval(timer)
      }
    }, 45)

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(timer)
      clearInterval(cursorTimer)
    }
  }, [])

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Cyber Grid & Radiant Blurs */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,212,255,0.18),rgba(255,0,128,0.06)_50%,rgba(0,0,0,0)_80%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-10 size-72 rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-10 size-80 rounded-full bg-fuchsia-600/15 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Terminal Status Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 border border-cyan-400/40 text-cyan-300 font-mono text-xs shadow-[0_0_20px_rgba(0,255,200,0.25)] mb-6 backdrop-blur-md">
          <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span className="font-bold tracking-widest text-[11px] text-cyan-200">
            SECURE TERMINAL // ROOT ACCESS GRANTED
          </span>
          <span className="text-gray-500">•</span>
          <span className="text-xs text-gray-300">RUET CSE #483</span>
        </div>

        {/* Name Title & Glitch Heading */}
        <h2 className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-cyan-400 font-semibold mb-2">
          Kishor Kumar Paroi &nbsp;•&nbsp; KKP
        </h2>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white mb-4 leading-none">
          <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
            {displayText}
          </span>
          <span className={`text-cyan-400 ${cursorVisible ? "opacity-100" : "opacity-0"}`}>_</span>
        </h1>

        <p className="text-lg sm:text-2xl font-mono font-medium text-transparent bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text max-w-3xl mb-6">
          Enterprise Platform & Distributed Data Leader • Founder @ KoomAI
        </p>

        {/* Executive Sub-badge */}
        <p className="text-xs sm:text-sm font-mono text-gray-400 max-w-2xl leading-relaxed mb-8">
          Bridging mathematical foundations (<span className="text-cyan-300">SVD, Convex Optimization, Loss Manifolds</span>) with high-scale production engineering (<span className="text-pink-300">vLLM Multi-LoRA, LangGraph Agents, Snowflake Medallion Lakehouses</span>).
        </p>

        {/* Primary Call to Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          <a
            href="#cockpit"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-mono font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_30px_rgba(0,212,255,0.5)] transition duration-200 transform hover:-translate-y-0.5"
          >
            <Cpu className="size-4" />
            <span>ENTER 3D COCKPIT</span>
          </a>

          <a
            href="#terminal"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-black/60 hover:bg-black/90 text-cyan-300 hover:text-white border border-cyan-500/40 hover:border-cyan-400 font-mono font-semibold text-xs sm:text-sm tracking-wider shadow-[0_0_20px_rgba(0,0,0,0.8)] transition duration-200 transform hover:-translate-y-0.5"
          >
            <Terminal className="size-4 text-cyan-400" />
            <span>RUN TERMINAL SHELL</span>
          </a>

          <a
            href="#dossier"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white font-mono font-bold text-xs sm:text-sm tracking-wider shadow-[0_0_25px_rgba(255,0,128,0.4)] transition duration-200 transform hover:-translate-y-0.5"
          >
            <FileText className="size-4" />
            <span>DOSSIER // 2-PAGE ATS</span>
          </a>

          <a
            href="/files/resume_single_column.pdf"
            download="Kishor_Kumar_Paroi_ATS_Resume.pdf"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 hover:border-white/20 font-mono text-xs sm:text-sm transition"
          >
            <Download className="size-4 text-pink-400" />
            <span>DOWNLOAD ATS PDF</span>
          </a>
        </div>

        {/* Quick Ecosystem Cross-Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-mono text-xs">
          <span className="text-gray-500 text-[11px] mr-1">Ecosystem:</span>
          <a
            href="https://kishor.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/25 border border-amber-500/30 text-amber-300 transition"
          >
            <span>🏛️</span>
            <span className="font-semibold">kishor.tech</span>
            <ExternalLink className="size-3 text-amber-400/60" />
          </a>
          <a
            href="https://macos.kishor.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-blue-500/10 hover:bg-blue-500/25 border border-blue-500/30 text-blue-300 transition"
          >
            <span>🍎</span>
            <span className="font-semibold">macos.kishor.tech</span>
            <ExternalLink className="size-3 text-blue-400/60" />
          </a>
          <a
            href="https://koom.kishor.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-500/10 hover:bg-pink-500/25 border border-pink-500/30 text-pink-300 transition"
          >
            <span>⚡</span>
            <span className="font-semibold">koom.kishor.tech</span>
            <ExternalLink className="size-3 text-pink-400/60" />
          </a>
          <a
            href="https://3d.kishor.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-500/10 hover:bg-purple-500/25 border border-purple-500/30 text-purple-300 transition"
          >
            <span>🔮</span>
            <span className="font-semibold">3d.kishor.tech</span>
            <ExternalLink className="size-3 text-purple-400/60" />
          </a>
        </div>

        {/* 4 Telemetry Metrics Ticker */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl pt-4">
          {productionMetrics.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl bg-[#090912]/80 backdrop-blur-md border ${item.border} text-left flex flex-col justify-between hover:bg-[#0e0e1c] transition duration-300 shadow-lg group`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">{item.label}</span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-white/5 text-gray-300 group-hover:text-white">
                  {item.badge}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-mono font-black tracking-tight" style={{ color: item.color }}>
                {item.value}
              </div>
              <div className="text-[10.5px] font-mono text-gray-400 leading-tight mt-1">
                {item.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Scroll Anchor */}
      <a
        href="#cockpit"
        className="mt-12 flex flex-col items-center gap-1.5 text-gray-500 hover:text-cyan-400 transition font-mono text-[10px] tracking-widest uppercase animate-bounce cursor-pointer"
      >
        <span>ENTER 3D HACKER ROOM</span>
        <ArrowDown className="size-4 text-cyan-400" />
      </a>
    </section>
  )
}

export default Hero