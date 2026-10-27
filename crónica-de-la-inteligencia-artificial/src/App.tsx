import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { EvolutionParadigms } from './components/EvolutionParadigms';
import { InteractiveSimulator } from './components/InteractiveSimulator';
import { SocietalImpact } from './components/SocietalImpact';
import { EthicalDilemmasAndMyths } from './components/EthicalDilemmasAndMyths';
import { QuizSection } from './components/QuizSection';
import { GlossarySection } from './components/GlossarySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedEraFilter, setSelectedEraFilter] = useState<string>('all');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectEra = (eraId: string) => {
    setSelectedEraFilter(eraId);
    scrollToSection('historia');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-600/40 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar onNavigate={scrollToSection} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onSelectEra={handleSelectEra}
          onExploreClick={() => scrollToSection('historia')}
        />

        {/* 01. Timeline & Historical Journey */}
        <TimelineSection
          selectedEraFilter={selectedEraFilter}
          onFilterChange={(era) => setSelectedEraFilter(era)}
        />

        {/* 02. Architectural Evolution & Paradigms */}
        <EvolutionParadigms />

        {/* 03. Interactive Simulator & Tokenizer */}
        <InteractiveSimulator />

        {/* 04. Societal Impact in Modern World */}
        <SocietalImpact />

        {/* 05. Ethical Dilemmas & Mythbusters */}
        <EthicalDilemmasAndMyths />

        {/* 06. Interactive Knowledge Quiz */}
        <QuizSection />

        {/* 07. Technical Glossary */}
        <GlossarySection />

        {/* 08. Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
