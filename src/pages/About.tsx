import React, { useState, useEffect } from 'react';
import { Timeline } from '../components/Timeline';
import { Shield, BookOpen, Sparkles, Mail, GraduationCap, X, ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';
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
      title: 'Transparencia Total',
      desc: 'Claridad absoluta en el cobro de honorarios y en el diagnóstico inicial de probabilidades de éxito legal.',
      icon: <Shield className="h-5 w-5 text-[#B22222]" />,
    },
    {
      title: 'Rigor Académico',
      desc: 'Nuestros profesionales publican en revistas científicas y lideran cátedras de posgrado comercial y tributario.',
      icon: <BookOpen className="h-5 w-5 text-[#B22222]" />,
    },
    {
      title: 'Soluciones a la Medida',
      desc: 'Cada estructura impositiva u operativa societaria se diseña específicamente para el perfil de riesgo del cliente.',
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
          1. HERO — EDITORIAL PRESTIGE & QUIET LUXURY INTRO
      ═════════════════════════════════════════════════════════════════ */}
      <section className="pt-16 pb-24 md:pt-24 md:pb-36 relative overflow-hidden bg-gradient-to-b from-[#EDE8DF] via-[#F5F1EA] to-[#EDE8DF]">
        {/* Subtle architectural mesh grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.022]"
          style={{
            backgroundImage: 'linear-gradient(#233142 1px, transparent 1px), linear-gradient(90deg, #233142 1px, transparent 1px)',
            backgroundSize: '90px 90px',
          }}
        />
        
        <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-[#B22222]/4 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#233142]/4 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-9 stagger-up">
            
            {/* Pill Eyebrow */}
            <div className="inline-flex items-center gap-3 border border-[#B22222]/20 bg-[#B22222]/6 px-4.5 py-1.5 rounded-full shadow-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B22222] animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                CONOZCA LA FIRMA
              </span>
            </div>

            {/* Editorial Display Headline */}
            <h1 className="font-serif-display text-4xl sm:text-6xl lg:text-[4.75rem] font-bold text-[#233142] uppercase leading-[1.02] tracking-tight">
              UNIENDO TRADICIÓN Y MODERNIDAD JURÍDICA.
            </h1>

            {/* Paragraph Lead with optimal reading measure */}
            <p className="text-base sm:text-lg text-[#57606F] leading-relaxed font-sans font-light max-w-[65ch]">
              Alvarado Montes Velilla nació con la visión de romper el molde de la consultora corporativa clásica. Integramos bajo un mismo techo las áreas críticas para el crecimiento de cualquier compañía: derecho corporativo, planeación fiscal, auditoría contable y transferencia de riesgos.
            </p>

            {/* Editorial highlights bar */}
            <div className="pt-6 border-t border-[#233142]/10 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] shrink-0">
                  <Award className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#233142] uppercase tracking-wider">Excelencia 360°</p>
                  <p className="text-[10px] text-[#57606F]">Servicio Corporativo Integral</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] shrink-0">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#233142] uppercase tracking-wider">Blindaje Legal</p>
                  <p className="text-[10px] text-[#57606F]">Mitigación Activa de Riesgo</p>
                </div>
              </div>

              <div className="flex items-center gap-3 hidden md:flex">
                <div className="h-8 w-8 rounded-full bg-[#B22222]/10 flex items-center justify-center text-[#B22222] shrink-0">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#233142] uppercase tracking-wider">Control Directo</p>
                  <p className="text-[10px] text-[#57606F]">Atención Personalizada</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          2. METHODOLOGY — DOPPELRAND SPLIT WITH EDITORIAL CARDS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-16 items-center">

          {/* Photo Left - Doppelrand Architectural Enclosure */}
          <div className="lg:col-span-5 relative reveal">
            <div className="doppelrand-shell p-3.5 bg-[#233142]/5 border border-[#233142]/12 shadow-2xl">
              <div className="doppelrand-core relative h-[480px] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-[#233142]/10">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=700"
                  alt="Edificio corporativo"
                  className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.7] transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#233142]/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Trajectory Accent Module */}
            <div className="absolute -bottom-8 -right-4 sm:-right-8 doppelrand-shell p-2 bg-white/95 backdrop-blur-md z-20 shadow-2xl animate-float">
              <div className="doppelrand-core p-5 text-center space-y-1 min-w-[150px]">
                <span className="font-serif-display text-4xl font-bold text-[#B22222]">25+</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#57606F] block leading-tight pt-1">
                  Años de<br/>Trayectoria
                </span>
              </div>
            </div>
          </div>

          {/* Content Right */}
          <div className="lg:col-span-7 space-y-10 reveal">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 border border-[#B22222]/20 bg-[#B22222]/6 px-3.5 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  NUESTRA METODOLOGÍA
                </span>
              </div>

              <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#233142] uppercase leading-tight">
                NUESTRA METODOLOGÍA DE INTERVENCIÓN
              </h2>

              <p className="text-sm sm:text-base text-[#57606F] leading-relaxed font-sans font-light max-w-[62ch]">
                Nuestros clientes no tratan con asistentes ni intermediarios inexpertos. Cada expediente es dirigido directamente por uno de los socios principales en conjunto con analistas especializados en cada área de práctica. Esto nos permite garantizar un estándar de control de calidad inalcanzable para despachos masificados.
              </p>
            </div>

            {/* 3 Pillar Cards in Doppelrand Enclosure */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
              {pillars.map((p, idx) => (
                <div key={idx} className="doppelrand-shell cursor-pointer group flex flex-col justify-between">
                  <div className="doppelrand-core p-6 space-y-4 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="h-10 w-10 bg-[#B22222]/10 rounded-xl flex items-center justify-center text-[#B22222] group-hover:scale-110 transition-transform duration-300">
                        {p.icon}
                      </div>
                      <h3 className="font-serif-display text-base font-bold text-[#233142] leading-snug group-hover:text-[#B22222] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-[11px] text-[#57606F] leading-relaxed font-sans font-light">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          3. TIMELINE — HIGH-CONTRAST EDITORIAL HISTORY SECTION
      ═════════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#233142]/10 py-24 lg:py-36 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <div className="lg:col-span-5 space-y-7 lg:sticky lg:top-28 self-start reveal">
              <div className="inline-flex items-center gap-2 border border-[#B22222]/20 bg-[#B22222]/6 px-3.5 py-1 rounded-full">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                  NUESTRA HISTORIA
                </span>
              </div>

              <h2 className="font-serif-display text-4xl sm:text-5xl font-bold text-[#233142] uppercase leading-tight">
                UN LEGADO DE EXCELENCIA Y CRECIMIENTO
              </h2>

              <p className="text-sm sm:text-base text-[#57606F] leading-relaxed font-sans font-light max-w-md">
                Explore los hitos que han forjado nuestra reputación como una de las firmas multidisciplinarias más respetadas del país.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => setCurrentRoute('contact')}
                  className="btn-pill-primary"
                >
                  <span>AGENDAR CONSULTA</span>
                  <div className="btn-pill-icon">
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                  </div>
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 reveal">
              <Timeline />
            </div>

          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════════
          4. FOUNDING PARTNERS — DOPPELRAND EXECUTIVE CREDENTIAL CARDS
      ═════════════════════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          
          <div className="max-w-3xl space-y-4 reveal">
            <div className="inline-flex items-center gap-2 border border-[#B22222]/20 bg-[#B22222]/6 px-3.5 py-1 rounded-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                NUESTROS SOCIOS
              </span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-5xl font-bold text-[#233142] uppercase leading-tight">
              LIDERAZGO ACADÉMICO E INSTITUCIONAL
            </h2>

            <p className="text-sm sm:text-base text-[#57606F] font-light leading-relaxed max-w-[65ch]">
              Los tres socios fundadores dirigen personalmente cada mandato. Académicos en activo, con décadas de experiencia institucional y un historial comprobable de resultados.
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
                    <div className="aspect-[4/3] bg-[#233142]/5 overflow-hidden relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        loading="lazy"
                        className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.8] transition-transform duration-700 group-hover:scale-105"
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
                      VER CREDENTIALES
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
          5. CREDENTIALS MODAL — EXECUTIVE DIALOGUE
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
                      <GraduationCap className="h-4.5 w-4.5 text-[#B22222]" />
                      Formación y Membresías
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
                      <span>AGENDAR REUNIÓN</span>
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
