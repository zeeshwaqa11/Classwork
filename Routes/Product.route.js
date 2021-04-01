const express = require('express')
const router = express.Router();

const Product_controller=require('../Controllers/product.controller');
router.get('/test',Product_controller.test);
router.post('/create', Product_controller.product_create);
router.get('/:id',Product_controller.product_details);

module.exports= router;