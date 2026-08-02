import React, { useState, useMemo } from 'react';
import { FAQItem } from '../types';
import { 
  ChevronDown, 
  ArrowUpRight, 
  MessageCircle, 
  Search, 
  Scale, 
  FileText, 
  Calculator, 
  ShieldCheck, 
  HelpCircle, 
  Layers,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  X
} from 'lucide-react';

interface FaqProps {
  faqs: FAQItem[];
  setCurrentRoute: (route: string) => void;
}

export const Faq: React.FC<FaqProps> = ({ faqs, setCurrentRoute }) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<'all' | 'legal' | 'tax' | 'accounting' | 'insurance' | 'general'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackState, setFeedbackState] = useState<Record<string, 'yes' | 'no'>>({});

  const categories = [
    { label: 'Todas las Preguntas', value: 'all', icon: Layers },
    { label: 'Legal & Corporativo', value: 'legal', icon: Scale },
    { label: 'Tributario & Fiscal', value: 'tax', icon: FileText },
    { label: 'Contabilidad & Auditoría', value: 'accounting', icon: Calculator },
    { label: 'Gestión de Riesgos', value: 'insurance', icon: ShieldCheck },
    { label: 'Consultas Generales', value: 'general', icon: HelpCircle },
  ];

  // Buscador y filtrado reactivo
  const filteredFaqs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const matchesSearch = searchQuery.trim() === '' || 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [faqs, activeCategory, searchQuery]);

  const toggleAccordion = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const handleFeedback = (id: string, value: 'yes' | 'no') => {
    setFeedbackState(prev => ({ ...prev, [id]: value }));
  };

  const getCategoryBadge = (category: FAQItem['category']) => {
    switch (category) {
      case 'legal': return { text: 'Legal', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'tax': return { text: 'Tributario', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      case 'accounting': return { text: 'Contable', bg: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'insurance': return { text: 'Riesgos', bg: 'bg-purple-50 text-purple-700 border-purple-200' };
      default: return { text: 'General', bg: 'bg-slate-100 text-slate-700 border-slate-200' };
    }
  };

  return (
    <div className="pb-28 page-fade-in">
      {/* ═══════════════════════════════════
          HEADER HERO & SEARCH
      ═══════════════════════════════════ */}
      <section className="relative pt-16 pb-12 overflow-hidden">
        {/* Glow de fondo decorativo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-corporate-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="eyebrow justify-center inline-flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-corporate-red" />
            Centro de Ayuda & Consultas
          </div>
          
          <h1 className="font-editorial text-4xl md:text-5xl lg:text-6xl font-semibold text-deep-slate-blue leading-[1.05]">
            ¿En qué podemos <span className="italic text-corporate-red font-light">orientarle</span> hoy?
          </h1>
          
          <p className="text-base text-soft-slate leading-relaxed font-sans font-light max-w-xl mx-auto">
            Encuentre respuestas rápidas, claras y estructuradas sobre nuestras asesorías legales, tributarias, contables y de riesgos.
          </p>

          {/* BUSCADOR DINÁMICO */}
          <div className="max-w-2xl mx-auto pt-4">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-soft-slate group-focus-within:text-corporate-red transition-colors">
                <Search className="h-5 w-5" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Escriba su pregunta o tema (ej. impuestos, contratos, auditoría)..."
                className="w-full pl-11 pr-10 py-4 bg-white border border-[#233142]/12 rounded-2xl text-deep-slate-blue placeholder:text-soft-slate/60 text-sm focus:outline-none focus:border-corporate-red focus:ring-4 focus:ring-corporate-red/5 shadow-sm transition-all duration-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-soft-slate hover:text-deep-slate-blue transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CATEGORÍAS DE FILTRADO (TARJETAS)
      ═══════════════════════════════════ */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            const count = cat.value === 'all' 
              ? faqs.length 
              : faqs.filter(f => f.category === cat.value).length;

            return (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value as any);
                  setOpenId(null);
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  isActive
                    ? 'bg-deep-slate-blue border-deep-slate-blue text-bone-white shadow-md -translate-y-0.5'
                    : 'bg-white border-deep-slate-blue/8 text-deep-slate-blue hover:border-corporate-red/30 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div className={`p-2 rounded-xl transition-colors ${
                    isActive 
                      ? 'bg-corporate-red text-white' 
                      : 'bg-deep-slate-blue/5 text-deep-slate-blue group-hover:bg-corporate-red/10 group-hover:text-corporate-red'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-white/15 text-white' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {count}
                  </span>
                </div>
                <div>
                  <div className={`text-[12px] font-bold leading-tight ${isActive ? 'text-white' : 'text-deep-slate-blue'}`}>
                    {cat.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════
          LISTA DE PREGUNTAS (ACORDEÓN MEJORADO)
      ═══════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3.5">
        {/* Cabecera del resumen de búsqueda */}
        {(searchQuery || activeCategory !== 'all') && (
          <div className="flex items-center justify-between pb-2 px-1 text-xs text-soft-slate">
            <span>
              Mostrando <strong>{filteredFaqs.length}</strong> resultados
              {searchQuery && <span> para "<strong className="text-deep-slate-blue">{searchQuery}</strong>"</span>}
            </span>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="text-corporate-red hover:underline font-medium cursor-pointer"
            >
              Restablecer filtros
            </button>
          </div>
        )}

        {filteredFaqs.map((faq, idx) => {
          const isOpen = openId === faq.id;
          const badge = getCategoryBadge(faq.category);
          const userFeedback = feedbackState[faq.id];

          return (
            <div
              key={faq.id}
              className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen
                  ? 'border-corporate-red/30 shadow-sm ring-1 ring-corporate-red/10'
                  : 'border-[#233142]/8 hover:border-[#233142]/20 hover:shadow-xs'
              }`}
            >
              <button
                onClick={() => toggleAccordion(faq.id)}
                className="w-full flex items-start justify-between p-5 md:p-6 text-left cursor-pointer focus:outline-none group gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3.5 flex-1">
                  <span className={`mt-0.5 px-2.5 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-md border shrink-0 ${badge.bg}`}>
                    {badge.text}
                  </span>
                  <h3 className={`font-editorial text-17px md:text-lg font-bold leading-snug transition-colors duration-200 ${
                    isOpen ? 'text-corporate-red' : 'text-deep-slate-blue group-hover:text-corporate-red'
                  }`}>
                    {faq.question}
                  </h3>
                </div>

                <div className={`h-7 w-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                  isOpen
                    ? 'border-corporate-red bg-corporate-red text-white rotate-180'
                    : 'border-deep-slate-blue/15 text-soft-slate group-hover:border-deep-slate-blue/40 group-hover:text-deep-slate-blue'
                }`}>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {/* Contenido desplegable de la respuesta */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-6 md:px-6 pt-0">
                  <div className="h-px bg-deep-slate-blue/6 mb-4" />
                  
                  <p className="text-[14px] text-soft-slate leading-relaxed font-sans font-normal pl-0 md:pl-2">
                    {faq.answer}
                  </p>

                  {/* Feedback de Utilidad */}
                  <div className="mt-5 pt-3 flex flex-wrap items-center justify-between text-xs text-soft-slate border-t border-slate-100 gap-2">
                    <span>¿Le resultó útil esta información?</span>
                    <div className="flex items-center gap-2">
                      {userFeedback ? (
                        <span className="text-emerald-700 font-medium bg-emerald-50 px-2.5 py-1 rounded-md">
                          ✓ ¡Gracias por su opinión!
                        </span>
                      ) : (
                        <>
                          <button
                            onClick={() => handleFeedback(faq.id, 'yes')}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-pointer"
                          >
                            <ThumbsUp className="w-3.5 h-3.5" />
                            Sí
                          </button>
                          <button
                            onClick={() => handleFeedback(faq.id, 'no')}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg border border-slate-200 hover:border-red-400 hover:bg-red-50 hover:text-red-600 transition-colors cursor-pointer"
                          >
                            <ThumbsDown className="w-3.5 h-3.5" />
                            No
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* ESTADO SIN RESULTADOS */}
        {filteredFaqs.length === 0 && (
          <div className="text-center py-16 px-4 bg-white rounded-2xl border border-dashed border-slate-200 space-y-3">
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-editorial text-xl font-bold text-deep-slate-blue">No encontramos respuestas</h3>
            <p className="text-sm text-soft-slate max-w-sm mx-auto">
              Intente buscando con otras palabras clave o explore las categorías principales.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-2 text-xs font-bold text-corporate-red uppercase tracking-wider hover:underline cursor-pointer"
            >
              Ver todas las preguntas
            </button>
          </div>
        )}
      </section>

      {/* ═══════════════════════════════════
          TARJETA INTERACTIVA DE ASISTENCIA / CONTACTO
      ═══════════════════════════════════ */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="relative bg-deep-slate-blue text-bone-white rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl">
          {/* Patrón decorativo de fondo */}
          <div 
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #EDE8DF 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 right-0 w-80 h-80 bg-corporate-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="h-10 w-10 rounded-2xl bg-corporate-red/20 border border-corporate-red/30 flex items-center justify-center shrink-0">
                  <MessageCircle className="h-5 w-5 text-corporate-red" />
                </div>
                <h3 className="font-editorial text-2xl md:text-3xl font-semibold">
                  ¿Tiene una consulta específica?
                </h3>
              </div>
              <p className="text-sm text-bone-white/70 max-w-md leading-relaxed font-sans font-light">
                Nuestro equipo legal y tributario está disponible para analizar su caso particular sin compromiso.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={() => setCurrentRoute('contact')}
                className="btn-accent justify-center w-full sm:w-auto"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

