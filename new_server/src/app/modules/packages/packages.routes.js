const express = require('express');
const { PackagesContoller } = require('./packages.controller');

const router = express.Router();

router.post('/createPackage', PackagesContoller.AddProduct);
router.get('/getAllPackages', PackagesContoller.GetAllProducts);

module.exports = router;
