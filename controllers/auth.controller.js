const crypto = require('crypto');
const User = require('../models/User');
const { generateJwtToken } = require('../utils/generateToken');
const { sendMail } = require('../config/mailer');
const {
  verificationEmailTemplate,
  resetPasswordEmailTemplate,
} = require('../utils/emailTemplates');

// Helper: generate hashed token
function generateHashedToken() {
  const token = crypto.randomBytes(32).toString('hex');
  const hashed = crypto.createHash('sha256').update(token).digest('hex');
  return { token, hashed };
}

// ─────────────────────────────────────────────
// Signup
// ─────────────────────────────────────────────
async function signup(req, res, next) {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, password required' });
    }

    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const { token, hashed } = generateHashedToken();

    const user = await User.create({
      name,
      email,
      password,
      role: role || 'client',
      emailVerificationToken: hashed,
      emailVerificationTokenExpires: Date.now() + 60 * 60 * 1000, // 1 hour
    });

    const verifyUrl = `${process.env.BACKEND_URL}/api/auth/verify-email?token=${token}&email=${encodeURIComponent(
      email
    )}`;

    await sendMail({
      to: user.email,
      subject: 'Verify your email',
      html: verificationEmailTemplate(user.name, verifyUrl),
    });

    res.status(201).json({
      message:
        'User registered. Please check your email for verification link.',
    });
  } catch (err) {
    next(err);
  }
}

// ─────────────────────────────────────────────
// Verify Email
// ─────────────────────────────────────────────
async function verifyEmail(req, res, next) {
  try {
    const { token, email } = req.query;
    if (!token || !email) {
      return res.status(400).json({ message: 'Token and email required' });
    }

    const hashed = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      email,
      emailVerificationToken: hashed,
      emailVerificationTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: 'Invalid or expired verification link' });
    }

    user.isEmailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationTokenExpires = undefined;
    await user.save();

    res.json({ message: 'Email verified successfully. You can log in now.' });
  } catch (err) {
    next(err);
  }
}

// ─────────────────────────────────────────────
// Login
// ─────────────────────────────────────────────
async function login(req, res, next) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    if (!user.isEmailVerified) {
      return res
        .status(403)
        .json({ message: 'Please verify your email before logging in' });
    }

    const token = generateJwtToken(user);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    next(err);
  }
}

// ─────────────────────────────────────────────
// Get current user
// ─────────────────────────────────────────────
async function getMe(req, res, next) {
  try {
    res.json({ user: req.user });
  } catch (err) {
    next(err);
  }
}

// ─────────────────────────────────────────────
// Forgot Password
// ─────────────────────────────────────────────
async function forgotPassword(req, res, next) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: 'Email required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      // Don't leak that user doesn't exist
      return res.json({
        message: 'If that email exists, a reset link was sent',
      });
    }

    const { token, hashed } = generateHashedToken();
    user.resetPasswordToken = hashed;
    user.resetPasswordTokenExpires = Date.now() + 60 * 60 * 1000; // 1 hour
    await user.save();

    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}&email=${encodeURIComponent(
      email
    )}`;

    await sendMail({
      to: user.email,
      subject: 'Password reset',
      html: resetPasswordEmailTemplate(user.name, resetUrl),
    });

    res.json({
      message: 'If that email exists, a reset link was sent',
    });
  } catch (err) {
    next(err);
  }
}

// ─────────────────────────────────────────────
// Reset Password
// ─────────────────────────────────────────────
async function resetPassword(req, res, next) {
  try {
    const { token, email, password } = req.body;

    if (!token || !email || !password) {
      return res
        .status(400)
        .json({ message: 'Token, email and new password required' });
    }

    const hashed = crypto.createHash('sha256').update(token).digest('hex');

    const user = await User.findOne({
      email,
      resetPasswordToken: hashed,
      resetPasswordTokenExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: 'Invalid or expired reset token' });
    }

    user.password = password; // will be hashed by pre('save')
    user.resetPasswordToken = undefined;
    user.resetPasswordTokenExpires = undefined;

    await user.save();

    res.json({ message: 'Password reset successful. You can log in now.' });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  signup,
  verifyEmail,
  login,
  getMe,
  forgotPassword,
  resetPassword,
};
