import React, { useState } from 'react';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/aiData';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight, HelpCircle } from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [answersHistory, setAnswersHistory] = useState<{ isCorrect: boolean }[]>([]);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (idx: number) => {
    if (showAnswer) return;
    setSelectedOption(idx);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null || showAnswer) return;
    const isCorrect = selectedOption === currentQ.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setAnswersHistory((prev) => [...prev, { isCorrect }]);
    setShowAnswer(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowAnswer(false);
    setScore(0);
    setIsCompleted(false);
    setAnswersHistory([]);
  };

  return (
    <section className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-900/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 tracking-wider uppercase mb-2">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Ponte a Prueba</span>
            <span aria-hidden="true">·</span>
            <span>Evaluación de Conocimiento</span>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight font-display mb-3">
            ¿Cuánto aprendiste sobre la historia y funcionamiento de la IA?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Responde 5 preguntas clave sobre los momentos decisivos y conceptos técnicos de la computación cognitiva.
          </p>
        </div>

        {!isCompleted ? (
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>
                  Pregunta <strong className="text-white">{currentQuestionIndex + 1}</strong> de {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-rose-400 font-semibold">
                  Puntaje actual: {score} / {answersHistory.length}
                </span>
              </div>
              <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-rose-500 to-purple-500 h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`
                  }}
                />
              </div>
            </div>

            {/* Question Text */}
            <div className="pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-white font-display leading-relaxed">
                {currentQ.question}
              </h3>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let optionStyles = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700 hover:bg-slate-850';

                if (showAnswer) {
                  if (isCorrect) {
                    optionStyles = 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-semibold';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'bg-rose-950/70 border-rose-500 text-rose-200';
                  } else {
                    optionStyles = 'bg-slate-900/40 border-slate-800/40 text-slate-500 opacity-60';
                  }
                } else if (isSelected) {
                  optionStyles = 'bg-purple-950/80 border-rose-500 text-white shadow-md ring-1 ring-purple-500/40';
                }

                return (
                  <button
                    key={idx}
                    disabled={showAnswer}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-center justify-between gap-3 ${optionStyles}`}
                  >
                    <span>{option}</span>
                    {showAnswer && isCorrect && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    )}
                    {showAnswer && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box after answer */}
            {showAnswer && (
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 animate-fadeIn">
                <div className="text-xs font-semibold text-rose-400">
                  Explicación detallada:
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-500">
                Selecciona una opción para continuar
              </span>

              {!showAnswer ? (
                <button
                  disabled={selectedOption === null}
                  onClick={handleSubmitAnswer}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 disabled:opacity-40 disabled:cursor-not-allowed rounded-lg transition-all shadow-md shadow-purple-950/40 whitespace-nowrap active:scale-95"
                >
                  Confirmar Respuesta
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg transition-all shadow-md shadow-purple-950/40 whitespace-nowrap active:scale-95"
                >
                  <span>
                    {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                      ? 'Siguiente Pregunta'
                      : 'Ver Resultados Finales'}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Final Results Card */
          <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-purple-950 border border-purple-800 text-rose-400 flex items-center justify-center mx-auto shadow-lg shadow-purple-950/50">
              <Award className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-white font-display">
                ¡Has completado la evaluación!
              </h3>
              <p className="text-sm text-slate-300">
                Obtuviste <strong className="text-rose-400 font-mono text-lg">{score}</strong> de{' '}
                <strong className="text-white font-mono text-lg">{QUIZ_QUESTIONS.length}</strong> aciertos correctos.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-xs text-slate-300">
              {score === 5 && '¡Excelente! Tienes un dominio sobresaliente tanto de los hitos fundacionales como de los modelos contemporáneos.'}
              {score >= 3 && score < 5 && '¡Muy buen resultado! Comprendes los pilares teóricos y el impacto de las nuevas arquitecturas.'}
              {score < 3 && 'Buen intento. Te invitamos a repasar la Línea de Tiempo y la sección de Paradigmas para reforzar conceptos.'}
            </div>

            <div>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg transition-all shadow-md shadow-purple-950/40 active:scale-95"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reiniciar Cuestionario</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
