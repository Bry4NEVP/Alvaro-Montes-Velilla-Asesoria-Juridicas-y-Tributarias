import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Scale, TrendingUp, FileCheck, Shield, ChevronRight, ChevronLeft, Star, CheckCircle2, Play, Zap, Search, Award } from 'lucide-react';
import { Service, Article, Testimonial } from '../types';
import { TEAM } from '../data';

interface HomeProps {
  setCurrentRoute: (route: string) => void;
  services: Service[];
  articles: Article[];
  testimonials: Testimonial[];
}

export const Home: React.FC<HomeProps> = ({ setCurrentRoute, services, articles, testimonials }) => {
  const founders = TEAM.slice(0, 3);
  const [activeFounderIdx, setActiveFounderIdx] = useState(0);
  const [isFounderPaused, setIsFounderPaused] = useState(false);

  useEffect(() => {
    if (isFounderPaused) return;
    const timer = setInterval(() => {
      setActiveFounderIdx((prev) => (prev + 1) % founders.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isFounderPaused, founders.length]);

  const currentFounder = founders[activeFounderIdx];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const businessUnits = [
    {
      id: 'legal',
      title: 'ÁREA JURÍDICA',
      desc: 'Asesoría en derecho familiar, civil, tutelas, derechos de petición, demandas y asuntos ante centrales de riesgo.',
      icon: <Scale className="h-6 w-6 text-[#2563EB]" />,
      badge: 'JURÍDICO',
    },
    {
      id: 'tax',
      title: 'ÁREA TRIBUTARIA',
      desc: 'Acompañamiento en declaraciones de renta, retenciones en la fuente, industria y comercio, IVA y emplazamientos.',
      icon: <TrendingUp className="h-6 w-6 text-[#B22222]" />,
      badge: 'IMPUESTOS',
    },
    {
      id: 'accounting',
      title: 'ÁREA CONTABLE',
      desc: 'Respaldo técnico en contaduría pública, revisión fiscal, auditoría forense e impuestos tributarios.',
      icon: <FileCheck className="h-6 w-6 text-[#059669]" />,
      badge: 'CONTABLE',
    },
    {
      id: 'insurance',
      title: 'ÁREA DE SEGUROS',
      desc: 'Venta de pólizas, reclamaciones SOAT, ADRES, responsabilidad civil y acompañamiento en calificación de invalidez.',
      icon: <Shield className="h-6 w-6 text-[#4F46E5]" />,
      badge: 'RIESGOS',
    },
  ];

  const targetAudiences = [
    'Personas naturales y familias',
    'Empresas y comerciantes',
    'Contribuyentes con obligaciones tributarias',
    'Usuarios que requieren reclamaciones o pólizas',
    'Clientes que buscan prevención y defensa de sus derechos',
  ];

  const stats = [
    { value: '4', label: 'Áreas de Servicio', sub: 'Jurídica, contable, tributaria y seguros' },
    { value: '8', label: 'Valores Corporativos', sub: 'Ética, respeto y excelencia' },
    { value: '3', label: 'Líneas de Atención', sub: 'Celulares disponibles' },
    { value: '6', label: 'Días de Oficina', sub: 'Lunes a sábado' },
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
          1. HERO SECTION (CINEMATIC EDITORIAL BACKGROUND COMPOSITION)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] lg:min-h-[92dvh] flex items-center pt-16 pb-0 lg:pt-20 overflow-hidden bg-[#EDE8DF]">

        {/* Layer 1: Full-Width Editorial Leadership Portrait Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="ImagenHero1.png"
            alt="Alvarado Montes Velilla - Equipo profesional"
            className="w-full h-full object-cover object-center filter saturate-[0.8] contrast-[1.08]"
          />
          {/* Dark vignette tint */}
          <div className="absolute inset-0 bg-[#233142]/20 mix-blend-multiply" />
        </div>

        {/* Layer 2: Architectural Warm Bone Left-to-Right Blending Gradient */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#EDE8DF] via-[#EDE8DF]/65 via-25% sm:via-20% to-transparent" />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#EDE8DF] via-transparent to-[#EDE8DF]/15" />

        {/* Noise texture for surface depth */}
        <div className="pointer-events-none absolute inset-0 z-2 opacity-[0.018]" style={{ backgroundImage: 'linear-gradient(#233142 1px, transparent 1px), linear-gradient(90deg, #233142 1px, transparent 1px)', backgroundSize: '100px 100px' }} />

        {/* Layer 4: Hero Content Container */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* LEFT COLUMN: Editorial Text, Headline & CTAs */}
            <div className="lg:col-span-7 space-y-9 stagger-up">

              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-3 border border-[#B22222]/18 bg-[#B22222]/6 px-4 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B22222]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  ASESORÍAS JURÍDICAS, CONTABLES Y TRIBUTARIAS
                </span>
              </div>

              {/* Editorial Headline & Subtitle */}
              <div className="space-y-2 max-w-2xl">
                <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.85rem] font-bold tracking-tight text-[#233142] uppercase leading-[1.01]">
                  ALVARADO MONTES VELILLA
                </h1>
                <div className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-[#B22222] font-medium tracking-tight leading-tight pt-1 mb-2">
                  Su tranquilidad legal es nuestra prioridad.
                </div>
              </div>

              {/* Subtext Paragraph Lead */}
              <p className="text-base sm:text-lg text-[#57606F] leading-relaxed font-sans font-light max-w-xl">
                Brindamos soluciones jurídicas, contables y tributarias con enfoque profesional, ético y estratégico para personas naturales y empresas.
              </p>

              {/* Action Buttons (Button-in-Button Architecture) */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-pill-accent"
                >
                  <span>AGENDAR ASESORÍA</span>
                  <div className="btn-pill-icon">
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                  </div>
                </button>

                <button
                  onClick={() => setCurrentRoute('practice')}
                  className="btn-pill-ghost"
                >
                  <span>VER ÁREAS</span>
                  <div className="btn-pill-icon">
                    <Play className="h-3 w-3 fill-[#233142] text-[#233142] ml-0.5" />
                  </div>
                </button>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-8 border-t border-[#233142]/10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Zap className="h-3.5 w-3.5" />
                  </div>
                  <span>Atención directa</span>
                </div>

                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Search className="h-3.5 w-3.5" />
                  </div>
                  <span>Orientación clara</span>
                </div>

                <div className="flex items-center gap-2.5 text-[11px] font-bold text-[#57606F] uppercase tracking-wider">
                  <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222]">
                    <Award className="h-3.5 w-3.5" />
                  </div>
                  <span>Acompañamiento permanente</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bespoke Organic Curve Transition into Dark Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, display: 'block' }}>
          <svg viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[80px] md:h-[116px] block">
            <path
              d="M0,50 C320,110 680,15 1040,75 C1240,98 1360,40 1440,55 L1440,110 L0,110 Z"
              fill="#233142"
            />
          </svg>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          2. SERVICE PREVIEW SECTION (FEATURED TOP SERVICES)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#233142] text-[#EDE8DF] pt-12 pb-24 md:pb-32 -mt-px">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 reveal">
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                SERVICIOS PRINCIPALES
              </span>
              <h2 className="font-serif-display text-3xl md:text-5xl font-bold tracking-tight text-white uppercase leading-tight">
                ACOMPAÑAMIENTO LEGAL, CONTABLE Y TRIBUTARIO
              </h2>
            </div>
            <button
              onClick={() => setCurrentRoute('practice')}
              className="text-[11px] font-bold uppercase tracking-wider text-[#B22222] flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              <span>VER SERVICIOS COMPLETOS</span>
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
                      <div className="h-12 w-12 rounded-xl bg-white/6 border border-white/8 flex items-center justify-center text-[#B22222] group-hover:scale-105 transition-transform duration-200">
                        <Scale className="h-6 w-6" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#B22222]/10 text-[#B22222] border border-[#B22222]/15">
                        ASESORÍA
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
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">CONOCER SERVICIO</span>
                    <div className="h-7 w-7 rounded-full bg-[#B22222]/12 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-colors duration-200">
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
          3. ABOUT SECTION (LEADERSHIP & FOUNDING PARTNERS CAROUSEL)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-32 bg-[#EDE8DF]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="doppelrand-shell p-3 sm:p-4 bg-[#F5F1EA] border border-[#233142]/8 reveal"
            onMouseEnter={() => setIsFounderPaused(true)}
            onMouseLeave={() => setIsFounderPaused(false)}
          >
            <div className="doppelrand-core p-6 sm:p-8 md:p-12 bg-[#FAF7F2] space-y-8">

              {/* Top Navigation Bar with Founder Tabs & Navigation */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#233142]/10 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 border border-[#B22222]/18 bg-[#B22222]/6 px-3 py-1 rounded-full mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                      EQUIPO PROFESIONAL · PERFIL {activeFounderIdx + 1} DE {founders.length}
                    </span>
                  </div>
                  <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#233142] uppercase leading-tight">
                    PROFESIONALES COMPROMETIDOS CON SU CASO.
                  </h2>
                </div>

                {/* Interactive Founder Selector Tabs */}
                <div className="flex items-center gap-2 flex-wrap">
                  {founders.map((partner, idx) => {
                    const isActive = idx === activeFounderIdx;
                    return (
                      <button
                        key={partner.id}
                        onClick={() => setActiveFounderIdx(idx)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${isActive
                          ? 'bg-[#233142] text-[#EDE8DF] shadow-md scale-105'
                          : 'bg-[#EDE8DF]/80 text-[#57606F] hover:bg-[#EDE8DF] hover:text-[#233142]'
                          }`}
                      >
                        <span className={`text-[10px] font-extrabold ${isActive ? 'text-[#B22222]' : 'text-[#57606F]'}`}>
                          0{idx + 1}
                        </span>
                        <span>{partner.name.split(' ')[1]} {partner.name.split(' ')[2] || ''}</span>
                      </button>
                    );
                  })}

                  {/* Manual Carousel Arrow Buttons */}
                  <div className="flex items-center gap-1 ml-2">
                    <button
                      onClick={() => setActiveFounderIdx((prev) => (prev === 0 ? founders.length - 1 : prev - 1))}
                      className="h-8 w-8 rounded-full border border-[#233142]/15 flex items-center justify-center text-[#233142] hover:bg-[#233142] hover:text-[#EDE8DF] transition-colors cursor-pointer"
                      title="Socio anterior"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setActiveFounderIdx((prev) => (prev + 1) % founders.length)}
                      className="h-8 w-8 rounded-full border border-[#233142]/15 flex items-center justify-center text-[#233142] hover:bg-[#233142] hover:text-[#EDE8DF] transition-colors cursor-pointer"
                      title="Socio siguiente"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Active Founder Card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                {/* Photo Left with Animated Transition */}
                <div key={currentFounder.id} className="lg:col-span-5 relative h-[360px] md:h-[430px] overflow-hidden rounded-2xl border border-[#233142]/8 animate-fade-in group">
                  <img
                    src={currentFounder.image}
                    alt={`${currentFounder.name} - Equipo Alvarado Montes Velilla`}
                    className="w-full h-full object-cover object-top filter saturate-[0.9] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/80 via-[#233142]/15 to-transparent" />

                  <div className="absolute top-4 right-4 bg-[#233142]/80 backdrop-blur-md text-[#EDE8DF] text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
                    Perfil {activeFounderIdx + 1} / 3
                  </div>

                  <div className="absolute bottom-5 left-6 right-6 text-white space-y-1">
                    <p className="font-serif-display text-xl font-bold">{currentFounder.name}</p>
                    <p className="text-[11px] uppercase tracking-widest text-[#EDE8DF]/80 font-semibold">{currentFounder.role}</p>
                  </div>
                </div>

                {/* Partner Details Right */}
                <div key={`info-${currentFounder.id}`} className="lg:col-span-7 space-y-6 animate-fade-in">

                  <div className="space-y-2">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#B22222]/10 text-[#B22222] border border-[#B22222]/15">
                      {currentFounder.role}
                    </span>
                    <h3 className="font-serif-display text-3xl font-bold text-[#233142]">
                      {currentFounder.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-[#57606F] leading-relaxed font-sans font-light max-w-[60ch]">
                    {currentFounder.bio}
                  </p>

                  {/* Credentials / Specialty Highlights */}
                  <div className="space-y-2 pt-2 border-t border-[#233142]/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#57606F] block">
                      ENFOQUE PROFESIONAL Y ÁREAS DE APOYO
                    </span>
                    <div className="space-y-2">
                      {currentFounder.credentials.map((cred, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2.5 text-xs text-[#233142] font-medium">
                          <CheckCircle2 className="h-4 w-4 text-[#B22222] shrink-0 mt-0.5" />
                          <span>{cred}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button
                      onClick={() => setCurrentRoute('about')}
                      className="btn-pill-accent"
                    >
                    <span>CONOCER LA FIRMA</span>
                      <div className="btn-pill-icon">
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                      </div>
                    </button>

                    <button
                      onClick={() => setCurrentRoute(`team:${currentFounder.id}`)}
                      className="btn-pill-ghost"
                    >
                    <span>VER INFORMACIÓN COMPLETA</span>
                      <div className="btn-pill-icon">
                        <ArrowUpRight className="h-3.5 w-3.5 text-[#233142]" />
                      </div>
                    </button>
                  </div>

                </div>

              </div>

              {/* Progress Line Bar */}
              <div className="w-full bg-[#233142]/8 h-1 rounded-full overflow-hidden">
                <div
                  key={`progress-${activeFounderIdx}-${isFounderPaused}`}
                  className={`h-full bg-[#B22222] transition-all duration-300 ${isFounderPaused ? 'opacity-50' : 'animate-[progress_5.5s_linear_forwards]'}`}
                  style={{ width: isFounderPaused ? '100%' : undefined }}
                />
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          4. STATISTICS SECTION (HIGH-IMPACT KEY METRICS STRIP)
      ═════════════════════════════════════════════════════════════════ */}
      <section ref={statsRef} className="py-16 lg:py-24 bg-[#233142] text-white relative border-y border-white/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`doppelrand-shell-dark p-2 text-center transition-all duration-700 ${countersVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="doppelrand-core-dark p-6 space-y-2 flex flex-col justify-center items-center bg-[#1C2836]">
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
      <section className="bg-[#EDE8DF] text-[#233142] py-24 lg:py-36 border-b border-[#233142]/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="text-center space-y-4 mb-16 reveal">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
              EN QUÉ NOS ENFOCAMOS
            </span>
            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold tracking-tight text-[#233142] uppercase">
              ÁREAS DE ASESORÍA INTEGRAL
            </h2>
            <div className="h-px w-12 bg-[#B22222] mx-auto mt-4" />
          </div>

          {/* 4 Vertical Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {businessUnits.map((unit) => (
              <div
                key={unit.id}
                onClick={() => setCurrentRoute(`practice:${unit.id}`)}
                className="doppelrand-shell cursor-pointer group flex flex-col justify-between h-full bg-white text-[#233142] border border-[#233142]/8 hover:border-[#B22222]/30 transition-all duration-300"
              >
                <div className="doppelrand-core p-8 flex flex-col justify-between space-y-8 bg-white">

                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-12 w-12 rounded-xl bg-[#F5F1EA] border border-[#233142]/8 flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                        {unit.icon}
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#233142]/6 text-[#233142]">
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

                  <div className="pt-6 border-t border-[#233142]/8 flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222]">VER DETALLES</span>
                    <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-colors duration-200">
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
          6. TESTIMONIALS SECTION (TARGET AUDIENCE & CLIENT REVIEWS)
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 bg-[#233142] text-[#EDE8DF] border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">

            {/* Left Column: Target Audience checklist */}
            <div className="lg:col-span-5 space-y-7 reveal">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                ASESORÍA PARA
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl font-bold text-white uppercase leading-snug">
                PERSONAS NATURALES Y EMPRESAS
              </h2>
              <p className="text-sm text-white/65 leading-relaxed font-sans font-light max-w-md">
                Prestamos un servicio basado en el análisis riguroso, la claridad en la información y el acompañamiento permanente.
              </p>

              <div className="space-y-3.5 pt-2">
                {targetAudiences.map((aud, idx) => (
                  <div key={idx} className="flex items-center gap-3.5 text-xs text-white/90 font-medium">
                    <div className="h-5 w-5 rounded-full bg-[#B22222]/12 border border-[#B22222]/20 flex items-center justify-center text-[#B22222] shrink-0">
                      <CheckCircle2 className="h-3 w-3" />
                    </div>
                    <span>{aud}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Testimonial Reviews Cards */}
            <div className="lg:col-span-7 space-y-6 reveal">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {testimonials.map((t, idx) => {
                  const isActive = activeTestimonial === idx;
                  return (
                    <div
                      key={t.id}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`doppelrand-shell-dark cursor-pointer transition-all duration-300 ${isActive ? 'scale-[1.02]' : 'opacity-75 hover:opacity-100'}`}
                    >
                      <div className={`doppelrand-core-dark p-6 flex flex-col justify-between transition-colors duration-300 ${isActive ? 'bg-[#1C2836] border border-[#B22222]/40 text-white' : 'bg-[#19232F]/80 text-white/80'
                        }`}>
                        <div className="space-y-4">
                          {/* Stars */}
                          <div className="flex gap-1">
                            {[...Array(t.rating ?? 5)].map((_, i) => (
                              <Star key={i} className="h-3.5 w-3.5 fill-[#B22222] text-[#B22222]" />
                            ))}
                          </div>

                          <p className="text-xs italic leading-relaxed line-clamp-4 text-white/85">
                            "{t.quote}"
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                          <div className="h-9 w-9 rounded-full bg-[#233142] border border-white/10 text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {getInitials(t.author)}
                          </div>
                          <div>
                            <p className="text-[11px] font-bold text-white">{t.author}</p>
                            <p className="text-[9px] text-white/50">{t.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
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
                RECURSOS DE ORIENTACIÓN
              </span>
              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233142] uppercase">
                INFORMACIÓN JURÍDICA, CONTABLE Y TRIBUTARIA
              </h2>
            </div>
            <button
              onClick={() => setCurrentRoute('resources')}
              className="text-[11px] font-bold uppercase tracking-wider text-[#B22222] flex items-center gap-2 hover:gap-3 transition-all cursor-pointer"
            >
              <span>VER RECURSOS</span>
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
                    <div className="h-7 w-7 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-colors duration-200">
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

          <div className="doppelrand-shell p-4 bg-white border border-[#233142]/8 reveal">
            <div className="doppelrand-core p-8 md:p-14 bg-white flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Graphic + Info Left */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">

                {/* VIP Ticket Badge */}
                <div className="h-24 w-36 bg-[#233142] text-white rounded-2xl border border-[#B22222]/60 flex flex-col items-center justify-center p-3 transform -rotate-2 shrink-0">
                  <span className="font-serif-display text-xs font-bold text-[#B22222] tracking-wider">M&V</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90 mt-0.5">ASESORÍA</span>
                  <span className="text-[8px] text-white/50 mt-1 uppercase tracking-widest">JURÍDICA Y TRIBUTARIA</span>
                </div>

                <div className="space-y-3 max-w-lg">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                    CONTACTO DIRECTO
                  </span>
                  <h2 className="font-serif-display text-2xl sm:text-3xl font-bold text-[#233142] uppercase leading-tight">
                    HABLEMOS DE SU CASO
                  </h2>
                  <p className="text-xs sm:text-sm text-[#57606F] font-light leading-relaxed">
                    Reciba orientación clara para sus requerimientos jurídicos, contables, tributarios o de seguros.
                  </p>
                </div>

              </div>

              {/* Action Button Right */}
              <div className="shrink-0">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-pill-accent py-3.5 px-6"
                >
                  <span>SOLICITAR ASESORÍA</span>
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
