const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

const uploadDir = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, unique + ext);
  },
});

const upload = multer({ storage });

/**
 * POST /api/upload/file
 * form-data: file
 */
router.post('/file', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'File required' });
  }

  const file = req.file;
  const publicUrl = `/uploads/${file.filename}`;

  return res.status(201).json({
    url: publicUrl,
    originalName: file.originalname,
    mimeType: file.mimetype,
    size: file.size,
  });
});

module.exports = router;
