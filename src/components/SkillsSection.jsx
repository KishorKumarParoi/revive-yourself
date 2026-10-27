import React from 'react'
import { skillsMatrix } from '../constants/portfolioData'
import { Cpu, Database, Cloud, Code, Terminal, CheckCircle } from 'lucide-react'

const iconMap = {
  Cpu: Cpu,
  Database: Database,
  Cloud: Cloud,
  Code: Code,
}

const SkillsSection = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#030308] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-3">
            <Cpu className="size-3.5" />
            <span>CORE COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tight">
            Technical Arsenal Matrix
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-3">
            Engineered with strict trade-off rigor: Latency vs Cost vs Accuracy vs VPC Data Privacy.
          </p>
        </div>

        {/* 4 Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 font-mono">
          {skillsMatrix.map((pillar, idx) => {
            const IconComponent = iconMap[pillar.icon] || Terminal
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-[#090914] border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                    <div className="size-11 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                      <IconComponent className="size-6" />
                    </div>
                    <div>
                      <span className="text-[10px] text-pink-400 font-bold uppercase tracking-widest block">
                        PILLAR // 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white">
                        {pillar.pillar}
                      </h3>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {pillar.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 text-xs text-gray-200 transition group"
                      >
                        <CheckCircle className="size-3.5 text-cyan-400 shrink-0 group-hover:scale-110 transition" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-400">
                  <span>Proficiency: Production Rigor</span>
                  <span className="text-emerald-400 font-bold">100% OPERATIONAL</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
