import React, { useState } from 'react';
import { MYTHS_REALITIES, MythItem } from '../data/aiData';
import { ShieldCheck, ChevronDown, ChevronUp, Scale, Zap, Globe, Sparkles } from 'lucide-react';

export const EthicalDilemmasAndMyths: React.FC = () => {
  const [expandedMythId, setExpandedMythId] = useState<string | null>('sentience');

  const toggleMyth = (id: string) => {
    setExpandedMythId(expandedMythId === id ? null : id);
  };

  const dilemmas = [
    {
      title: 'Alineación y Control de Sistemas Avanzados',
      icon: <Scale className="w-5 h-5 text-rose-400" />,
      desc: '¿Cómo garantizamos que un modelo con capacidades de razonamiento superiores persiga siempre objetivos compatibles con el bienestar humano sin consecuencias imprevistas?'
    },
    {
      title: 'La Verdad y la Confianza en la Era de los Deepfakes',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      desc: 'Cuando cualquier voz o video puede falsificarse en segundos con realismo perfecto, la evidencia digital pierde su valor testimonial automático y exige criptografía de procedencia.'
    },
    {
      title: 'Huella de Carbono y Consumo Energético',
      icon: <Zap className="w-5 h-5 text-amber-400" />,
      desc: 'El entrenamiento de clústeres con cientos de miles de aceleradores y su refrigeración líquida tensionan las redes eléctricas, acelerando la transición hacia centros de datos alimentados por energía nuclear o geotérmica.'
    }
  ];

  return (
    <section id="etica-quiz" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
            <span>05. Dilemas Éticos y Desmitificación</span>
            <span aria-hidden="true">·</span>
            <span>Pensamiento Crítico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            Mitos populares frente a las realidades científicas de la IA.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Entre el sensacionalismo apocalíptico y la fascinación ciega, la comprensión rigurosa de las capacidades reales de los modelos es la mejor herramienta para una adopción ética y lúcida.
          </p>
        </div>

        {/* 3 Core Dilemmas Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {dilemmas.map((d, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-3 flex flex-col justify-between hover:border-purple-900/60 transition-colors"
            >
              <div>
                <div className="p-2.5 rounded-lg bg-purple-950/60 border border-purple-800/60 w-fit mb-3">
                  {d.icon}
                </div>
                <h3 className="text-base font-bold text-white font-display mb-2">
                  {d.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {d.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Myths vs Reality Interactive Accordion */}
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-rose-400" />
              <span>Desmontando mitos frecuentes (Haz clic para revelar el análisis):</span>
            </h3>
          </div>

          <div className="space-y-3">
            {MYTHS_REALITIES.map((item) => {
              const isExpanded = expandedMythId === item.id;
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-slate-800 bg-slate-900/70 overflow-hidden transition-all hover:border-purple-900/50"
                >
                  <button
                    onClick={() => toggleMyth(item.id)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-slate-900 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-purple-950/80 text-rose-300 border border-purple-800/60 whitespace-nowrap mt-0.5">
                        {item.verdict}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {item.myth}
                      </span>
                    </div>
                    <span className="p-1 text-slate-400 shrink-0">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 bg-slate-950/60 space-y-3">
                      <div className="flex items-start gap-2 text-xs font-semibold text-rose-400">
                        <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                        <span>Realidad Científica:</span>
                      </div>
                      <p className="text-sm font-medium text-slate-200">
                        {item.reality}
                      </p>
                      <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/80 p-3.5 rounded-lg border border-slate-800">
                        {item.explanation}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
