/* 
  - express setup
  - middleware setup
  - register route
  - 404 Handler
*/

import express from 'express';
import userRoutes from './routes/user.routes.js';

const app = express()

// Use a Few Middlewares & Functions

app.use(express.json())

// Register the Routes
app.use('/api/users', userRoutes);


// Handle Undefined Routes
app.use((_req, res) => {  // "_" is used for optional parameters
  res.status(404).json({
    success: false,
    message: 'Route Not Found'
  })
})

export default app;