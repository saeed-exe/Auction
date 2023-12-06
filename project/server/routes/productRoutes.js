const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', (req, res) => {
  res.send('Product list endpoint');
});

router.post('/', (req, res) => {
  res.send('Product creation endpoint');
});

module.exports = router;
