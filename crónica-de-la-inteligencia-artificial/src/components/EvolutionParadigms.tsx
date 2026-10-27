import React, { useState } from 'react';
import { PARADIGMS, ParadigmInfo } from '../data/aiData';
import { CheckCircle2, AlertCircle, Cpu, Network, Boxes, Binary, Bot, Layers } from 'lucide-react';

export const EvolutionParadigms: React.FC = () => {
  const [activeParadigmId, setActiveParadigmId] = useState<string>('transformers');
  const [viewMode, setViewMode] = useState<'detail' | 'matrix'>('detail');

  const activeParadigm =
    PARADIGMS.find((p) => p.id === activeParadigmId) || PARADIGMS[3];

  const getParadigmIcon = (id: string) => {
    switch (id) {
      case 'symbolic':
        return <Binary className="w-4 h-4" />;
      case 'classical_ml':
        return <Cpu className="w-4 h-4" />;
      case 'deep_learning':
        return <Network className="w-4 h-4" />;
      case 'transformers':
        return <Boxes className="w-4 h-4" />;
      case 'agentic':
        return <Bot className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <section id="evolucion" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
              <span>02. Arquitecturas y Paradigmas</span>
              <span aria-hidden="true">·</span>
              <span>De las Reglas a la Autoatención</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
              ¿Cómo evolucionó la tecnología detrás de la IA?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              El salto de los algoritmos basados en reglas lógicas hacia los modelos de autoatención multimodal transformó la relación con la computación: pasamos de indicarle a la máquina qué hacer paso a paso, a permitir que infiera estructuras semánticas por sí misma.
            </p>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg shrink-0">
            <button
              onClick={() => setViewMode('detail')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                viewMode === 'detail'
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Ficha por Paradigma
            </button>
            <button
              onClick={() => setViewMode('matrix')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap ${
                viewMode === 'matrix'
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-950/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Tabla Comparativa
            </button>
          </div>
        </div>

        {/* Paradigm Selector Buttons Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-10">
          {PARADIGMS.map((p) => {
            const isSelected = activeParadigmId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => {
                  setActiveParadigmId(p.id);
                  setViewMode('detail');
                }}
                className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-rose-500 text-white shadow-md ring-1 ring-purple-500/30'
                    : 'bg-slate-950/60 hover:bg-slate-900/80 border-slate-800 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5 text-xs">
                  <span
                    className={`p-1.5 rounded-md ${
                      isSelected
                        ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {getParadigmIcon(p.id)}
                  </span>
                  <span className="font-mono text-[11px] text-purple-400 tabular-nums">
                    {p.period}
                  </span>
                </div>
                <div className="text-xs font-semibold text-white leading-tight">
                  {p.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Detail View */}
        {viewMode === 'detail' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Attention Matrix Card (Left / 5 cols) */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-purple-950/80 bg-slate-950 shadow-xl ring-1 ring-purple-900/20">
              <div className="relative">
                <img
                  src="/src/assets/images/neural_attention_matrix_1793019254654.jpg"
                  alt="Esquema conceptual 3D del bloque de autoatención con múltiples cabezales (Multi-Head Attention)"
                  referrerPolicy="no-referrer"
                  className="w-full h-[280px] sm:h-[340px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-mono text-rose-300 uppercase tracking-wider mb-1">
                    Arquitectura Transformer
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Matriz de Pesos Query, Key y Value
                  </div>
                </div>
              </div>

              <div className="p-5 space-y-4">
                <div className="text-xs text-slate-300 leading-relaxed">
                  A diferencia de las redes recurrentes antiguas que procesaban palabra por palabra en un embudo secuencial, los Transformers evalúan la relación matemática de todas las palabras simultáneamente.
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-xs font-semibold text-rose-400">
                    Algoritmo y Núcleo:
                  </div>
                  <div className="text-xs text-slate-200 font-mono">
                    {activeParadigm.keyAlgorithm}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <div className="text-xs font-semibold text-purple-400">
                    Caso Representativo:
                  </div>
                  <div className="text-xs text-slate-300">
                    {activeParadigm.exampleUse}
                  </div>
                </div>
              </div>
            </div>

            {/* Paradigm Breakdown Details (Right / 7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold mb-2">
                  <span className="text-purple-400">{activeParadigm.period}</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-rose-400">{activeParadigm.name}</span>
                </div>
                <h3 className="text-2xl font-bold text-white font-display mb-2">
                  {activeParadigm.motto}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeParadigm.mechanism}
                </p>
              </div>

              {/* Grid: Ventajas vs Limitaciones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                {/* Advantages */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Fortalezas Clave</span>
                  </div>
                  <ul className="space-y-2">
                    {activeParadigm.advantages.map((adv, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80"
                      >
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>Límites y Retos</span>
                  </div>
                  <ul className="space-y-2">
                    {activeParadigm.limitations.map((lim, idx) => (
                      <li
                        key={idx}
                        className="text-xs text-slate-300 flex items-start gap-2 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80"
                      >
                        <span className="text-amber-400 font-bold mt-0.5">!</span>
                        <span>{lim}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Matrix View */
          <div className="rounded-2xl border border-slate-800 bg-slate-950 overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-slate-300 border-b border-slate-800">
                  <tr>
                    <th className="p-4 font-semibold">Paradigma</th>
                    <th className="p-4 font-semibold">Período</th>
                    <th className="p-4 font-semibold">Cómo Aprende</th>
                    <th className="p-4 font-semibold">Fortaleza Primaria</th>
                    <th className="p-4 font-semibold">Principal Cuello de Botella</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {PARADIGMS.map((p) => (
                    <tr
                      key={p.id}
                      onClick={() => {
                        setActiveParadigmId(p.id);
                        setViewMode('detail');
                      }}
                      className="hover:bg-slate-900/50 cursor-pointer transition-colors"
                    >
                      <td className="p-4 font-semibold text-white whitespace-nowrap">
                        {p.name}
                      </td>
                      <td className="p-4 font-mono text-purple-400 tabular-nums whitespace-nowrap">
                        {p.period}
                      </td>
                      <td className="p-4 max-w-xs">{p.mechanism}</td>
                      <td className="p-4 text-emerald-300">{p.advantages[0]}</td>
                      <td className="p-4 text-amber-300">{p.limitations[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
