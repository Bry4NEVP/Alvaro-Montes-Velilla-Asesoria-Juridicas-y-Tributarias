import React, { useState, useEffect } from 'react';
import { Shield, BookOpen, Sparkles, Mail, GraduationCap, X, ArrowUpRight, Eye, Target, Star, Lock, Users, Scale } from 'lucide-react';
import { TeamMember } from '../types';

interface AboutProps {
  team: TeamMember[];
  setCurrentRoute: (route: string) => void;
}

export const About: React.FC<AboutProps> = ({ team, setCurrentRoute }) => {
  const [selectedPartner, setSelectedPartner] = useState<TeamMember | null>(null);

  const founders = team.slice(0, 3);

  const pillars = [
    {
      title: 'Claridad en la información',
      desc: 'Explicamos cada asunto de forma comprensible, real y orientada a que el cliente pueda tomar decisiones con tranquilidad.',
      icon: <Shield className="h-5 w-5 text-[#B22222]" />,
    },
    {
      title: 'Conocimiento técnico',
      desc: 'Aplicamos criterio jurídico, contable y tributario para atender cada requerimiento con responsabilidad y soporte profesional.',
      icon: <BookOpen className="h-5 w-5 text-[#B22222]" />,
    },
    {
      title: 'Acompañamiento permanente',
      desc: 'Prestamos asesoría personalizada desde el diagnóstico inicial hasta el seguimiento del trámite o proceso correspondiente.',
      icon: <Sparkles className="h-5 w-5 text-[#B22222]" />,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
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
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-0 bg-[#EDE8DF] text-[#233142] selection:bg-[#B22222] selection:text-[#EDE8DF]">

      {/* ═════════════════════════════════════════════════════════════════
          1. HERO — CINEMATIC FULL-BLEED EDITORIAL
      ═════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] lg:min-h-[92dvh] flex items-end pt-16 pb-0 lg:pt-20 overflow-hidden bg-[#EDE8DF]">

        {/* Layer 1: Full-Width Architectural Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
            alt="Edificio corporativo moderno - Sede AMV"
            className="w-full h-full object-cover object-center filter saturate-[0.75] contrast-[1.08]"
          />
          {/* Dark tint for depth */}
          <div className="absolute inset-0 bg-[#233142]/30 mix-blend-multiply" />
        </div>

        {/* Layer 2: Bone-white left-to-right blending gradient */}
        <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#EDE8DF] via-[#EDE8DF]/70 via-30% sm:via-25% to-transparent" />
        <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#EDE8DF] via-transparent to-[#EDE8DF]/20" />

        {/* Subtle grid texture for surface depth */}
        <div
          className="pointer-events-none absolute inset-0 z-2 opacity-[0.015]"
          style={{
            backgroundImage:
              'linear-gradient(#233142 1px, transparent 1px), linear-gradient(90deg, #233142 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
          aria-hidden="true"
        />

        {/* Layer 3: Hero Content */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-28 lg:pb-36">
          <div className="max-w-3xl space-y-8 stagger-up">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3 border border-[#B22222]/20 bg-[#B22222]/8 backdrop-blur-sm px-4 py-1.5 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B22222]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                LA FIRMA
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif-display text-5xl sm:text-6xl lg:text-[5.25rem] xl:text-[6rem] font-bold tracking-tight text-[#233142] uppercase leading-[1.01]">
              Asesoría<br />
              jurídica,<br />
              <span className="text-[#B22222]">contable</span><br />
              y tributaria.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-[#57606F] leading-relaxed font-sans font-light max-w-[52ch]">
              Somos una firma dedicada a la asesoría jurídica, contable y tributaria, comprometida con la defensa de los intereses de nuestros clientes mediante soluciones claras, oportunas y confiables.
            </p>

            {/* Metrics Strip */}
            <div className="grid grid-cols-3 max-w-md border-t border-[#233142]/12">
              <div className="py-6 pr-5 space-y-1.5">
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#233142] block leading-none">4</span>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-[#57606F] leading-snug">Áreas de<br />Servicio</p>
              </div>
              <div className="py-6 px-5 space-y-1.5 border-x border-[#233142]/12">
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#233142] block leading-none">4</span>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-[#57606F] leading-snug">Ejes de<br />Trabajo</p>
              </div>
              <div className="py-6 pl-5 space-y-1.5">
                <span className="font-serif-display text-3xl sm:text-4xl font-bold text-[#233142] block leading-none">8</span>
                <p className="font-sans text-[9px] font-bold uppercase tracking-[0.18em] text-[#57606F] leading-snug">Valores<br />Corporativos</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={() => setCurrentRoute('contact')}
                className="btn-pill-accent"
              >
                <span>SOLICITAR ASESORÍA</span>
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
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#233142]" />
                </div>
              </button>
            </div>

          </div>
        </div>

        {/* Organic Curve Transition into Methodology Section */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none" style={{ lineHeight: 0, display: 'block' }}>
          <svg viewBox="0 0 1440 110" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[70px] md:h-[100px] block">
            <path
              d="M0,60 C360,100 720,20 1080,70 C1280,90 1380,45 1440,55 L1440,110 L0,110 Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          2. METHODOLOGY — EDITORIAL NUMBERED PILLARS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#233142]/6 py-24 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">

            {/* Photo Left — Doppelrand Architectural Enclosure */}
            <div className="lg:col-span-5 relative reveal">
              <div className="doppelrand-shell p-3 bg-[#F7F4EE] border border-[#233142]/8">
                <div className="doppelrand-core relative h-[520px] overflow-hidden bg-[#233142]/5">
                  <img
                    src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=700"
                    alt="Edificio corporativo"
                    className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.7] transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* Trajectory Accent Badge */}
              <div className="absolute -bottom-6 -right-3 sm:-right-6 doppelrand-shell p-1.5 bg-white z-20">
                <div className="doppelrand-core p-4 text-center space-y-1 min-w-[140px]">
                  <span className="font-serif-display text-4xl font-bold text-[#B22222]">M&V</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#57606F] block leading-tight pt-1">
                    Asesorías<br/>Integrales
                  </span>
                </div>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 reveal">
              <div className="space-y-10">

                <div className="space-y-5">
                  <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233142] uppercase leading-tight">
                    Nuestro enfoque profesional
                  </h2>
                  <p className="text-sm sm:text-base text-[#57606F] leading-relaxed font-sans font-light max-w-[62ch]">
                    Prestamos un servicio basado en el análisis riguroso, la claridad en la información y el acompañamiento permanente, garantizando soluciones eficientes y responsables para cada cliente.
                  </p>
                </div>

                {/* Numbered pillar list */}
                <div className="border-t border-[#233142]/10 overflow-hidden">
                  {pillars.map((p, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start gap-6 py-8 border-b border-[#233142]/10 -mx-3 px-3 hover:bg-[#F7F4EE]/70 transition-colors duration-200 cursor-default"
                    >
                      {/* Ghost number */}
                      <span
                        className="font-serif-display text-[2.25rem] leading-none font-bold text-[#233142]/10 group-hover:text-[#B22222]/20 transition-colors duration-300 select-none min-w-[2.75rem] pt-0.5"
                        aria-hidden="true"
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <div className="h-10 w-10 bg-[#B22222]/8 rounded-xl flex items-center justify-center text-[#B22222] shrink-0 group-hover:bg-[#B22222]/14 transition-colors duration-200 mt-0.5">
                        {p.icon}
                      </div>

                      {/* Text */}
                      <div className="space-y-1.5 flex-1">
                        <h3 className="font-serif-display text-xl font-bold text-[#233142] group-hover:text-[#B22222] transition-colors duration-200 leading-snug">
                          {p.title}
                        </h3>
                        <p className="text-[13px] text-[#57606F] leading-relaxed font-sans font-light">
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          3. MISIÓN, VISIÓN & VALORES — EDITORIAL IDENTITY SECTION
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#1A242F] py-24 lg:py-36 relative overflow-hidden">

        {/* Subtle decorative background texture */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#B22222]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/6 to-transparent" />
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 60px, rgba(255,255,255,0.06) 60px, rgba(255,255,255,0.06) 61px)',
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* ── Section Header ── */}
          <div className="max-w-2xl space-y-5 mb-20 reveal">
            <div className="inline-flex items-center gap-2 border border-[#B22222]/30 bg-[#B22222]/10 px-3.5 py-1 rounded-full">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B22222]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                IDENTIDAD DE LA FIRMA
              </span>
            </div>

            <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-white uppercase leading-tight">
              PROPÓSITO, COMPROMISO Y PRINCIPIOS
            </h2>

            <p className="text-sm sm:text-base text-[#9BA8B5] leading-relaxed font-sans font-light">
              Nuestro ejercicio profesional se fundamenta en la ética, la responsabilidad y el conocimiento técnico, con atención humana y soluciones ajustadas a cada necesidad.
            </p>
          </div>

          {/* ── Misión & Visión — Two Doppelrand Cards ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* MISIÓN */}
            <div className="doppelrand-shell-dark reveal group">
              <div className="doppelrand-core-dark p-10 space-y-7 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#B22222]/15 border border-[#B22222]/25 flex items-center justify-center text-[#B22222] shrink-0 transition-all duration-300 group-hover:bg-[#B22222]/25">
                      <Target className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#B22222] mb-1">Misión</p>
                      <h3 className="font-serif-display text-2xl font-bold text-white leading-snug">
                        Soluciones claras y confiables
                      </h3>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/6" />

                  <p className="text-sm text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Brindar asesoría jurídica, contable y tributaria comprometida con la defensa de los intereses de nuestros clientes mediante soluciones claras, oportunas y confiables.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <div className="h-px flex-1 bg-white/6" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9BA8B5]">NUESTRO PROPÓSITO</span>
                </div>
              </div>
            </div>

            {/* VISIÓN */}
            <div className="doppelrand-shell-dark reveal group">
              <div className="doppelrand-core-dark p-10 space-y-7 h-full flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-2xl bg-[#B22222]/15 border border-[#B22222]/25 flex items-center justify-center text-[#B22222] shrink-0 transition-all duration-300 group-hover:bg-[#B22222]/25">
                      <Eye className="h-5 w-5" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#B22222] mb-1">Visión</p>
                      <h3 className="font-serif-display text-2xl font-bold text-white leading-snug">
                        Profesionalismo, ética y calidad
                      </h3>
                    </div>
                  </div>

                  <div className="h-px w-full bg-white/6" />

                  <p className="text-sm text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Consolidarnos como una firma reconocida por su profesionalismo, ética y calidad en la prestación de servicios jurídicos, contables y tributarios.
                  </p>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <div className="h-px flex-1 bg-white/6" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#9BA8B5]">NUESTRA VISIÓN</span>
                </div>
              </div>
            </div>

          </div>

          {/* ── Valores — Horizontal Strip ── */}
          <div className="border border-white/6 rounded-[1.5rem] overflow-hidden reveal">
            <div className="px-8 py-6 border-b border-white/6 flex items-center gap-3">
              <Star className="h-4 w-4 text-[#B22222]" strokeWidth={1.5} />
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#9BA8B5]">Valores Fundamentales</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

              {/* Honradez */}
              <div className="group relative p-8 flex flex-col gap-5 border-b sm:border-b-0 sm:border-r border-white/6 last:border-0 transition-colors duration-300 hover:bg-white/[0.03] cursor-default">
                <div className="h-10 w-10 rounded-xl bg-[#B22222]/12 border border-[#B22222]/20 flex items-center justify-center text-[#B22222] transition-all duration-300 group-hover:bg-[#B22222]/22">
                  <Shield className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif-display text-lg font-bold text-white">Honradez</h4>
                  <p className="text-xs text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Actuamos con transparencia, rectitud y respeto por los intereses legítimos de cada cliente.
                  </p>
                </div>
              </div>

              {/* Calidad humana */}
              <div className="group relative p-8 flex flex-col gap-5 border-b sm:border-b-0 lg:border-r border-white/6 last:border-0 transition-colors duration-300 hover:bg-white/[0.03] cursor-default">
                <div className="h-10 w-10 rounded-xl bg-[#B22222]/12 border border-[#B22222]/20 flex items-center justify-center text-[#B22222] transition-all duration-300 group-hover:bg-[#B22222]/22">
                  <Scale className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif-display text-lg font-bold text-white">Calidad humana</h4>
                  <p className="text-xs text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Brindamos atención cercana, comprensible y respetuosa para que cada persona se sienta acompañada.
                  </p>
                </div>
              </div>

              {/* Responsabilidad social */}
              <div className="group relative p-8 flex flex-col gap-5 border-b sm:border-r border-white/6 last:border-0 transition-colors duration-300 hover:bg-white/[0.03] cursor-default">
                <div className="h-10 w-10 rounded-xl bg-[#B22222]/12 border border-[#B22222]/20 flex items-center justify-center text-[#B22222] transition-all duration-300 group-hover:bg-[#B22222]/22">
                  <Lock className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif-display text-lg font-bold text-white">Responsabilidad social</h4>
                  <p className="text-xs text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Entendemos el impacto de nuestra asesoría en la vida, el patrimonio y la tranquilidad de nuestros clientes.
                  </p>
                </div>
              </div>

              {/* Compromiso */}
              <div className="group relative p-8 flex flex-col gap-5 transition-colors duration-300 hover:bg-white/[0.03] cursor-default">
                <div className="h-10 w-10 rounded-xl bg-[#B22222]/12 border border-[#B22222]/20 flex items-center justify-center text-[#B22222] transition-all duration-300 group-hover:bg-[#B22222]/22">
                  <Users className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif-display text-lg font-bold text-white">Excelencia</h4>
                  <p className="text-xs text-[#9BA8B5] leading-relaxed font-sans font-light">
                    Trabajamos con integridad, innovación y trabajo en equipo para entregar un servicio confiable y eficiente.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ── CTA Footer Strip ── */}
          <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-10 border-t border-white/6 reveal">
            <p className="text-sm text-[#9BA8B5] font-sans font-light max-w-md leading-relaxed">
              Nuestro compromiso es garantizar un servicio confiable, transparente y eficiente, orientado a la protección de los derechos y el patrimonio de nuestros clientes.
            </p>
            <button
              onClick={() => setCurrentRoute('contact')}
              className="btn-pill-accent shrink-0"
            >
              <span>SOLICITAR ASESORÍA</span>
              <div className="btn-pill-icon">
                <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          4. FOUNDING PARTNERS — DOPPELRAND EXECUTIVE CREDENTIAL CARDS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          <div className="space-y-6 reveal">
            <div className="flex items-center gap-4">
              <span className="font-sans text-[10px] font-bold uppercase tracking-[0.28em] text-[#57606F] whitespace-nowrap">
                Equipo Profesional
              </span>
              <div className="flex-1 h-px bg-[#233142]/10" />
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#233142] uppercase leading-tight">
              PROFESIONALES ESPECIALIZADOS
            </h2>

            <p className="text-sm sm:text-base text-[#57606F] font-light leading-relaxed max-w-[65ch]">
              Nuestro equipo está conformado por profesionales especializados en distintas áreas del derecho, la contabilidad y la tributación, comprometidos con la actualización permanente y la excelencia en el servicio.
            </p>
          </div>

          {/* 3 Founders Doppelrand Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedPartner(member)}
                className="doppelrand-shell cursor-pointer group flex flex-col justify-between"
              >
                <div className="doppelrand-core overflow-hidden flex flex-col justify-between">
                  <div>
                    {/* Photo */}
                    <div className="aspect-square bg-[#233142]/5 overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover object-top filter contrast-[0.95] saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    </div>

                    {/* Bio */}
                    <div className="p-7 space-y-3">
                      <h3 className="font-serif-display text-2xl font-bold text-[#233142] group-hover:text-[#B22222] transition-colors duration-300">
                        {member.name}
                      </h3>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#B22222] block">
                        {member.role}
                      </span>
                      <p className="text-xs text-[#57606F] leading-relaxed font-light line-clamp-3">
                        {member.bio}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 pt-0 flex items-center justify-between border-t border-[#233142]/6 mt-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#57606F] flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#B22222]" />
                      VER CREDENCIALES
                    </span>
                    <div className="h-8 w-8 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] group-hover:bg-[#B22222] group-hover:text-white transition-all duration-300">
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
          5. CIERRE — CTA EDITORIAL
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-20 lg:py-28 bg-[#EDE8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="doppelrand-shell p-4 bg-white border border-[#233142]/8 reveal">
            <div className="doppelrand-core p-8 md:p-14 bg-white flex flex-col md:flex-row items-center justify-between gap-10">

              {/* Info Left */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 text-center sm:text-left">

                {/* Badge */}
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

      {/* ═════════════════════════════════════════════════════════════════
          6. CREDENTIALS MODAL — EXECUTIVE DIALOGUE
      ═════════════════════════════════════════════════════════════════ */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-[#233142]/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="doppelrand-shell p-3 bg-white max-w-2xl w-full shadow-2xl relative animate-scale-up">
            <div className="doppelrand-core overflow-hidden relative">
              
              <button
                onClick={() => setSelectedPartner(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#233142]/10 text-[#233142] hover:bg-[#B22222] hover:text-white transition-colors cursor-pointer z-20"
                aria-label="Cerrar modal"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                <div className="md:col-span-5 h-64 md:h-full bg-[#233142]/10 relative">
                  <img
                    src={selectedPartner.image}
                    alt={selectedPartner.name}
                    className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.8]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/40 to-transparent" />
                </div>

                <div className="md:col-span-7 p-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-[#B22222] px-3 py-1 rounded-full border border-[#B22222]/20 bg-[#B22222]/8 inline-block">
                      {selectedPartner.businessUnit}
                    </span>
                    <h3 className="font-serif-display text-3xl font-bold text-[#233142] mt-3">{selectedPartner.name}</h3>
                    <p className="text-xs font-semibold text-[#57606F] uppercase tracking-wider">{selectedPartner.role}</p>
                  </div>

                  <p className="text-xs text-[#57606F] leading-relaxed font-sans font-light">
                    {selectedPartner.bio}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-serif-display text-base font-bold text-[#233142] border-b border-[#233142]/10 pb-2 flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-[#B22222]" />
                      Áreas de apoyo
                    </h4>
                    <ul className="space-y-2">
                      {selectedPartner.credentials.map((cred, idx) => (
                        <li key={idx} className="text-xs text-[#57606F] leading-relaxed font-light flex gap-2.5 items-start">
                          <div className="h-1.5 w-1.5 rounded-full bg-[#B22222] mt-1.5 flex-shrink-0" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#233142]/10 flex items-center justify-between">
                    <a
                      href={`mailto:${selectedPartner.email}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#B22222] hover:underline"
                    >
                      <Mail className="h-4 w-4" />
                      {selectedPartner.email}
                    </a>
                    <button
                      onClick={() => { setSelectedPartner(null); setCurrentRoute('contact'); }}
                      className="btn-pill-primary text-[10px] py-2 px-4"
                    >
                      <span>SOLICITAR ASESORÍA</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
};
