const express = require('express');
const router1 = express.Router();
const{
    getAllProducts,
    addProduct,
} = require('../controllers/product');

//GET the awailable data
router1.get("/products", getAllProducts);

//Adding extra products
router1.post("/products", addProduct);

module.exports = router1;