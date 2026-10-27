import React from 'react';
import { ArrowUp, Sparkles, BookOpen } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-12 pb-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand info & Contact details */}
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2 text-white font-bold text-lg font-display">
              <span className="flex items-center justify-center w-7 h-7 rounded bg-purple-950/80 border border-purple-800/60 text-rose-400">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="bg-gradient-to-r from-red-500 via-rose-400 to-purple-400 bg-clip-text text-transparent font-black tracking-wider uppercase">LO MA DURO</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              La plataforma más sólida y completa sobre historia, evolución técnica, arquitecturas y el impacto de la inteligencia artificial en la sociedad moderna.
            </p>

            {/* Direct Contact Card inside Footer */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
              <a
                href="mailto:dmaicoldias@gmail.com"
                className="flex items-center gap-1.5 text-slate-300 hover:text-rose-400 font-mono transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <span>✉</span>
                <span>dmaicoldias@gmail.com</span>
              </a>
              <a
                href="tel:8294277707"
                className="flex items-center gap-1.5 text-slate-300 hover:text-rose-400 font-mono transition-colors bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800"
              >
                <span>📞</span>
                <span>8294277707 (Llamar / WhatsApp)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="font-semibold text-slate-200 uppercase tracking-wider text-[11px]">
              Secciones
            </div>
            <ul className="space-y-1.5">
              <li>
                <button
                  onClick={() => onNavigate('historia')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Línea de Tiempo Histórica
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('evolucion')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Evolución de Paradigmas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('simulador')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Simulador de Tokens y Atención
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('impacto')}
                  className="hover:text-rose-400 transition-colors"
                >
                  Impacto en la Sociedad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('soporte')}
                  className="text-rose-400 hover:text-rose-300 font-semibold transition-colors"
                >
                  Soporte
                </button>
              </li>
            </ul>
          </div>

          {/* Return to top */}
          <div className="flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-lg transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5 text-rose-400" />
              <span>Volver al inicio</span>
            </button>
            <div className="text-[11px] text-slate-500 mt-4 md:text-right">
              LO MA DURO · Inteligencia Artificial
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} LO MA DURO · Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:dmaicoldias@gmail.com" className="hover:text-slate-300">dmaicoldias@gmail.com</a>
            <span>·</span>
            <a href="tel:8294277707" className="hover:text-slate-300">8294277707</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
