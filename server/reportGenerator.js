import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';

const brand = {
  primary: '#1A242F',      // Deep slate blue de AMV
  secondary: '#233142',    // Accent slate
  accent: '#B22222',       // Corporate Red
  background: '#FAF7F2',   // Soft bone white
  surface: '#ffffff',
  text: '#233142',
  muted: '#57606F',
  line: '#E2DCD2',
  danger: '#B22222',
};

const inquiryAdvice = {
  'Derecho corporativo y comercial': 'Analizar estructura societaria, contratos vigentes, riesgos de cumplimiento corporativo y gobernanza.',
  'Consultoria tributaria': 'Revisar planeación fiscal, obligaciones tributarias territoriales/nacionales y posibles deducciones o beneficios.',
  'Auditoria y aseguramiento contable': 'Evaluar estados financieros, controles internos, cumplimiento NIIF y estados de resultados.',
  'Proteccion de activos y seguros': 'Identificar activos críticos, coberturas de responsabilidad civil/D&O y análisis de transferencia de riesgo.',
  'Litigios y controversias': 'Revisar términos procesales, pretensiones, instancias judiciales y estrategias de solución alternativa de conflictos.',
  'Aun no estoy seguro': 'Programar sesión de diagnóstico integral para clasificar las necesidades legales y tributarias prioritarias.',
};

function ensureText(value, fallback = 'No registrado') {
  const text = String(value || '').trim();
  return text || fallback;
}

function formatDate(isoDate) {
  return new Intl.DateTimeFormat('es-CO', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'America/Bogota',
  }).format(new Date(isoDate));
}

function drawRoundedRect(doc, x, y, width, height, color, radius = 14) {
  doc.save().roundedRect(x, y, width, height, radius).fill(color).restore();
}

function drawSectionTitle(doc, title, x, y) {
  doc
    .fillColor(brand.primary)
    .font('Helvetica-Bold')
    .fontSize(12)
    .text(title.toUpperCase(), x, y, { characterSpacing: 0.5 });

  doc
    .moveTo(x, y + 20)
    .lineTo(x + 460, y + 20)
    .strokeColor(brand.line)
    .lineWidth(1)
    .stroke();
}

function drawLabelValue(doc, label, value, x, y, width) {
  doc
    .fillColor(brand.muted)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text(label.toUpperCase(), x, y);

  doc
    .fillColor(brand.text)
    .font('Helvetica')
    .fontSize(10)
    .text(ensureText(value), x, y + 12, { width, lineGap: 2 });
}

function drawPill(doc, text, x, y, color) {
  const label = ensureText(text);
  const width = doc.widthOfString(label) + 24;
  drawRoundedRect(doc, x, y, width, 22, color, 11);
  doc.fillColor('#ffffff').font('Helvetica-Bold').fontSize(8.5).text(label, x + 12, y + 6);
  return width;
}

function drawKeywordList(doc, keywords, x, y) {
  if (!keywords || !keywords.length) {
    doc.fillColor(brand.muted).font('Helvetica').fontSize(9.5).text('No se detectaron palabras clave específicas.', x, y);
    return y + 16;
  }

  let currentX = x;
  let currentY = y;
  keywords.forEach((keyword) => {
    const width = Math.min(Math.max(doc.widthOfString(keyword) + 28, 80), 160);
    if (currentX + width > 540) {
      currentX = x;
      currentY += 28;
    }
    drawRoundedRect(doc, currentX, currentY, width, 22, '#EDE8DF', 11);
    doc.fillColor(brand.primary).font('Helvetica-Bold').fontSize(8).text(keyword, currentX + 8, currentY + 6, {
      width: width - 16,
      align: 'center',
      ellipsis: true,
      lineBreak: false,
    });
    currentX += width + 6;
  });

  return currentY + 30;
}

export async function generateContactReport(submission, { reportsDir, logoPath }) {
  await mkdir(reportsDir, { recursive: true });

  const filename = `reporte-amv-${submission.id}.pdf`;
  const filePath = path.join(reportsDir, filename);

  const doc = new PDFDocument({
    size: 'A4',
    margin: 40,
    info: {
      Title: `Dictamen de Solicitud ${submission.id}`,
      Author: 'Álvaro Montes Velilla - Asesorías Jurídicas y Tributarias',
      Subject: 'Dictamen y Análisis Jurídico Preliminar',
    },
  });

  const stream = createWriteStream(filePath);
  doc.pipe(stream);

  // Background limpio profesional
  doc.rect(0, 0, doc.page.width, doc.page.height).fill(brand.background);

  // ════════════════════════════════════════════════
  // ENCABEZADO INSTITUCIONAL CON LOGO
  // ════════════════════════════════════════════════
  drawRoundedRect(doc, 34, 34, 527, 95, brand.primary, 16);

  // Intentar estampar el Logo institucional
  if (logoPath) {
    try {
      doc.image(logoPath, 48, 46, { width: 68, height: 68, fit: [68, 68] });
    } catch {
      // Fallback si la imagen no se pudiese cargar
    }
  }

  // Título e Identificación del Radicado
  const headerX = logoPath ? 130 : 54;
  doc
    .fillColor('#ffffff')
    .font('Helvetica-Bold')
    .fontSize(17)
    .text('ÁLVARO MONTES VELILLA', headerX, 48);

  doc
    .fillColor('#EDE8DF')
    .font('Helvetica')
    .fontSize(9.5)
    .text('Asesorías Jurídicas, Tributarias y Revisoría Fiscal', headerX, 68);

  doc
    .fillColor('#B22222')
    .font('Helvetica-Bold')
    .fontSize(10)
    .text(`RADICADO DE CONSULTA: #${submission.id.slice(0, 8).toUpperCase()}`, headerX, 92);

  // Badge de Estado / Prioridad en la esquina derecha
  const isHighPriority = submission.analysis.priority === 'alta';
  const badgeColor = isHighPriority ? brand.danger : '#2D3E50';
  const badgeText = isHighPriority ? 'PRIORIDAD ALTA' : 'PRIORIDAD NORMAL';
  drawPill(doc, badgeText, 435, 48, badgeColor);

  let y = 145;

  // ════════════════════════════════════════════════
  // SECCIÓN 1: FICHA TÉCNICA DEL SOLICITANTE
  // ════════════════════════════════════════════════
  drawSectionTitle(doc, '1. Ficha Técnica del Cliente y Recepción', 40, y);
  y += 30;

  drawRoundedRect(doc, 40, y - 6, 515, 78, brand.surface, 12);
  drawLabelValue(doc, 'Nombre del Solicitante', submission.name, 56, y + 6, 230);
  drawLabelValue(doc, 'Correo de Contacto', submission.email, 300, y + 6, 230);
  drawLabelValue(doc, 'Teléfono / WhatsApp', submission.phone, 56, y + 42, 230);
  drawLabelValue(doc, 'Fecha y Hora Radicación', formatDate(submission.createdAt), 300, y + 42, 230);

  y += 92;

  // ════════════════════════════════════════════════
  // SECCIÓN 2: HECHOS Y DESCRIPCIÓN DEL CASO (REMITIDO POR CLIENTE)
  // ════════════════════════════════════════════════
  drawSectionTitle(doc, '2. Resumen de Hechos / Descripción del Caso', 40, y);
  y += 30;

  drawRoundedRect(doc, 40, y - 6, 515, 115, brand.surface, 12);
  drawLabelValue(doc, 'Área Seleccionada por Cliente', submission.analysis.selectedService, 56, y + 6, 480);

  doc
    .fillColor(brand.muted)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text('TEXTO DECLARADO POR EL CONSULTANTE:', 56, y + 40);

  doc
    .fillColor(brand.text)
    .font('Helvetica')
    .fontSize(9.5)
    .text(submission.description, 56, y + 54, {
      width: 483,
      height: 50,
      lineGap: 3,
      ellipsis: true,
    });

  y += 130;

  // ════════════════════════════════════════════════
  // SECCIÓN 3: DICTAMEN Y ANÁLISIS AUTOMÁTICO PARA EL ABOGADO
  // ════════════════════════════════════════════════
  drawSectionTitle(doc, '3. Análisis Técnico y Clasificación Jurídica', 40, y);
  y += 30;

  drawRoundedRect(doc, 40, y - 6, 515, 135, brand.surface, 12);
  
  drawLabelValue(doc, 'Área Especializada Recomendada', submission.analysis.recommendedService, 56, y + 6, 230);
  drawLabelValue(doc, 'Diagnóstico Sintético del Sistema', submission.analysis.summary, 300, y + 6, 230);

  doc
    .fillColor(brand.muted)
    .font('Helvetica-Bold')
    .fontSize(8)
    .text('CONCEPTOS / PALABRAS CLAVE DETECTADAS EN EL CASO:', 56, y + 54);

  drawKeywordList(doc, submission.analysis.detectedKeywords, 56, y + 68);

  y += 150;

  // ════════════════════════════════════════════════
  // SECCIÓN 4: RECOMENDACIÓN TÉCNICA Y PASOS A SEGUIR
  // ════════════════════════════════════════════════
  drawSectionTitle(doc, '4. Hoja de Ruta Sugerida para Asesoría', 40, y);
  y += 30;

  drawRoundedRect(doc, 40, y - 6, 515, 75, '#EAE5DC', 12);
  doc
    .fillColor(brand.primary)
    .font('Helvetica-Bold')
    .fontSize(8.5)
    .text('ORIENTACIÓN TÉCNICA INICIAL PARA LA REUNIÓN PRELIMINAR:', 56, y + 6);

  doc
    .fillColor(brand.text)
    .font('Helvetica')
    .fontSize(9.5)
    .text(
      inquiryAdvice[submission.analysis.recommendedService] || inquiryAdvice['Aun no estoy seguro'],
      56,
      y + 22,
      { width: 483, lineGap: 3 }
    );

  // Pie de página oficial
  doc
    .fillColor(brand.muted)
    .font('Helvetica-Oblique')
    .fontSize(8)
    .text(
      'Documento confidencial generado automáticamente por el sistema de radicación de AMV Asesorías Jurídicas & Tributarias.',
      40,
      780,
      { align: 'center', width: 515 }
    );

  doc.end();

  await new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });

  return {
    filename,
    path: filePath,
  };
}
