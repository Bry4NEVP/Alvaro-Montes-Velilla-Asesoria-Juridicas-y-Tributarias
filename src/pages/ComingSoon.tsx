import React, { useState } from 'react';
import { ArrowLeft, Clock, Mail, Check, Bell } from 'lucide-react';

interface ComingSoonProps {
  setCurrentRoute: (route: string) => void;
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

export const ComingSoon: React.FC<ComingSoonProps> = ({ setCurrentRoute, triggerToast }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      triggerToast('Ingrese un correo electrónico válido.', 'info');
      setTimeout(() => setStatus('default'), 3000);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      triggerToast('Notificación registrada. Le avisaremos cuando se lance el portal.', 'success');
      setEmail('');
      setTimeout(() => setStatus('default'), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center px-4 space-y-10 page-fade-in max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-corporate-red/5 text-corporate-red">
          <Clock className="h-6 w-6" />
        </div>
        
        <span className="text-[10px] font-bold uppercase tracking-widest text-corporate-red block">DESARROLLO EN CURSO</span>
        
        <h1 className="font-editorial text-4xl md:text-6xl font-semibold text-deep-slate-blue leading-[1.1]">
          Portal de Clientes Alvarado Montes Velilla
        </h1>
        
        <p className="text-sm text-soft-slate leading-relaxed font-sans font-light max-w-lg mx-auto">
          Próximamente, nuestros clientes podrán radicar expedientes, descargar facturas, visualizar estados contables mensuales en tiempo real y chatear directamente con su abogado o asesor tributario.
        </p>
      </div>

      {/* Subscription/Notification Form */}
      <div className="bg-white border border-deep-slate-blue/5 rounded-3xl p-8 shadow-md w-full max-w-md">
        {status === 'success' ? (
          <div className="space-y-4 py-4 animate-scale-up">
            <div className="h-10 w-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <Check className="h-5 w-5" />
            </div>
            <p className="text-xs text-soft-slate font-sans leading-relaxed">
              Le enviaremos invitaciones de acceso Beta Cerrado una vez iniciemos pruebas de servidores.
            </p>
          </div>
        ) : (
          <form onSubmit={handleNotify} className="space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-soft-slate block">Recibir alertas de lanzamiento</span>
            <div className="relative">
              <input
                type="email"
                placeholder="correo@empresa.com"
                value={email}
                disabled={status === 'loading'}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-bone-white border border-deep-slate-blue/10 rounded-xl px-4 py-3 pl-10 text-xs focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none"
              />
              <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-soft-slate" />
            </div>
            
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-deep-slate-blue text-bone-white hover:bg-corporate-red py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
            >
              {status === 'loading' ? (
                <span className="h-4 w-4 border-2 border-bone-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  <Bell className="h-4 w-4" />
                  Notificar Lanzamiento
                </>
              )}
            </button>
          </form>
        )}
      </div>

      <div>
        <button 
          onClick={() => setCurrentRoute('home')}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-soft-slate hover:text-corporate-red transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};
