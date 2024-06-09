const express = require('express');
const { createProduct, getAllProducts } = require('../Controllers/product.controller');
const productroute = express.Router();


productroute.post('/', createProduct);


productroute.get('/', getAllProducts);

module.exports = { productroute };
