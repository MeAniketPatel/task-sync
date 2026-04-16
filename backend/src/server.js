'use strict';

const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const { initSockets } = require('./sockets');
const { PORT } = require('./config/env');

const server = http.createServer(app);

// ─── Initialize Socket.io ─────────────────────────────────────────────────────
initSockets(server);

// ─── Connect to Database and start server ─────────────────────────────────────
connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`TaskSync Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  });
}).catch(err => {
  console.error('Database connection failed:', err);
  process.exit(1);
});
