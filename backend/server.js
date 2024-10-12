// server.js
require('dotenv').config(); // Load environment variables from .env
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const dbConfig = require('./config/db');

const startServer = async () => {
  const app = express();
  
  // Middleware
  app.use(express.json());

  // Connect to MongoDB
  await mongoose.connect(dbConfig.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('MongoDB connected');

  // API Routes
  app.use('/users', userRoutes);
  app.use('/products', productRoutes);
  app.use('/orders', orderRoutes);
// Start server using PORT from the .env file
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
}

startServer();
