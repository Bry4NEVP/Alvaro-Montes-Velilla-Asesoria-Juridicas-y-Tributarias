import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ContactProps {
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

export const Contact: React.FC<ContactProps> = ({ triggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessUnit: 'tax',
    date: '',
    time: '',
    description: ''
  });

  const [status, setStatus] = useState<'default' | 'loading' | 'success' | 'error'>('default');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      setStatus('error');
      triggerToast('Por favor complete los campos obligatorios.', 'info');
      setTimeout(() => setStatus('default'), 3000);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      triggerToast('Sesión programada con éxito. Recibirá confirmación en su correo.', 'success');
      setFormData({
        name: '', email: '', phone: '', company: '',
        businessUnit: 'tax', date: '', time: '', description: ''
      });
      setTimeout(() => setStatus('default'), 4000);
    }, 2000);
  };

  const officeInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-corporate-red flex-shrink-0" />,
      label: 'Ubicación',
      value: 'Edificio Alianza, Piso 12. Avenida 82 # 11-35. Bogotá, D.C.'
    },
    {
      icon: <Phone className="h-5 w-5 text-corporate-red flex-shrink-0" />,
      label: 'Central Telefónica',
      value: '+57 (601) 345-6789'
    },
    {
      icon: <Mail className="h-5 w-5 text-corporate-red flex-shrink-0" />,
      label: 'Secretaría Técnica',
      value: 'contacto@amv.com.co'
    },
    {
      icon: <Clock className="h-5 w-5 text-corporate-red flex-shrink-0" />,
      label: 'Horario de Atención',
      value: 'Lunes a Viernes · 8:00 A.M. – 6:00 P.M.'
    },
  ];

  return (
    <div className="pb-32 page-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ═══════════════════════════════════
          PAGE HEADER
      ═══════════════════════════════════ */}
      <section className="pt-20 pb-16 max-w-3xl space-y-7 stagger-up">
        <div className="eyebrow">Agendar Reunión</div>
        <h1 className="font-editorial text-5xl md:text-7xl font-semibold text-deep-slate-blue leading-[1.02]">
          Coordinar Consulta Técnica
        </h1>
        <p className="text-lg text-soft-slate leading-relaxed font-sans font-light">
          Solicite una sesión formal de diagnóstico con nuestros socios principales. Por favor indique el área de interés para asignar al especialista idóneo.
        </p>
      </section>

      {/* ═══════════════════════════════════
          MAIN GRID
      ═══════════════════════════════════ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left: Office details */}
        <div className="lg:col-span-4 space-y-5 stagger-up" style={{ animationDelay: '100ms' }}>
          <div className="bg-white border border-deep-slate-blue/6 rounded-3xl p-8 space-y-7 shadow-[0_4px_24px_rgba(35,49,66,0.05)]">
            <h3 className="font-editorial text-2xl font-bold text-deep-slate-blue pb-5 border-b border-deep-slate-blue/6">
              Coordenadas de Oficina
            </h3>

            <div className="space-y-7 font-sans">
              {officeInfo.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="h-10 w-10 rounded-xl bg-corporate-red/6 border border-corporate-red/12 flex items-center justify-center shrink-0 group-hover:bg-corporate-red/12 transition-colors">
                    {item.icon}
                  </div>
                  <div className="pt-0.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-soft-slate/60 block mb-1">{item.label}</span>
                    <p className="text-[13px] font-semibold text-deep-slate-blue leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reassurance block */}
          <div className="bg-deep-slate-blue text-bone-white rounded-3xl p-7 space-y-4">
            <h4 className="font-editorial text-xl font-semibold">Atención Directa de Socios</h4>
            <p className="text-[13px] text-bone-white/60 leading-relaxed font-light">
              Cada consulta es atendida por un socio principal. Sin intermediarios, sin asistentes. Calidad garantizada desde el primer contacto.
            </p>
            <div className="h-px bg-bone-white/8" />
            <div className="flex items-center gap-2 text-[11px] text-bone-white/50">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible · Respuesta en menos de 2 horas hábiles
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:col-span-8 stagger-up" style={{ animationDelay: '200ms' }}>
          {status === 'success' ? (
            <div className="bg-deep-slate-blue text-bone-white rounded-3xl p-14 text-center space-y-8 shadow-xl animate-scale-up">
              <div className="h-20 w-20 bg-corporate-red/20 border border-corporate-red/30 text-corporate-red rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h2 className="font-editorial text-3xl md:text-4xl font-semibold">
                Consulta Programada Exitosamente
              </h2>
              <p className="text-[14px] text-bone-white/70 max-w-md mx-auto leading-relaxed font-sans font-light">
                Hemos registrado su solicitud. Un especialista de la secretaría técnica se comunicará con usted en las próximas 2 horas hábiles para coordinar los detalles de conexión remota o acceso a las oficinas.
              </p>
              <button
                onClick={() => setStatus('default')}
                className="btn-accent"
              >
                <span>Volver a Agendar</span>
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-deep-slate-blue/6 rounded-3xl p-10 md:p-14 space-y-8 shadow-[0_4px_24px_rgba(35,49,66,0.05)]"
            >
              <h3 className="font-editorial text-3xl font-bold text-deep-slate-blue pb-2 border-b border-deep-slate-blue/6">
                Formulario de Consulta
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                    Nombre Completo <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carolina Villegas"
                    className="input-premium"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                    Correo Corporativo <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="correo@empresa.com"
                    className="input-premium"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                    Teléfono de Contacto <span className="text-corporate-red">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Ej. +57 300 123 4567"
                    className="input-premium"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                    Empresa o Razón Social
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Ej. Grupo Comercial S.A."
                    className="input-premium"
                  />
                </div>

                {/* Business Unit */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                    Unidad de Interés <span className="text-corporate-red">*</span>
                  </label>
                  <select
                    value={formData.businessUnit}
                    onChange={(e) => setFormData({ ...formData, businessUnit: e.target.value })}
                    className="input-premium"
                  >
                    <option value="legal">Derecho Corporativo</option>
                    <option value="tax">Planeación y Litigio Tributario</option>
                    <option value="accounting">Auditoría / Revisoría Contable</option>
                    <option value="insurance">Protección de Activos y Seguros</option>
                  </select>
                </div>

                {/* Date / Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                      Fecha <span className="text-corporate-red">*</span>
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="input-premium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                      Hora Preferida
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="input-premium"
                    />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-wider text-deep-slate-blue/70 block">
                  Descripción breve de la contingencia societaria o fiscal
                </label>
                <textarea
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Por favor resuma el objeto de la consulta..."
                  className="input-premium resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full justify-center py-4"
                style={{ borderRadius: '16px' }}
              >
                {status === 'loading' ? (
                  <>
                    <span className="h-4 w-4 border-2 border-bone-white border-t-transparent rounded-full animate-spin" />
                    <span>Procesando solicitud...</span>
                  </>
                ) : (
                  <>
                    <span>Programar Diagnóstico Técnico</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
