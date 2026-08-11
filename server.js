/* 
  - Main file to run the Server / Backend
  - No Business Logic Here
*/

import dotenv from 'dotenv'
import app from './app.js';

dotenv.config()

const port = process.env.port || 5000;

// Listen to the Server
app.listen(port, () => {
  console.log(`Listening to ${port}`)
})