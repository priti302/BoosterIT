function verificationEmailTemplate(name, verifyUrl) {
  return `
    <h2>Hi ${name},</h2>
    <p>Thanks for signing up. Please verify your email by clicking the link below:</p>
    <p><a href="${verifyUrl}" target="_blank">Verify Email</a></p>
    <p>If you did not create this account, you can ignore this email.</p>
  `;
}

function resetPasswordEmailTemplate(name, resetUrl) {
  return `
    <h2>Hi ${name},</h2>
    <p>You requested to reset your password.</p>
    <p>Click the link below to set a new password. This link is valid for 1 hour.</p>
    <p><a href="${resetUrl}" target="_blank">Reset Password</a></p>
    <p>If you did not request this, you can ignore this email.</p>
  `;
}

module.exports = {
  verificationEmailTemplate,
  resetPasswordEmailTemplate,
};
