import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HackerCockpit from './components/HackerCockpit'
import HackerTerminal from './components/HackerTerminal'
import ProjectsSection from './components/ProjectsSection'
import ExperienceSection from './components/ExperienceSection'
import DossierSection from './components/DossierSection'
import SkillsSection from './components/SkillsSection'
import HackerJourneySection from './components/HackerJourneySection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#030308] text-white selection:bg-cyan-500 selection:text-black">
      {/* Fixed Cyberpunk Navigation Bar with Audio Synthesizer */}
      <Navbar />

      <main className="relative z-10 flex flex-col w-full">
        {/* Hero Section */}
        <Hero />

        {/* 3D Hacker Room Cockpit Canvas */}
        <HackerCockpit />

        {/* Interactive Hacker Terminal */}
        <HackerTerminal />

        {/* Flagship Production Architectures Showcase */}
        <ProjectsSection />

        {/* 38-Module AI Engineering Learning Journey */}
        <HackerJourneySection />

        {/* Career Timeline & Experience */}
        <ExperienceSection />

        {/* Production Dossier & 2-Page ATS Resume */}
        <DossierSection />

        {/* Technical Arsenal & Core Pillars */}
        <SkillsSection />

        {/* Secure Uplink & Transmission */}
        <ContactSection />
      </main>
    </div>
  )
}

export default App