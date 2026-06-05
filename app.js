import express from 'express';
import session from 'express-session';
import flash from 'connect-flash';
import layout from 'express-ejs-layouts';
import mongoose from 'mongoose';
import { cwd } from 'process';
import path from 'path'
import { configDotenv } from 'dotenv';

configDotenv();

// ... rest of your code
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));
app.use(layout);
app.set('layout','layout');
app.set('view engine', 'ejs');
mongoose.connect(process.env.MONGODB_URI, ).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});
// Health check / home route
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const status = err?.statusCode || err?.status || 500;
  const message = err?.message || 'Internal Server Error';
  console.error(err);
  res.status(status).json({ error: message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});

