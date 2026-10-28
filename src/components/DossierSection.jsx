import React, { useState } from 'react'
import {
  FileText,
  Download,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Award,
  Sparkles,
  Layers,
  GraduationCap,
  Briefcase,
  Terminal,
  Globe
} from 'lucide-react'
import { executiveBio, ecosystemPortals } from '../constants/portfolioData'

const DossierSection = () => {
  const [activeTab, setActiveTab] = useState('ats') // 'ats' | 'briefing'

  return (
    <section id="dossier" className="relative w-full py-24 px-4 sm:px-6 lg:px-8 bg-[#020206] overflow-hidden border-t border-cyan-500/20">
      {/* Cyber radiant accents */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-fuchsia-500/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-4 shadow-[0_0_15px_rgba(0,255,200,0.15)]">
            <FileText className="size-3.5 text-cyan-400" />
            <span>VERIFIED PRODUCTION CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-mono font-black text-white tracking-tight">
            Executive Dossier & <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-pink-400 bg-clip-text text-transparent">ATS Resume</span>
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-3 leading-relaxed">
            Dual-format verified credentials engineered for enterprise ATS screeners, technical hiring bars, and Principal Architecture committees.
          </p>
        </div>

        {/* Format Selector Pills + Download CTA Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-3 rounded-2xl bg-[#080812] border border-white/10 shadow-xl">
          {/* Toggle Tabs */}
          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setActiveTab('ats')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition duration-200 cursor-pointer ${
                activeTab === 'ats'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-[0_0_20px_rgba(0,212,255,0.4)]'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <FileText className="size-4" />
              <span>2-PAGE ATS RESUME (SINGLE COLUMN)</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-black/30 font-semibold">
                RECOMMENDED
              </span>
            </button>

            <button
              onClick={() => setActiveTab('briefing')}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition duration-200 cursor-pointer ${
                activeTab === 'briefing'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-[0_0_20px_rgba(255,0,128,0.4)]'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Award className="size-4" />
              <span>1-PAGE EXECUTIVE BRIEFING</span>
            </button>
          </div>

          {/* Action Download Buttons */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <a
              href={activeTab === 'ats' ? '/files/resume_single_column.pdf' : '/files/resume.pdf'}
              download={activeTab === 'ats' ? 'Kishor_Kumar_Paroi_ATS_Resume.pdf' : 'Kishor_Kumar_Paroi_Executive_CV.pdf'}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 font-mono text-xs font-bold transition"
            >
              <Download className="size-3.5" />
              <span>DOWNLOAD {activeTab === 'ats' ? 'ATS (2-PAGE)' : '1-PAGE'} PDF</span>
            </a>

            <a
              href={activeTab === 'ats' ? '/files/resume_single_column.pdf' : '/files/resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 font-mono text-xs font-medium transition"
            >
              <ExternalLink className="size-3.5 text-gray-400" />
              <span className="hidden sm:inline">OPEN NEW TAB</span>
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        {activeTab === 'ats' ? (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* ATS Highlights Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Page 1 Breakdown Card */}
              <div className="p-6 rounded-2xl bg-[#090915] border border-cyan-500/30 shadow-xl space-y-4 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                    <span>PAGE 1 // CORE SYSTEMS & SENIOR TRACK RECORD</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 text-[11px] font-bold">
                    100% ATS PARSABLE
                  </span>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <Terminal className="size-3.5 text-cyan-400" />
                      <span>Executive Headline & Contact</span>
                    </h4>
                    <p className="text-gray-400 text-[11.5px] leading-relaxed">
                      Kishor Kumar Paroi (KKP) • Principal AI Systems Architect • RUET CSE #483 • Global Remote / Dhaka • kishor.ruet.cse@gmail.com
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <Layers className="size-3.5 text-purple-400" />
                      <span>Technical Arsenal (4 Pillars)</span>
                    </h4>
                    <p className="text-gray-400 text-[11.5px] leading-relaxed">
                      <strong>AI/LLMOps:</strong> Multi-Agent LangGraph, FastMCP, NeMo Guardrails, vLLM Multi-LoRA, CUDA kernels, RAGAS, Feast.<br />
                      <strong>Big Data:</strong> Spark, Delta Lakehouse, Snowflake, Kafka, Flink, dbt SCD-2, Debezium CDC.<br />
                      <strong>Cloud/IaC:</strong> Kubernetes (EKS, GKE, AKS), Terraform, Istio mTLS, AWS EMR, GCP Vertex, Azure.<br />
                      <strong>Low-Level:</strong> Rust AVX-512 SIMD, Go, C++ IPC, Python 3.12 uv, SQL Window functions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <Briefcase className="size-3.5 text-pink-400" />
                      <span>Verified Industry Roles</span>
                    </h4>
                    <ul className="space-y-1.5 text-gray-400 text-[11.5px]">
                      <li>• <strong>phi0.ai:</strong> Forward Deployed AI Engineer (5 LangGraph cyclic agents, 99.4% completion, sub-35ms Hybrid RAG).</li>
                      <li>• <strong>Samsung AI Core / Care Health:</strong> Data Engineering & AI Systems Intern (PySpark streaming, 70B LLM FlashAttention-2, 3.8x throughput).</li>
                      <li>• <strong>kepi.ai:</strong> Senior Full Stack Engineer (Zero-downtime EKS migration, Redis Streams, 15M+ daily async tasks).</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Page 2 Breakdown Card */}
              <div className="p-6 rounded-2xl bg-[#090915] border border-fuchsia-500/30 shadow-xl space-y-4 font-mono">
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2 text-pink-400 font-bold text-sm">
                    <span className="size-2 rounded-full bg-pink-400 animate-pulse" />
                    <span>PAGE 2 // ENTERPRISE IMPACT & ARCHITECTURES</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-pink-500/10 text-pink-300 text-[11px] font-bold">
                    ATS METRICS VALIDATED
                  </span>
                </div>

                <div className="space-y-3 text-xs text-gray-300">
                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <Globe className="size-3.5 text-pink-400" />
                      <span>Founder @ KoomAI & foodpanda</span>
                    </h4>
                    <ul className="space-y-1 text-gray-400 text-[11.5px]">
                      <li>• <strong>KoomAI:</strong> Sub-120ms WebRTC SVC engine, native Electron C++ IPC, 20-agent LangGraph copilot, $24,000 MRR.</li>
                      <li>• <strong>foodpanda:</strong> Next.js & MERN checkout microservices (100K+ daily transactions, 99.98% uptime).</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <GraduationCap className="size-3.5 text-cyan-400" />
                      <span>Education & Competitive Rigor</span>
                    </h4>
                    <p className="text-gray-400 text-[11.5px] leading-relaxed">
                      <strong>B.Sc. in Computer Science & Engineering @ RUET:</strong> CGPA 3.25 (Distinction) • Merit Rank 483rd nationwide.<br />
                      <strong>Competitive Programming:</strong> Codeforces Rank 232 Div-2 (Blue Coder) • 5★ CodeChef • 1,000+ Algorithmic Solutions.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold mb-1 flex items-center gap-1.5">
                      <Award className="size-3.5 text-emerald-400" />
                      <span>Flagship Production Blueprints</span>
                    </h4>
                    <ul className="space-y-1 text-gray-400 text-[11.5px]">
                      <li>• <strong>Zomato AI Lakehouse:</strong> 35M+ orders, 42% warehouse compute cut ($18K/mo), $1.2M dispute fraud eliminated.</li>
                      <li>• <strong>Hybrid Anime Intelligence:</strong> Rust SIMD scoring &lt;0.5ms (50x speedup), NDCG@10 = 0.94, vLLM Multi-LoRA.</li>
                      <li>• <strong>AI Security Production Gateway:</strong> NeMo guardrails, PyRIT red-teaming, 95%+ jailbreak interception.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Embedded Live PDF Viewer (2-Page ATS Single-Column) */}
            <div className="rounded-2xl overflow-hidden border border-cyan-500/30 bg-[#070712] shadow-2xl">
              <div className="px-5 py-3.5 bg-[#0c0c1e] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-bold">Kishor_Kumar_Paroi_ATS_Single_Column.pdf</span>
                  <span className="text-gray-400 hidden sm:inline">(2 Pages • Standard ATS Clean Single Column)</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/files/resume_single_column.pdf"
                    download="Kishor_Kumar_Paroi_ATS_Resume.pdf"
                    className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1 font-semibold"
                  >
                    <Download className="size-3.5" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href="/files/resume_single_column.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLink className="size-3.5" />
                    <span>Fullscreen</span>
                  </a>
                </div>
              </div>

              <div className="relative w-full h-[850px] bg-[#05050b]">
                <object
                  data="/files/resume_single_column.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center font-mono">
                    <FileText className="size-16 text-cyan-400/40 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">2-Page ATS Resume PDF Ready for Inspection</h3>
                    <p className="text-xs text-gray-400 max-w-md mb-6">
                      Your browser does not support inline PDF rendering. Tap below to download or view the document directly.
                    </p>
                    <a
                      href="/files/resume_single_column.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold text-sm tracking-wider shadow-lg"
                    >
                      Open ATS Resume PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Embedded Live PDF Viewer (1-Page Executive CV) */}
            <div className="rounded-2xl overflow-hidden border border-fuchsia-500/30 bg-[#070712] shadow-2xl">
              <div className="px-5 py-3.5 bg-[#0c0c1e] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="size-2.5 rounded-full bg-pink-400 animate-pulse" />
                  <span className="text-white font-bold">Kishor_Kumar_Paroi_Executive_CV.pdf</span>
                  <span className="text-gray-400 hidden sm:inline">(1 Page • Compact Visual Briefing)</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="/files/resume.pdf"
                    download="Kishor_Kumar_Paroi_Executive_CV.pdf"
                    className="text-pink-400 hover:text-pink-300 flex items-center gap-1 font-semibold"
                  >
                    <Download className="size-3.5" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href="/files/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white flex items-center gap-1"
                  >
                    <ExternalLink className="size-3.5" />
                    <span>Fullscreen</span>
                  </a>
                </div>
              </div>

              <div className="relative w-full h-[850px] bg-[#05050b]">
                <object
                  data="/files/resume.pdf#toolbar=1&navpanes=0&scrollbar=1"
                  type="application/pdf"
                  className="w-full h-full"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center font-mono">
                    <FileText className="size-16 text-pink-400/40 mb-4" />
                    <h3 className="text-lg font-bold text-white mb-2">1-Page Executive CV PDF</h3>
                    <p className="text-xs text-gray-400 max-w-md mb-6">
                      Your browser does not support inline PDF rendering. Tap below to download or view the document directly.
                    </p>
                    <a
                      href="/files/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-sm tracking-wider shadow-lg"
                    >
                      Open Executive CV PDF
                    </a>
                  </div>
                </object>
              </div>
            </div>
          </div>
        )}

        {/* Live Ecosystem Portals Navigation Hub */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#090916] border border-cyan-500/20 shadow-xl font-mono">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] text-cyan-400 uppercase tracking-widest font-bold">ECOSYSTEM DIRECTORY</span>
              <h3 className="text-xl font-bold text-white">Verified Digital Portals</h3>
            </div>
            <p className="text-xs text-gray-400">
              Cross-linked architectures across high-performance subdomains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ecosystemPortals.map((portal) => (
              <a
                key={portal.id}
                href={portal.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{portal.icon}</span>
                    <ExternalLink className="size-3.5 text-gray-500 group-hover:text-cyan-400 transition" />
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                    {portal.name}
                  </div>
                  <div className="text-[11px] text-pink-400 font-semibold mb-2">
                    {portal.label}
                  </div>
                  <p className="text-[10.5px] text-gray-400 leading-snug">
                    {portal.description}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-cyan-400 group-hover:translate-x-1 transition duration-200">
                  <span>Launch Portal</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default DossierSection

