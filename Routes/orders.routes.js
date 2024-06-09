const express = require('express');
const { placeOrder } = require('../Controllers/order.controller');


const orderoutes = express.Router();


orderoutes.post('/', placeOrder);

module.exports = orderoutes;