import React from 'react';
import { Award, Briefcase, Users, Star } from 'lucide-react';

const milestones = [
  {
    year: '2001',
    title: 'Fundación de la Firma',
    description: 'El Dr. Alberto Alvarado abre el primer despacho en Bogotá enfocado en derecho societario e inversiones extranjeras.',
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    year: '2008',
    title: 'Consolidación Tributaria',
    description: 'Asociación estratégica con el Dr. Pablo Montes para integrar la consultoría impositiva y el acompañamiento tributario.',
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
  },
];

export const Timeline: React.FC = () => {
  return (
    <div className="relative">
      {/* Vertical connector */}
      <div className="absolute left-[1.125rem] top-6 bottom-6 w-px bg-gradient-to-b from-[#B22222]/50 via-[#233142]/15 to-transparent" />

      <div className="space-y-8 py-2">
        {milestones.map((item, idx) => (
          <div
            key={idx}
            className="relative pl-16 stagger-up group"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Icon node */}
            <div className="absolute left-0 top-1 h-9 w-9 rounded-2xl bg-[#EDE8DF] border-2 border-[#233142]/12 flex items-center justify-center text-[#233142] shadow-sm group-hover:border-[#B22222] group-hover:text-[#B22222] transition-all duration-300">
              {item.icon}
            </div>

            {/* Card */}
            <div className="doppelrand-shell group-hover:border-[#233142]/15">
              <div className="doppelrand-core p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-serif-display text-[11px] font-bold tracking-[0.2em] text-[#B22222] uppercase">
                    {item.year}
                  </span>
                  <span className="h-px w-5 bg-[#B22222]/40" />
                </div>
                <h4 className="font-serif-display text-xl font-bold text-[#233142] mb-2 group-hover:text-[#B22222] transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-[13px] text-[#57606F] leading-relaxed font-sans font-light">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
