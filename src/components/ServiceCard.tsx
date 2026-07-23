import React from 'react';
import { Scale, Briefcase, ShieldCheck, Shield, TrendingUp, Globe, FileText, FileCheck, Layers, Home, ArrowUpRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Scale': return <Scale className="h-6 w-6" />;
      case 'Briefcase': return <Briefcase className="h-6 w-6" />;
      case 'ShieldCheck': return <ShieldCheck className="h-6 w-6" />;
      case 'Shield': return <Shield className="h-6 w-6" />;
      case 'TrendingUp': return <TrendingUp className="h-6 w-6" />;
      case 'Globe': return <Globe className="h-6 w-6" />;
      case 'FileText': return <FileText className="h-6 w-6" />;
      case 'FileCheck': return <FileCheck className="h-6 w-6" />;
      case 'Layers': return <Layers className="h-6 w-6" />;
      case 'Home': return <Home className="h-6 w-6" />;
      default: return <Scale className="h-6 w-6" />;
    }
  };

  const unitConfig = {
    legal: {
      color: 'text-blue-600',
      bg: 'bg-blue-50/80',
      border: 'border-blue-100',
      badge: 'text-blue-600 bg-blue-50 border-blue-100',
      label: 'Legal'
    },
    tax: {
      color: 'text-corporate-red',
      bg: 'bg-red-50/80',
      border: 'border-red-100',
      badge: 'text-corporate-red bg-red-50 border-red-100',
      label: 'Tributario'
    },
    accounting: {
      color: 'text-emerald-600',
      bg: 'bg-emerald-50/80',
      border: 'border-emerald-100',
      badge: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      label: 'Contable'
    },
    insurance: {
      color: 'text-indigo-600',
      bg: 'bg-indigo-50/80',
      border: 'border-indigo-100',
      badge: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      label: 'Seguros'
    }
  };

  const config = unitConfig[service.businessUnit] || unitConfig.legal;

  return (
    <div
      onClick={onClick}
      className="group relative bg-white border border-deep-slate-blue/6 rounded-3xl p-8 cursor-pointer flex flex-col justify-between overflow-hidden"
      style={{ transition: 'transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease' }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-7px)';
        (e.currentTarget as HTMLElement).style.boxShadow = '0 20px 50px rgba(35,49,66,0.1), 0 8px 20px rgba(35,49,66,0.06)';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(178,34,34,0.15)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
        (e.currentTarget as HTMLElement).style.borderColor = 'rgba(35,49,66,0.06)';
      }}
    >
      {/* Top accent on hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-corporate-red/60 via-corporate-red to-corporate-red/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-t-3xl" />

      <div className="space-y-6">
        {/* Icon & badge row */}
        <div className="flex items-center justify-between">
          <div className={`h-14 w-14 rounded-2xl ${config.bg} border ${config.border} ${config.color} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
            {getIcon(service.iconName)}
          </div>
          <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full border ${config.badge}`}>
            {config.label}
          </span>
        </div>

        {/* Text */}
        <div className="space-y-3">
          <h3 className="font-editorial text-2xl font-semibold text-deep-slate-blue group-hover:text-corporate-red transition-colors duration-300 leading-snug">
            {service.title}
          </h3>
          <p className="text-[13px] text-soft-slate leading-relaxed font-sans font-light line-clamp-3">
            {service.description}
          </p>
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-deep-slate-blue/5 flex items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-corporate-red">
          Consultar Detalles
        </span>
        <div className="h-8 w-8 rounded-full bg-corporate-red/8 flex items-center justify-center group-hover:bg-corporate-red transition-colors duration-300">
          <ArrowUpRight className="h-3.5 w-3.5 text-corporate-red group-hover:text-bone-white transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};
