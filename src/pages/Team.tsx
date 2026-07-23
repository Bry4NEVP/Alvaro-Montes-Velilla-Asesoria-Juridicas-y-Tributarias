import React, { useState } from 'react';
import { TeamMember } from '../types';
import { Mail, ArrowUpRight, GraduationCap, X } from 'lucide-react';

interface TeamProps {
  team: TeamMember[];
  setCurrentRoute: (route: string) => void;
}

export const Team: React.FC<TeamProps> = ({ team, setCurrentRoute }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'legal' | 'tax' | 'accounting' | 'insurance'>('all');
  const [selectedPartner, setSelectedPartner] = useState<TeamMember | null>(null);

  const filteredTeam = activeFilter === 'all' 
    ? team 
    : team.filter(t => t.businessUnit === activeFilter);

  const filterTabs: { label: string; value: typeof activeFilter }[] = [
    { label: 'Todo el Equipo', value: 'all' },
    { label: 'Área Legal', value: 'legal' },
    { label: 'Área Tributaria', value: 'tax' },
    { label: 'Área Contable', value: 'accounting' },
    { label: 'Riesgos y Seguros', value: 'insurance' },
  ];

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="pt-16 max-w-3xl space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">NUESTROS SOCIOS</span>
        <h1 className="font-editorial text-5xl md:text-7xl font-semibold text-deep-slate-blue leading-none">
          Liderazgo Académico e Institucional
        </h1>
        <p className="text-lg text-soft-slate leading-relaxed font-sans font-light">
          Nuestros socios principales son líderes de opinión en sus áreas respectivas, combinando el ejercicio activo de la abogacía y contabilidad con la investigación técnica de posgrado.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-wrap items-center gap-3 border-b border-deep-slate-blue/10 pb-6">
          {filterTabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveFilter(tab.value)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 focus:outline-none ${
                activeFilter === tab.value
                  ? 'bg-deep-slate-blue border-deep-slate-blue text-bone-white shadow-sm'
                  : 'bg-white border-deep-slate-blue/10 text-deep-slate-blue hover:border-corporate-red/35'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Team Grid */}
      <section className="stagger-up" style={{ animationDelay: '200ms' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div 
              key={member.id}
              onClick={() => setSelectedPartner(member)}
              className="bg-white border border-deep-slate-blue/5 rounded-3xl overflow-hidden hover-lift cursor-pointer flex flex-col group h-full"
            >
              {/* Photo */}
              <div className="aspect-[4/3] bg-deep-slate-blue/5 overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 filter contrast-95 saturate-75"
                />
                <div className="absolute top-4 left-4 bg-deep-slate-blue text-bone-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {member.businessUnit}
                </div>
              </div>

              {/* Bio Details */}
              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl font-bold text-deep-slate-blue group-hover:text-corporate-red transition-colors duration-300">
                    {member.name}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-wider text-corporate-red block">
                    {member.role}
                  </span>
                  <p className="text-xs text-soft-slate leading-relaxed font-sans font-light line-clamp-3">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-deep-slate-blue/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-soft-slate flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4 text-corporate-red" />
                    Ver Credenciales Académicas
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-corporate-red group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expanded Credentials Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-deep-slate-blue/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-bone-white max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative border border-deep-slate-blue/15 animate-scale-up">
            <button 
              onClick={() => setSelectedPartner(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-deep-slate-blue/5 text-deep-slate-blue hover:bg-corporate-red hover:text-bone-white transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Photo left */}
              <div className="md:col-span-5 h-64 md:h-full bg-deep-slate-blue/10">
                <img 
                  src={selectedPartner.image} 
                  alt={selectedPartner.name}
                  className="w-full h-full object-cover filter contrast-95 saturate-75"
                />
              </div>

              {/* Text right */}
              <div className="md:col-span-7 p-8 space-y-6">
                <div className="space-y-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-corporate-red px-2.5 py-1 rounded-full border border-corporate-red/10 bg-corporate-red/5">
                    {selectedPartner.businessUnit}
                  </span>
                  <h3 className="font-editorial text-3xl font-bold text-deep-slate-blue mt-2">{selectedPartner.name}</h3>
                  <p className="text-xs font-semibold text-soft-slate">{selectedPartner.role}</p>
                </div>

                <p className="text-xs text-soft-slate leading-relaxed font-sans font-light">
                  {selectedPartner.bio}
                </p>

                <div className="space-y-3">
                  <h4 className="font-editorial text-lg font-bold text-deep-slate-blue border-b border-deep-slate-blue/10 pb-1.5 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-corporate-red" />
                    Formación y Membresías
                  </h4>
                  <ul className="space-y-1.5">
                    {selectedPartner.credentials.map((cred, idx) => (
                      <li key={idx} className="text-xs text-soft-slate leading-relaxed font-sans font-light flex gap-2 items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-corporate-red mt-1.5 flex-shrink-0" />
                        <span>{cred}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-deep-slate-blue/5 flex items-center justify-between">
                  <a 
                    href={`mailto:${selectedPartner.email}`}
                    className="inline-flex items-center gap-2 text-xs font-bold text-corporate-red hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    {selectedPartner.email}
                  </a>
                  <button 
                    onClick={() => { setSelectedPartner(null); setCurrentRoute('contact'); }}
                    className="text-xs font-bold uppercase tracking-wider bg-deep-slate-blue text-bone-white px-4 py-2 rounded-lg hover:bg-corporate-red transition-colors cursor-pointer"
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
