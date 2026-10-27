import React, { useState, useRef, useEffect } from 'react'
import { executiveBio, flagshipProjects, workExperiences, skillsMatrix, productionMetrics } from '../constants/portfolioData'
import { Terminal, Copy, Check, Sparkles, RefreshCw, Maximize2, Shield } from 'lucide-react'

const HackerTerminal = () => {
  const [inputVal, setInputVal] = useState('')
  const [copied, setCopied] = useState(false)
  const [isMatrixMode, setIsMatrixMode] = useState(false)
  const terminalEndRef = useRef(null)

  const initialHistory = [
    {
      type: 'system',
      text: 'NEURAL BASH v5.2 // ROOT SESSION ESTABLISHED',
    },
    {
      type: 'system',
      text: 'HOST: kkp@cyber-node • ARCH: x86_64 SIMD AVX-512 • STATUS: OPTIMAL',
    },
    {
      type: 'output',
      text: 'Welcome, Guest. Type "help" to display all available system commands or click a quick-command pill below.',
    },
  ]

  const [history, setHistory] = useState(initialHistory)

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase()
    if (!trimmed) return

    const newHistory = [...history, { type: 'input', text: `kkp@cyber-node:~$ ${cmd}` }]

    switch (trimmed) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • whoami    : Executive biography & background (RUET CSE Rank 483rd)
  • metrics   : Production benchmarks (<0.5ms SIMD, 35M+ Lakehouse)
  • exp       : Career timeline (phi0.ai, Samsung AI Core, kepi.ai, foodpanda)
  • projects  : Production architectures list (Zomato, Anime, KoomAI)
  • skills    : Technical competencies matrix & low-level frameworks
  • koom      : Deep-dive into KoomAI video platform ($24K MRR)
  • matrix    : Toggle digital green hacker rain mode
  • clear     : Wipe terminal display buffer
  • contact   : Display direct WhatsApp, email & portfolio uplink`,
        })
        break

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `KISHOR KUMAR PAROI (KKP)
Role: Principal AI Systems Architect • Enterprise Platform & Distributed Systems Leader
Education: B.Sc. in Computer Science & Engineering from RUET (Rank 483rd in Bangladesh)
Track Record: 5+ years building fault-tolerant microservices, Medallion Lakehouses, and production Multi-Agent AI systems.
Competitive: Codeforces Rank 232 Div-2 (Blue Coder) • 5★ CodeChef • 1000+ Algorithmic Solutions.`,
        })
        break

      case 'metrics':
        newHistory.push({
          type: 'output',
          text: `PRODUCTION TELEMETRY BENCHMARKS:
  [1] Rust SIMD Vector Scoring  : <0.5ms latency (50x speedup; 64% compute cost reduction)
  [2] Snowflake Medallion Core  : 35M+ orders (2.3 GB raw); $18K/month operational savings
  [3] Multi-Agent Orchestration : 99.4% task completion across 5 LangGraph cyclic agents ($1.4M contracts)
  [4] NVIDIA H100 LLM Scaling   : 3.8x throughput on 70B models via FlashAttention-2 & CUDA kernels (-54% p99)
  [5] Koom-AI Screen Engine     : <120ms WebRTC glass-to-glass latency; $24K MRR; 50K+ active mins`,
        })
        break

      case 'exp':
        newHistory.push({
          type: 'output',
          text: `CAREER TIMELINE (VERIFIED IN RESUME.PDF):
  • phi0.ai (July 2026 – Oct 2026)
    Forward Deployed AI Engineer | Europe (Remote)
    - 5 LangGraph autonomous cyclic agents (99.4% completion, 4x client onboarding)
    - Hybrid RAG (HNSW + BM25 + FlashRank ONNX / Cohere v3.5) with semantic caching (<35ms, $18K/mo saved)

  • Samsung AI Core / Care Health (March 2026 – June 2026)
    Data Engineering & AI Systems Intern | Gurgaon / Remote
    - AWS EMR, Athena, PySpark batch & streaming pipelines ($4.2K/run compute savings)
    - 70B LLM FlashAttention-2 & fused CUDA kernels on NVIDIA H100s (3.8x throughput, 54% p99 latency cut)
    - Kinesis real-time fraud detection engine ($380K annual fraud prevented)

  • kepi.ai (Jan 2022 – Sep 2025 | 3 yrs 9 mos)
    Senior Full Stack Engineer | Remote
    - Zero-downtime AWS EKS migration (300% throughput boost, 48% p95 latency reduction)
    - Event-driven Redis Streams & Celery backbone (15M+ daily async tasks)

  • foodpanda (2021 – 2022)
    Full Stack Engineer | Dhaka
    - Next.js & MERN checkout microservices (100K+ peak daily transactions, 99.98% uptime, $120K cart abandonment averted)

  • Founder @ KoomAI (Jan 2025 – Dec 2025)
    Founder & Principal Architect | Global Remote
    - WebRTC media pipeline (<120ms), native Electron C++ IPC, Next.js 16, $24K MRR.`,
        })
        break

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `15 PRODUCTION ARCHITECTURES:
  [01] Zomato Lakehouse          : Snowflake, PySpark Delta Lake, Feast Store (<5ms), dbt SCD-2
  [02] Hybrid Anime Recommender   : Sub-0.5ms Rust SIMD AVX-512, Dual-Tower NCF, vLLM Multi-LoRA
  [03] KoomAI Video Platform     : WebRTC <120ms, Electron C++ IPC, Next.js 16, $24K MRR
  [04] AI Security Gateway       : Microsoft PyRIT, NVIDIA NeMo Guardrails, BotShield Honeypot
  [05] Realtime Streaming MLOps  : Kafka, Flink windowing, Evidently AI & Alibi-Detect drift
  [06] Azure Synapse & ADF ETL   : ADLS Gen2, Databricks PySpark, Synapse Serverless CETAS
  [07] Smart Manufacturing MLOps : Computer vision defect classification on edge Kubernetes
  [08] Nexus-AI Lakehouse        : CQRS, Kafka Transactional Outbox, S3 Glacier archiving
  [09] AWS SageMaker Pipelines   : Distributed Horovod multi-GPU training & Canary endpoints
  [10] Autonomous Chatbot        : LangGraph multi-turn cyclic reflection with self-healing critic
  ... [Run project title for deeper technical inspect]`,
        })
        break

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `TECHNICAL ARSENAL BY CORE PILLARS:
  [AI / LLMOps]  : PyTorch, Multi-Agent LangGraph, FastMCP, Hybrid RAG, NeMo Guardrails, vLLM Multi-LoRA, CUDA Fused Kernels, RAGAS, Feast.
  [Big Data]     : Apache Spark, Delta Lakehouse, Snowflake, Apache Kafka, Apache Flink, dbt Core SCD-2, Debezium CDC, Airflow.
  [Cloud / IaC]  : Kubernetes (EKS, GKE, AKS), Terraform Multi-Cloud, Docker, Istio mTLS, AWS EMR/Kinesis/Lambda, GCP BigQuery/Vertex, Azure.
  [Low-Level]    : Rust (AVX-512 SIMD, Tokio), Go (Goroutines), C++ (IPC), Python 3.12 (uv, asyncio), SQL (Advanced Window Functions).`,
        })
        break

      case 'koom':
        newHistory.push({
          type: 'output',
          text: `KOOM-AI // REAL-TIME SCREEN INTELLIGENCE PLATFORM:
  • Live Portal : https://koom.kishor.tech
  • Architecture: WebRTC peer-to-peer mesh (<120ms glass-to-glass latency) with adaptive bitrate streaming (SVC)
  • Desktop App : Native Electron client with OS-level audio mixing & NVENC/VideoToolbox acceleration (-45% CPU)
  • Web App     : Next.js 16 App Router cockpit + AWS S3 multipart parallel uploads + CloudFront edge CDN
  • Financials  : $24,000 MRR in enterprise pilot adoption with Stripe idempotent webhook billing.`,
        })
        break

      case 'matrix':
        setIsMatrixMode(!isMatrixMode)
        newHistory.push({
          type: 'output',
          text: isMatrixMode ? 'Matrix mode: DEACTIVATED.' : 'Matrix mode: ACTIVATED. Visual green rain engaged.',
        })
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT UPLINK CHANNELS:
  • Email       : kishor.ruet.cse@gmail.com / 1703053@student.ruet.ac.bd
  • WhatsApp    : +880 1724-714156
  • Portfolio   : https://kishor.tech (macOS) | https://3d.kishor.tech (3D) | https://koom.kishor.tech
  • LinkedIn    : https://linkedin.com/in/kishor-kumar-paroi-b06344166
  • GitHub      : https://github.com/KishorKumarParoi`,
        })
        break

      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: "${cmd}". Type "help" for a list of valid commands.`,
        })
        break
    }

    setHistory(newHistory)
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal)
    }
  }

  const copyToClipboard = () => {
    const textToCopy = history.map((item) => item.text).join('\n')
    navigator.clipboard.writeText(textToCopy)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const quickCommands = ['whoami', 'metrics', 'exp', 'projects', 'skills', 'koom', 'contact', 'clear']

  return (
    <section id="terminal" className="relative w-full py-20 px-4 sm:px-6 lg:px-8 bg-[#020205] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 font-mono text-xs mb-3">
            <Terminal className="size-3.5" />
            <span>INTERACTIVE HACKER COCKPIT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            Root Terminal Shell
          </h2>
          <p className="text-xs sm:text-sm font-mono text-gray-400 mt-2 max-w-xl mx-auto">
            Direct interface into system telemetry, verified metrics, and career architectures.
          </p>
        </div>

        {/* Quick Command Action Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-gray-400 mr-1">Quick execute:</span>
          {quickCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-cyan-500/20 text-cyan-300 hover:text-white border border-cyan-500/20 text-xs font-mono transition cursor-pointer"
            >
              ${cmd}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div className={`w-full rounded-2xl overflow-hidden border shadow-2xl transition-all duration-300 ${
          isMatrixMode
            ? 'border-emerald-500/60 shadow-[0_0_35px_rgba(16,185,129,0.3)] bg-black/95 text-emerald-400'
            : 'border-cyan-500/30 shadow-[0_0_40px_rgba(0,0,0,0.9)] bg-[#07070f]/95 text-gray-200'
        }`}>
          {/* Terminal Title Bar */}
          <div className="px-4 py-3 bg-[#0c0c1a] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-rose-500/80 inline-block"></span>
              <span className="size-3 rounded-full bg-amber-500/80 inline-block"></span>
              <span className="size-3 rounded-full bg-emerald-500/80 inline-block"></span>
              <span className="ml-2 font-mono text-xs text-gray-400 font-medium hidden sm:inline">
                kkp@cyber-node: ~/portfolio (bash)
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1 text-[11px] font-mono text-gray-400 hover:text-white transition px-2 py-1 rounded hover:bg-white/5 cursor-pointer"
                title="Copy terminal buffer"
              >
                {copied ? <Check className="size-3 text-emerald-400" /> : <Copy className="size-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
              <button
                onClick={() => setHistory(initialHistory)}
                className="text-gray-400 hover:text-white transition p-1 rounded hover:bg-white/5 cursor-pointer"
                title="Reset session"
              >
                <RefreshCw className="size-3" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm h-[380px] overflow-y-auto space-y-3 leading-relaxed select-text">
            {history.map((item, idx) => (
              <div key={idx}>
                {item.type === 'system' && (
                  <div className="text-cyan-400/80 font-bold tracking-wider text-[11px]">
                    [SYS] {item.text}
                  </div>
                )}
                {item.type === 'input' && (
                  <div className="text-yellow-400 font-semibold">{item.text}</div>
                )}
                {item.type === 'output' && (
                  <pre className="whitespace-pre-wrap text-gray-300 font-mono text-xs leading-normal">
                    {item.text}
                  </pre>
                )}
                {item.type === 'error' && (
                  <div className="text-rose-400">{item.text}</div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Terminal Command Input Prompt */}
          <div className="p-3 sm:p-4 bg-[#05050b] border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm">
            <span className="text-emerald-400 font-bold shrink-0">kkp@cyber-node:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type 'help' or any command..."
              className="w-full bg-transparent border-none outline-none text-cyan-300 placeholder-gray-600 font-mono text-xs sm:text-sm"
              autoFocus
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="px-3 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 text-xs font-mono font-bold transition cursor-pointer shrink-0"
            >
              RUN
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HackerTerminal
