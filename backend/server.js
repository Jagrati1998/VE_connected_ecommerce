const express = require('express');
const connectDB = require('./config/dbConfig');
const userRoutes = require('./routes/userRoutes');
const productRoutes=require('./routes/productRoutes')
const orderRoutes=require('./routes/orderRoutes')
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./config/swagger.yaml'); // Load YAML f
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
const PORT = process.env.PORT || 4000;
swaggerDocument.servers = [
  {
    url: `http://localhost:${PORT}`, // Inject the environment port into the YAML
  },
];
// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});
