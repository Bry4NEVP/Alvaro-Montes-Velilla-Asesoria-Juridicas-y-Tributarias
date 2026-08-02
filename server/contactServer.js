import 'dotenv/config';
import http from 'node:http';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { randomUUID } from 'node:crypto';
import { generateContactReport } from './reportGenerator.js';
import { sendReportByEmail } from './emailSender.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const reportsDir = path.join(dataDir, 'reports');
const submissionsFile = path.join(dataDir, 'contact-submissions.json');
const logoPath = path.join(rootDir, 'public', 'Logo.png');
const port = Number(process.env.PORT || 3002);

const practiceAreaLabels = {
  'Derecho corporativo y comercial': 'Derecho corporativo y comercial',
  'Consultoria tributaria': 'Consultoria tributaria',
  'Auditoria y aseguramiento contable': 'Auditoria y aseguramiento contable',
  'Proteccion de activos y seguros': 'Proteccion de activos y seguros',
  'Litigios y controversias': 'Litigios y controversias',
  'Aun no estoy seguro': 'Aun no estoy seguro',
};

// Palabras clave por área técnica (Derecho, Impuestos, Contabilidad, Riesgos, Litigios)
const keywordGroups = [
  {
    service: 'Derecho corporativo y comercial',
    keywords: ['empresa', 'sociedad', 'contrato', 'contratos', 'fusion', 'adquisicion', 'estatutos', 'socio', 'socios', 'gobierno corporativo', 'marca', 'camara de comercio'],
  },
  {
    service: 'Consultoria tributaria',
    keywords: ['impuesto', 'impuestos', 'dian', 'renta', 'iva', 'retencion', 'tributaria', 'tributario', 'sancion', 'fiscal', 'patrimonio', 'facturacion', 'precios de transferencia'],
  },
  {
    service: 'Auditoria y aseguramiento contable',
    keywords: ['contabilidad', 'contable', 'auditoria', 'estados financieros', 'revisoria', 'balance', 'niif', 'inventario', 'dictamen'],
  },
  {
    service: 'Proteccion de activos y seguros',
    keywords: ['seguro', 'seguros', 'activo', 'activos', 'riesgo', 'riesgos', 'poliza', 'd&o', 'cobertura', 'patrimonial', 'siniestro'],
  },
  {
    service: 'Litigios y controversias',
    keywords: ['demanda', 'demando', 'demandado', 'demandante', 'juicio', 'tribunal', 'juez', 'audiencia', 'arbitraje', 'conciliacion', 'embargo', 'sancion', 'tutelazo'],
  },
];

// Palabras clave de prioridad o urgencia
const priorityKeywords = [
  'urgente', 'urgencia', 'embargo', 'sancion', 'multa', 'dian', 'inspeccion', 'audiencia',
  'vencimiento', 'plazo', 'plazo de ley', 'tutela', 'medida cautelar', 'demanda', 'notificacion',
  'pliego de cargos', 'requerimiento especial', 'clausura', 'liquidacion', 'fraude'
];

function sendJson(res, statusCode, body) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(JSON.stringify(body));
}

function normalizeText(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function validateSubmission(body) {
  const errors = {};
  const name = String(body.name || '').trim();
  const email = String(body.email || '').trim();
  const phone = String(body.phone || '').trim();
  const practiceArea = String(body.practiceArea || '').trim();
  const description = String(body.description || '').trim();

  if (!name) errors.name = 'El nombre es obligatorio.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'El correo no es valido.';
  if (!phone) errors.phone = 'El telefono es obligatorio.';
  if (description.length < 10) errors.description = 'La descripcion debe tener al menos 10 caracteres.';

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    data: { name, email, phone, practiceArea, description },
  };
}

function analyzeSubmission(data) {
  const text = normalizeText(`${data.practiceArea} ${data.description}`);
  
  const matches = keywordGroups
    .map((group) => ({
      service: group.service,
      keywords: group.keywords.filter((keyword) => text.includes(normalizeText(keyword))),
    }))
    .filter((group) => group.keywords.length > 0);

  // Ordenar por mayor número de palabras clave encontradas
  matches.sort((a, b) => b.keywords.length - a.keywords.length);

  const detectedPriorityKeywords = priorityKeywords.filter((keyword) => text.includes(normalizeText(keyword)));
  const selectedService = practiceAreaLabels[data.practiceArea] || data.practiceArea;
  const recommendedService = matches[0]?.service || (selectedService !== 'Aun no estoy seguro' ? selectedService : 'Derecho corporativo y comercial');

  return {
    selectedService,
    recommendedService,
    priority: detectedPriorityKeywords.length > 0 ? 'alta' : 'normal',
    detectedKeywords: [...new Set(matches.flatMap((group) => group.keywords))],
    priorityKeywords: detectedPriorityKeywords,
    summary: `Consulta en ${selectedService}. Área técnica recomendada: ${recommendedService}.`,
  };
}

async function readSubmissions() {
  try {
    return JSON.parse(await readFile(submissionsFile, 'utf8'));
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    throw error;
  }
}

async function saveSubmission(submission) {
  await mkdir(dataDir, { recursive: true });
  const submissions = await readSubmissions();
  submissions.push(submission);
  await writeFile(submissionsFile, JSON.stringify(submissions, null, 2));
}

async function readJsonBody(req) {
  const chunks = [];
  let size = 0;

  for await (const chunk of req) {
    size += chunk.length;
    if (size > 1_000_000) {
      throw new Error('Payload too large');
    }
    chunks.push(chunk);
  }

  const raw = Buffer.concat(chunks).toString('utf8');
  return raw ? JSON.parse(raw) : {};
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if (req.method === 'OPTIONS') {
      return sendJson(res, 204, {});
    }

    if (req.method === 'GET' && url.pathname === '/api/health') {
      return sendJson(res, 200, { ok: true, service: 'amv-backend' });
    }

    if (req.method === 'POST' && url.pathname === '/api/contacto') {
      const body = await readJsonBody(req);
      const validation = validateSubmission(body);

      if (!validation.isValid) {
        return sendJson(res, 400, { ok: false, errors: validation.errors });
      }

      const analysis = analyzeSubmission(validation.data);
      const submission = {
        id: randomUUID(),
        createdAt: new Date().toISOString(),
        ...validation.data,
        analysis,
      };

      const report = await generateContactReport(submission, { reportsDir, logoPath });
      submission.report = report;

      await saveSubmission(submission);

      // Enviar correo con PDF adjunto (fallo silencioso en log si no hay credenciales)
      try {
        await sendReportByEmail(submission, report.path);
      } catch (emailError) {
        console.warn('[email] No se pudo enviar el correo:', emailError.message);
      }

      return sendJson(res, 201, {
        ok: true,
        id: submission.id,
        analysis,
        report: {
          filename: report.filename,
          path: report.path,
        },
        message: 'Solicitud recibida y procesada correctamente.',
      });
    }

    return sendJson(res, 404, { ok: false, message: 'Ruta no encontrada.' });
  } catch (error) {
    console.error(error);
    return sendJson(res, 500, { ok: false, message: 'Error interno del servidor.' });
  }
});

server.listen(port, () => {
  console.log(`Backend de Contacto (AMV) escuchando en http://localhost:${port}`);
});
