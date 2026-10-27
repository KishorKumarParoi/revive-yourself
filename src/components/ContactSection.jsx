import React, { useState } from 'react'
import { executiveBio } from '../constants/portfolioData'
import { Mail, Phone, ExternalLink, Github, Linkedin, Twitter, Copy, Check, Send, ShieldCheck, Heart } from 'lucide-react'

const ContactSection = () => {
  const [copiedKey, setCopiedKey] = useState('')
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [dispatched, setDispatched] = useState(false)

  const copyText = (key, text) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(''), 2000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Open email client with pre-filled content
    const subject = encodeURIComponent(`Uplink: New Inquiry from ${formState.name || 'Executive Recruiter'}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.location.href = `mailto:${executiveBio.email}?subject=${subject}&body=${body}`
    setDispatched(true)
    setTimeout(() => setDispatched(false), 5000)
  }

  return (
    <footer id="contact" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#020205] border-t border-cyan-500/20 overflow-hidden text-left font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs mb-3">
            <ShieldCheck className="size-3.5" />
            <span>SECURE UPLINK CHANNELS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Initialize Direct Transmission
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 mt-3">
            Open for Principal AI Systems Architect roles, advisory consultations, and high-throughput platform engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
          {/* Quick Contact Dossier Cards */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-200 uppercase tracking-wider mb-2">
              Verified Direct Channels:
            </h3>

            {/* Email Primary */}
            <div className="p-4 rounded-xl bg-[#090914] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Primary Email</span>
                  <a href={`mailto:${executiveBio.email}`} className="text-xs sm:text-sm text-white font-bold hover:text-cyan-400 transition">
                    {executiveBio.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText('email', executiveBio.email)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                title="Copy email"
              >
                {copiedKey === 'email' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>

            {/* WhatsApp */}
            <div className="p-4 rounded-xl bg-[#090914] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Phone className="size-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">Direct WhatsApp</span>
                  <a href="https://wa.me/8801724714156" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white font-bold hover:text-emerald-400 transition">
                    {executiveBio.whatsapp}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText('whatsapp', executiveBio.whatsapp)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                title="Copy WhatsApp"
              >
                {copiedKey === 'whatsapp' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>

            {/* Institutional RUET Email */}
            <div className="p-4 rounded-xl bg-[#090914] border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Mail className="size-5" />
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest block">RUET Academic Email</span>
                  <a href={`mailto:${executiveBio.institutionalEmail}`} className="text-xs sm:text-sm text-white font-bold hover:text-purple-400 transition">
                    {executiveBio.institutionalEmail}
                  </a>
                </div>
              </div>
              <button
                onClick={() => copyText('instEmail', executiveBio.institutionalEmail)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
                title="Copy RUET email"
              >
                {copiedKey === 'instEmail' ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
              </button>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={executiveBio.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0077b5]/20 hover:bg-[#0077b5]/30 border border-[#0077b5]/40 text-blue-300 text-xs font-bold transition"
              >
                <Linkedin className="size-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={executiveBio.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition"
              >
                <Github className="size-4" />
                <span>GitHub</span>
              </a>
              <a
                href={executiveBio.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition"
              >
                <Twitter className="size-4" />
                <span>X / Twitter</span>
              </a>
            </div>
          </div>

          {/* Interactive Transmission Form */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[#090914] border border-cyan-500/30 shadow-2xl flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                <Send className="size-4 text-cyan-400" />
                <span>Dispatch Instant Transmission</span>
              </h3>
              <p className="text-xs text-gray-400 mb-4">
                Encrypts parameters and opens your default mail client directly with pre-routed metadata.
              </p>

              <div className="space-y-3">
                <div>
                  <label className="text-[11px] text-gray-300 block mb-1">Your Name / Title:</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Elena Rostova — VP of Engineering"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none text-xs text-white placeholder-gray-600 transition"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-gray-300 block mb-1">Your Email Address:</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="elena@enterprise.ai"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none text-xs text-white placeholder-gray-600 transition"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-gray-300 block mb-1">Message / Transmission Payload:</label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Inquiry regarding Principal AI Systems Architect role / Lakehouse architecture consultation..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 focus:border-cyan-400 outline-none text-xs text-white placeholder-gray-600 transition resize-none"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold text-xs uppercase tracking-wider shadow-[0_0_20px_rgba(0,212,255,0.4)] transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="size-4" />
              <span>TRANSMIT DISPATCH NOW</span>
            </button>

            {dispatched && (
              <div className="p-2.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-[11px] text-emerald-300 text-center font-bold">
                ✓ Transmission protocol initiated! Opening email client...
              </div>
            )}
          </form>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © 2026 <span className="text-white font-bold">Kishor Kumar Paroi</span>. Engineered with React 19, Three.js, GSAP & TailwindCSS v4.
          </div>
          <div className="flex items-center gap-3">
            <a href="https://kishor.tech" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition">
              macOS Sonoma OS
            </a>
            <span>•</span>
            <a href="https://3d.kishor.tech" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
              3D Re-Invent
            </a>
            <span>•</span>
            <a href="https://koom.kishor.tech" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              KoomAI ($24K MRR)
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactSection
