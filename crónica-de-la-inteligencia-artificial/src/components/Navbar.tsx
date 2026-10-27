import React, { useState } from 'react';
import { Menu, X, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'historia', label: 'Historia y Eras' },
    { id: 'evolucion', label: 'Evolución Técnica' },
    { id: 'simulador', label: 'Simulador de IA' },
    { id: 'impacto', label: 'Impacto Social' },
    { id: 'soporte', label: 'Soporte' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single brand wordmark */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center gap-2.5 text-lg font-black tracking-tight text-white whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-purple-950 border border-purple-800/70 text-rose-400 shadow-sm shadow-purple-950">
              <Sparkles className="w-4 h-4" />
            </span>
            <span className="font-display tracking-wider text-xl uppercase font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-300 to-purple-300">
              LO MA DURO
            </span>
          </a>

          {/* Zone 2: 4-5 single-line clean text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-rose-400 font-semibold'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleNavClick('historia')}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg transition-all shadow-md shadow-purple-950/50 whitespace-nowrap shrink-0 active:scale-95"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Iniciar Recorrido</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Alternar menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className="block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:text-rose-400 hover:bg-slate-900 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('historia')}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>Iniciar Recorrido Histórico</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
