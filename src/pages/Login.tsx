import React, { useState } from 'react';
import { Lock, Mail, Eye, EyeOff, AlertCircle, ArrowUpRight } from 'lucide-react';

interface LoginProps {
  setCurrentRoute: (route: string) => void;
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

export const Login: React.FC<LoginProps> = ({ setCurrentRoute, triggerToast }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [status, setStatus] = useState<'default' | 'loading'>('default');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!email || !password) {
      setErrorMsg('Por favor diligencie todos los campos.');
      return;
    }

    setStatus('loading');

    setTimeout(() => {
      // Simulate credential match
      if (email.toLowerCase() === 'admin@amv.com.co' && password === 'admin123') {
        setStatus('default');
        triggerToast('Sesión iniciada con éxito.', 'success');
        setCurrentRoute('dashboard');
      } else {
        setStatus('default');
        setErrorMsg('Credenciales inválidas. Use las de demostración.');
      }
    }, 1500);
  };

  const handleFillDemo = () => {
    setEmail('admin@amv.com.co');
    setPassword('admin123');
    setErrorMsg(null);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 page-fade-in max-w-xl mx-auto py-12">
      <div className="bg-white border border-deep-slate-blue/5 rounded-3xl p-8 md:p-12 w-full space-y-8 shadow-xl">
        {/* Brand/Heading */}
        <div className="text-center space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-corporate-red">ACCESO RESTRINGIDO</span>
          <h1 className="font-editorial text-3xl md:text-4xl font-bold text-deep-slate-blue">
            Portal Corporativo AMV
          </h1>
          <p className="text-xs text-soft-slate font-sans font-light">
            Plataforma interna y de clientes autorizados. Inicie sesión para consultar expedientes o administrar publicaciones.
          </p>
        </div>

        {/* Demo Credentials Helper */}
        <div className="bg-bone-white border border-deep-slate-blue/15 rounded-2xl p-4 flex justify-between items-center text-xs font-sans">
          <div>
            <span className="block text-soft-slate text-[10px] font-bold uppercase tracking-wider">Demostración del Prototipo</span>
            <span className="text-deep-slate-blue font-semibold">admin@amv.com.co / admin123</span>
          </div>
          <button 
            onClick={handleFillDemo}
            className="text-[10px] font-bold uppercase text-corporate-red hover:underline focus:outline-none cursor-pointer"
          >
            Usar Credenciales
          </button>
        </div>

        {/* Errors */}
        {errorMsg && (
          <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 flex gap-3 items-center text-xs text-rose-700 animate-scale-up">
            <AlertCircle className="h-4.5 w-4.5 flex-shrink-0" />
            <p>{errorMsg}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs">
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue block">Correo Corporativo</label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="correo@empresa.com"
                className="w-full bg-bone-white/50 border border-deep-slate-blue/10 rounded-xl px-4 py-3 pl-10 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none transition-all"
              />
              <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-soft-slate" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue block">Contraseña</label>
              <button 
                type="button" 
                onClick={() => setCurrentRoute('coming-soon')}
                className="text-[9px] font-semibold text-corporate-red hover:underline focus:outline-none"
              >
                ¿Olvidó su contraseña?
              </button>
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-bone-white/50 border border-deep-slate-blue/10 rounded-xl px-4 py-3 pl-10 pr-10 focus:border-corporate-red focus:ring-1 focus:ring-corporate-red focus:outline-none transition-all"
              />
              <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-soft-slate" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-soft-slate hover:text-deep-slate-blue focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-deep-slate-blue text-bone-white hover:bg-corporate-red py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer focus:outline-none"
          >
            {status === 'loading' ? (
              <span className="h-4 w-4 border-2 border-bone-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                Iniciar Sesión
                <ArrowUpRight className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
