import React, { useState } from 'react'
import { flagshipProjects } from '../constants/portfolioData'
import { ExternalLink, Github, Terminal, Copy, Check, X, Sparkles, Layers, Cpu } from 'lucide-react'

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [copiedCmd, setCopiedCmd] = useState(false)

  const copyDeploy = (cmd) => {
    navigator.clipboard.writeText(cmd)
    setCopiedCmd(true)
    setTimeout(() => setCopiedCmd(false), 2000)
  }

  return (
    <section id="projects" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#030308] overflow-hidden">
      {/* Background Cyber Accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-pink-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-3">
            <Layers className="size-3.5" />
            <span>ENTERPRISE ARCHITECTURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tight">
            Flagship Production Systems
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-3 leading-relaxed">
            Architected with single-command zero-touch deployment (<code className="text-cyan-400">bootstrap.sh</code>) and deterministic $0.00 automated teardown (<code className="text-pink-400">clear.sh</code>).
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {flagshipProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#090914] border border-white/10 hover:border-cyan-400/50 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)] flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              <div>
                {/* Image / Diagram Header */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden bg-black/60 mb-5 border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => {
                      // Fallback image if svg diagram path fails
                      e.target.src = "/assets/terminal.png"
                    }}
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-cyan-400 font-mono text-[11px] font-bold border border-cyan-500/30">
                    SYS //{project.num}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-emerald-400 border border-emerald-500/30">
                    {project.scale}
                  </div>
                </div>

                {/* Category & Title */}
                <span className="text-[11px] font-mono text-pink-400 font-semibold uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors mb-2.5 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-gray-400 leading-relaxed line-clamp-3 mb-4">
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] font-mono text-gray-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Inspect Link */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                  <span className="text-cyan-400 group-hover:underline flex items-center gap-1 font-semibold">
                    <span>Inspect Blueprint</span>
                    <span>→</span>
                  </span>
                  <span className="text-gray-500 text-[11px]">Click to inspect</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Architectural Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#0c0c1a] border border-cyan-500/40 rounded-2xl p-6 sm:p-8 overflow-y-auto shadow-2xl text-left font-mono">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 text-cyan-400 text-xs mb-1 font-bold">
              <span>ARCHITECTURE SPECIFICATION</span>
              <span>•</span>
              <span>SYS //{selectedProject.num}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedProject.title}
            </h3>

            <p className="text-xs text-pink-400 font-semibold mb-4">
              {selectedProject.category} &nbsp;•&nbsp; {selectedProject.scale}
            </p>

            {/* Architecture Image */}
            <div className="w-full rounded-xl overflow-hidden bg-black/80 border border-white/10 mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full max-h-72 object-contain mx-auto"
                onError={(e) => {
                  e.target.src = "/assets/terminal.png"
                }}
              />
            </div>

            {/* Impact Metric Banner */}
            <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-200 mb-5 leading-relaxed">
              <span className="font-bold text-cyan-300">QUANTIFIED IMPACT: </span>
              {selectedProject.impact}
            </div>

            {/* Description */}
            <p className="text-xs text-gray-300 leading-relaxed mb-6">
              {selectedProject.desc}
            </p>

            {/* Full Tech Tags */}
            <div className="mb-6">
              <span className="text-[11px] text-gray-400 block mb-2 font-bold uppercase tracking-wider">
                Integrated Technology Stack:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Deploy Command Box */}
            <div className="p-3 bg-black/90 rounded-xl border border-white/10 mb-6">
              <div className="flex items-center justify-between text-[11px] text-gray-400 mb-1.5">
                <span>Single-Command Deployment (Zero-Dependency):</span>
                <button
                  onClick={() => copyDeploy(selectedProject.deployCmd)}
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 cursor-pointer font-bold"
                >
                  {copiedCmd ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                  <span>{copiedCmd ? 'COPIED!' : 'COPY'}</span>
                </button>
              </div>
              <code className="text-xs text-emerald-400 block overflow-x-auto whitespace-pre">
                {selectedProject.deployCmd}
              </code>
            </div>

            {/* Action Links */}
            <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-white/10">
              <a
                href={selectedProject.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition"
              >
                <Github className="size-3.5" />
                <span>GitHub Repository</span>
              </a>

              {selectedProject.liveUrl && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                >
                  <ExternalLink className="size-3.5" />
                  <span>Launch Live Portal</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default ProjectsSection
