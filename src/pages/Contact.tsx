import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Lock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Scale,
  Send,
  ShieldCheck,
  User,
} from 'lucide-react';

interface ContactProps {
  triggerToast: (msg: string, type: 'success' | 'info') => void;
}

type Status = 'default' | 'loading' | 'success' | 'error';

const practiceAreas = [
  'Derecho corporativo y comercial',
  'Consultoria tributaria',
  'Auditoria y aseguramiento contable',
  'Proteccion de activos y seguros',
  'Litigios y controversias',
  'Aun no estoy seguro',
];

const directChannels = [
  {
    label: 'Ubicacion',
    value: 'Avenida 82 # 11-35, Piso 12. Bogota, D.C.',
    copy: 'Avenida 82 # 11-35, Piso 12. Bogota, D.C.',
    icon: MapPin,
  },
  {
    label: 'Correo',
    value: 'contacto@amv.com.co',
    copy: 'contacto@amv.com.co',
    icon: Mail,
  },
  {
    label: 'Telefono',
    value: '+57 (601) 345-6789',
    copy: '+57 (601) 345-6789',
    icon: Phone,
  },
  {
    label: 'Horario',
    value: 'Lunes a viernes, 8:00 A.M. a 6:00 P.M.',
    copy: 'Lunes a viernes, 8:00 A.M. a 6:00 P.M.',
    icon: Clock,
  },
];

export const Contact: React.FC<ContactProps> = ({ triggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practiceArea: practiceAreas[0],
    description: '',
  });

  const [status, setStatus] = useState<Status>('default');
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const completion = useMemo(() => {
    const required = [
      formData.name,
      formData.email,
      formData.phone,
      formData.practiceArea,
      formData.description,
    ];

    return Math.round((required.filter(Boolean).length / required.length) * 100);
  }, [formData]);

  const handleCopy = async (text: string, label: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(label);
    triggerToast(`${label} copiado al portapapeles.`, 'info');
    setTimeout(() => setCopiedField(null), 2200);
  };

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.description.trim()
    ) {
      setStatus('error');
      triggerToast('Complete nombre, correo, telefono y resumen del caso.', 'info');
      setTimeout(() => setStatus('default'), 2800);
      return;
    }

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      triggerToast('Solicitud recibida. El equipo AMV revisara su caso.', 'success');
    }, 1300);
  };

  const resetForm = () => {
    setStatus('default');
    setFormData({
      name: '',
      email: '',
      phone: '',
      practiceArea: practiceAreas[0],
      description: '',
    });
  };

  return (
    <div className="bg-[#EDE8DF] text-[#233142] selection:bg-[#B22222] selection:text-[#EDE8DF]">
      <section className="relative overflow-hidden bg-[#1A242F] text-[#EDE8DF]">
        <img
          src="ImagenHero.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full scale-110 object-cover object-[58%_center] opacity-70 blur-[5px] saturate-[0.75]"
        />
        <div className="pointer-events-none absolute inset-0 bg-[#1A242F]/30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_74%_46%,rgba(237,232,223,.16),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(178,34,34,.18),transparent_28%),linear-gradient(90deg,rgba(26,36,47,.88)_0%,rgba(26,36,47,.68)_42%,rgba(26,36,47,.46)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(110deg, transparent 0 47%, rgba(237,232,223,.35) 48%, transparent 49%), linear-gradient(#EDE8DF 1px, transparent 1px)',
            backgroundSize: '72px 72px, 100% 96px',
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(237,232,223,.07))]" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-14 sm:px-6 md:py-18 lg:min-h-[calc(100dvh-88px)] lg:grid-cols-12 lg:items-center lg:gap-x-10 lg:px-8 lg:py-18 xl:gap-x-12">
          <div className="relative z-10 space-y-6 lg:col-span-4">
            <div className="space-y-5 stagger-up">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#B22222]/35 bg-[#B22222]/10 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#B22222]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#EDE8DF]">
                  Consulta confidencial
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="max-w-[8ch] font-serif-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-white sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
                  Iniciemos una conversacion.
                </h1>
                <div className="h-px w-44 bg-[#EDE8DF]/12">
                  <div className="h-px w-20 bg-[#B22222]" />
                </div>
              </div>

              <p className="max-w-xs text-sm font-light leading-relaxed text-[#EDE8DF]/72">
                Cuentenos que esta ocurriendo y que tan urgente es. Con esos datos asignamos el socio y el equipo tecnico adecuado.
              </p>
            </div>

            <div className="rounded-3xl border border-white/12 bg-white/[0.045] p-5 backdrop-blur-sm sm:p-6">
              <h2 className="mb-5 font-serif text-2xl font-bold text-[#EDE8DF]">
                Contacto directo
              </h2>
              <div className="divide-y divide-white/10">
                {directChannels.map((item) => {
                  const Icon = item.icon;
                  const isCopied = copiedField === item.label;

                  return (
                    <div key={item.label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#B22222]/18 text-[#EDE8DF] ring-1 ring-[#B22222]/30">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs font-bold text-white">{item.label}</p>
                          <button
                            type="button"
                            onClick={() => handleCopy(item.copy, item.label)}
                            className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#EDE8DF]/58 transition hover:text-[#B22222]"
                          >
                            {isCopied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            {isCopied ? 'Copiado' : 'Copiar'}
                          </button>
                        </div>
                        <p className="mt-1 text-xs leading-relaxed text-[#EDE8DF]/64">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs text-[#EDE8DF]/70">
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <ShieldCheck className="mb-3 h-5 w-5 text-[#B22222]" />
                <p className="font-bold text-white">Reserva legal</p>
                <p className="mt-1 leading-relaxed">Informacion tratada bajo secreto profesional.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <Clock className="mb-3 h-5 w-5 text-[#B22222]" />
                <p className="font-bold text-white">Respuesta agil</p>
                <p className="mt-1 leading-relaxed">Primer contacto en menos de 24 horas habiles.</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:col-span-7 lg:col-start-6">
            <div className="relative rounded-[2rem] bg-[#FAF7F2] p-4 text-[#233142] shadow-[0_28px_80px_rgba(0,0,0,.22)] sm:p-6 lg:rounded-[2.5rem] lg:[clip-path:polygon(3%_0,100%_0,100%_88%,96%_100%,0_100%,0_7%)]">
              <div className="pointer-events-none absolute left-6 top-6 hidden h-16 w-24 border-l border-t border-[#233142]/10 lg:block" />
              <div className="pointer-events-none absolute bottom-7 left-7 hidden grid-cols-4 gap-2 opacity-30 lg:grid">
                {Array.from({ length: 16 }).map((_, index) => (
                  <span key={index} className="h-1 w-1 rounded-full bg-[#B22222]" />
                ))}
              </div>

              {status === 'success' ? (
                <div className="flex min-h-[560px] flex-col items-center justify-center px-4 py-16 text-center sm:px-10">
                  <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#B22222]/10 text-[#B22222] ring-1 ring-[#B22222]/20">
                    <CheckCircle2 className="h-10 w-10" />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#B22222]">
                    Solicitud recibida
                  </p>
                  <h2 className="mt-3 max-w-xl font-serif-display text-4xl font-bold uppercase leading-tight text-[#233142] sm:text-5xl">
                    Su caso ya esta en revision preliminar.
                  </h2>
                  <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-[#57606F]">
                    Enviaremos la confirmacion a {formData.email}. Su solicitud sera asignada segun el area de {formData.practiceArea.toLowerCase()}.
                  </p>
                  <button type="button" onClick={resetForm} className="btn-pill-accent mt-9">
                    <span>Enviar otra consulta</span>
                    <div className="btn-pill-icon">
                      <ArrowRight className="h-3.5 w-3.5 text-[#EDE8DF]" />
                    </div>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5 lg:grid-cols-[1fr_5.5rem]">
                  <div className="space-y-5 px-1 py-3 sm:px-4 sm:py-5 lg:pl-12 lg:pr-4 xl:pl-14">
                    <div className="border-b border-[#233142]/10 pb-5">
                      <p className="font-signature text-xl text-[#B22222]/82 sm:text-2xl">
                        Estamos aqui para ayudarle
                      </p>
                      <div className="mt-1.5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                        <div>
                          <h2 className="font-serif-display text-2xl font-bold uppercase leading-tight text-[#233142] sm:text-3xl">
                            Solicitud de contacto
                          </h2>
                          <p className="mt-1.5 max-w-xl text-xs font-light leading-relaxed text-[#57606F]">
                            Complete solo los datos indispensables para revisar su caso.
                          </p>
                        </div>
                        <div className="w-full max-w-[180px] shrink-0 rounded-full border border-[#233142]/10 bg-[#EDE8DF]/70 px-3 py-2">
                          <div className="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-[#57606F]">
                            <span>Avance</span>
                            <span className="text-[#B22222]">{completion}%</span>
                          </div>
                          <div className="h-1 overflow-hidden rounded-full bg-[#233142]/10">
                            <div className="h-full bg-[#B22222] transition-all duration-500" style={{ width: `${completion}%` }} />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
                      <Field label="Nombre completo" required icon={<User className="h-4 w-4" />}>
                        <input
                          required
                          value={formData.name}
                          onChange={(event) => updateField('name', event.target.value)}
                          placeholder="Nombre y apellido"
                          className="contact-line-input"
                        />
                      </Field>

                      <Field label="Correo electronico" required icon={<Mail className="h-4 w-4" />}>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(event) => updateField('email', event.target.value)}
                          placeholder="correo@empresa.com"
                          className="contact-line-input"
                        />
                      </Field>

                      <Field label="Telefono directo" required icon={<Phone className="h-4 w-4" />}>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(event) => updateField('phone', event.target.value)}
                          placeholder="+57 300 123 4567"
                          className="contact-line-input"
                        />
                      </Field>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                      <SegmentedGroup
                        label="Area de practica"
                        icon={<Scale className="h-4 w-4" />}
                        options={practiceAreas}
                        value={formData.practiceArea}
                        onChange={(value) => updateField('practiceArea', value)}
                      />
                    </div>

                    <Field label="Resumen del caso" required icon={<MessageSquare className="h-4 w-4" />}>
                      <textarea
                        required
                        rows={4}
                        value={formData.description}
                        onChange={(event) => updateField('description', event.target.value)}
                        placeholder="Describa brevemente el asunto, fechas relevantes y el resultado que espera obtener."
                        className="contact-line-input resize-none leading-relaxed"
                      />
                    </Field>

                    {status === 'error' && (
                      <div className="rounded-2xl border border-[#B22222]/25 bg-[#B22222]/8 px-4 py-3 text-xs font-semibold text-[#B22222]">
                        Faltan datos indispensables para preparar la comunicacion inicial.
                      </div>
                    )}

                    <div className="flex items-start gap-2 border-t border-[#233142]/10 pt-5 text-[11px] leading-relaxed text-[#57606F]">
                      <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B22222]" />
                      <span>Sus datos se tratan bajo secreto profesional y politica de proteccion de datos.</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group flex min-h-16 items-center justify-between rounded-[1.55rem] bg-[#B22222] px-5 py-4 text-[#EDE8DF] transition hover:bg-[#991B1B] active:scale-[0.99] lg:min-h-full lg:flex-col lg:p-3"
                    aria-label="Enviar consulta"
                  >
                    {status === 'loading' ? (
                      <span className="text-xs font-bold uppercase tracking-[0.18em] lg:mt-8 lg:[writing-mode:vertical-rl] lg:rotate-180 lg:tracking-[0.38em]">
                        Enviando
                      </span>
                    ) : (
                      <span className="text-xs font-bold uppercase tracking-[0.18em] lg:mt-8 lg:[writing-mode:vertical-rl] lg:rotate-180 lg:tracking-[0.38em]">
                        Enviar mensaje
                      </span>
                    )}
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#233142] transition group-hover:-translate-y-1 group-hover:translate-x-1 lg:mb-3 lg:h-14 lg:w-14">
                      {status === 'loading' ? (
                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-[#EDE8DF] border-t-transparent" />
                      ) : (
                        <Send className="h-5 w-5" />
                      )}
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#233142]/8 bg-[#EDE8DF] px-4 py-7 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 text-center text-xs text-[#57606F] sm:flex-row">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#233142] text-[#EDE8DF]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p>
            Tiempo estimado de respuesta: <strong className="text-[#233142]">24 horas habiles</strong>. Para asuntos urgentes, indique el vencimiento o audiencia mas cercana en el resumen.
          </p>
        </div>
      </section>
    </div>
  );
};

const Field = ({
  label,
  required,
  icon,
  children,
}: {
  label: string;
  required?: boolean;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="mb-2 flex items-center gap-2 text-xs font-bold text-[#233142]">
      <span className="text-[#B22222]">{icon}</span>
      <span>
        {label} {required && <span className="text-[#B22222]">*</span>}
      </span>
    </span>
    {children}
  </label>
);

const SegmentedGroup = ({
  label,
  icon,
  options,
  value,
  onChange,
}: {
  label: string;
  icon: React.ReactNode;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) => (
  <div>
    <div className="mb-3 flex items-center gap-2 text-xs font-bold text-[#233142]">
      <span className="text-[#B22222]">{icon}</span>
      <span>{label}</span>
    </div>
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isSelected = option === value;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-3 py-2 text-[11px] font-bold transition active:scale-[0.98] ${isSelected
              ? 'border-[#233142] bg-[#233142] text-[#EDE8DF]'
              : 'border-[#233142]/12 bg-white/55 text-[#57606F] hover:border-[#B22222]/40 hover:text-[#233142]'
              }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  </div>
);
