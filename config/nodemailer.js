const nodemailer = require('nodemailer');

function createTransporter() {
  if (!process.env.SMTP_HOST) {
    console.warn('⚠ SMTP not configured, email notifications disabled');
    return null;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

const transporter = createTransporter();

async function sendMail({ to, subject, html }) {
  if (!transporter) return;

  await transporter.sendMail({
    from: process.env.EMAIL_FROM || 'no-reply@example.com',
    to,
    subject,
    html,
  });
}

module.exports = { sendMail };
