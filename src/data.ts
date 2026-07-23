import { Service, TeamMember, Article, Resource, FAQItem, Testimonial } from './types';

export const SERVICES: Service[] = [
  // LEGAL
  {
    id: 'corporate-law',
    title: 'Derecho Corporativo y Comercial',
    description: 'Asesoría integral para la constitución, estructuración, fusiones y gobierno corporativo de empresas nacionales y extranjeras.',
    details: [
      'Constitución y reorganización de sociedades y consorcios comerciales.',
      'Elaboración, revisión y negociación de contratos comerciales locales e internacionales.',
      'Diseño y ejecución de protocolos de gobierno corporativo y sucesiones familiares.',
      'Asesoría en cumplimiento normativo y prevención de riesgos corporativos.'
    ],
    businessUnit: 'legal',
    iconName: 'Scale',
    benefits: [
      'Mitigación activa de riesgos contractuales y de gobernanza.',
      'Estructuras societarias optimizadas para levantamiento de capital.',
      'Tratamiento legal alineado al 100% con los objetivos de negocio.'
    ],
    deliverables: [
      'Estudios de factibilidad legal y viabilidad de contratos.',
      'Actas de junta directiva, asamblea y estatutos sociales.',
      'Informes trimestrales de cumplimiento normativo (Compliance).'
    ]
  },
  {
    id: 'mergers-acquisitions',
    title: 'Fusiones y Adquisiciones (M&A)',
    description: 'Gestión y estructuración legal de transacciones complejas, auditorías legales (Due Diligence) e integraciones corporativas.',
    details: [
      'Auditoría legal (Due Diligence) de empresas objetivo.',
      'Estructuración legal y fiscal de compraventas de acciones o activos.',
      'Diseño de pactos de socios, acuerdos preliminares y cláusulas de salida.',
      'Obtención de autorizaciones ante entes reguladores y de competencia.'
    ],
    businessUnit: 'legal',
    iconName: 'Briefcase',
    benefits: [
      'Identificación temprana de contingencias ocultas o pasivos ambientales.',
      'Optimización de la valoración comercial mediante cláusulas de garantía.',
      'Transición suave y estructurada post-adquisición.'
    ],
    deliverables: [
      'Reporte integral de Due Diligence legal.',
      'Contrato de Compraventa de Acciones (SPA) y acuerdos de accionistas.',
      'Cronograma y protocolos de integración transaccional.'
    ]
  },
  {
    id: 'intellectual-property',
    title: 'Propiedad Intelectual y Tecnología',
    description: 'Protección integral de marcas, patentes, derechos de autor y regulación de software y plataformas digitales.',
    details: [
      'Registro y defensa de marcas, lemas comerciales y denominaciones de origen.',
      'Redacción de contratos de licencia, franquicia y transferencia de tecnología.',
      'Asesoría en protección de datos personales y políticas de privacidad (Habeas Data).',
      'Estructuración legal de startups, plataformas e-commerce y contratos SaaS.'
    ],
    businessUnit: 'legal',
    iconName: 'ShieldCheck',
    benefits: [
      'Blindaje de activos intangibles de alto valor de la empresa.',
      'Cumplimiento estricto de las leyes de protección de datos.',
      'Habilitación de modelos de negocio digitales altamente escalables.'
    ],
    deliverables: [
      'Títulos de registro marcario y reportes de búsqueda fonética.',
      'Políticas de privacidad y términos y condiciones web/App.',
      'Contratos de cesión de propiedad intelectual de desarrolladores.'
    ]
  },
  // TAX
  {
    id: 'tax-planning',
    title: 'Planeación Tributaria Estratégica',
    description: 'Optimización legal de la carga impositiva mediante un profundo análisis de la normativa nacional y sectorial.',
    details: [
      'Diagnóstico fiscal de la estructura operativa corporativa.',
      'Evaluación de beneficios, deducciones y exenciones tributarias sectoriales.',
      'Diseño de modelos de eficiencia tributaria para utilidades e inversiones.',
      'Preparación para auditorías preventivas frente a la administración de impuestos.'
    ],
    businessUnit: 'tax',
    iconName: 'TrendingUp',
    benefits: [
      'Reducción de costos fiscales dentro de la estricta legalidad.',
      'Previsibilidad del flujo de caja destinado a obligaciones tributarias.',
      'Evitación de sanciones, intereses moratorios y procesos de cobro coactivo.'
    ],
    deliverables: [
      'Matriz de planeación tributaria anual con calendario de ejecución.',
      'Opiniones legales de viabilidad sobre estructuras de inversión.',
      'Reporte de oportunidades de optimización fiscal detectadas.'
    ]
  },
  {
    id: 'cross-border-taxation',
    title: 'Fiscalidad Internacional y Precios de Transferencia',
    description: 'Asesoramiento tributario en operaciones transfronterizas, tratados para evitar la doble imposición y obligaciones cambiarias.',
    details: [
      'Aplicación de convenios de doble imposición (CDI) y retenciones en la fuente.',
      'Elaboración de estudios de precios de transferencia y declaraciones informativas.',
      'Estructuración fiscal de inversiones extranjeras en el país y viceversa.',
      'Asesoría en el cumplimiento de regímenes cambiarios e inversiones internacionales.'
    ],
    businessUnit: 'tax',
    iconName: 'Globe',
    benefits: [
      'Evitación de la doble tributación en múltiples jurisdicciones.',
      'Soporte robusto ante revisiones de precios de transferencia.',
      'Seguridad jurídica en el giro y recepción de divisas internacionales.'
    ],
    deliverables: [
      'Estudio de precios de transferencia firmado por especialista.',
      'Conceptos de tributación sobre pagos al exterior por servicios y regalías.',
      'Declaraciones cambiarias estructuradas.'
    ]
  },
  {
    id: 'tax-disputes',
    title: 'Defensa y Litigio Tributario',
    description: 'Representación legal ante requerimientos, liquidaciones oficiales y procesos de cobro coactivo de la administración de impuestos.',
    details: [
      'Atención y respuesta técnica a requerimientos ordinarios y especiales.',
      'Redacción y radicación de recursos de reconsideración en vía gubernativa.',
      'Representación judicial ante la jurisdicción contencioso-administrativa.',
      'Estrategias de mediación, conciliación y acuerdos de pago.'
    ],
    businessUnit: 'tax',
    iconName: 'FileText',
    benefits: [
      'Defensa técnica calificada frente a actuaciones fiscales desproporcionadas.',
      'Disminución del riesgo de embargos de cuentas o activos.',
      'Acompañamiento por abogados con doble perfil (tributarista e internacional).'
    ],
    deliverables: [
      'Proyectos de respuesta a pliegos de cargos o liquidaciones.',
      'Demandas de nulidad y restablecimiento del derecho formuladas.',
      'Informes periódicos del estado de los procesos judiciales.'
    ]
  },
  // ACCOUNTING
  {
    id: 'audit-assurance',
    title: 'Auditoría y Aseguramiento Financiero',
    description: 'Evaluación independiente de estados financieros bajo normas locales e internacionales (NIIF/IFRS) para inversionistas y reguladores.',
    details: [
      'Auditoría externa de estados financieros anuales o intermedios.',
      'Revisoría fiscal estatutaria obligatoria o voluntaria.',
      'Evaluación del sistema de control interno y mitigación de riesgos operativos.',
      'Emisión de dictámenes y certificaciones financieras para licitaciones.'
    ],
    businessUnit: 'accounting',
    iconName: 'FileCheck',
    benefits: [
      'Alta confiabilidad de las cifras para bancos, socios y terceros.',
      'Identificación de fallas en el control interno que puedan derivar en fraudes.',
      'Garantía de cumplimiento con los entes de supervisión societaria.'
    ],
    deliverables: [
      'Dictamen del auditor sobre los estados financieros.',
      'Carta de recomendaciones a la gerencia sobre control interno.',
      'Certificados de cumplimiento de covenants financieros.'
    ]
  },
  {
    id: 'accounting-outsourcing',
    title: 'Outsourcing Contable y BPO Financiero',
    description: 'Gestión externa del procesamiento contable diario, conciliaciones, facturación electrónica y presentación de informes.',
    details: [
      'Registro contable sistematizado bajo estándares NIIF (IFRS).',
      'Conciliaciones bancarias, de cartera, proveedores e inventarios.',
      'Liquidación mensual de impuestos locales, nacionales y retenciones.',
      'Preparación de estados financieros mensuales y reportes gerenciales.'
    ],
    businessUnit: 'accounting',
    iconName: 'Layers',
    benefits: [
      'Reducción de costos de personal contable interno y licencias de software.',
      'Contabilidad mantenida al día y libre de errores materiales.',
      'Acceso a reportes y tableros financieros en tiempo real.'
    ],
    deliverables: [
      'Balance General, Estado de Resultados y notas contables mensuales.',
      'Borradores de declaraciones tributarias listas para firma.',
      'Reportes de antigüedad de cartera e informes de tesorería.'
    ]
  },
  // INSURANCE
  {
    id: 'corporate-liability',
    title: 'Seguros de Responsabilidad Civil y Directores (D&O)',
    description: 'Protección patrimonial para la empresa y sus administradores frente a reclamaciones por decisiones de negocio u operaciones operativas.',
    details: [
      'Estructuración de pólizas de directores y administradores (D&O).',
      'Seguros de responsabilidad civil extracontractual para operaciones y predios.',
      'Coberturas de errores y omisiones (E&O) para empresas de servicios.',
      'Asistencia y representación en reclamaciones de siniestros complejos.'
    ],
    businessUnit: 'insurance',
    iconName: 'Shield',
    benefits: [
      'Protección del patrimonio personal de los directivos clave.',
      'Respaldo financiero para afrontar costosos gastos de defensa jurídica.',
      'Cumplimiento con requisitos de contratación pública y privada.'
    ],
    deliverables: [
      'Análisis comparativo de pólizas del mercado (Benchmarking).',
      'Manual de procedimiento para notificación de siniestros.',
      'Contratos de seguro estructurados con condiciones preferenciales.'
    ]
  },
  {
    id: 'asset-protection',
    title: 'Protección de Activos y Seguros de Propiedad',
    description: 'Evaluación de riesgos y colocación de pólizas de daños materiales, lucro cesante e infraestructura física corporativa.',
    details: [
      'Auditoría de riesgos de infraestructura y cadena de suministro.',
      'Pólizas multirriesgo industrial para maquinaria, existencias e inmuebles.',
      'Seguro de lucro cesante (pérdida de beneficios por paralización de planta).',
      'Estructuras de fideicomisos y seguros combinados para grandes patrimonios.'
    ],
    businessUnit: 'insurance',
    iconName: 'Home',
    benefits: [
      'Garantía de continuidad operativa ante desastres naturales o incendios.',
      'Tasas de deducibles equilibradas según el perfil de riesgo real.',
      'Integración con planeación sucesoria y familiar de socios.'
    ],
    deliverables: [
      'Informe técnico de inspección y valoración de riesgos.',
      'Programa integral de seguros empresariales.',
      'Certificados de cobertura para entidades financieras.'
    ]
  }
];

export const TEAM: TeamMember[] = [
  {
    id: 'alberto-alvarado',
    name: 'Dr. Alberto Alvarado',
    role: 'Socio Fundador - Área Jurídica',
    bio: 'Con más de 25 años de experiencia, el Dr. Alvarado es un referente en derecho corporativo y arbitraje comercial. Ha asesorado a más de 100 empresas transnacionales en su establecimiento y fusiones.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'legal',
    credentials: ['Doctor en Derecho (LL.D.) - Universidad Externado', 'Master en Derecho Comercial (LL.M.) - Harvard Law School', 'Árbitro de la Cámara de Comercio'],
    email: 'a.alvarado@amv.com.co'
  },
  {
    id: 'beatriz-montes',
    name: 'Dra. Beatriz Montes',
    role: 'Socia Principal - Área Tributaria',
    bio: 'Especialista en planeación fiscal y reestructuraciones corporativas complejas. Ex-asesora técnica del Ministerio de Hacienda y conferencista internacional en tributación de la OCDE.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'tax',
    credentials: ['Especialista en Tributación - Universidad de los Andes', 'Máster en Tributación Internacional - Universidad de Navarra', 'Miembro del Instituto Colombiano de Derecho Tributario (ICDT)'],
    email: 'b.montes@amv.com.co'
  },
  {
    id: 'carlos-velilla',
    name: 'Dr. Carlos Velilla',
    role: 'Socio Director - Área Contable y Auditoría',
    bio: 'Experto en implementación NIIF/IFRS y auditoría forense. Cuenta con amplia trayectoria liderando equipos de auditoría interna en firmas Big Four en Latinoamérica.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
    businessUnit: 'accounting',
    credentials: ['Contador Público - Universidad Nacional', 'Especialista en Revisoría Fiscal - Universidad Javeriana', 'Certificación Internacional NIIF - ACCA Association'],
    email: 'c.velilla@amv.com.co'
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
    title: 'Impacto de la Reforma Tributaria 2026 en las Sociedades Anónimas y SAS',
    summary: 'Un desglose analítico sobre los cambios en la tarifa nominal de renta, el impuesto a los dividendos y las nuevas normas de subcapitalización vigentes desde este año fiscal.',
    content: `La reciente aprobación de la Ley de Finanzas Públicas e Impulso al Crecimiento (Reforma Tributaria 2026) introduce cambios estructurales de gran calado para el sector empresarial en el país. En este artículo, nuestro equipo tributario analiza los tres pilares más críticos que las Juntas Directivas de las Sociedades Anónimas (S.A.) y Sociedades por Acciones Simplificadas (S.A.S.) deben evaluar de inmediato para reestructurar sus flujos de caja y proyecciones de rentabilidad corporativa.

### 1. Ajuste Gradual en la Tarifa Nominal del Impuesto sobre la Renta
La reforma propone un esquema diferencial en las tarifas de renta según el tamaño de la compañía, buscando aliviar a las micro y pequeñas empresas pero consolidando una tasa del 34% para corporaciones con rentas gravables superiores a un millón de UVT. La planeación tributaria preventiva se vuelve la única herramienta legal para optimizar las deducciones permitidas por inversiones en I+D+i y transición energética.

> "La planeación impositiva ya no es un ejercicio de fin de año; debe incorporarse en el diseño de cada transacción comercial mensual." - Dra. Beatriz Montes

### 2. Impuesto sobre Dividendos y Retenciones en la Fuente
Se eleva la tarifa de retención sobre dividendos distribuidos a socios residentes naturales del 15% al 20%. Esto obliga a revisar las políticas de capitalización de utilidades dentro de los estatutos empresariales y los pactos de socios para evaluar alternativas de capitalización de reservas libres de gravamen o desinversiones estructuradas.

### 3. Fortalecimiento de las Reglas de Subcapitalización (Under-capitalization)
Se restringe la deducibilidad de gastos financieros asociados a deudas contraídas directa o indirectamente con vinculados económicos que excedan un ratio de 1.5:1 en relación con el patrimonio líquido del contribuyente en el año inmediatamente anterior. Toda financiación intragrupo debe contar con un análisis de Precios de Transferencia y tasas estructuradas bajo el principio de plena competencia (Arm's Length Principles).`,
    category: 'Tributaria',
    author: 'Dra. Beatriz Montes',
    date: '10 Jun 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
    featured: true,
    tags: ['Reforma Tributaria', 'Renta Corporativa', 'Dividendos', 'SAS']
  },
  {
    id: 'm-a-due-diligence-errors',
    title: 'Los 5 Errores Fatales en un Proceso de Due Diligence en Adquisiciones',
    summary: 'Evite contingencias millonarias identificando de antemano pasivos laborales latentes, marcas desprotegidas y vacíos de cumplimiento de datos en la empresa objetivo.',
    content: `Adquirir una compañía o realizar una fusión es un paso estratégico emocionante pero lleno de campos minados legales. Un proceso de Auditoría Legal (Due Diligence) superficial o enfocado únicamente en los balances financieros puede costar millones de dólares en contingencias post-cierre. 

A continuación, delineamos los 5 errores legales y contables más comunes que hemos detectado en nuestra práctica de M&A y cómo blindar su inversión:

### 1. Ignorar Pasivos Laborales Ocultos
Muchas startups u organizaciones familiares estructuran sus contrataciones bajo contratos civiles de prestación de servicios para roles que cumplen con subordinación directa. Post-adquisición, esto se traduce en demandas por reajustes prestacionales, sanciones de seguridad social e indemnizaciones retroactivas masivas.

### 2. No Verificar la Titularidad de la Propiedad Intelectual
Es común asumir que si la empresa desarrolló un software, esta posee los derechos. Sin embargo, si los contratos laborales de los ingenieros o proveedores externos no cuentan con cláusulas robustas de transferencia y cesión exclusiva de propiedad intelectual, los derechos siguen perteneciendo a las personas naturales creadoras.

### 3. Pasar por alto el Cumplimiento de Datos Personales (Habeas Data)
En la economía digital, una base de datos de usuarios puede ser el activo más valioso. Si dicha base no se recopiló con autorizaciones expresas e irrevocables para su transferencia a terceros corporativos, esta se vuelve inutilizable legalmente tras la adquisición bajo riesgo de multas regulatorias catastróficas.`,
    category: 'Derecho Corporativo',
    author: 'Dr. Alberto Alvarado',
    date: '28 May 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800',
    tags: ['M&A', 'Due Diligence', 'Propiedad Intelectual', 'Compliance']
  },
  {
    id: 'forensic-accounting-prevention',
    title: 'Auditoría Forense: Cómo Detectar Red Flags Financieros en su Compañía',
    summary: 'Aprenda metodologías clave y herramientas de análisis interno para proteger los flujos de tesorería y garantizar un control interno a prueba de fraudes.',
    content: `El fraude corporativo no siempre se manifiesta en grandes desfalcos mediáticos. La mayoría de las fugas de capital ocurren de manera silenciosa mediante pequeños desvíos sistemáticos en reembolsos, facturas ficticias de proveedores de servicios falsos, o manipulaciones contables sutiles.

La auditoría forense combina técnicas contables, jurídicas y de análisis de datos para indagar anomalías. En esta guía práctica explicamos los principales indicadores ("Red Flags") que todo CEO y Director Financiero debe monitorear de forma periódica.

### Red Flags en Proveedores y Compras
*   Incremento repentino de pagos a un proveedor cuyos datos básicos coinciden con los de algún colaborador interno (dirección, cuenta bancaria, teléfono).
*   Facturas consecutivas con numeración idéntica o facturas emitidas en fines de semana o días festivos que no corresponden con la actividad operativa regular.
*   Falta de cotizaciones comparativas previas a la aprobación de un contrato importante de servicios intangibles (consultorías, marketing, asesorías).`,
    category: 'Contable y Auditoría',
    author: 'Dr. Carlos Velilla',
    date: '15 May 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=800',
    tags: ['Auditoría Forense', 'Fraude Corporativo', 'Control Interno', 'Finanzas']
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
    quote: "La asesoría corporativa y tributaria de Alvarado Montes Velilla nos permitió reestructurar nuestra holding en tres países, reduciendo riesgos sustanciales y agilizando las rondas de inversión.",
    author: "Ing. Alejandro Mendoza",
    role: "CEO & Cofundador",
    company: "Apex Tech Holdings Inc.",
    rating: 5
  },
  {
    id: 'test-2',
    quote: "Su capacidad técnica en litigio fiscal y defensa tributaria fue decisiva para revocar una liquidación oficial injusta de la DIAN. Excelencia académica aplicada a la defensa corporativa.",
    author: "Dra. Carolina Villegas",
    role: "Directora Financiera",
    company: "Grupo Logístico del Norte S.A.",
    rating: 5
  },
  {
    id: 'test-3',
    quote: "Llevamos 8 años con su Revisoría Fiscal y Auditoría Externa. La rigurosidad de sus informes y el valor agregado de su diagnóstico de control interno son invaluables.",
    author: "Felipe Gaviria",
    role: "Presidente de la Junta",
    company: "Inversiones del Café S.A.S.",
    rating: 5
  }
];
