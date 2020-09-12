// jshint esversion:9

const express = require("express");
const router = express.Router();

const { addProduct, getProduct } = require("../controllers/products")

router.route('/product')
    .get(getProduct)
    .post(addProduct);

module.exports = router;