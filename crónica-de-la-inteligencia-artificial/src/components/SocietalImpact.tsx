import React, { useState } from 'react';
import { IMPACT_SECTORS, ImpactSector } from '../data/aiData';
import {
  HeartPulse,
  Briefcase,
  GraduationCap,
  Atom,
  ShieldAlert,
  ArrowUpRight,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';

export const SocietalImpact: React.FC = () => {
  const [selectedSectorId, setSelectedSectorId] = useState<string>('salud');

  const selectedSector =
    IMPACT_SECTORS.find((s) => s.id === selectedSectorId) || IMPACT_SECTORS[0];

  const getSectorIcon = (id: string) => {
    switch (id) {
      case 'salud':
        return <HeartPulse className="w-4 h-4" />;
      case 'trabajo':
        return <Briefcase className="w-4 h-4" />;
      case 'educacion':
        return <GraduationCap className="w-4 h-4" />;
      case 'ciencia':
        return <Atom className="w-4 h-4" />;
      case 'etica':
        return <ShieldAlert className="w-4 h-4" />;
      default:
        return <HeartPulse className="w-4 h-4" />;
    }
  };

  return (
    <section id="impacto" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
            <span>04. Impacto en la Sociedad Moderna</span>
            <span aria-hidden="true">·</span>
            <span>Transformación Civilizatoria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            ¿Cómo está transformando la IA el tejido del mundo actual?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            La inteligencia artificial ya no es un experimento de laboratorio; es una tecnología de propósito general comparable con la electricidad o el motor de vapor. Explora los cinco dominios clave donde reconfigura la existencia humana.
          </p>
        </div>

        {/* Sector Selection Tabs Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
          {IMPACT_SECTORS.map((sector) => {
            const isSelected = selectedSectorId === sector.id;
            return (
              <button
                key={sector.id}
                onClick={() => setSelectedSectorId(sector.id)}
                className={`flex items-center gap-2.5 p-3.5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-rose-500 text-white shadow-lg ring-1 ring-purple-500/30'
                    : 'bg-slate-950/60 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <span
                  className={`p-2 rounded-lg shrink-0 ${
                    isSelected
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {getSectorIcon(sector.id)}
                </span>
                <span className="text-xs font-semibold truncate leading-tight">
                  {sector.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Sector Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Visual Asset & Quantitative Proof (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden border border-purple-950/80 bg-slate-950 shadow-xl ring-1 ring-purple-900/20">
            <div className="relative">
              <img
                src="/src/assets/images/ai_biotech_science_1793019256489.jpg"
                alt="Laboratorio científico moderno de biotecnología con dinámica de plegamiento de proteínas en pantalla de alta resolución"
                referrerPolicy="no-referrer"
                className="w-full h-[260px] sm:h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-xs font-mono text-rose-300 uppercase tracking-wider mb-1">
                  Evidencia en el Mundo Real
                </div>
                <div className="text-sm font-semibold text-white">
                  Investigación biomédica y modelado biofísico
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              {/* Quantitative Proof Metric */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-3xl font-extrabold text-white font-mono tabular-nums">
                  {selectedSector.metric}
                </div>
                <div className="text-xs font-semibold text-rose-400">
                  {selectedSector.metricLabel}
                </div>
              </div>

              {/* Real World Case Study */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  <ArrowUpRight className="w-4 h-4 text-purple-400" />
                  <span>Caso de Estudio Destacado</span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {selectedSector.caseStudyTitle}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {selectedSector.caseStudyText}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Deep Analysis, Opportunities & Risks (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                <span>Sector Evaluado</span>
                <span className="text-slate-500">·</span>
                <span className="text-purple-300">{selectedSector.name}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-3">
                {selectedSector.shortDesc}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedSector.description}
              </p>
            </div>

            {/* Opportunities vs Risks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-slate-800">
              {/* Opportunities */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  <CheckCircle className="w-4 h-4 shrink-0" />
                  <span>Oportunidades Tangibles</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedSector.opportunities.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed"
                    >
                      <span className="text-emerald-400 font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risks & Mitigations */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 shrink-0" />
                  <span>Riesgos y Desafíos Críticos</span>
                </div>
                <ul className="space-y-2.5">
                  {selectedSector.risks.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-3 rounded-lg border border-slate-800/80 leading-relaxed"
                    >
                      <span className="text-amber-400 font-bold mt-0.5">!</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
