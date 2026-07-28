import React, { useState } from 'react';
import { FAQItem } from '../types';
import { ChevronDown, ArrowUpRight, MessageCircle } from 'lucide-react';

interface FaqProps {
  faqs: FAQItem[];
  setCurrentRoute: (route: string) => void;
}

export const Faq: React.FC<FaqProps> = ({ faqs, setCurrentRoute }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'legal' | 'tax' | 'accounting' | 'insurance' | 'general'>('all');

  const categories = [
    { label: 'Todo', value: 'all' },
    { label: 'Legal', value: 'legal' },
    { label: 'Tributario', value: 'tax' },
    { label: 'Contable', value: 'accounting' },
    { label: 'Riesgos', value: 'insurance' },
    { label: 'General', value: 'general' },
  ];

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter(f => f.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="pb-32 page-fade-in">

      {/* ═══════════════════════════════════
          HEADER
      ═══════════════════════════════════ */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 stagger-up relative z-10">
          <div className="eyebrow justify-center">Preguntas Frecuentes</div>
          <h1 className="font-editorial text-5xl md:text-6xl font-semibold text-deep-slate-blue leading-[1.02]">
            Respuestas e Indagaciones<br className="hidden md:block" /> Doctrinarias
          </h1>
          <p className="text-base text-soft-slate leading-relaxed font-sans font-light max-w-xl mx-auto">
            Resuelva de inmediato dudas iniciales sobre regulaciones locales, precios de transferencia, revisoría fiscal y seguros de directores.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FILTER TABS
      ═══════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value as any);
                setOpenId(null);
              }}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em] border cursor-pointer transition-all duration-300 focus:outline-none ${
                activeCategory === cat.value
                  ? 'bg-[#233142] border-[#233142] text-[#EDE8DF]'
                  : 'bg-white border-[#233142]/10 text-[#233142] hover:border-[#B22222]/20 hover:bg-[#B22222]/3'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="h-px bg-deep-slate-blue/6 mt-8" />
      </section>

      {/* ═══════════════════════════════════
          ACCORDION LIST
      ═══════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 stagger-up" style={{ animationDelay: '200ms' }}>
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-250 ${
                isOpen
                  ? 'border-[#B22222]/15'
                  : 'border-[#233142]/6 hover:border-[#233142]/12'
              }`}
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-center justify-between p-7 text-left cursor-pointer focus:outline-none group"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4 flex-1 mr-4">
                  <div className={`h-8 w-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-corporate-red text-bone-white' : 'bg-corporate-red/8 text-corporate-red group-hover:bg-corporate-red/15'
                  }`}>
                    <span className="font-editorial font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <span className={`font-editorial text-lg md:text-xl font-bold leading-snug transition-colors duration-300 ${
                    isOpen ? 'text-corporate-red' : 'text-deep-slate-blue group-hover:text-corporate-red'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`h-8 w-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'border-corporate-red/30 bg-corporate-red/6 text-corporate-red rotate-180'
                    : 'border-deep-slate-blue/12 text-soft-slate group-hover:border-deep-slate-blue/30'
                }`}>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300" />
                </div>
              </button>

              {/* Collapsible answer */}
              <div
                className={`overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-7 pb-7 pt-1">
                  <div className="h-px bg-deep-slate-blue/5 mb-5" />
                  <p className="text-[14px] text-soft-slate leading-relaxed font-sans font-light pl-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 text-soft-slate">
            <p className="font-editorial text-xl">No hay preguntas en esta categoría.</p>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════
          HELP CTA
      ═══════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 stagger-up" style={{ animationDelay: '300ms' }}>
        <div className="relative bg-deep-slate-blue text-bone-white rounded-3xl p-10 md:p-14 overflow-hidden">
          {/* Background texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #EDE8DF 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-red/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-corporate-red/15 border border-corporate-red/20 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-corporate-red" />
                </div>
                <h3 className="font-editorial text-2xl md:text-3xl font-semibold">
                  ¿Aún tiene consultas pendientes?
                </h3>
              </div>
              <p className="text-[13px] text-bone-white/60 max-w-md leading-relaxed font-sans font-light">
                Agende una llamada de cortesía de 15 minutos con uno de nuestros asesores técnicos para resolver dudas preliminares de su negocio.
              </p>
            </div>

            <button
              onClick={() => setCurrentRoute('contact')}
              className="btn-accent shrink-0"
            >
              <span>Agendar Llamada Breve</span>
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
