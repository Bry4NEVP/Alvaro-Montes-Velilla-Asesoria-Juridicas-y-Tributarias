import React from 'react';
import { Award, Briefcase, Users, Star } from 'lucide-react';

export const Timeline: React.FC = () => {
  const history = [
    {
      year: '2001',
      title: 'Fundación de la Firma',
      description: 'El Dr. Alberto Alvarado abre el primer despacho en Bogotá enfocado en derecho societario e inversiones extranjeras.',
      icon: <Briefcase className="h-5 w-5" />,
    },
    {
      year: '2008',
      title: 'Consolidación Tributaria',
      description: 'Asociación estratégica con la Dra. Beatriz Montes para integrar la consultoría impositiva de alta complejidad y estructuración fiscal.',
      icon: <Award className="h-5 w-5" />,
    },
    {
      year: '2015',
      title: 'Fusión e Integración Contable',
      description: 'Fusión con el despacho de revisoría y auditoría del Dr. Carlos Velilla, naciendo oficialmente Alvarado Montes Velilla.',
      icon: <Users className="h-5 w-5" />,
    },
    {
      year: '2022',
      title: 'División de Gestión de Riesgos',
      description: 'Apertura de la unidad de seguros corporativos y fideicomisos patrimoniales de la mano de la Dra. Diana Restrepo.',
      icon: <Star className="h-5 w-5" />,
    }
  ];

  return (
    <div className="relative">
      {/* Vertical connector */}
      <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-corporate-red/60 via-deep-slate-blue/15 to-transparent" />

      <div className="space-y-10 py-2">
        {history.map((item, idx) => (
          <div key={idx} className="relative pl-16 stagger-up group" style={{ animationDelay: `${idx * 200}ms` }}>
            {/* Icon node */}
            <div className="absolute left-0 top-1 h-10 w-10 rounded-2xl bg-bone-white border-2 border-deep-slate-blue/15 flex items-center justify-center text-deep-slate-blue shadow-sm group-hover:border-corporate-red group-hover:text-corporate-red transition-all duration-300">
              {item.icon}
            </div>

            <div className="bg-white border border-deep-slate-blue/6 rounded-3xl p-7 group-hover:border-deep-slate-blue/15 group-hover:shadow-[0_8px_24px_rgba(35,49,66,0.06)] transition-all duration-350">
              <span className="inline-flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] text-corporate-red uppercase font-sans">{item.year}</span>
                <span className="h-px w-6 bg-corporate-red/40" />
              </span>
              <h4 className="font-editorial text-xl font-bold text-deep-slate-blue mb-2 group-hover:text-corporate-red transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-[13px] text-soft-slate leading-relaxed font-sans font-light">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
