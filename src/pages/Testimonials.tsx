import React, { useState } from 'react';
import { Testimonial } from '../types';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  testimonials: Testimonial[];
  setCurrentRoute: (route: string) => void;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials, setCurrentRoute }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx(prev => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIdx(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <section className="pt-16 text-center space-y-6 stagger-up">
        <span className="text-xs font-bold uppercase tracking-widest text-corporate-red">OPINIONES</span>
        <h1 className="font-editorial text-5xl md:text-6xl font-semibold text-deep-slate-blue leading-none">
          Casos de Éxito de Clientes
        </h1>
        <p className="text-base text-soft-slate leading-relaxed font-sans font-light max-w-xl mx-auto">
          Conozca la experiencia de las juntas directivas, fondos de inversión y directores financieros que han depositado su confianza corporativa en Alvarado Montes Velilla.
        </p>
      </section>

      {/* Interactive Testimonial Slider */}
      <section className="bg-white border border-deep-slate-blue/5 rounded-3xl p-8 md:p-16 shadow-lg space-y-8 relative stagger-up" style={{ animationDelay: '100ms' }}>
        {/* Quote Symbol background */}
        <Quote className="absolute top-8 left-8 h-20 w-20 text-corporate-red/5 -z-10" />

        <div className="space-y-6 text-center">
          <div className="flex justify-center gap-1">
            {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-corporate-red text-corporate-red" />
            ))}
          </div>

          <blockquote className="font-editorial text-2xl md:text-3xl leading-relaxed text-deep-slate-blue italic">
            "{testimonials[activeIdx].quote}"
          </blockquote>

          <div className="space-y-1 font-sans">
            <h4 className="font-editorial text-lg font-bold text-deep-slate-blue">
              {testimonials[activeIdx].author}
            </h4>
            <span className="text-xs text-soft-slate">
              {testimonials[activeIdx].role} • <span className="text-corporate-red font-semibold">{testimonials[activeIdx].company}</span>
            </span>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex justify-center items-center gap-4 pt-4 border-t border-deep-slate-blue/5">
          <button 
            onClick={handlePrev}
            className="p-2 border border-deep-slate-blue/10 rounded-full text-deep-slate-blue hover:bg-deep-slate-blue hover:text-bone-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                className={`h-2.5 w-2.5 rounded-full transition-all cursor-pointer ${
                  activeIdx === idx ? 'bg-corporate-red w-6' : 'bg-deep-slate-blue/20'
                }`}
                aria-label={`Ir a testimonio ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={handleNext}
            className="p-2 border border-deep-slate-blue/10 rounded-full text-deep-slate-blue hover:bg-deep-slate-blue hover:text-bone-white transition-colors cursor-pointer focus:outline-none"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Grid of additional testimonials (Static) */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-up" style={{ animationDelay: '200ms' }}>
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white border border-deep-slate-blue/5 rounded-2xl p-6 space-y-4">
            <Quote className="h-6 w-6 text-corporate-red" />
            <p className="text-xs text-soft-slate font-light leading-relaxed italic">
              "{t.quote}"
            </p>
            <div className="border-t border-deep-slate-blue/5 pt-4">
              <h5 className="font-editorial text-base font-bold text-deep-slate-blue">{t.author}</h5>
              <span className="text-[10px] text-soft-slate block">{t.role}</span>
              <span className="text-[10px] font-bold text-corporate-red block">{t.company}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
