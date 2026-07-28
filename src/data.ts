import { Service, TeamMember, Article, Resource, FAQItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'area-juridica',
    title: 'Área Jurídica',
    description: 'Asesoría en derecho familiar, civil, acciones de tutela, derechos de petición, demandas, reportes en centrales de riesgo, comparendos y fotomultas.',
    details: [
      'Derecho familiar y derecho civil.',
      'Acciones de tutela y derechos de petición.',
      'Demandas y reportes en centrales de riesgo.',
      'Comparendos, fotomultas y levantamiento de tierras en el RUPTA.'
    ],
    businessUnit: 'legal',
    iconName: 'Scale',
    benefits: [
      'Atención clara y personalizada para la protección de derechos.',
      'Prevención de riesgos legales mediante orientación oportuna.',
      'Acompañamiento responsable durante cada etapa del trámite.'
    ],
    deliverables: [
      'Revisión del caso y orientación sobre pasos a seguir.',
      'Preparación o revisión de solicitudes, derechos de petición y soportes.',
      'Seguimiento de trámites, demandas o reclamaciones cuando aplique.'
    ]
  },
  {
    id: 'area-contable',
    title: 'Área Contable',
    description: 'Respaldo técnico y normativo para una correcta gestión financiera y contable, con servicios de contaduría, revisión fiscal y auditoría forense.',
    details: [
      'Contaduría pública.',
      'Revisión fiscal.',
      'Auditoría forense.',
      'Impuestos tributarios.'
    ],
    businessUnit: 'accounting',
    iconName: 'FileCheck',
    benefits: [
      'Gestión financiera y contable con respaldo técnico.',
      'Información organizada para tomar decisiones responsables.',
      'Acompañamiento normativo en obligaciones contables y fiscales.'
    ],
    deliverables: [
      'Diagnóstico contable según el requerimiento del cliente.',
      'Soporte en revisión fiscal y auditoría forense.',
      'Orientación sobre impuestos tributarios aplicables.'
    ]
  },
  {
    id: 'area-tributaria',
    title: 'Área Tributaria',
    description: 'Asesoría estratégica para el cumplimiento adecuado de obligaciones fiscales: renta, retenciones en la fuente, industria y comercio, IVA y emplazamientos.',
    details: [
      'Declaraciones de renta.',
      'Retenciones en la fuente.',
      'Industria y comercio.',
      'IVA y emplazamientos tributarios.'
    ],
    businessUnit: 'tax',
    iconName: 'TrendingUp',
    benefits: [
      'Cumplimiento oportuno de obligaciones fiscales.',
      'Claridad frente a requerimientos y emplazamientos tributarios.',
      'Acompañamiento estratégico para personas naturales y empresas.'
    ],
    deliverables: [
      'Revisión de obligaciones tributarias.',
      'Orientación para declaraciones y retenciones.',
      'Acompañamiento frente a industria y comercio, IVA y emplazamientos.'
    ]
  },
  {
    id: 'area-seguros',
    title: 'Área de Seguros',
    description: 'Acompañamiento en venta de pólizas, reclamaciones SOAT, ADRES, responsabilidad civil, bonos pensionales, pensiones sustitutivas y calificación de invalidez.',
    details: [
      'Venta de pólizas de seguros.',
      'Reclamaciones SOAT, ADRES y pólizas de responsabilidad civil.',
      'Acompañamiento en calificación de invalidez.',
      'Reclamación de bonos pensionales y pensiones sustitutivas.'
    ],
    businessUnit: 'insurance',
    iconName: 'Shield',
    benefits: [
      'Orientación clara para gestionar reclamaciones y solicitudes.',
      'Acompañamiento documental durante el proceso correspondiente.',
      'Apoyo en trámites relacionados con protección y cobertura.'
    ],
    deliverables: [
      'Revisión del caso y documentos soporte.',
      'Orientación sobre pólizas, reclamaciones y trámites aplicables.',
      'Seguimiento del requerimiento según la necesidad del cliente.'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'alberto-alvarado',
    name: 'Dr. Alberto Alvarado',
    role: 'Área Jurídica',
    bio: 'Acompañamiento en asuntos familiares, civiles y administrativos, con énfasis en la prevención de riesgos legales, la defensa de derechos y la orientación clara para cada cliente.',
    image: 'AlvaradoImg.png',
    businessUnit: 'legal',
    credentials: ['Derecho familiar y civil', 'Tutelas, derechos de petición y demandas', 'Centrales de riesgo, comparendos, fotomultas y RUPTA'],
    email: 'velmonasesorias.jct@gmail.com'
  },
  {
    id: 'pablo-montes',
    name: 'Dr. Pablo Montes',
    role: 'Área Tributaria',
    bio: 'Asesoría estratégica para el cumplimiento adecuado de obligaciones fiscales, con atención en declaraciones de renta, retenciones, industria y comercio, IVA y emplazamientos tributarios.',
    image: 'MontesImg.png',
    businessUnit: 'tax',
    credentials: ['Declaraciones de renta', 'Retenciones en la fuente e IVA', 'Industria y comercio y emplazamientos tributarios'],
    email: 'velmonasesorias.jct@gmail.com'
  },
  {
    id: 'carlos-velilla',
    name: 'Dr. Carlos Velilla',
    role: 'Área Contable y Seguros',
    bio: 'Respaldo técnico para la gestión financiera y contable, junto con acompañamiento en pólizas, reclamaciones SOAT, ADRES y procesos relacionados con invalidez y protección patrimonial.',
    image: 'VelillaImg.png',
    businessUnit: 'accounting',
    credentials: ['Contaduría pública y revisión fiscal', 'Auditoría forense e impuestos tributarios', 'Pólizas, SOAT, ADRES y responsabilidad civil'],
    email: 'velmonasesorias.jct@gmail.com'
  },
  {
    id: 'diana-restrepo',
    name: 'Dra. Diana Restrepo',
    role: 'Directora - Gestión de Riesgos y Seguros',
    bio: 'Asesora en estructuración de programas de transferencia de riesgos y pólizas corporativas complejas. Experta en seguros D&O y estructuración de fideicomisos familiares.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'insurance',
    credentials: ['Ingeniera Industrial - Universidad de Antioquia', 'Especialista en Seguros y Seguridad Social - Universidad de la Sabana', 'Consultora de Riesgos Certificada (ARM)'],
    email: 'd.restrepo@amv.com.co'
  },
  {
    id: 'eduardo-gomez',
    name: 'Dr. Eduardo Gómez',
    role: 'Asociado Senior - Litigio Tributario',
    bio: 'Defensor líder ante litigios impositivos contra la DIAN y entes municipales. Ex-jefe de la división de recursos tributarios en la administración impositiva nacional.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'tax',
    credentials: ['Abogado y Especialista en Derecho Administrativo - Universidad del Rosario', 'Especialista en Derecho Tributario - Universidad de Bogotá', 'Magíster en Leyes - London School of Economics'],
    email: 'e.gomez@amv.com.co'
  },
  {
    id: 'gabriela-silva',
    name: 'Dra. Gabriela Silva',
    role: 'Asociada Senior - Propiedad Intelectual',
    bio: 'Dedicada a la protección de marcas, transferencia de patentes e integraciones cambiarias para firmas de e-commerce y desarrollo tecnológico a gran escala.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'legal',
    credentials: ['Abogada - Universidad del Norte', 'Especialización en Propiedad Intelectual - Universidad Externado', 'Diplomado en Derecho Digital y Blockchain'],
    email: 'g.silva@amv.com.co'
  }
];

export const ARTICLES: Article[] = [
  {
    id: 'tax-reform-2026',
    title: 'Cuándo solicitar asesoría tributaria',
    summary: 'Una guía breve para identificar cuándo conviene buscar apoyo en renta, retenciones en la fuente, IVA, industria y comercio o emplazamientos tributarios.',
    content: `La asesoría tributaria preventiva ayuda a cumplir adecuadamente las obligaciones fiscales y a responder con orden ante requerimientos de la autoridad competente.

En Alvarado Montes Velilla acompañamos a personas naturales y empresas en declaraciones de renta, retenciones en la fuente, industria y comercio, IVA y emplazamientos tributarios, con información clara y seguimiento responsable.`,
    category: 'Tributaria',
    author: 'Alvarado Montes Velilla',
    date: '10 Oct 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    featured: true,
    tags: ['Declaración de renta', 'Retenciones', 'IVA', 'Industria y comercio']
  },
  {
    id: 'm-a-due-diligence-errors',
    title: 'Asuntos jurídicos que requieren atención oportuna',
    summary: 'Tutelas, derechos de petición, demandas, centrales de riesgo, comparendos y trámites en RUPTA requieren claridad, soporte documental y seguimiento.',
    content: `Los asuntos jurídicos cotidianos pueden afectar derechos, patrimonio y tranquilidad si no se atienden a tiempo.

La firma brinda acompañamiento en derecho familiar, derecho civil, tutelas, derechos de petición, demandas, reportes en centrales de riesgo, comparendos, fotomultas y levantamiento de tierras en el RUPTA.`,
    category: 'Área Jurídica',
    author: 'Alvarado Montes Velilla',
    date: '10 Oct 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    tags: ['Tutelas', 'Derechos de petición', 'Demandas', 'Centrales de riesgo']
  },
  {
    id: 'forensic-accounting-prevention',
    title: 'Importancia del respaldo contable',
    summary: 'La contaduría pública, la revisión fiscal, la auditoría forense y el manejo tributario ayudan a sostener una gestión financiera ordenada.',
    content: `El acompañamiento contable permite tomar decisiones con información organizada, confiable y ajustada a las obligaciones normativas.

Alvarado Montes Velilla brinda respaldo técnico en contaduría pública, revisión fiscal, auditoría forense e impuestos tributarios para personas naturales y empresas.`,
    category: 'Área Contable',
    author: 'Alvarado Montes Velilla',
    date: '10 Oct 2025',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    tags: ['Contaduría pública', 'Revisión fiscal', 'Auditoría forense', 'Impuestos']
  },
  {
    id: 'directors-liability-insurance',
    title: 'Por qué su Empresa Necesita un Seguro de Directores y Administradores (D&O)',
    summary: 'Las decisiones de negocio complejas exigen protección. Descubra cómo operan las pólizas D&O frente a reclamaciones de accionistas, entes de control y terceros.',
    content: `Dirigir una corporación en un entorno regulatorio altamente volátil y fiscalizado es una actividad de alto riesgo. Los administradores, gerentes y miembros de juntas directivas responden solidaria e ilimitadamente con su propio patrimonio personal por los perjuicios causados a la sociedad, a los socios o a terceros debido a actuaciones negligentes, extralimitación de funciones u omisión del deber de diligencia.

En Alvarado Montes Velilla analizamos por qué los seguros de D&O se han convertido en un requisito indispensable para atraer y retener talento ejecutivo de primer nivel:

### ¿Qué cubre realmente una Póliza D&O?
1.  **Gastos de Defensa Legal:** Honorarios de firmas de abogados para defender civil, administrativa o penalmente al directivo ante requerimientos, investigaciones o demandas.
2.  **Indemnizaciones y Perjuicios:** Sumas decretadas por juzgados o tribunales de arbitramento que el directivo deba pagar a terceros por errores en la administración del negocio.
3.  **Investigaciones de Entes Estatales:** Representación técnica ante entes gubernamentales de vigilancia y control cambiario, laboral o de competencia.`,
    category: 'Seguros corporativos',
    author: 'Dra. Diana Restrepo',
    date: '02 May 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    tags: ['Seguros Corporativos', 'Responsabilidad Civil', 'D&O', 'Patrimonio']
  }
];

export const RESOURCES: Resource[] = [
  {
    id: 'guia-impuesto-renta-2026',
    title: 'Guía Completa del Impuesto sobre la Renta Corporativa 2026',
    description: 'Documento técnico con plantillas de cálculo de dividendos, matrices de deducibilidad y un paso a paso para aplicar la planeación de renta de este año.',
    fileType: 'PDF',
    size: '4.8 MB',
    downloadCount: 342,
    category: 'Tributaria',
    previewPages: [
      'Pág 1: Resumen Ejecutivo e Índices de Cambios en Tarifas de Renta 2026',
      'Pág 2: Matriz de Costos Deducibles y No Deducibles según Estatuto Fiscal',
      'Pág 3: Plantilla Práctica de Retenciones sobre Dividendos de Socios Locales',
      'Pág 4: Cronograma de Cumplimiento y Recomendaciones de Provisión Contable'
    ],
    url: '#'
  },
  {
    id: 'compliance-laboral-checklist',
    title: 'Checklist de Auditoría y Compliance Laboral Preventivo',
    description: 'Lista de verificación estructurada para directores de Recursos Humanos y asesores legales para evaluar contratos, horas extras y aportes de seguridad social.',
    fileType: 'Excel / PDF',
    size: '1.2 MB',
    downloadCount: 215,
    category: 'Derecho Corporativo',
    previewPages: [
      'Pág 1: Diagnóstico de Tipos de Contratación (Subordinados vs. Independientes)',
      'Pág 2: Protocolo de Horas Extras, Descansos Compensatorios y Recargos Nocturnos',
      'Pág 3: Tabla de Cálculo Preventivo de Aportes al Sistema General de Pensiones y ARL'
    ],
    url: '#'
  },
  {
    id: 'modelo-precios-transferencia-guia',
    title: 'Manual de Precios de Transferencia y Declaración Informativa',
    description: 'Guía práctica para entender las transacciones intercompañía, el principio Arm\'s Length y el llenado de la documentación comprobatoria requerida.',
    fileType: 'PDF',
    size: '3.1 MB',
    downloadCount: 189,
    category: 'Precios de Transferencia',
    previewPages: [
      'Pág 1: Principios Fundamentales del Principio de Plena Competencia',
      'Pág 2: Métodos de Valoración Aceptados (Márgenes Netos, Precio Comparable)',
      'Pág 3: Estructura del Informe Local y el Archivo Maestro Multijurisdiccional'
    ],
    url: '#'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: '¿Qué formas societarias convienen más para inversionistas extranjeros en el país?',
    answer: 'La Sociedad por Acciones Simplificada (S.A.S.) es el vehículo societario preferido debido a su flexibilidad operativa, donde los accionistas limitan su responsabilidad al monto de sus aportes, no requiere junta directiva obligatoria, y permite pactar estatutos altamente personalizados bajo ley privada. Sin embargo, para fondos de inversión o emisiones públicas, una Sociedad Anónima (S.A.) clásica puede ser requerida.',
    category: 'legal'
  },
  {
    id: 'faq-2',
    question: '¿Cómo afecta la subcapitalización a los préstamos de accionistas?',
    answer: 'Las normas de subcapitalización limitan los intereses deducibles en el impuesto sobre la renta cuando provienen de deudas con vinculados económicos que exceden un ratio de 1.5 a 1 en proporción al patrimonio líquido. Los intereses devengados por el monto que exceda este límite se tratarán como gastos no deducibles tributariamente, elevando la carga impositiva neta.',
    category: 'tax'
  },
  {
    id: 'faq-3',
    question: '¿Qué es una revisoría fiscal obligatoria y qué empresas deben contratarla?',
    answer: 'La Revisoría Fiscal es un órgano de control externo que garantiza la regularidad del balance de las empresas y su apego a la ley. En el país, es obligatoria para toda sociedad comercial que supere los límites de activos brutos equivalentes a 5.000 salarios mínimos legales mensuales, o ingresos brutos anuales equivalentes a 3.000 salarios mínimos.',
    category: 'accounting'
  },
  {
    id: 'faq-4',
    question: '¿Cuál es la diferencia entre un seguro de D&O y uno de Responsabilidad Civil Extracontractual?',
    answer: 'El seguro de RCE (Responsabilidad Civil Extracontractual) cubre los daños materiales, lesiones corporales o muerte causados de manera accidental a terceros por las actividades de la empresa. El seguro de D&O (Directors & Officers) protege el patrimonio personal de los administradores y gerentes frente a demandas comerciales o administrativas derivadas de malas decisiones gerenciales, negligencia u omisiones en el cargo, sin que existan daños físicos o lesiones corporales directas.',
    category: 'insurance'
  },
  {
    id: 'faq-5',
    question: '¿Cuáles son los plazos promedio para resolver un proceso contencioso con la DIAN?',
    answer: 'Un litigio contencioso-administrativo en vía judicial contra la administración tributaria puede demorar entre 3 y 5 años en resolverse en dos instancias (Tribunal Administrativo y Consejo de Estado). Antes de acudir a la vía judicial, se debe agotar la vía gubernativa ante la DIAN, lo cual suele tomar entre 6 meses y 1 año tras la interposición del Recurso de Reconsideración.',
    category: 'general'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: "La firma ofrece asesoría personalizada, clara y oportuna para prevenir riesgos legales y proteger los derechos de sus clientes.",
    author: "Enfoque de servicio",
    role: "Asesoría integral",
    company: "Alvarado Montes Velilla",
    rating: 5
  },
  {
    id: 'test-2',
    quote: "El ejercicio profesional se fundamenta en la ética, la responsabilidad y el conocimiento técnico aplicado a cada proceso.",
    author: "Principios de trabajo",
    role: "Ética y responsabilidad",
    company: "Alvarado Montes Velilla",
    rating: 5
  },
  {
    id: 'test-3',
    quote: "El compromiso es brindar un servicio confiable, transparente y eficiente, orientado a la protección de los derechos y el patrimonio.",
    author: "Compromiso institucional",
    role: "Transparencia y eficiencia",
    company: "Alvarado Montes Velilla",
    rating: 5
  }
];
