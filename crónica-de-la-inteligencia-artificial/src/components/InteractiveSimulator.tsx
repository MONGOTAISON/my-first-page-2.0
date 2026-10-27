import React, { useState, useMemo } from 'react';
import {
  Cpu,
  Sliders,
  Play,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Eye,
  Activity,
  Layers
} from 'lucide-react';

export const InteractiveSimulator: React.FC = () => {
  // Preset prompts
  const presets = [
    {
      title: 'Ciencia y Medicina',
      text: 'La inteligencia artificial acelera el descubrimiento de antibióticos mediante simulación molecular.'
    },
    {
      title: 'Historia de Turing',
      text: 'En 1950 Alan Turing formuló el test de imitación para evaluar si las máquinas piensan.'
    },
    {
      title: 'Mecanismo de Atención',
      text: 'El algoritmo de autoatención calcula qué palabras del contexto determinan el siguiente concepto.'
    }
  ];

  const [inputText, setInputText] = useState(presets[0].text);
  const [temperature, setTemperature] = useState<number>(0.7);
  const [selectedTokenIndex, setSelectedTokenIndex] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'tokens' | 'attention' | 'temperature'>('tokens');

  // Realistic mock tokenization simulating BPE (Byte-Pair Encoding) sub-word fragmentation
  const tokens = useMemo(() => {
    const rawWords = inputText.trim().split(/\s+/);
    const result: { id: number; text: string; colorClass: string; tokenNumber: number }[] = [];
    const colors = [
      'bg-rose-950/70 border-rose-800 text-rose-200',
      'bg-purple-950/70 border-purple-800 text-purple-200',
      'bg-fuchsia-950/70 border-fuchsia-800 text-fuchsia-200',
      'bg-violet-950/70 border-violet-800 text-violet-200',
      'bg-red-950/70 border-red-800 text-red-200'
    ];

    let tId = 101;
    rawWords.forEach((word) => {
      // If word is long or compound, break into sub-tokens
      if (word.length > 8) {
        const mid = Math.floor(word.length / 2);
        const part1 = word.slice(0, mid);
        const part2 = word.slice(mid);
        result.push({
          id: result.length,
          text: part1,
          colorClass: colors[result.length % colors.length],
          tokenNumber: tId++
        });
        result.push({
          id: result.length,
          text: part2,
          colorClass: colors[result.length % colors.length],
          tokenNumber: tId++
        });
      } else {
        result.push({
          id: result.length,
          text: word,
          colorClass: colors[result.length % colors.length],
          tokenNumber: tId++
        });
      }
    });

    return result;
  }, [inputText]);

  // Candidate next tokens influenced by temperature
  const candidateNextTokens = useMemo(() => {
    const baseCandidates = [
      { token: 'revolucionario', baseProb: 0.45 },
      { token: 'preciso', baseProb: 0.25 },
      { token: 'inédito', baseProb: 0.15 },
      { token: 'complejo', baseProb: 0.10 },
      { token: 'futurista', baseProb: 0.05 }
    ];

    // Temperature scaling formula simulation: P_i = exp(log(p)/T) / sum
    const scaled = baseCandidates.map((c) => {
      const logit = Math.log(Math.max(c.baseProb, 0.001)) / Math.max(temperature, 0.05);
      return { token: c.token, logit };
    });

    const maxLogit = Math.max(...scaled.map((s) => s.logit));
    const expValues = scaled.map((s) => Math.exp(s.logit - maxLogit));
    const sumExp = expValues.reduce((a, b) => a + b, 0);

    return baseCandidates.map((c, i) => ({
      token: c.token,
      prob: Math.round((expValues[i] / sumExp) * 100)
    }));
  }, [temperature]);

  // Attention scores relative to selected token
  const attentionScores = useMemo(() => {
    if (tokens.length === 0) return [];
    const target = tokens[selectedTokenIndex] || tokens[0];

    return tokens.map((t, idx) => {
      const distance = Math.abs(idx - selectedTokenIndex);
      // Words closer or sharing grammatical relevance receive higher simulated attention
      let score = Math.max(0.12, Math.exp(-distance * 0.45));
      if (idx === selectedTokenIndex) score = 1.0;
      return {
        ...t,
        weight: Number(score.toFixed(2))
      };
    });
  }, [tokens, selectedTokenIndex]);

  return (
    <section id="simulador" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
            <span>03. Laboratorio Interactivo</span>
            <span aria-hidden="true">·</span>
            <span>Simulador de Inferencia y Tokens</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            Experimenta cómo "piensa" y procesa un modelo moderno.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Escribe una frase o selecciona un ejemplo predefinido para observar la fragmentación en tokens, la atención contextual entre palabras y cómo el parámetro de temperatura modula la creatividad de la respuesta.
          </p>
        </div>

        {/* Input Bar & Preset Quick-load Buttons */}
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl mb-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label htmlFor="prompt-input" className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-rose-400" />
              <span>Texto de entrada (Prompt de contexto):</span>
            </label>

            {/* Presets */}
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] text-slate-500 mr-1">Cargar ejemplo:</span>
              {presets.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInputText(p.text);
                    setSelectedTokenIndex(1);
                  }}
                  className="px-2.5 py-1 text-xs rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {p.title}
                </button>
              ))}
            </div>
          </div>

          <textarea
            id="prompt-input"
            rows={2}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="w-full p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors leading-relaxed"
            placeholder="Escribe cualquier frase aquí para observar cómo se tokeniza y atiende..."
          />

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1">
            <div className="flex items-center gap-3">
              <span>
                Longitud: <strong className="text-white font-mono tabular-nums">{inputText.length}</strong> caracteres
              </span>
              <span>·</span>
              <span>
                Tokens calculados: <strong className="text-rose-400 font-mono tabular-nums">{tokens.length}</strong>
              </span>
            </div>
            <button
              onClick={() => setInputText(presets[0].text)}
              className="flex items-center gap-1.5 text-slate-400 hover:text-rose-400 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer texto original</span>
            </button>
          </div>
        </div>

        {/* Tab Selector for Simulator */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6">
          <button
            onClick={() => setActiveTab('tokens')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'tokens'
                ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md shadow-purple-950/40'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>1. Fragmentación en Tokens</span>
          </button>

          <button
            onClick={() => setActiveTab('attention')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'attention'
                ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md shadow-purple-950/40'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>2. Matriz de Autoatención</span>
          </button>

          <button
            onClick={() => setActiveTab('temperature')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap ${
              activeTab === 'temperature'
                ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md shadow-purple-950/40'
                : 'text-slate-400 hover:text-white bg-slate-900/60'
            }`}
          >
            <Activity className="w-3.5 h-3.5" />
            <span>3. Temperatura & Softmax</span>
          </button>
        </div>

        {/* Tab 1: Tokenizer */}
        {activeTab === 'tokens' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="text-xs font-semibold text-slate-300">
                Visualización de Tokens (fragmentos procesables por la red):
              </div>
              <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-slate-950/70 border border-slate-800 min-h-[110px] items-center">
                {tokens.map((token, idx) => (
                  <span
                    key={idx}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono border ${token.colorClass} shadow-sm transition-transform hover:scale-105 cursor-default`}
                    title={`Token #${token.tokenNumber}`}
                  >
                    {token.text}
                    <span className="ml-1 opacity-50 text-[10px]">#{token.tokenNumber}</span>
                  </span>
                ))}
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Los modelos de lenguaje no leen palabras como un humano ni píxeles como una cámara. Utilizan algoritmos de compresión como Byte-Pair Encoding (BPE) para segmentar el texto en números enteros que luego se traducen en vectores matemáticos de alta dimensión (embeddings).
              </p>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <HelpCircle className="w-4 h-4" />
                <span>¿Por qué importan los tokens?</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">·</span>
                  <span>
                    <strong>Ventana de Contexto:</strong> Los límites de memoria de un modelo (ej. 32k o 1M tokens) determinan cuánta información puede retener simultáneamente.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">·</span>
                  <span>
                    <strong>Costo computacional:</strong> En la atención tradicional estándar, el costo escala con el cuadrado de la cantidad de tokens ($O(N^2)$).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 font-bold">·</span>
                  <span>
                    <strong>Vocabulario:</strong> Un modelo suele tener un diccionario fijo de ~32,000 a ~256,000 tokens únicos.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Tab 2: Attention Visualizer */}
        {activeTab === 'attention' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-slate-300">
                  Haz clic en un token para enfocar la autoatención:
                </div>
                <div className="text-xs text-rose-400 font-mono">
                  Token enfocado: <strong>"{tokens[selectedTokenIndex]?.text || ''}"</strong>
                </div>
              </div>

              {/* Clickable tokens bar */}
              <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-slate-950 border border-slate-800">
                {tokens.map((token, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTokenIndex(idx)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all ${
                      selectedTokenIndex === idx
                        ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white font-bold scale-105 shadow-md shadow-purple-950/40'
                        : 'bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    {token.text}
                  </button>
                ))}
              </div>

              {/* Weight intensity display */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-400">
                  Pesos de afinidad contextual hacia las demás palabras:
                </div>
                <div className="space-y-2">
                  {attentionScores.map((score, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-xs bg-slate-950/70 p-2.5 rounded-lg border border-slate-800/80"
                    >
                      <span className="w-24 font-mono text-slate-300 truncate font-semibold">
                        {score.text}
                      </span>
                      <div className="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-rose-500 to-purple-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${Math.round(score.weight * 100)}%` }}
                        />
                      </div>
                      <span className="font-mono text-rose-300 tabular-nums w-12 text-right">
                        {(score.weight * 100).toFixed(0)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>¿Cómo funciona el mecanismo Query / Key?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Por cada token, el Transformer calcula tres vectores:
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-rose-400">Query (Consulta):</strong> ¿Qué información busca este token?
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-purple-400">Key (Clave):</strong> ¿Qué información ofrece este token a los demás?
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-emerald-400">Value (Valor):</strong> El contenido semántico que se transmitirá.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Temperature & Softmax */}
        {activeTab === 'temperature' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label htmlFor="temp-slider" className="text-xs font-semibold text-slate-300">
                    Ajustar Temperatura (T):
                  </label>
                  <span className="text-sm font-mono text-rose-400 font-bold tabular-nums">
                    {temperature.toFixed(2)}
                  </span>
                </div>

                <input
                  id="temp-slider"
                  type="range"
                  min="0.1"
                  max="1.5"
                  step="0.05"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer"
                />

                <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>0.1 (Determinista / Preciso)</span>
                  <span>0.7 (Equilibrado)</span>
                  <span>1.5 (Creativo / Variado)</span>
                </div>
              </div>

              {/* Quick Preset Buttons for Temperature */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTemperature(0.1)}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    temperature <= 0.2
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white border-rose-500 font-semibold shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  Código / Matemáticas (0.1)
                </button>
                <button
                  onClick={() => setTemperature(0.7)}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    temperature >= 0.65 && temperature <= 0.75
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white border-rose-500 font-semibold shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  General / Chat (0.7)
                </button>
                <button
                  onClick={() => setTemperature(1.2)}
                  className={`px-3 py-1 text-xs rounded-md border transition-all ${
                    temperature >= 1.15
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white border-rose-500 font-semibold shadow-sm'
                      : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
                  }`}
                >
                  Poesía / Lluvia de Ideas (1.2)
                </button>
              </div>

              {/* Softmax Distribution */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-slate-300">
                  Distribución de probabilidad para el siguiente token generado:
                </div>
                <div className="space-y-2.5">
                  {candidateNextTokens.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between gap-4"
                    >
                      <div className="flex items-center gap-2.5 min-w-[120px]">
                        <span className="text-xs font-mono text-purple-400 font-bold">#{idx + 1}</span>
                        <span className="text-xs font-mono font-semibold text-white">
                          "{item.token}"
                        </span>
                      </div>

                      <div className="flex-1 bg-slate-800 rounded-full h-2.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-rose-500 to-purple-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${item.prob}%` }}
                        />
                      </div>

                      <span className="text-xs font-mono text-rose-300 tabular-nums font-semibold w-12 text-right">
                        {item.prob}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-rose-400">
                <Activity className="w-4 h-4 text-purple-400" />
                <span>¿Cómo altera la temperatura la respuesta?</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                La temperatura no hace que el modelo "piense más". Modifica matemáticamente la distribución Softmax dividiendo los logits antes de muestrear:
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Baja Temperatura (0.0 – 0.3):</strong> Afila la distribución. El token más probable gana casi el 100% de las veces. Es ideal para extraer datos, escribir código o cálculos donde no queremos variaciones.
                </div>
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800">
                  <strong className="text-white">Alta Temperatura (0.8 – 1.4):</strong> Aplana la curva probabilística. Tokens secundarios o menos obvios tienen oportunidad de ser elegidos, creando respuestas más creativas o metafóricas, pero con mayor riesgo de alucinación o incoherencia.
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
