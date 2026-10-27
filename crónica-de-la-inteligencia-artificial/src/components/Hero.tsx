import React from 'react';
import { ArrowDown, Cpu, Sparkles, History, Compass } from 'lucide-react';

interface HeroProps {
  onSelectEra: (eraId: string) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectEra, onExploreClick }) => {
  const quickEras = [
    { id: 'genesis', label: '1950 · Los Inicios', desc: 'Turing & Dartmouth' },
    { id: 'inviernos', label: '1974 · Los Inviernos', desc: 'Promesas vs Límites' },
    { id: 'renacimiento', label: '1986 · Conexiones', desc: 'Backprop & Deep Blue' },
    { id: 'deeplearning', label: '2012 · Deep Learning', desc: 'AlexNet & AlphaGo' },
    { id: 'generativa', label: '2017+ · Era Generativa', desc: 'Transformers & Agentes' },
  ];

  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient glow with red and purple */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-gradient-to-r from-red-600/15 via-purple-600/15 to-violet-600/15 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Context, Headline, Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Clean unboxed editorial kicker without pill badges */}
            <div className="flex items-center gap-2 text-xs font-bold text-rose-400 mb-4 tracking-wider uppercase font-mono">
              <span className="text-white font-black text-sm">LO MA DURO</span>
              <span aria-hidden="true">·</span>
              <span className="text-purple-300">Inteligencia Artificial</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-300">Historia & Impacto</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] text-balance font-display mb-6">
              De las máquinas de Turing a las arquitecturas neuronales profundas.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              La inteligencia artificial no surgió de la noche a la mañana. Es el resultado de siete décadas de hipótesis lógicas, inviernos financieros, saltos matemáticos inesperados y una revolución computacional que hoy redefine la medicina, el empleo, el conocimiento y la cultura humana.
            </p>

            {/* Interactive Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button
                onClick={onExploreClick}
                className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-red-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg transition-all shadow-lg shadow-purple-950/50 active:scale-95 whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-rose-200" />
                <span>Explorar Línea de Tiempo</span>
              </button>

              <a
                href="#simulador"
                className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-850 border border-purple-900/60 hover:border-rose-500/80 rounded-lg transition-colors whitespace-nowrap"
              >
                <Cpu className="w-4 h-4 text-rose-400" />
                <span>Probar Simulador Técnico</span>
              </a>

              <a
                href="#impacto"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 hover:text-rose-400 transition-colors whitespace-nowrap"
              >
                <span>Ver Impacto Social</span>
                <ArrowDown className="w-4 h-4 text-purple-400" />
              </a>
            </div>

            {/* Quick Era Navigation Buttons */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-3">
                Saltar directamente a un período histórico:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                {quickEras.map((era) => (
                  <button
                    key={era.id}
                    onClick={() => onSelectEra(era.id)}
                    className="p-2.5 rounded-lg text-left bg-slate-900/70 hover:bg-slate-850 border border-slate-800 hover:border-purple-600/70 transition-all group"
                  >
                    <div className="text-xs font-semibold text-slate-200 group-hover:text-rose-300 truncate">
                      {era.label}
                    </div>
                    <div className="text-[11px] text-slate-500 group-hover:text-slate-400 truncate mt-0.5">
                      {era.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative rounded-2xl overflow-hidden border border-purple-950/80 bg-slate-900/60 shadow-2xl group ring-1 ring-purple-900/20">
              <img
                src="/src/assets/images/hero_ai_evolution_1793019254727.jpg"
                alt="Evolución visual de la inteligencia artificial desde engranajes de cálculo mecánico hasta sinapsis neuronales e hiperespacios vectoriales"
                referrerPolicy="no-referrer"
                className="w-full h-[360px] sm:h-[420px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none">
                <div className="flex items-center gap-2 text-xs text-rose-300 font-medium mb-1">
                  <History className="w-3.5 h-3.5 text-purple-400" />
                  <span>Crónica visual</span>
                  <span aria-hidden="true">·</span>
                  <span>1890s a 2026+</span>
                </div>
                <p className="text-sm font-semibold text-white drop-shadow-sm">
                  De las tarjetas perforadas a las matrices de autoatención multimodal
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Quantitative Impact & Rigor Strip */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              1956
            </div>
            <div className="text-xs font-semibold text-rose-400">Taller de Dartmouth</div>
            <p className="text-xs text-slate-400 leading-snug">
              Fundación formal de la IA como campo científico autónomo.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              200M+
            </div>
            <div className="text-xs font-semibold text-purple-400">Proteínas Mapeadas</div>
            <p className="text-xs text-slate-400 leading-snug">
              Resueltas por AlphaFold, abriendo un nuevo siglo biológico.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              1.8T+
            </div>
            <div className="text-xs font-semibold text-rose-400">Pesos Sinápticos</div>
            <p className="text-xs text-slate-400 leading-snug">
              Parámetros en los modelos multimodales de frontera actuales.
            </p>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-white font-mono tabular-nums">
              60%
            </div>
            <div className="text-xs font-semibold text-purple-400">Tareas Asistibles</div>
            <p className="text-xs text-slate-400 leading-snug">
              Estimación de rutinas laborales integradas con asistentes cognitivos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
