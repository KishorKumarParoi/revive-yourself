import React from 'react'
import { workExperiences } from '../constants/portfolioData'
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, GraduationCap } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#020205] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-3">
            <Briefcase className="size-3.5" />
            <span>INDUSTRY TRACK RECORD</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tight">
            Work Experience & Milestones
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-3">
            Verified production impact across Forward Deployed GenAI, High-Scale Microservices & Healthcare Big Data.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {workExperiences.map((exp, idx) => (
            <div key={exp.id} className="relative group text-left font-mono">
              {/* Glowing Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 rounded-full bg-black border-2 border-cyan-400 group-hover:bg-cyan-400 transition-colors shadow-[0_0_12px_rgba(0,212,255,0.8)]" />

              {/* Card Container */}
              <div className="p-6 rounded-2xl bg-[#090914] border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300 shadow-xl group-hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-pink-400 font-semibold">
                    <Calendar className="size-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4 pb-3 border-b border-white/10">
                  <span className="text-cyan-400 font-bold">{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3 text-gray-500" />
                    <span>{exp.location}</span>
                  </span>
                </div>

                {/* Bullet Highlights */}
                <ul className="space-y-2.5 mb-5 text-xs text-gray-300 leading-relaxed">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10.5px] text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Academic Foundation Node */}
          <div className="relative group text-left font-mono">
            <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 size-4 rounded-full bg-black border-2 border-purple-400 group-hover:bg-purple-400 transition-colors shadow-[0_0_12px_rgba(168,85,247,0.8)]" />

            <div className="p-6 rounded-2xl bg-[#090914] border border-purple-500/30 shadow-xl">
              <div className="flex items-center justify-between gap-1 mb-2">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <GraduationCap className="size-5 text-purple-400" />
                  <span>B.Sc. in Computer Science & Engineering</span>
                </h3>
                <span className="text-xs text-purple-300 font-bold">2018 – 2023</span>
              </div>
              <p className="text-xs text-cyan-400 font-semibold mb-3">
                Rajshahi University of Engineering & Technology (RUET) &nbsp;•&nbsp; CGPA 3.25 / 4.00 (Distinction)
              </p>
              <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-200 leading-relaxed">
                <strong>Academic Merit Rank:</strong> 483rd nationwide in Bangladesh engineering admission test. Prior credentials: Rank 85th in Dhaka Board (HSC, Saint Joseph Higher Secondary) and Rank 90th in Dhaka Board (SSC).
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
