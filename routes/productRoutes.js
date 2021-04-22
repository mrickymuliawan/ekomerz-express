const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')
// RESTAPI ROUTES
// get /products
// get /products/1
// post /products
// put /products/1
// delete /products/1

router.get('/products', (req, res) => {
  productModel.get((products) => {
    return res.json(products)
  })
})

router.get('/products/:id', (req, res) => {
  productModel.getSingle(req.params.id, (products) => {
    return res.json(products[0])
  })
})

router.post('/products', (req, res) => {
  productModel.create(req.body, (data) => {
    return res.json({
      message: 'Created success'
    })
  })
})

router.put('/products/:id', (req, res) => {
  // update
  return res.json({
    message: 'success updated',
    product: {

    }
  })
})

router.delete('/products/:id', (req, res) => {
  return res.json({
    message: 'success deleted',
  })
})
module.exports = router

// ASYNCRONOUS
// SYNCRONOUS