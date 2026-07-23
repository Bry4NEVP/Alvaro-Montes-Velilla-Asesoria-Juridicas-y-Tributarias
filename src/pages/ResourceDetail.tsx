import React, { useState } from 'react';
import { ArrowLeft, Download, FileText, CheckCircle2, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Resource } from '../types';

interface ResourceDetailProps {
  resourceId: string;
  resources: Resource[];
  setCurrentRoute: (route: string) => void;
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

export const ResourceDetail: React.FC<ResourceDetailProps> = ({ resourceId, resources, setCurrentRoute, triggerToast }) => {
  const resource = resources.find(r => r.id === resourceId);
  const [currentPageIdx, setCurrentPageIdx] = useState(0);
  const [formData, setFormData] = useState({ name: '', company: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!resource) {
    return (
      <div className="text-center py-32 space-y-6 max-w-7xl mx-auto px-4">
        <h1 className="font-editorial text-4xl text-deep-slate-blue">Recurso no encontrado</h1>
        <button 
          onClick={() => setCurrentRoute('resources')}
          className="text-xs font-bold uppercase tracking-wider bg-corporate-red text-bone-white px-6 py-3 rounded-lg hover:bg-deep-slate-blue transition-all"
        >
          Volver a Publicaciones
        </button>
      </div>
    );
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.company) {
      triggerToast('Por favor diligencie todos los campos requeridos.', 'info');
      return;
    }
    setIsSubmitted(true);
    triggerToast('Acceso autorizado. Su descarga está disponible.', 'success');
  };

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      triggerToast(`Archivo "${resource.title}" descargado con éxito.`, 'success');
    }, 2000);
  };

  return (
    <div className="space-y-16 pb-24 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Back button */}
      <section className="pt-8">
        <button 
          onClick={() => setCurrentRoute('resources')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-slate hover:text-corporate-red transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a Recursos
        </button>
      </section>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Side: Mock Document Viewer */}
        <div className="lg:col-span-7 space-y-6 stagger-up">
          <div className="flex items-center justify-between">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-corporate-red/10 text-corporate-red bg-corporate-red/5">
              PREVISUALIZACIÓN DE DOCUMENTO
            </span>
            <div className="flex items-center gap-2 text-xs font-bold text-soft-slate">
              <button 
                onClick={() => setCurrentPageIdx(prev => Math.max(0, prev - 1))}
                disabled={currentPageIdx === 0}
                className="p-1 hover:text-corporate-red disabled:opacity-30 cursor-pointer"
                aria-label="Página anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span>Pág {currentPageIdx + 1} de {resource.previewPages.length}</span>
              <button 
                onClick={() => setCurrentPageIdx(prev => Math.min(resource.previewPages.length - 1, prev + 1))}
                disabled={currentPageIdx === resource.previewPages.length - 1}
                className="p-1 hover:text-corporate-red disabled:opacity-30 cursor-pointer"
                aria-label="Página siguiente"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Document canvas */}
          <div className="bg-white border border-deep-slate-blue/15 rounded-3xl aspect-[1/1.3] p-10 flex flex-col justify-between shadow-lg relative overflow-hidden select-none">
            {/* Header background pattern/watermark */}
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-corporate-red/5 blur-2xl" />

            {/* Document Header */}
            <div className="flex justify-between items-center border-b border-deep-slate-blue/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 bg-deep-slate-blue rounded flex items-center justify-center text-bone-white text-[10px] font-bold">
                  AMV
                </div>
                <span className="text-[9px] font-bold tracking-wider text-soft-slate uppercase">Alvarado Montes Velilla</span>
              </div>
              <span className="text-[8px] font-semibold text-soft-slate uppercase tracking-widest">{resource.category}</span>
            </div>

            {/* Page Content */}
            <div className="flex-grow flex flex-col justify-center py-8 space-y-4">
              <div className="font-editorial text-2xl md:text-3xl font-semibold text-deep-slate-blue text-center leading-relaxed">
                {resource.previewPages[currentPageIdx]}
              </div>
              <p className="text-[10px] text-center text-soft-slate/50 font-sans tracking-wide">
                * Este documento es propiedad intelectual de AMV Asesorías. Queda prohibida su reproducción sin autorización.
              </p>
            </div>

            {/* Document Footer */}
            <div className="border-t border-deep-slate-blue/10 pt-4 flex justify-between items-center text-[9px] font-semibold text-soft-slate uppercase">
              <span>ESTUDIOS TRIBUTARIOS 2026</span>
              <span>Pág. 0{currentPageIdx + 1}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form Gate & Download Stats */}
        <div className="lg:col-span-5 space-y-8 stagger-up" style={{ animationDelay: '200ms' }}>
          {/* File description info */}
          <div className="space-y-4">
            <h1 className="font-editorial text-3xl md:text-4xl font-semibold text-deep-slate-blue leading-snug">
              {resource.title}
            </h1>
            <p className="text-sm text-soft-slate leading-relaxed font-sans font-light">
              {resource.description}
            </p>
            <div className="grid grid-cols-3 gap-4 border-y border-deep-slate-blue/10 py-4 text-center font-sans text-xs">
              <div>
                <span className="block text-soft-slate text-[10px] font-bold uppercase tracking-wider">Formato</span>
                <span className="font-bold text-deep-slate-blue uppercase">{resource.fileType}</span>
              </div>
              <div>
                <span className="block text-soft-slate text-[10px] font-bold uppercase tracking-wider">Tamaño</span>
                <span className="font-bold text-deep-slate-blue">{resource.size}</span>
              </div>
              <div>
                <span className="block text-soft-slate text-[10px] font-bold uppercase tracking-wider">Descargas</span>
                <span className="font-bold text-deep-slate-blue">{resource.downloadCount}</span>
              </div>
            </div>
          </div>

          {/* Gate Form / Action */}
          {!isSubmitted ? (
            <div className="bg-white border border-deep-slate-blue/5 rounded-3xl p-8 space-y-6 shadow-md">
              <div className="space-y-2">
                <h3 className="font-editorial text-xl font-bold text-deep-slate-blue">
                  Autorización de Descarga
                </h3>
                <p className="text-xs text-soft-slate font-sans font-light leading-relaxed">
                  Para acceder al documento completo y recibir las planillas asociadas, complete sus datos de contacto corporativo.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue block">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej. Juan Pérez"
                    className="w-full bg-bone-white/50 border border-deep-slate-blue/10 rounded-xl px-4 py-3 text-xs focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue block">Empresa</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    placeholder="Ej. Logística Global S.A.S."
                    className="w-full bg-bone-white/50 border border-deep-slate-blue/10 rounded-xl px-4 py-3 text-xs focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue block">Correo Corporativo</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="correo@empresa.com"
                    className="w-full bg-bone-white/50 border border-deep-slate-blue/10 rounded-xl px-4 py-3 text-xs focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-deep-slate-blue text-bone-white hover:bg-corporate-red py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
                >
                  <CheckCircle2 className="h-4 w-4" />
                  Habilitar Descarga
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-deep-slate-blue text-bone-white rounded-3xl p-8 space-y-6 shadow-xl animate-scale-up">
              <div className="space-y-2 text-center">
                <div className="h-12 w-12 rounded-full bg-corporate-red text-bone-white flex items-center justify-center mx-auto mb-4">
                  <Check className="h-6 w-6" />
                </div>
                <h3 className="font-editorial text-2xl font-bold">
                  Descarga Autorizada
                </h3>
                <p className="text-xs text-bone-white/70 font-sans font-light leading-relaxed">
                  Gracias por registrarse. Su enlace de descarga ya está activo.
                </p>
              </div>

              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="w-full bg-corporate-red text-bone-white hover:bg-white hover:text-deep-slate-blue py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
              >
                {isDownloading ? (
                  <>
                    <span className="h-4 w-4 border-2 border-bone-white border-t-transparent rounded-full animate-spin" />
                    Simulando Descarga...
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    Iniciar Descarga del Archivo
                  </>
                )}
              </button>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full text-center text-[10px] font-bold uppercase tracking-widest text-bone-white/40 hover:text-bone-white transition-colors"
              >
                Cambiar datos de registro
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
