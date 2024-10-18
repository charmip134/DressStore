const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = 'mongodb+srv://charmip134:B2n7c8YrJmBvgzLU@mycluster.95vde.mongodb.net/';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('Database connection error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.json({ message: "Welcome to DressStore application." });
});

app.use('/api/products', productRoutes); // <-- Link the product routes here

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

 
