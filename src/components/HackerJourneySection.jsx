import React, { useState } from 'react'
import { AI_ENGINEERING_JOURNEY } from '../constants/journey'
import {
    GraduationCap,
    ExternalLink,
    Search,
    Layers,
    Sparkles,
    Check,
    Copy,
    ChevronRight,
    Terminal,
    Cpu,
    ShieldAlert,
    Network
} from 'lucide-react'

const HackerJourneySection = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [selectedPhase, setSelectedPhase] = useState('all')
    const [copiedCode, setCopiedCode] = useState(null)

    const handleCopy = (code) => {
        navigator.clipboard.writeText(code)
        setCopiedCode(code)
        setTimeout(() => setCopiedCode(null), 2000)
    }

    const filteredPhases = AI_ENGINEERING_JOURNEY.phases
        .filter((phase) => selectedPhase === 'all' || phase.phase.includes(selectedPhase))
        .map((phase) => {
            if (!searchQuery.trim()) return phase
            const q = searchQuery.toLowerCase()
            const filteredMods = phase.modules.filter(
                (m) => m.code.toLowerCase().includes(q) || m.desc.toLowerCase().includes(q)
            )
            return { ...phase, modules: filteredMods }
        })
        .filter((phase) => phase.modules.length > 0)

    const totalCount = AI_ENGINEERING_JOURNEY.phases.reduce((acc, p) => acc + p.modules.length, 0)

    return (
        <section id="journey" className="relative w-full py-24 px-4 sm:px-8 md:px-16 bg-[#030308] text-white overflow-hidden border-t border-cyan-500/10">
            {/* Cyber neon grid backdrop */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-950/20 via-[#030308] to-[#030308] pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative max-w-7xl mx-auto space-y-10">
                {/* Cyberpunk Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-cyan-500/20 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                            <Terminal className="size-3.5 text-cyan-400" />
                            <span>CODENAME // AI_ENGINEERING_MASTER_CURRICULUM</span>
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase font-mono">
                            AI Engineering <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Learning Journey</span>
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-2xl font-mono">
                            {AI_ENGINEERING_JOURNEY.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="text-right hidden sm:block border-r border-white/10 pr-4">
                            <div className="text-2xl font-mono font-bold text-cyan-400">
                                {totalCount}
                            </div>
                            <div className="text-[11px] text-gray-500 font-mono">Verified Nodes</div>
                        </div>
                        <a
                            href={AI_ENGINEERING_JOURNEY.repoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold font-mono tracking-wider uppercase transition shadow-lg shadow-cyan-950/50 cursor-pointer"
                        >
                            <span>GitHub Source</span>
                            <ExternalLink size={13} />
                        </a>
                    </div>
                </div>

                {/* Filter tabs and search bar */}
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-mono">
                        {[
                            { id: 'all', label: 'All Modules' },
                            { id: 'Phase I', label: 'I: Foundations' },
                            { id: 'Phase II', label: 'II: Agents' },
                            { id: 'Phase III', label: 'III: Eval & LoRA' },
                            { id: 'Phase IV', label: 'IV: Cloud MLOps' },
                            { id: 'Phase V', label: 'V: Platform & HITL' },
                            { id: 'Enterprise', label: 'Flagship Systems' },
                        ].map((btn) => (
                            <button
                                key={btn.id}
                                onClick={() => setSelectedPhase(btn.id)}
                                className={`px-3 py-1.5 rounded-lg border transition whitespace-nowrap cursor-pointer font-mono ${
                                    selectedPhase === btn.id
                                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 font-bold shadow-[0_0_12px_rgba(6,182,212,0.2)]'
                                        : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'
                                }`}
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-cyan-500" />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Query 38 modules & systems..."
                            className="w-full pl-9 pr-4 py-2 bg-black/60 border border-cyan-500/30 rounded-lg text-xs text-cyan-200 placeholder-gray-500 outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(6,182,212,0.25)] transition font-mono"
                        />
                    </div>
                </div>

                {/* Phase Cards Matrix */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPhases.map((phase, pIdx) => (
                        <div
                            key={pIdx}
                            className="group relative rounded-xl border border-cyan-500/20 p-5 bg-[#070814]/80 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3 mb-4">
                                    <div>
                                        <h3 className="text-sm font-bold text-white flex items-center gap-2 font-mono">
                                            <Cpu className="size-4 text-cyan-400" />
                                            <span>{phase.phase}</span>
                                        </h3>
                                        <div className="text-[11px] text-gray-400 font-mono mt-0.5">
                                            {phase.tag}
                                        </div>
                                    </div>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                                        {phase.badge}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {phase.modules.map((mod, mIdx) => (
                                        <li
                                            key={mIdx}
                                            className="group/item flex items-start justify-between gap-2 p-2 rounded-md bg-black/60 border border-white/5 hover:border-cyan-500/30 transition"
                                        >
                                            <div className="flex items-start gap-2 min-w-0">
                                                <code className="text-[10.5px] font-mono font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 px-1.5 py-0.5 rounded shrink-0">
                                                    {mod.code}
                                                </code>
                                                <span className="text-[11px] text-gray-300 font-mono leading-tight">
                                                    {mod.desc}
                                                </span>
                                            </div>

                                            <button
                                                onClick={() => handleCopy(mod.code)}
                                                className="opacity-0 group-hover/item:opacity-100 p-1 text-gray-500 hover:text-cyan-400 transition shrink-0 cursor-pointer"
                                                title="Copy module ID"
                                            >
                                                {copiedCode === mod.code ? (
                                                    <Check className="size-3 text-emerald-400" />
                                                ) : (
                                                    <Copy className="size-3" />
                                                )}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HackerJourneySection
