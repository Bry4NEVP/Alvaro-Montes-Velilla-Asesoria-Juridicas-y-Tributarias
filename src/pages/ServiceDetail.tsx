import React from 'react';
import { ArrowLeft, ArrowUpRight, CheckCircle2, ChevronRight, Mail, Phone, Calendar } from 'lucide-react';
import { Service, TeamMember } from '../types';

interface ServiceDetailProps {
  serviceId: string;
  services: Service[];
  team: TeamMember[];
  setCurrentRoute: (route: string) => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceId, services, team, setCurrentRoute }) => {
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="text-center py-32 space-y-6 max-w-7xl mx-auto px-4">
        <h1 className="font-editorial text-4xl text-deep-slate-blue">Servicio no encontrado</h1>
        <button 
          onClick={() => setCurrentRoute('practice')}
          className="text-xs font-bold uppercase tracking-wider bg-corporate-red text-bone-white px-6 py-3 rounded-lg hover:bg-deep-slate-blue transition-all"
        >
          Volver a Áreas
        </button>
      </div>
    );
  }

  // Filter team members of this specific business unit
  const relatedPartners = team.filter(t => t.businessUnit === service.businessUnit || t.businessUnit === 'management');

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb / Back button */}
      <section className="pt-8">
        <button 
          onClick={() => setCurrentRoute('practice')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-slate hover:text-corporate-red transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Áreas
        </button>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left main content */}
        <div className="lg:col-span-8 space-y-12 stagger-up">
          {/* Hero */}
          <div className="space-y-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-corporate-red/10 text-corporate-red bg-corporate-red/5">
              {service.businessUnit}
            </span>
            <h1 className="font-editorial text-4xl md:text-5xl font-semibold text-deep-slate-blue leading-tight">
              {service.title}
            </h1>
            <p className="text-base text-soft-slate leading-relaxed font-sans font-light">
              {service.description}
            </p>
          </div>

          <div className="editorial-line" />

          {/* Details list */}
          <div className="space-y-6">
            <h2 className="font-editorial text-2xl font-semibold text-deep-slate-blue">
              Líneas de asesoría
            </h2>
            <ul className="divide-y divide-deep-slate-blue/5">
              {service.details.map((detail, idx) => (
                <li key={idx} className="py-4 text-sm text-soft-slate leading-relaxed font-sans font-light flex gap-4 items-start">
                  <div className="h-2 w-2 rounded-full bg-corporate-red mt-2.5 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Grid */}
          <div className="bg-white border border-deep-slate-blue/5 rounded-2xl p-8 space-y-6">
            <h2 className="font-editorial text-2xl font-semibold text-deep-slate-blue">
              Beneficios para el cliente
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-soft-slate leading-relaxed font-sans font-light">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div className="space-y-6">
            <h2 className="font-editorial text-2xl font-semibold text-deep-slate-blue">
              Orientación y acompañamiento
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="border border-deep-slate-blue/10 rounded-xl p-6 bg-bone-white/5 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-corporate-red block">ENTREGABLE 0{idx+1}</span>
                  <p className="text-xs text-deep-slate-blue font-semibold font-sans leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar Consultation Widget */}
        <div className="lg:col-span-4 space-y-8 stagger-up" style={{ animationDelay: '200ms' }}>
          {/* Consultation CTA Widget */}
          <div className="bg-deep-slate-blue text-bone-white rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="font-editorial text-2xl font-semibold leading-tight text-bone-white">
              ¿Requiere evaluar su caso?
            </h3>
            <p className="text-xs text-bone-white/70 leading-relaxed font-sans font-light">
              Nuestro equipo ofrece orientación clara para revisar su requerimiento y definir los pasos a seguir.
            </p>
            <button 
              onClick={() => setCurrentRoute('contact')}
              className="w-full text-center bg-corporate-red text-bone-white hover:bg-white hover:text-deep-slate-blue py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            >
              Solicitar asesoría
              <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>

          {/* Partner profile contacts list */}
          <div className="bg-white border border-deep-slate-blue/5 rounded-3xl p-8 space-y-6">
            <h3 className="font-editorial text-lg font-bold text-deep-slate-blue">
              Equipo relacionado
            </h3>
            <div className="space-y-6">
              {relatedPartners.slice(0, 2).map((partner) => (
                <div key={partner.id} className="flex gap-4 items-center border-b border-deep-slate-blue/5 pb-4 last:border-b-0 last:pb-0">
                  <img 
                    src={partner.image} 
                    alt={partner.name}
                    className="h-12 w-12 rounded-full object-cover bg-deep-slate-blue/5"
                  />
                  <div>
                    <h4 className="font-editorial text-base font-bold text-deep-slate-blue">{partner.name}</h4>
                    <span className="text-[10px] text-soft-slate block mb-1 font-sans">{partner.role}</span>
                    <a href={`mailto:${partner.email}`} className="text-[10px] font-bold text-corporate-red hover:underline block font-sans">
                      {partner.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
