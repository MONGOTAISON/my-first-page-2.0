import React, { useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/aiData';
import {
  Calendar,
  Users,
  Lightbulb,
  Award,
  ChevronLeft,
  ChevronRight,
  Filter,
  Quote,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TimelineSectionProps {
  selectedEraFilter: string;
  onFilterChange: (era: string) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  selectedEraFilter,
  onFilterChange
}) => {
  const [selectedEventId, setSelectedEventId] = useState<string>('turing-1950');
  const [paradigmFilter, setParadigmFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const eraButtons = [
    { id: 'all', label: 'Todas las Eras' },
    { id: 'genesis', label: '1950-1970 · Génesis' },
    { id: 'inviernos', label: '1974-1980 · Inviernos' },
    { id: 'renacimiento', label: '1980-1997 · Renacimiento' },
    { id: 'deeplearning', label: '2012-2016 · Deep Learning' },
    { id: 'generativa', label: '2017-2026 · Era Generativa' }
  ];

  const filteredEvents = TIMELINE_EVENTS.filter((event) => {
    const matchesEra = selectedEraFilter === 'all' || event.era === selectedEraFilter;
    const matchesParadigm =
      paradigmFilter === 'all' ||
      (paradigmFilter === 'simbolico' && event.paradigm.includes('Simbólico')) ||
      (paradigmFilter === 'conexionista' && event.paradigm.includes('Conexionista'));
    const matchesSearch =
      searchQuery.trim() === '' ||
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.protagonists.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesEra && matchesParadigm && matchesSearch;
  });

  const selectedEvent =
    TIMELINE_EVENTS.find((e) => e.id === selectedEventId) || TIMELINE_EVENTS[0];

  const currentIndex = TIMELINE_EVENTS.findIndex((e) => e.id === selectedEvent.id);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedEventId(TIMELINE_EVENTS[currentIndex - 1].id);
    }
  };

  const handleNext = () => {
    if (currentIndex < TIMELINE_EVENTS.length - 1) {
      setSelectedEventId(TIMELINE_EVENTS[currentIndex + 1].id);
    }
  };

  return (
    <section id="historia" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
            <span>01. Historia y Cronología</span>
            <span aria-hidden="true">·</span>
            <span>70 Años de Investigación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            El camino de la IA: de la lógica abstracta al aprendizaje profundo.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Explora los hitos que definieron la inteligencia computacional. Alterna entre eras históricas, filtra por paradigmas teóricos o interactúa con cada evento para comprender su impacto en el presente.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col gap-4 mb-10 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Era Filter Segmented Buttons */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-slate-400 mr-2 flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-rose-400" />
                <span>Eras:</span>
              </span>
              {eraButtons.map((btn) => {
                const isActive = selectedEraFilter === btn.id;
                return (
                  <button
                    key={btn.id}
                    onClick={() => onFilterChange(btn.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                      isActive
                        ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-950/40'
                        : 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-800'
                    }`}
                  >
                    {btn.label}
                  </button>
                );
              })}
            </div>

            {/* Paradigm Selector Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setParadigmFilter('all')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                  paradigmFilter === 'all'
                    ? 'bg-slate-700 text-white font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Todos los paradigmas
              </button>
              <button
                onClick={() => setParadigmFilter('simbolico')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                  paradigmFilter === 'simbolico'
                    ? 'bg-purple-950 text-rose-300 border border-purple-800 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Simbólico
              </button>
              <button
                onClick={() => setParadigmFilter('conexionista')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors ${
                  paradigmFilter === 'conexionista'
                    ? 'bg-purple-950 text-rose-300 border border-purple-800 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Redes / Conexionista
              </button>
            </div>
          </div>
        </div>

        {/* 2-Zone Sandbox: Timeline Rail (Left) & Deep Dive Inspector (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Zone: Interactive Event Cards List */}
          <div className="lg:col-span-5 space-y-3 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin">
            {filteredEvents.length === 0 ? (
              <div className="p-8 text-center text-slate-400 bg-slate-900/40 rounded-xl border border-slate-800">
                No se encontraron hitos para los filtros seleccionados.
                <div className="mt-3">
                  <button
                    onClick={() => {
                      onFilterChange('all');
                      setParadigmFilter('all');
                      setSearchQuery('');
                    }}
                    className="px-3 py-1.5 text-xs text-rose-400 bg-slate-800 rounded-lg hover:bg-slate-700"
                  >
                    Restablecer filtros
                  </button>
                </div>
              </div>
            ) : (
              filteredEvents.map((evt) => {
                const isSelected = selectedEvent.id === evt.id;
                return (
                  <button
                    key={evt.id}
                    onClick={() => setSelectedEventId(evt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all text-slate-100 ${
                      isSelected
                        ? 'bg-slate-900 border-rose-500 shadow-md ring-1 ring-purple-500/30'
                        : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-bold tabular-nums">
                        <Calendar className="w-3.5 h-3.5 text-purple-400" />
                        <span>{evt.year}</span>
                      </div>
                      <span className="text-[11px] text-slate-400 font-medium truncate">
                        {evt.eraLabel}
                      </span>
                    </div>

                    <h3 className="text-sm font-semibold text-white mb-1.5 leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {evt.summary}
                    </p>

                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/60">
                      <span>{evt.protagonists.slice(0, 2).join(', ')}</span>
                      <span className="text-rose-400 font-medium flex items-center gap-1">
                        Ver detalles
                        <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </button>
                );
              })
            )}
          </div>

          {/* Right Zone: Deep Dive Inspector Card */}
          <div className="lg:col-span-7 sticky top-24">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden">
              {/* Top Meta info */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tabular-nums">
                  <span className="px-2.5 py-1 bg-purple-950/80 border border-purple-800/60 rounded text-rose-300">
                    Año {selectedEvent.year}
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-300">{selectedEvent.eraLabel}</span>
                </div>

                {/* Nav Stepper buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors"
                    title="Hito anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-400 font-mono px-2 tabular-nums">
                    {currentIndex + 1} / {TIMELINE_EVENTS.length}
                  </span>
                  <button
                    onClick={handleNext}
                    disabled={currentIndex === TIMELINE_EVENTS.length - 1}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed text-slate-300 hover:text-white transition-colors"
                    title="Hito siguiente"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Title & Protagonists */}
              <div className="my-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-3">
                  {selectedEvent.title}
                </h3>

                <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-medium text-slate-300">Protagonistas clave:</span>
                  <span>{selectedEvent.protagonists.join(' · ')}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-sm text-slate-200 leading-relaxed mb-6">
                  {selectedEvent.summary}
                </div>
              </div>

              {/* Grid: Salto Técnico vs Legado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400">
                    <Lightbulb className="w-4 h-4 text-purple-400" />
                    <span>Salto Conceptual / Técnico</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedEvent.breakthrough}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-400">
                    <Award className="w-4 h-4 text-rose-400" />
                    <span>Legado en el Presente</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedEvent.legacy}
                  </p>
                </div>
              </div>

              {/* Quote if available */}
              {selectedEvent.quote && (
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 italic flex items-start gap-3">
                  <Quote className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="mb-1">"{selectedEvent.quote}"</p>
                    {selectedEvent.quoteAuthor && (
                      <span className="text-[11px] font-semibold text-rose-300 not-italic">
                        — {selectedEvent.quoteAuthor}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Paradigm Footer tag */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span>Paradigma dominante:</span>
                <span className="font-semibold text-rose-300">{selectedEvent.paradigm}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
