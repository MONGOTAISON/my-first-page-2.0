import React, { useState } from 'react';
import { GLOSSARY_TERMS, GlossaryTerm } from '../data/aiData';
import { BookOpen, Search } from 'lucide-react';

export const GlossarySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Todos los términos' },
    { id: 'Arquitectura', label: 'Arquitectura' },
    { id: 'Entrenamiento', label: 'Entrenamiento' },
    { id: 'Uso', label: 'Uso e Inferencia' },
    { id: 'Ética', label: 'Ética y Gobernanza' }
  ];

  const filteredTerms = GLOSSARY_TERMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      searchTerm.trim() === '' ||
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-16 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-400" />
              <span>Glosario Técnico de Referencia</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Conceptos esenciales del vocabulario de la IA
            </h3>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar término o concepto..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-purple-500 placeholder:text-slate-500"
            />
          </div>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-semibold shadow-md shadow-purple-950/40'
                  : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Glossary Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredTerms.map((term, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-2 hover:border-purple-800/60 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-purple-400 font-mono mb-1.5">
                  <span>{term.category}</span>
                </div>
                <h4 className="text-base font-bold text-white font-display mb-1.5">
                  {term.term}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {term.definition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
