const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern-stack-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define your MongoDB schema and models here

// Example API route
app.get('/api/products', (req, res) => {
    // Implement logic to fetch products from MongoDB
    res.json({ products: [] });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
