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
  productModel.get((result) => {
    res.json(result)
  })
})


router.get('/archived-products', (req, res) => {
  productModel.getArchived((result) => {
    res.json(result)
  })
})

router.get('/products/:id', (req, res) => {
  productModel.getSingle(req.params.id, (result) => {
    return res.json(result[0])
  })
})

router.post('/products', (req, res) => {
  productModel.create(req.body, (result) => {
    return res.json({
      message: 'Created success'
    })
  })
})

router.put('/products/:id', (req, res) => {
  productModel.update(req.params.id, req.body, (result) => {
    return res.json({
      message: 'success updated',
    })
  })

})

router.delete('/products/:id', (req, res) => {
  productModel.deleteData(req.params.id, (result) => {
    return res.json({
      message: 'success deleted',
    })
  })
})

router.put('/products/:id/restore', (req, res) => {
  productModel.restore(req.params.id, (result) => {
    return res.json({
      message: `products with ID ${req.params.id} restored`
    })
  })
})
module.exports = router

// ASYNCRONOUS
// SYNCRONOUS