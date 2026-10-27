import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Send, Sparkles } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [userMsg, setUserMsg] = useState('');

  const email = 'dmaicoldias@gmail.com';
  const phone = '8294277707';
  const formattedPhone = '+1 (829) 427-7707';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !userMsg.trim()) return;

    // Generate mailto link with prefilled subject & body
    const mailtoUrl = `mailto:${email}?subject=Contacto desde LO MA DURO - ${encodeURIComponent(name)}&body=${encodeURIComponent(userMsg)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <section id="soporte" className="py-16 sm:py-24 border-t border-slate-800/80 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-400 tracking-wider uppercase mb-2 font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SOPORTE Y ATENCIÓN DIRECTA</span>
            <span aria-hidden="true">·</span>
            <span>LO MA DURO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-3">
            Soporte: Formas de comunicarse conmigo
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Canales directos de soporte para resolver cualquier duda sobre inteligencia artificial, orientación técnica o propuestas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Cards: Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/80 text-rose-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                      Canal de Soporte Telefónico / Móvil
                    </div>
                    <div className="text-lg font-bold text-white font-mono tabular-nums">
                      {formattedPhone}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 rounded-lg transition-all whitespace-nowrap active:scale-95 shadow-md shadow-rose-950/30"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Llamar a Soporte</span>
                </a>
                <a
                  href={`https://wa.me/1${phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors whitespace-nowrap active:scale-95"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Soporte</span>
                </a>
              </div>

              <button
                onClick={handleCopyPhone}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs text-slate-400 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">¡Teléfono copiado al portapapeles!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar Teléfono de Soporte (8294277707)</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-950/80 border border-purple-800/80 text-rose-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                      Canal de Soporte por Correo
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white font-mono break-all">
                      {email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/80">
                <a
                  href={`mailto:${email}?subject=Solicitud%20de%20Soporte%20-%20LO%20MA%20DURO`}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 rounded-lg transition-all whitespace-nowrap active:scale-95 shadow-md shadow-rose-950/30"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Escribir a Soporte</span>
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors whitespace-nowrap active:scale-95 border border-slate-700"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar Correo</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Card: Quick Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-slate-950 border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white font-display mb-1">
                Solicitud de soporte o mensaje directo
              </h3>
              <p className="text-xs text-slate-400">
                Envía tus preguntas o requerimientos y recibirás respuesta en tu bandeja vía <strong className="text-rose-400">{email}</strong>.
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Tu Nombre o Entidad
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Carlos Rodríguez"
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Mensaje o Consulta
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={userMsg}
                  onChange={(e) => setUserMsg(e.target.value)}
                  placeholder="Escribe tu consulta sobre IA, propuesta o comentario..."
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors leading-relaxed"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-[11px] text-slate-500">
                  Respuesta directa a tu bandeja
                </span>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-red-600 via-rose-600 to-purple-600 hover:from-red-500 hover:to-purple-500 rounded-lg transition-all whitespace-nowrap active:scale-95 shadow-md shadow-purple-950/50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Mensaje a {email}</span>
                </button>
              </div>

              {formSent && (
                <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Se abrió tu cliente de correo. ¡Gracias por comunicarte!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
