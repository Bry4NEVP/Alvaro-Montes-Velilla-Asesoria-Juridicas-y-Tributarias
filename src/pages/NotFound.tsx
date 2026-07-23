import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundProps {
  setCurrentRoute: (route: string) => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ setCurrentRoute }) => {
  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center text-center px-4 space-y-8 page-fade-in max-w-xl mx-auto">
      <div className="space-y-4">
        <span className="text-[120px] md:text-[180px] font-editorial font-bold text-corporate-red/10 leading-none block select-none">
          404
        </span>
        <h1 className="font-editorial text-4xl md:text-5xl font-semibold text-deep-slate-blue leading-tight">
          Expediente No Encontrado
        </h1>
        <p className="text-sm text-soft-slate leading-relaxed font-sans font-light">
          La dirección web ingresada no corresponde con ninguna de nuestras áreas de práctica, artículos o guías registradas en el servidor.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button 
          onClick={() => setCurrentRoute('home')}
          className="bg-deep-slate-blue text-bone-white hover:bg-corporate-red px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
        >
          <Home className="h-4 w-4" />
          Volver al Inicio
        </button>
        <button 
          onClick={() => window.history.back()}
          className="border border-deep-slate-blue/20 text-deep-slate-blue hover:bg-deep-slate-blue/5 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5 cursor-pointer focus:outline-none"
        >
          <ArrowLeft className="h-4 w-4" />
          Regresar
        </button>
      </div>
    </div>
  );
};
