const path = require('path');

const express = require('express');

const productController = require('../controllers/product')

const router = express.Router();

router.get('/contact', productController.getContact)

module.exports = router;