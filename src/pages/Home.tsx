import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Scale, TrendingUp, FileCheck, Shield, ChevronRight, Star, CheckCircle2, Play, Zap, Search, Award } from 'lucide-react';
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
  const pageRef = useRef<HTMLDivElement>(null);

  const businessUnits = [
    {
      id: 'legal',
      title: 'DERECHO JURÍDICO Y COMERCIAL',
      desc: 'Blindaje societario, contratos complejos y transacciones corporativas de alto nivel.',
      icon: <Scale className="h-6 w-6 text-[#2563EB]" />,
      badge: 'JURÍDICO',
    },
    {
      id: 'tax',
      title: 'CONSULTORÍA TRIBUTARIA',
      desc: 'Optimización legal de cargas fiscales y defensa calificada ante fiscalizaciones.',
      icon: <TrendingUp className="h-6 w-6 text-[#B22222]" />,
      badge: 'IMPUESTOS',
    },
    {
      id: 'accounting',
      title: 'ASEGURAMIENTO CONTABLE',
      desc: 'Auditoría estatutaria y outsourcing contable estructurado bajo normas NIIF.',
      icon: <FileCheck className="h-6 w-6 text-[#059669]" />,
      badge: 'CONTABLE',
    },
    {
      id: 'insurance',
      title: 'PROTECCIÓN DE ACTIVOS Y SEGUROS',
      desc: 'Pólizas de directores (D&O) y mitigación de siniestros empresariales.',
      icon: <Shield className="h-6 w-6 text-[#4F46E5]" />,
      badge: 'RIESGOS',
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
      { threshold: 0.25 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => revealObserver.observe(el));

    return () => revealObserver.disconnect();
  }, []);

  const getInitials = (name: string) =>
    name.split(' ').filter(w => !['Ing.', 'Dr.', 'Dra.'].includes(w)).slice(0, 2).map(w => w[0]).join('');

  return (
    <div ref={pageRef} className="pb-0 bg-[#EDE8DF] text-[#233142] selection:bg-[#B22222] selection:text-[#EDE8DF]">

      {/* ═════════════════════════════════════════════════════════════════
          1. HERO SECTION (EDITORIAL LUXURY & HIGH-END AGENCY COMPOSITION)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 md:pt-20 pb-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-[#EDE8DF] via-[#F5F1EA] to-[#EDE8DF]">
        {/* Subtle architectural mesh texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: 'linear-gradient(#233142 1px, transparent 1px), linear-gradient(90deg, #233142 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />

        {/* Ambient background glows */}
        <div className="absolute top-12 right-12 w-[600px] h-[600px] bg-[#B22222]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-12 left-12 w-[500px] h-[500px] bg-[#233142]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT COLUMN: Editorial Text & CTAs */}
            <div className="lg:col-span-7 space-y-9 stagger-up">

              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-3 border border-[#B22222]/20 bg-[#B22222]/6 px-4.5 py-1.5 rounded-full shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B22222] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  CONSULTORÍA JURÍDICA & TRIBUTARIA DE ALTO NIVEL
                </span>
              </div>

              {/* Giant Editorial Headline */}
              <div className="space-y-2">
                <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.75rem] font-bold tracking-tight text-[#233142] uppercase leading-[1.02]">
                  ESTRATEGIA & FISCALIDAD
                </h1>
                <div className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#B22222] font-normal leading-none pt-2 mb-2">
                  Rigor. Protección. Resultados.
                </div>
              </div>

              {/* Paragraph Lead */}
              <p className="text-base sm:text-lg text-[#57606F] leading-relaxed font-sans font-light max-w-xl">
                Combinamos rigor académico, precisión técnica y un trato humano excepcional para ofrecer soluciones integrales en derecho corporativo, fiscalidad, contabilidad y seguros.
              </p>

              {/* Action Buttons (Button-in-Button Nested Architecture) */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-pill-accent"
                >
                  <span>AGENDAR CONSULTA TÉCNICA</span>
                  <div className="btn-pill-icon">
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                  </div>
                </button>

                <button
                  onClick={() => setCurrentRoute('practice')}
                  className="btn-pill-ghost"
                >
                  <span>VER SERVICIOS</span>
                  <div className="btn-pill-icon">
                    <Play className="h-3 w-3 fill-[#233142] text-[#233142] ml-0.5" />
                  </div>
                </button>
              </div>

              {/* Trust Features Bar */}
              <div className="pt-8 border-t border-[#233142]/10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <span>Respuesta en 24h</span>
                </div>

                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Search className="h-3.5 w-3.5" />
                  </div>
                  <span>Diagnóstico Integral</span>
                </div>

                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <span>Atención de Socios</span>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Doppelrand Framed Portrait & Floating Elements */}
            <div className="lg:col-span-5 relative stagger-up" style={{ animationDelay: '150ms' }}>
              <div className="relative mx-auto max-w-[420px] lg:max-w-none">
                
                {/* Outer Shell Doppelrand Frame */}
                <div className="doppelrand-shell p-3 rounded-t-[170px] rounded-b-[2.5rem] bg-[#233142]/5 border border-[#233142]/12 shadow-2xl">
                  {/* Inner Core Frame */}
                  <div className="relative z-10 overflow-hidden rounded-t-[155px] rounded-b-[calc(2.5rem-0.5rem)] bg-gradient-to-b from-[#EDE8DF] to-[#233142]/20">
                    <img
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                      alt="Dr. Alberto Alvarado - Socio Fundador"
                      className="w-full h-[520px] object-cover object-top filter saturate-[0.85] contrast-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/70 via-transparent to-transparent" />
                    
                    {/* Bottom partner tag */}
                    <div className="absolute bottom-5 left-6 right-6 text-white text-left">
                      <p className="font-serif-display text-xl font-bold tracking-wide">Dr. Alberto Alvarado</p>
                      <p className="text-[10px] uppercase tracking-widest text-white/70 font-semibold mt-0.5">Socio Fundador · Asesor Senior</p>
                    </div>
                  </div>
                </div>

                {/* Floating Quote Card (Doppelrand nested) */}
                <div className="absolute -top-6 -right-4 sm:-right-8 doppelrand-shell p-2 bg-white/90 backdrop-blur-md max-w-[250px] z-20 animate-float hidden sm:block">
                  <div className="doppelrand-core p-4.5 space-y-2">
                    <span className="font-editorial text-4xl text-[#B22222] font-serif leading-none block -mb-2">“</span>
                    <p className="text-[11px] text-[#233142] leading-relaxed italic font-serif">
                      No solo resolvemos imprevistos legales. Construimos fortaleza estructural para el crecimiento de su empresa.
                    </p>
                    <div className="pt-2 border-t border-[#233142]/10 flex items-center justify-between">
                      <span className="font-signature text-2xl text-[#233142]">A. Alvarado</span>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-[#B22222]">AMV</span>
                    </div>
                  </div>
                </div>

                {/* Floating Resolution Badge */}
                <div className="absolute bottom-10 -left-6 doppelrand-shell-dark p-2 bg-[#233142] text-[#EDE8DF] max-w-[210px] z-20 animate-float-delayed hidden sm:block">
                  <div className="doppelrand-core-dark p-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-[#B22222]/20 border border-[#B22222]/30 flex items-center justify-center text-[#B22222] font-bold text-lg shrink-0">
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
        </div>

        {/* Bespoke Organic Curve Transition into Dark Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none overflow-hidden" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[70px] md:h-[100px]">
            <path
              d="M0,45 C320,100 680,10 1040,65 C1240,88 1360,35 1440,48 L1440,100 L0,100 Z"
              fill="#233142"
            />
          </svg>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          2. SERVICE PREVIEW SECTION (FEATURED TOP SERVICES)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#233142] text-[#EDE8DF] pt-12 pb-24 md:pb-32 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                SERVICIOS DESTACADOS
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                ASISTENCIA CORPORATIVA INTEGRAL
              </h2>
            </div>
            <button
              onClick={() => setCurrentRoute('practice')}
              className="text-[11px] font-bold uppercase tracking-wider text-[#B22222] flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              <span>VER CATÁLOGO COMPLETO</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* 3 Doppelrand Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service) => (
              <div
                key={service.id}
                onClick={() => setCurrentRoute(`service-detail:${service.id}`)}
                className="doppelrand-shell-dark cursor-pointer group flex flex-col justify-between"
              >
                <div className="doppelrand-core-dark p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B22222] group-hover:scale-110 transition-transform duration-300">
                        <Scale className="h-6 w-6" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-[#B22222]/15 text-[#B22222] border border-[#B22222]/20">
                        ESPECIALIZADO
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif-display text-2xl font-bold text-white group-hover:text-[#B22222] transition-colors leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-xs text-white/60 leading-relaxed font-sans font-light line-clamp-3">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">CONSULTAR DETALLES</span>
                    <div className="h-8 w-8 rounded-full bg-[#B22222]/20 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          3. ABOUT SECTION (LEADERSHIP & FIRM OVERVIEW)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="doppelrand-shell p-4 bg-[#F5F1EA] border border-[#233142]/10 shadow-2xl reveal">
            <div className="doppelrand-core p-8 md:p-14 bg-[#FAF7F2]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Photo Left */}
                <div className="lg:col-span-5 relative h-[360px] md:h-[420px] overflow-hidden rounded-3xl border border-[#233142]/10 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=700"
                    alt="Dra. Beatriz Montes - Socios AMV"
                    className="w-full h-full object-cover object-top filter saturate-[0.85] contrast-[1.05] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-6 right-6 text-white">
                    <p className="font-serif-display text-lg font-bold">Dra. Beatriz Montes</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/80 font-semibold">Socia Directora · Consultoría Tributaria</p>
                  </div>
                </div>

                {/* Copy Right */}
                <div className="lg:col-span-7 space-y-7">
                  <div className="inline-flex items-center gap-2 border border-[#B22222]/20 bg-[#B22222]/6 px-3.5 py-1 rounded-full">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                      LIDERAZGO COMPROBADO
                    </span>
                  </div>

                  <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233142] uppercase leading-tight">
                    LIDERAZGO EXPERTO. DECISIONES CONFIABLES.
                  </h2>

                  <p className="text-sm sm:text-base text-[#57606F] leading-relaxed font-sans font-light max-w-[60ch]">
                    Nuestros socios han asesorado a más de 200 empresas en transacciones corporativas complejas, litigios tributarios y procesos de optimización de capital. Acceda directamente al conocimiento y frameworks legales que usamos a diario.
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setCurrentRoute('about')}
                      className="btn-pill-accent"
                    >
                      <span>CONOCER AL EQUIPO DE SOCIOS</span>
                      <div className="btn-pill-icon">
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                      </div>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          4. STATISTICS SECTION (HIGH-IMPACT KEY METRICS STRIP)
      ═════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} className="py-20 lg:py-28 bg-[#1A242F] text-white relative overflow-hidden border-y border-white/10">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#B22222]/6 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#233142]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`doppelrand-shell-dark p-2 text-center transition-all duration-700 ${
                  countersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="doppelrand-core-dark p-6 space-y-2 flex flex-col justify-center items-center">
                  <div className="font-serif-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDE8DF] tracking-tight">
                    {stat.value}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white/90 uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-[10px] text-[#B22222] font-bold uppercase tracking-widest">
                    {stat.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          5. PRACTICE AREAS SECTION (BUSINESS UNITS GRID)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#233142] text-[#EDE8DF] py-24 lg:py-36 relative overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#B22222]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-20 reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
              SOLUCIONES DE ALTO IMPACTO
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
              ÁREAS DE PRÁCTICA INTEGRAL
            </h2>
            <div className="h-0.5 w-16 bg-[#B22222] mx-auto rounded-full mt-4" />
          </div>

          {/* 4 Vertical Rounded Doppelrand Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {businessUnits.map((unit) => (
              <div
                key={unit.id}
                onClick={() => setCurrentRoute(`practice:${unit.id}`)}
                className="doppelrand-shell cursor-pointer group flex flex-col justify-between h-full bg-[#EDE8DF] text-[#233142]"
              >
                <div className="doppelrand-core p-8 flex flex-col justify-between space-y-8">
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-14 w-14 rounded-2xl bg-[#EDE8DF] border border-[#233142]/10 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        {unit.icon}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#233142]/8 text-[#233142]">
                        {unit.badge}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-serif-display text-xl font-bold tracking-tight text-[#233142] leading-snug group-hover:text-[#B22222] transition-colors">
                        {unit.title}
                      </h3>
                      <p className="text-xs text-[#57606F] leading-relaxed font-sans font-light">
                        {unit.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#233142]/10 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">VER DETALLES</span>
                    <div className="h-8 w-8 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          6. TESTIMONIALS SECTION (TARGET AUDIENCE & CLIENT REVIEWS)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#1A242F] text-[#EDE8DF] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* Left Column: Target Audience checklist */}
            <div className="lg:col-span-5 space-y-7 reveal">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                DISEÑADO PARA
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white uppercase leading-snug">
                EMPRESAS DE ALTO IMPACTO
              </h2>
              <p className="text-sm text-white/65 leading-relaxed font-sans font-light max-w-md">
                Ya sea que esté reorganizando su estructura de capital o protegiendo sus activos patrimoniales, nuestra firma le ofrece una ventaja competitiva.
              </p>

              <div className="space-y-3.5 pt-2">
                {targetAudiences.map((aud, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 text-xs text-white/90 font-medium">
                    <div className="h-6 w-6 rounded-full bg-[#B22222]/20 border border-[#B22222]/40 flex items-center justify-center text-[#B22222] shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Testimonial Reviews Cards */}
            <div className="lg:col-span-7 space-y-6 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => (
                  <div
                    key={t.id}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`doppelrand-shell-dark cursor-pointer transition-all duration-300 ${
                      activeTestimonial === idx ? 'scale-105 shadow-2xl' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className={`doppelrand-core-dark p-6 flex flex-col justify-between ${activeTestimonial === idx ? 'bg-white text-[#233142]' : 'bg-[#1A242F] text-white'}`}>
                      <div className="space-y-4">
                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(t.rating ?? 5)].map((_, i) => (
                            <Star key={i} className="h-3.5 w-3.5 fill-[#B22222] text-[#B22222]" />
                          ))}
                        </div>

                        <p className={`text-xs italic leading-relaxed line-clamp-4 ${activeTestimonial === idx ? 'text-[#57606F]' : 'text-white/70'}`}>
                          "{t.quote}"
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-current/10 flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-[#233142] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-sm">
                          {getInitials(t.author)}
                        </div>
                        <div>
                          <p className={`text-[11px] font-bold ${activeTestimonial === idx ? 'text-[#233142]' : 'text-white'}`}>{t.author}</p>
                          <p className={`text-[9px] ${activeTestimonial === idx ? 'text-[#57606F]' : 'text-white/50'}`}>{t.company}</p>
                        </div>
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
          7. RESOURCES SECTION (EDITORIAL PUBLICATIONS & GUIDES)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 reveal">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                ANÁLISIS EDITORIAL
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233142] uppercase">
                PERSPECTIVAS TRIBUTARIAS Y LEGALES
              </h2>
            </div>
            <button
              onClick={() => setCurrentRoute('resources')}
              className="text-[11px] font-bold uppercase tracking-wider text-[#B22222] flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              <span>CENTRO DE RECURSOS</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((art) => (
              <div
                key={art.id}
                onClick={() => setCurrentRoute(`article-detail:${art.id}`)}
                className="doppelrand-shell cursor-pointer group flex flex-col justify-between"
              >
                <div className="doppelrand-core overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#233142]/5">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3.5 left-3.5 bg-[#233142] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        {art.category}
                      </div>
                    </div>

                    <div className="p-7 space-y-3.5">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#57606F]">
                        {art.date} · {art.readTime}
                      </p>
                      <h3 className="font-serif-display text-xl font-bold text-[#233142] group-hover:text-[#B22222] transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-[#57606F] font-light line-clamp-2 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 pb-6 pt-0 flex items-center justify-between text-xs border-t border-[#233142]/5 mt-4">
                    <span className="text-[#57606F] text-[11px]">Por {art.author}</span>
                    <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          8. CONTACT SECTION (VIP ACCESS CONSULTATION TICKET BAND)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="doppelrand-shell p-4 bg-white border border-[#233142]/10 shadow-2xl reveal">
            <div className="doppelrand-core p-8 md:p-14 bg-white flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* Graphic + Info Left */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">
                
                {/* VIP Ticket Badge */}
                <div className="h-24 w-36 bg-[#233142] text-white rounded-2xl border-2 border-[#B22222] flex flex-col items-center justify-center p-3 shadow-xl transform -rotate-3 shrink-0">
                  <span className="font-serif-display text-xs font-bold text-[#B22222] tracking-wider">AMV LEGAL</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 mt-0.5">VIP PASS</span>
                  <span className="text-[8px] text-white/50 mt-1 uppercase tracking-widest">CONSULTA 2026</span>
                </div>

                <div className="space-y-3 max-w-lg">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                    ACCESO DIRECTO A SOCIOS
                  </span>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#233142] uppercase leading-tight">
                    SU CONSULTA TÉCNICA SIN COSTO INICIAL
                  </h2>
                  <p className="text-xs sm:text-sm text-[#57606F] font-light leading-relaxed">
                    Agende una llamada de 30 minutos con un socio principal para diagnosticar su requerimiento legal o tributario.
                  </p>
                </div>

              </div>

              {/* Action Button Right */}
              <div className="shrink-0">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-pill-accent py-3.5 px-6"
                >
                  <span>AGENDAR CONSULTA AHORA</span>
                  <div className="btn-pill-icon">
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                  </div>
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
