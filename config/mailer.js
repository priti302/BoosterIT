// src/config/mailer.js
const sgMail = require('@sendgrid/mail');

/**
 * Common sendMail function used by controllers
 * @param {Object} params
 * @param {string} params.to
 * @param {string} params.subject
 * @param {string} params.html
 */
async function sendMail({ to, subject, html }) {
  const apiKey = process.env.SENDGRID_API_KEY;

  // Agar API key hi nahi hai → dev mode: sirf log
  if (!apiKey) {
    console.log('=== DEV EMAIL (SendGrid disabled) ===');
    console.log('To:', to);
    console.log('Subject:', subject);
    console.log('HTML (first 200 chars):', (html || '').slice(0, 200) + '...');
    console.log('=====================================');
    return;
  }

  sgMail.setApiKey(apiKey);

  if (!process.env.FROM_EMAIL) {
    throw new Error('FROM_EMAIL is not set in .env (verified sender address)');
  }

  const msg = {
    to,
    from: process.env.FROM_EMAIL,
    subject,
    html,
  };

  try {
    const [response] = await sgMail.send(msg);
    console.log('📧 SendGrid email sent. Status:', response.statusCode);
  } catch (err) {
    console.error('❌ SendGrid send error:', err.response?.body || err.message);
    throw err;
  }
}

module.exports = { sendMail };
