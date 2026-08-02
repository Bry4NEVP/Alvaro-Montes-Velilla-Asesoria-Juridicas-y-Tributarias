import nodemailer from 'nodemailer';
import path from 'node:path';

/**
 * Envia el dictamen/reporte PDF al correo configurado en las variables de entorno.
 * @param {object} submission - Objeto con los datos de la solicitud.
 * @param {string} pdfPath    - Ruta absoluta del archivo PDF generado.
 */
export async function sendReportByEmail(submission, pdfPath) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const recipient = process.env.REPORT_RECIPIENT || 'contacto@amv.com.co';

  if (!user || !pass) {
    console.warn('[email] Credenciales GMAIL_USER / GMAIL_APP_PASSWORD no configuradas en .env. El correo no fue enviado de forma real.');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // STARTTLS
    auth: { user, pass },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const priorityLabel =
    submission.analysis.priority === 'alta' ? 'URGENTE / ALTA PRIORIDAD' : 'Normal';

  const filename = path.basename(pdfPath);

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #233142;">
      <div style="background: #1A242F; padding: 28px 32px; border-radius: 16px 16px 0 0;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px;">Nueva Solicitud Empresarial</h1>
        <p style="margin: 6px 0 0; color: #EDE8DF; font-size: 13px;">Alvaro Montes Velilla &middot; Asesorías Jurídicas y Tributarias</p>
      </div>
      <div style="background: #FAF7F2; padding: 28px 32px; border: 1px solid #E2DCD2; border-top: none;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase; width: 160px;">ID Radicado</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px; font-weight: bold;">${submission.id}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Nombre Solicitante</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px;">${submission.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Correo Contacto</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px;">${submission.email}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Teléfono</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px;">${submission.phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Área Solicitada</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px;">${submission.analysis.selectedService}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Área Sugerida</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E2DCD2; font-size: 14px;">${submission.analysis.recommendedService}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Prioridad</td>
            <td style="padding: 10px 0; font-size: 14px; font-weight: bold; color: ${submission.analysis.priority === 'alta' ? '#B22222' : '#233142'};">${priorityLabel}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; background: #ffffff; border: 1px solid #E2DCD2; border-radius: 10px; padding: 16px 20px;">
          <p style="margin: 0 0 6px; color: #57606F; font-size: 11px; font-weight: bold; text-transform: uppercase;">Resumen del Caso / Mensaje</p>
          <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #233142;">${submission.description}</p>
        </div>
        <p style="margin-top: 24px; font-size: 13px; color: #57606F;">
          El informe/dictamen completo en PDF ha sido adjuntado como <strong>${filename}</strong>.
        </p>
      </div>
      <div style="background: #233142; padding: 16px 32px; border-radius: 0 0 16px 16px; text-align: center;">
        <p style="margin: 0; color: #EDE8DF; font-size: 12px;">AMV Asesorías Jurídicas &middot; Notificación Automática de Sistema</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"AMV Asesorías" <${user}>`,
    to: recipient,
    subject: `[AMV] Nueva Consulta: ${submission.name} - ${priorityLabel}`,
    html,
    attachments: [
      {
        filename,
        path: pdfPath,
        contentType: 'application/pdf',
      },
    ],
  });

  console.log(`[email] Reporte enviado correctamente a ${recipient} - ID: ${submission.id}`);
}
