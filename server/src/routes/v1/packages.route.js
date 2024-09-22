const express = require('express');
const AddProduct = require('../../controllers/packages.controller');

const router = express.Router();

router.post('/createPackage', AddProduct.AddProduct);
router.get('/getAllPackages', AddProduct.GetAllProducts);

module.exports = router;
