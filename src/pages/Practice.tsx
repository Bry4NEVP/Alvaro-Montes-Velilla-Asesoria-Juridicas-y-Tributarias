import React, { useState, useEffect } from 'react';
import { Service } from '../types';
import { ServiceCard } from '../components/ServiceCard';
import { Scale, TrendingUp, FileCheck, Shield, ChevronRight } from 'lucide-react';

interface PracticeProps {
  services: Service[];
  setCurrentRoute: (route: string) => void;
  selectedFilter?: string; // Optional filter passed from App.tsx e.g. "practice:tax"
}

export const Practice: React.FC<PracticeProps> = ({ services, setCurrentRoute, selectedFilter }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'legal' | 'tax' | 'accounting' | 'insurance'>('all');

  // Sync with selectedFilter prop
  useEffect(() => {
    if (selectedFilter) {
      const parts = selectedFilter.split(':');
      if (parts.length > 1) {
        const filterVal = parts[1] as any;
        if (['legal', 'tax', 'accounting', 'insurance'].includes(filterVal)) {
          setActiveFilter(filterVal);
        }
      }
    }
  }, [selectedFilter]);

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(s => s.businessUnit === activeFilter);

  const filters: { label: string; value: typeof activeFilter; icon?: any }[] = [
    { label: 'Todas las Áreas', value: 'all' },
    { label: 'Área Jurídica', value: 'legal', icon: <Scale className="h-4 w-4" /> },
    { label: 'Área Tributaria', value: 'tax', icon: <TrendingUp className="h-4 w-4" /> },
    { label: 'Área Contable', value: 'accounting', icon: <FileCheck className="h-4 w-4" /> },
    { label: 'Área de Seguros', value: 'insurance', icon: <Shield className="h-4 w-4" /> },
  ];

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="pt-16 max-w-3xl space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">NUESTROS SERVICIOS</span>
        <h1 className="font-editorial text-5xl md:text-7xl font-semibold text-deep-slate-blue leading-none">
          Áreas de asesoría integral
        </h1>
        <p className="text-lg text-soft-slate leading-relaxed font-sans font-light">
          Acompañamos a personas naturales y empresas en asuntos jurídicos, contables, tributarios y de seguros, con atención clara, oportuna y responsable.
        </p>
      </section>

      {/* Dynamic Navigation/Filter */}
      <section className="stagger-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-wrap items-center gap-3 border-b border-deep-slate-blue/10 pb-6">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActiveFilter(filter.value);
                // Clear query parameters in the parent path if any
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border cursor-pointer transition-all duration-300 focus:outline-none ${
                activeFilter === filter.value
                  ? 'bg-deep-slate-blue border-deep-slate-blue text-bone-white shadow-md'
                  : 'bg-white border-deep-slate-blue/10 text-deep-slate-blue hover:border-corporate-red/35'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="stagger-up" style={{ animationDelay: '200ms' }}>
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white border border-deep-slate-blue/5 rounded-2xl">
            <p className="text-soft-slate text-sm font-sans font-light">No se encontraron servicios en esta área.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onClick={() => setCurrentRoute(`service-detail:${service.id}`)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};
