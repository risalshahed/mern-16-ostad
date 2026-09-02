import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { connectDB } from './config/db.js';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json())
app.use(cookieParser())

// Route Middleware
app.use('/api/auth', authRoutes)

// Error Handler
app.use((err, _req, res, _next) => {
  res.status(500).json({ message: err.message })
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on ${port}`)
})