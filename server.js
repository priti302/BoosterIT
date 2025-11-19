// // src/server.js

// // 1) SABSE PEHLE env load karo
// const { configEnv } = require('./config/.env');
// configEnv();

// // 2) Baaki sab uske baad
// const path = require('path');
// const express = require('express');
// const http = require('http');
// const cors = require('cors');
// const morgan = require('morgan');
// const { connectDB } = require('./config/db');
// const authRoutes = require('./routes/auth.routes');
// const protectedRoutes = require('./routes/protected.routes');
// const { initIO } = require('./sockets/io');
// const { registerSocketHandlers } = require('./sockets/handlers');
// const livekitRoutes = require('./routes/livekit.routes');
// const sessionRoutes = require('./routes/sessions.routes');
// const chatRoutes = require('./routes/chat.routes');
// const uploadRoutes = require('./routes/upload.routes')
// const { errorHandler } = require('./middleware/errorHandler');

// // Connect DB
// connectDB();
// const app = express();

// const server = http.createServer(app);

// // Middleware
// app.use(
//   cors({
//     origin: process.env.CLIENT_ORIGIN || '*',
//     credentials: true,
//   })
// );

// app.use(cors());
// app.use(express.json());
// app.use(morgan('dev'));


// app.use(
//   '/uploads',
//   express.static(path.join(__dirname, '..', 'uploads'))
// );

// // API Routes
// app.use('/api/livekit', livekitRoutes);
// app.use('/api/sessions', sessionRoutes);
// app.use('/api/chat', chatRoutes);
// app.use('/api/upload', uploadRoutes);
// app.use('/api/auth', authRoutes);
// app.use('/api', protectedRoutes);

// app.get('/health', (req, res) => {
//   res.json({ status: 'OK', message: 'API is running' });
// });

// app.use(errorHandler);

// // Socket.io
// const io = initIO(server);
// registerSocketHandlers(io);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


// src/server.js
require('dotenv').config();
const path = require('path');
const express = require('express');
const http = require('http');
const cors = require('cors');

const { connectDB } = require('./config/db');
const { initIO } = require('./sockets/io');
const registerSocketHandlers = require('./sockets/handlers');

// routes
const livekitRoutes = require('./routes/livekit.routes');
const sessionRoutes = require('./routes/sessions.routes');
const chatRoutes = require('./routes/chat.routes');
const uploadRoutes = require('./routes/upload.routes');

const app = express();

// 👉 HTTP server yahi banta hai
const server = http.createServer(app);

// Middlewares
app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || '*',
    credentials: true,
  })
);
app.use(express.json());

// static uploads
app.use(
  '/uploads',
  express.static(path.join(__dirname, '..', 'uploads'))
);

// API routes
app.use('/api/livekit', livekitRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/upload', uploadRoutes);

// healthcheck
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'LiveKit backend up' });
});

const PORT = process.env.PORT || 5000;

(async () => {
  await connectDB();

  // 👉 Ab socket.io init
  const io = initIO(server);
  registerSocketHandlers(io);

  // ❌ Koi app.listen nahi
  // ✅ sirf server.listen
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})();
