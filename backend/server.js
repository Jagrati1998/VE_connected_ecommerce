const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes')
const orderRoutes=require('./routes/orderRoutes')


require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Routes
app.use('/users', userRoutes);
app.use('/products',productRoutes );
app.use('/orders', orderRoutes);


// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
