import React, { useState } from 'react';
import { Timeline } from '../components/Timeline';
import { Shield, BookOpen, Sparkles, Mail, GraduationCap, X, ArrowUpRight } from 'lucide-react';
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
      icon: <Shield className="h-6 w-6 text-corporate-red" />,
    },
    {
      title: 'Rigor Académico',
      desc: 'Nuestros profesionales publican en revistas científicas y lideran cátedras de posgrado comercial y tributario.',
      icon: <BookOpen className="h-6 w-6 text-corporate-red" />,
    },
    {
      title: 'Soluciones a la Medida',
      desc: 'Cada estructura impositiva u operativa societaria se diseña específicamente para el perfil de riesgo del cliente.',
      icon: <Sparkles className="h-6 w-6 text-corporate-red" />,
    }
  ];

  return (
    <div className="space-y-0 pb-0 page-fade-in">

      {/* ═══════════════════════════════════
          HERO — Editorial large heading
      ═══════════════════════════════════ */}
      <section className="pt-20 pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-corporate-red/3 rounded-full blur-3xl pointer-events-none translate-x-1/3" />
        
        <div className="space-y-8 max-w-4xl stagger-up relative z-10">
          <div className="eyebrow">Conozca la Firma</div>
          <h1 className="font-editorial text-5xl md:text-7xl font-semibold text-deep-slate-blue leading-[1.03]">
            Uniendo tradición<br className="hidden md:block" /> y modernidad jurídica.
          </h1>
          <p className="text-lg text-soft-slate leading-relaxed font-sans font-light max-w-2xl">
            Alvarado Montes Velilla nació con la visión de romper el molde de la consultora corporativa clásica. Integramos bajo un mismo techo las áreas críticas para el crecimiento de cualquier compañía: derecho corporativo, planeación fiscal, auditoría contable y transferencia de riesgos.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          METHODOLOGY — Visual split
      ═══════════════════════════════════ */}
      <section className="pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Photo */}
          <div className="lg:col-span-5 relative stagger-up">
            <div className="relative h-[480px] overflow-hidden rounded-[32px] shadow-[0_32px_80px_rgba(35,49,66,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=700"
                alt="Edificio corporativo"
                className="w-full h-full object-cover filter contrast-[0.92] saturate-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-slate-blue/35 to-transparent" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-bone-white border-2 border-deep-slate-blue/6 rounded-3xl shadow-xl flex flex-col items-center justify-center gap-1 z-10">
              <span className="font-editorial text-4xl font-semibold text-corporate-red">25+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-soft-slate text-center leading-tight">Años de<br/>Trayectoria</span>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-7 space-y-10 stagger-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-4">
              <div className="eyebrow">Nuestra Metodología</div>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold text-deep-slate-blue leading-tight">
                Nuestra Metodología de Intervención
              </h2>
              <p className="text-[14px] text-soft-slate leading-relaxed font-sans font-light">
                Nuestros clientes no tratan con asistentes ni intermediarios inexpertos. Cada expediente es dirigido directamente por uno de los socios principales en conjunto con analistas especializados en cada área de práctica. Esto nos permite garantizar un estándar de control de calidad inalcanzable para despachos masificados.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
              {pillars.map((p, idx) => (
                <div key={idx} className="space-y-4 group">
                  <div className="h-12 w-12 bg-corporate-red/6 rounded-2xl flex items-center justify-center group-hover:bg-corporate-red/12 transition-colors duration-300">
                    {p.icon}
                  </div>
                  <h3 className="font-editorial text-lg font-bold text-deep-slate-blue leading-snug">{p.title}</h3>
                  <p className="text-[12px] text-soft-slate leading-relaxed font-sans font-light">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TIMELINE — White surface
      ═══════════════════════════════════ */}
      <section className="bg-white border-t border-b border-deep-slate-blue/5 py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="eyebrow">Nuestra Historia</div>
              <h2 className="font-editorial text-4xl md:text-5xl font-semibold text-deep-slate-blue leading-tight">
                Un Legado de Excelencia y Crecimiento
              </h2>
              <p className="text-[14px] text-soft-slate leading-relaxed font-sans font-light">
                Explore los hitos que han forjado nuestra reputación como una de las firmas multidisciplinarias más respetadas del país.
              </p>
              <button
                onClick={() => setCurrentRoute('contact')}
                className="btn-primary mt-4"
              >
                <span>Agendar Consulta</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>

            <div className="lg:col-span-7">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FOUNDING PARTNERS
      ═══════════════════════════════════ */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          <div className="max-w-2xl space-y-5">
            <div className="eyebrow">Nuestros Socios</div>
            <h2 className="font-editorial text-4xl md:text-5xl font-semibold text-deep-slate-blue leading-tight">
              Liderazgo Académico e Institucional
            </h2>
            <p className="text-base text-soft-slate font-light leading-relaxed">
              Los tres socios fundadores dirigen personalmente cada mandato. Académicos en activo, con décadas de experiencia institucional y un historial comprobable de resultados.
            </p>
          </div>

          <div className="h-px bg-deep-slate-blue/6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedPartner(member)}
                className="group relative bg-white border border-deep-slate-blue/6 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full transition-all duration-450"
                style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-7px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(35,49,66,0.1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(178,34,34,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(35,49,66,0.06)';
                }}
              >
                {/* Top accent on hover */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-corporate-red via-corporate-red/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl" />

                {/* Photo */}
                <div className="aspect-[4/3] bg-deep-slate-blue/5 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[0.95] saturate-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-slate-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>

                {/* Bio */}
                <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-editorial text-2xl font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-red block">
                      {member.role}
                    </span>
                    <p className="text-[12px] text-soft-slate leading-relaxed font-light line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-deep-slate-blue/6 flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-soft-slate flex items-center gap-1.5">
                      <GraduationCap className="h-4 w-4 text-corporate-red" />
                      Ver Credenciales
                    </span>
                    <div className="h-8 w-8 rounded-full bg-corporate-red/8 flex items-center justify-center group-hover:bg-corporate-red transition-colors duration-300">
                      <ArrowUpRight className="h-3.5 w-3.5 text-corporate-red group-hover:text-bone-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-deep-slate-blue/85 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-bone-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(35,49,66,0.35)] relative border border-deep-slate-blue/10 animate-scale-up">
            <button
              onClick={() => setSelectedPartner(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-deep-slate-blue/6 text-deep-slate-blue hover:bg-corporate-red hover:text-bone-white transition-colors cursor-pointer z-10"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 h-64 md:h-full bg-deep-slate-blue/10 relative">
                <img
                  src={selectedPartner.image}
                  alt={selectedPartner.name}
                  className="w-full h-full object-cover filter contrast-[0.95] saturate-[0.75]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-slate-blue/30 to-transparent" />
              </div>

              <div className="md:col-span-7 p-8 space-y-6">
                <div className="space-y-2">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-corporate-red px-3 py-1 rounded-full border border-corporate-red/15 bg-corporate-red/5">
                    {selectedPartner.businessUnit}
                  </span>
                  <h3 className="font-editorial text-3xl font-bold text-deep-slate-blue mt-3">{selectedPartner.name}</h3>
                  <p className="text-[12px] font-semibold text-soft-slate">{selectedPartner.role}</p>
                </div>

                <p className="text-[12px] text-soft-slate leading-relaxed font-sans font-light">
                  {selectedPartner.bio}
                </p>

                <div className="space-y-3">
                  <h4 className="font-editorial text-lg font-bold text-deep-slate-blue border-b border-deep-slate-blue/8 pb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-corporate-red" />
                    Formación y Membresías
                  </h4>
                  <ul className="space-y-2">
                    {selectedPartner.credentials.map((cred, idx) => (
                      <li key={idx} className="text-[12px] text-soft-slate leading-relaxed font-light flex gap-2.5 items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-corporate-red mt-1.5 flex-shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-deep-slate-blue/6 flex items-center justify-between">
                  <a
                    href={`mailto:${selectedPartner.email}`}
                    className="inline-flex items-center gap-2 text-[12px] font-bold text-corporate-red hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {selectedPartner.email}
                  </a>
                  <button
                    onClick={() => { setSelectedPartner(null); setCurrentRoute('contact'); }}
                    className="text-[11px] font-bold uppercase tracking-wider bg-deep-slate-blue text-bone-white px-5 py-2.5 rounded-full hover:bg-corporate-red transition-colors cursor-pointer"
                  >
                    Agendar Reunión
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
