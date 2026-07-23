import React, { useState } from 'react';
import { ArrowRight, Shield, Check, MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setCurrentRoute: (route: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentRoute }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setTimeout(() => setStatus('default'), 3000);
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('default'), 4000);
    }, 1500);
  };

  return (
    <footer className="bg-ink-dark text-bone-white relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-corporate-red/40 to-transparent" />

      {/* Ambient decoration */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-corporate-red/3 rounded-full -translate-x-1/3 -translate-y-1/3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-corporate-red/2 rounded-full translate-x-1/4 translate-y-1/4 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pt-20 pb-16">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-7">
            <button
              onClick={() => setCurrentRoute('home')}
              className="flex items-center text-left focus:outline-none cursor-pointer group"
            >
              <img
                src="/Logo.png"
                alt="Alvarado Montes Velilla"
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </button>

            <p className="text-[13px] text-bone-white/55 leading-relaxed font-sans font-light max-w-xs">
              Plataforma digital integrada de asesoría jurídica de alto nivel, consultoría impositiva, revisoría contable y coberturas de seguros corporativos.
            </p>

            {/* Contact details */}
            <div className="space-y-3">
              {[
                { icon: <MapPin className="h-3.5 w-3.5" />, text: 'Edificio Alianza, Piso 12. Avenida 82 #11-35, Bogotá' },
                { icon: <Phone className="h-3.5 w-3.5" />, text: '+57 (601) 345-6789' },
                { icon: <Mail className="h-3.5 w-3.5" />, text: 'contacto@amv.com.co' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <span className="text-corporate-red mt-0.5 shrink-0">{item.icon}</span>
                  <span className="text-[12px] text-bone-white/50 leading-relaxed">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-[11px] text-bone-white/35">
              <Shield className="h-3.5 w-3.5 text-corporate-red/60" />
              <span>WCAG AA Accessibility Compliant</span>
            </div>
          </div>

          {/* Areas column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-editorial text-lg font-semibold tracking-wide text-bone-white/90 flex items-center gap-2">
              <span className="h-px w-5 bg-corporate-red inline-block" />
              Áreas de Práctica
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Derecho Jurídico y Comercial', route: 'practice:legal' },
                { label: 'Planeación y Consultoría Tributaria', route: 'practice:tax' },
                { label: 'Auditoría y Aseguramiento Contable', route: 'practice:accounting' },
                { label: 'Protección de Activos y Seguros', route: 'practice:insurance' },
              ].map(({ label, route }) => (
                <li key={route}>
                  <button
                    onClick={() => setCurrentRoute(route)}
                    className="text-[13px] text-bone-white/50 hover:text-corporate-red transition-colors duration-200 cursor-pointer text-left group flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources column */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="font-editorial text-lg font-semibold tracking-wide text-bone-white/90 flex items-center gap-2">
              <span className="h-px w-5 bg-corporate-red inline-block" />
              Recursos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Artículos y Publicaciones', route: 'resources' },
                { label: 'Descargas de Guías', route: 'resources:downloads' },
                { label: 'Preguntas Frecuentes', route: 'faq' },
                { label: 'Nuestro Equipo', route: 'team' },
              ].map(({ label, route }) => (
                <li key={route}>
                  <button
                    onClick={() => setCurrentRoute(route)}
                    className="text-[13px] text-bone-white/50 hover:text-corporate-red transition-colors duration-200 cursor-pointer text-left group flex items-center gap-1.5"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="font-editorial text-lg font-semibold tracking-wide text-bone-white/90 flex items-center gap-2">
              <span className="h-px w-5 bg-corporate-red inline-block" />
              Boletín Editorial
            </h4>
            <p className="text-[13px] text-bone-white/50 leading-relaxed font-sans font-light">
              Reciba bimestralmente nuestro boletín de actualización tributaria y legal elaborado por nuestros socios principales.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="correo@empresa.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full bg-bone-white/6 border border-bone-white/12 rounded-2xl px-5 py-3.5 text-[13px] text-bone-white placeholder-bone-white/30 focus:border-corporate-red/60 focus:ring-2 focus:ring-corporate-red/15 focus:outline-none transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || status === 'success'}
                  className="absolute right-1.5 top-1.5 bg-corporate-red text-bone-white hover:bg-white hover:text-deep-slate-blue p-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-center"
                >
                  {status === 'loading' ? (
                    <span className="h-4 w-4 border-2 border-deep-slate-blue border-t-transparent rounded-full animate-spin" />
                  ) : status === 'success' ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1.5 animate-fade-in">
                  <Check className="h-3 w-3" /> Suscripción completada. Bienvenido.
                </p>
              )}
              {status === 'error' && (
                <p className="text-[11px] text-rose-400 animate-fade-in">
                  Por favor ingrese una dirección de correo válida.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="h-px bg-bone-white/6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-7 text-[11px] text-bone-white/30">
          <p>© 2026 Alvarado Montes Velilla · Todos los derechos reservados · Nit: 900.124.567-8</p>
          <div className="flex gap-6">
            <button onClick={() => setCurrentRoute('privacy')} className="hover:text-corporate-red transition-colors focus:outline-none cursor-pointer">
              Política de Privacidad
            </button>
            <button onClick={() => setCurrentRoute('terms')} className="hover:text-corporate-red transition-colors focus:outline-none cursor-pointer">
              Términos del Servicio
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
