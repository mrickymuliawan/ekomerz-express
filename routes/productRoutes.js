const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')

router.get('/products', (req, res) => {
  productModel.get((result) => {
    return res.render('products/all', { products: result })
  })
})

router.get('/products/create', (req, res) => {
  return res.render('products/create_product')
})

router.post('/products/create', (req, res) => {
  productModel.create(req.body, (result) => {
    return res.redirect('/products')
  })
})

module.exports = router
