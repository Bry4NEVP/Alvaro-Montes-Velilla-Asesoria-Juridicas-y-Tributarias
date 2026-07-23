import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Scale, TrendingUp, FileCheck, Shield, ChevronRight, Star, Quote, ChevronLeft, CheckCircle2, Play, Zap, Search, Award } from 'lucide-react';
import { Service, Article, Testimonial } from '../types';

interface HomeProps {
  setCurrentRoute: (route: string) => void;
  services: Service[];
  articles: Article[];
  testimonials: Testimonial[];
}

export const Home: React.FC<HomeProps> = ({ setCurrentRoute, services, articles, testimonials }) => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const businessUnits = [
    {
      id: 'legal',
      title: 'DERECHO JURÍDICO Y COMERCIAL',
      desc: 'Blindaje societario, contratos complejos y transacciones corporativas de alto nivel.',
      icon: <Scale className="h-7 w-7 text-blue-600" />,
      badge: 'JURÍDICO',
      accentColor: '#2563EB',
    },
    {
      id: 'tax',
      title: 'CONSULTORÍA TRIBUTARIA',
      desc: 'Optimización legal de cargas fiscales y defensa calificada ante fiscalizaciones.',
      icon: <TrendingUp className="h-7 w-7 text-corporate-red" />,
      badge: 'IMPUESTOS',
      accentColor: '#B22222',
    },
    {
      id: 'accounting',
      title: 'ASEGURAMIENTO CONTABLE',
      desc: 'Auditoría estatutaria y outsourcing contable estructurado bajo normas NIIF.',
      icon: <FileCheck className="h-7 w-7 text-emerald-600" />,
      badge: 'CONTABLE',
      accentColor: '#059669',
    },
    {
      id: 'insurance',
      title: 'PROTECCIÓN DE ACTIVOS Y SEGUROS',
      desc: 'Pólizas de directores (D&O) y mitigación de siniestros empresariales.',
      icon: <Shield className="h-7 w-7 text-indigo-600" />,
      badge: 'RIESGOS',
      accentColor: '#4F46E5',
    },
  ];

  const targetAudiences = [
    'Juntas Directivas & CEOs',
    'Directores Financieros (CFO)',
    'Grupos Empresariales NIIF',
    'Fondos de Inversión & Family Offices',
    'Empresas en Reorganización Societaria',
  ];

  const stats = [
    { value: '25+', label: 'Años de Trayectoria', sub: 'Desde 2001' },
    { value: '200+', label: 'Clientes Corporativos', sub: 'Activos' },
    { value: '15B+', label: 'Activos Asesorados', sub: 'En COP' },
    { value: '98%', label: 'Resolución Favorable', sub: 'Índice histórico' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCountersVisible(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNextTestimonial = () =>
    setActiveTestimonial((p) => (p + 1) % testimonials.length);
  const handlePrevTestimonial = () =>
    setActiveTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  const getInitials = (name: string) =>
    name.split(' ').filter(w => !['Ing.', 'Dr.', 'Dra.'].includes(w)).slice(0, 2).map(w => w[0]).join('');

  return (
    <div className="pb-0 bg-[#EDE8DF] text-[#233142]">

      {/* ═════════════════════════════════════════════════════════════════
          REFERENCE-INSPIRED HERO SECTION
          Composition: Large Editorial Heading, Script Highlight, 
          Standing Executive Portrait Right with Floating Quote Box,
          Wave Transition below.
      ═════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 md:pt-16 pb-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#EDE8DF] via-[#F4F0E8] to-[#EDE8DF]">
        {/* Architectural background texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(#233142 1px, transparent 1px), linear-gradient(90deg, #233142 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />

        {/* Ambient radial glows */}
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-corporate-red/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-deep-slate-blue/4 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* LEFT COLUMN: Editorial Text & CTAs */}
            <div className="lg:col-span-7 space-y-8 stagger-up">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2.5 border border-[#B22222]/25 bg-[#B22222]/6 px-4 py-1.5 rounded-full shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B22222] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  CONSULTORÍA JURÍDICA & TRIBUTARIA DE ALTO NIVEL
                </span>
              </div>

              {/* Giant Editorial Headline (Reference-inspired mix: Display Serif + Elegant Script) */}
              <div className="space-y-1">
                <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight text-[#233142] uppercase leading-[1.03]">
                  ESTRATEGIA & FISCALIDAD
                </h1>
                <div className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#B22222] font-normal leading-none pt-1">
                  Rigor. Protección. Resultados.
                </div>
              </div>

              {/* Paragraph Lead */}
              <p className="text-base sm:text-lg text-[#57606F] leading-relaxed font-sans font-light max-w-xl">
                Combinamos rigor académico, precisión técnica y un trato humano excepcional para ofrecer soluciones integrales en derecho corporativo, fiscalidad, contabilidad y seguros.
              </p>

              {/* Action Buttons (Reference Pill Style) */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-accent px-8 py-4 text-[11px] rounded-full shadow-lg hover:shadow-xl transition-all"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    AGENDAR CONSULTA TÉCNICA
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>

                <button
                  onClick={() => setCurrentRoute('practice')}
                  className="btn-ghost px-7 py-3.5 text-[11px] rounded-full flex items-center gap-2.5 hover:bg-[#233142]/5"
                >
                  <span>VER SERVICIOS</span>
                  <div className="h-6 w-6 rounded-full bg-[#233142]/10 flex items-center justify-center">
                    <Play className="h-3 w-3 fill-[#233142] text-[#233142] ml-0.5" />
                  </div>
                </button>
              </div>

              {/* Trust Features Bar (Reference 3-Icon Strip) */}
              <div className="pt-6 border-t border-[#233142]/10 flex flex-wrap items-center gap-x-8 gap-y-3">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#57606F] uppercase tracking-wider">
                  <Zap className="h-4 w-4 text-[#B22222]" />
                  <span>Respuesta en 24h</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#57606F] uppercase tracking-wider">
                  <Search className="h-4 w-4 text-[#B22222]" />
                  <span>Diagnóstico Integral</span>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#57606F] uppercase tracking-wider">
                  <Award className="h-4 w-4 text-[#B22222]" />
                  <span>Atención de Socios</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Standing Corporate Portrait & Floating Executive Quote */}
            <div className="lg:col-span-5 relative stagger-up" style={{ animationDelay: '150ms' }}>
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                
                {/* Background Architectural Arch Shape */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#233142] to-[#34465D] rounded-t-[160px] rounded-b-3xl transform translate-y-4 translate-x-2 shadow-2xl opacity-15 pointer-events-none" />

                {/* Standing Partner Image Frame */}
                <div className="relative z-10 overflow-hidden rounded-t-[140px] rounded-b-3xl border-2 border-[#233142]/10 shadow-[0_32px_80px_rgba(35,49,66,0.2)] bg-gradient-to-b from-white/40 to-[#233142]/10">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                    alt="Dr. Alberto Alvarado - Socio Fundador"
                    className="w-full h-[500px] object-cover object-top filter saturate-[0.85] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/60 via-transparent to-transparent" />
                  
                  {/* Bottom partner tag */}
                  <div className="absolute bottom-4 left-6 right-6 text-white text-left">
                    <p className="font-serif-display text-lg font-bold">Dr. Alberto Alvarado</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold">Socio Fundador · Asesor Senior</p>
                  </div>
                </div>

                {/* Floating Quote Card (Reference Inspired - Top Right) */}
                <div className="absolute -top-4 -right-4 sm:-right-8 bg-white border border-[#233142]/10 shadow-2xl rounded-2xl p-5 max-w-[240px] z-20 animate-float hidden sm:block">
                  <span className="font-editorial text-4xl text-[#B22222] font-serif leading-none block -mb-2">“</span>
                  <p className="text-[11px] text-[#233142] leading-relaxed italic font-serif">
                    No solo resolvemos imprevistos legales. Construimos fortaleza estructural para el crecimiento de su empresa.
                  </p>
                  <div className="mt-3 pt-2 border-t border-[#233142]/10 flex items-center justify-between">
                    <span className="font-signature text-2xl text-[#233142]">A. Alvarado</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#B22222]">AMV</span>
                  </div>
                </div>

                {/* Floating Resolution Badge (Bottom Left) */}
                <div className="absolute bottom-10 -left-6 bg-[#233142] text-[#EDE8DF] border border-white/10 shadow-xl rounded-2xl p-4 z-20 animate-float-delayed hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-[#B22222]/20 border border-[#B22222]/30 flex items-center justify-center text-[#B22222] font-bold text-lg">
                      98%
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-white">Casos Resueltos</p>
                      <p className="text-[9px] text-white/60">Índice Favorable</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Reference Organic Wave Divider into Dark Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 90" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[70px] md:h-[90px]">
            <path
              d="M0 45 C320 90 640 10 960 55 C1200 85 1360 25 1440 35 L1440 90 L0 90 Z"
              fill="#233142"
            />
          </svg>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 1: DARK SECTION WITH VERTICAL ROUNDED CARDS 
          (Reference: "WHAT'S INSIDE THE VAULT")
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#233142] text-[#EDE8DF] py-16 md:py-24 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22222]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-3 mb-16">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
              SOLUCIONES DE ALTO IMPACTO
            </span>
            <h2 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase">
              ÁREAS DE PRÁCTICA INTEGRAL
            </h2>
            <div className="h-0.5 w-12 bg-[#B22222] mx-auto rounded-full mt-3" />
          </div>

          {/* 4 Vertical Rounded Cards Grid (Inspired by Reference) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessUnits.map((unit) => (
              <div
                key={unit.id}
                onClick={() => setCurrentRoute(`practice:${unit.id}`)}
                className="group relative bg-[#EDE8DF] text-[#233142] rounded-3xl p-7 hover-lift cursor-pointer flex flex-col justify-between h-full border border-white/10 shadow-xl transition-all duration-300"
              >
                {/* Top Metallic/3D Icon Badge (Reference Style) */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-14 w-14 rounded-2xl bg-white border border-[#233142]/10 shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {unit.icon}
                    </div>
                    <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#233142]/8 text-[#233142]">
                      {unit.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="font-serif-display text-xl font-bold tracking-tight text-[#233142] leading-snug group-hover:text-[#B22222] transition-colors">
                      {unit.title}
                    </h3>
                    <p className="text-xs text-[#57606F] leading-relaxed font-sans font-light">
                      {unit.desc}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[#233142]/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">VER DETALLES</span>
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center group-hover:bg-[#B22222] group-hover:text-white transition-colors">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 2: FEATURED LEADER BANNER CARD
          (Reference: "LEARN FROM EXPERIENCE. APPLY WITH CONFIDENCE.")
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-[#F5F0E6] border border-[#233142]/10 rounded-[32px] overflow-hidden shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              {/* Photo Left */}
              <div className="lg:col-span-5 relative h-[340px] md:h-[400px] overflow-hidden rounded-2xl shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                  alt="Dra. Beatriz Montes - Socios AMV"
                  className="w-full h-full object-cover object-top filter saturate-[0.85] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif-display text-base font-bold">Dra. Beatriz Montes</p>
                  <p className="text-[10px] uppercase tracking-wider text-white/80">Socia Directora · Consultoría Tributaria</p>
                </div>
              </div>

              {/* Copy Right */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  LIDERAZGO COMPROBADO
                </span>
                <h3 className="font-serif-display text-3xl sm:text-4xl font-bold text-[#233142] uppercase leading-tight">
                  LIDERAZGO EXPERTO. DECISIONES CONFIABLES.
                </h3>
                <p className="text-sm text-[#57606F] leading-relaxed font-sans font-light">
                  Nuestros socios han asesorado a más de 200 empresas en transacciones corporativas complejas, litigios tributarios y procesos de optimización de capital. Acceda directamente al conocimiento y frameworks legales que usamos a diario.
                </p>

                <button
                  onClick={() => setCurrentRoute('about')}
                  className="btn-accent px-8 py-3.5 text-[11px] rounded-full"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    CONOCER AL EQUIPO DE SOCIOS
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 3: BUILT FOR SERIOUS CLIENTS & TESTIMONIAL REVIEWS
          (Reference: "BUILT FOR SERIOUS SELLERS" + 5 STAR REVIEWS)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#233142] text-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Left Column: Target Audience checklist */}
            <div className="lg:col-span-4 space-y-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                DISEÑADO PARA
              </span>
              <h3 className="font-serif-display text-3xl font-bold text-white uppercase leading-snug">
                EMPRESAS DE ALTO IMPACTO
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans font-light">
                Ya sea que esté reorganizando su estructura de capital o protegiendo sus activos patrimoniales, nuestra firma le ofrece una ventaja competitiva.
              </p>

              <div className="space-y-3 pt-2">
                {targetAudiences.map((aud, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-white/90 font-medium">
                    <div className="h-5 w-5 rounded-full bg-[#B22222]/20 border border-[#B22222]/40 flex items-center justify-center text-[#B22222] shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Testimonial Reviews Cards */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeTestimonial === idx
                        ? 'bg-white text-[#233142] border-white shadow-2xl transform -translate-y-1'
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    {/* Stars */}
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.rating ?? 5)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#B22222] text-[#B22222]" />
                      ))}
                    </div>

                    <p className={`text-xs italic leading-relaxed line-clamp-4 ${activeTestimonial === idx ? 'text-[#57606F]' : 'text-white/70'}`}>
                      "{t.quote}"
                    </p>

                    <div className="mt-4 pt-3 border-t border-current/10 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-[#233142] text-white flex items-center justify-center font-bold text-xs shrink-0">
                        {getInitials(t.author)}
                      </div>
                      <div>
                        <p className={`text-[11px] font-bold ${activeTestimonial === idx ? 'text-[#233142]' : 'text-white'}`}>{t.author}</p>
                        <p className={`text-[9px] ${activeTestimonial === idx ? 'text-[#57606F]' : 'text-white/50'}`}>{t.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 4: RECENT PUBLICATIONS / EDITORIAL
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                ANÁLISIS EDITORIAL
              </span>
              <h2 className="font-serif-display text-3xl md:text-4xl font-bold text-[#233142] uppercase">
                PERSPECTIVAS TRIBUTARIAS Y LEGALES
              </h2>
            </div>
            <button
              onClick={() => setCurrentRoute('resources')}
              className="text-[11px] font-bold uppercase tracking-wider text-[#B22222] flex items-center gap-1.5 hover:gap-2.5 transition-all cursor-pointer"
            >
              CENTRO DE RECURSOS
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.slice(0, 3).map((art, idx) => (
              <div
                key={art.id}
                onClick={() => setCurrentRoute(`article-detail:${art.id}`)}
                className="group bg-white border border-[#233142]/10 rounded-2xl overflow-hidden shadow-md hover-lift cursor-pointer flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#233142] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    {art.category}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#57606F]">
                    {art.date} · {art.readTime}
                  </p>
                  <h3 className="font-serif-display text-lg font-bold text-[#233142] group-hover:text-[#B22222] transition-colors line-clamp-2">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#57606F] font-light line-clamp-2 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between text-xs border-t border-[#233142]/5 mt-4">
                  <span className="text-[#57606F]">Por {art.author}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#B22222] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          SECTION 5: VIP ACCESS TICKET CTA BAND (Reference Inspired)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white border-2 border-[#233142]/10 rounded-[32px] shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            
            {/* VIP Pass Ticket Graphic / Badge on left */}
            <div className="flex items-center gap-6">
              <div className="h-20 w-32 bg-[#233142] text-white rounded-2xl border-2 border-[#B22222] flex flex-col items-center justify-center p-2 shadow-lg transform -rotate-3 shrink-0">
                <span className="font-serif-display text-xs font-bold text-[#B22222]">AMV LEGAL</span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/80 mt-0.5">VIP PASS</span>
                <span className="text-[7px] text-white/50 mt-1">CONSULTA 2026</span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  ACCESO DIRECTO A SOCIOS
                </span>
                <h3 className="font-serif-display text-2xl md:text-3xl font-bold text-[#233142] uppercase leading-tight">
                  SU CONSULTA TÉCNICA SIN COSTO INICIAL
                </h3>
                <p className="text-xs text-[#57606F] font-light max-w-md">
                  Agende una llamada de 30 minutos con un socio principal para diagnosticar su requerimiento legal o tributario.
                </p>
              </div>
            </div>

            {/* CTA Button Right */}
            <div className="shrink-0">
              <button
                onClick={() => setCurrentRoute('contact')}
                className="btn-accent px-8 py-4 text-[11px] rounded-full shadow-lg"
              >
                <span className="relative z-10 flex items-center gap-2">
                  AGENDAR CONSULTA AHORA
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
