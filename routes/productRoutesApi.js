const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')


router.get('/api/products', (req, res) => {
  productModel.get((result) => {
    res.json(result)
  })
})


router.get('/api/archived-products', (req, res) => {
  productModel.getArchived((result) => {
    res.json(result)
  })
})

router.get('/api/products/:id', (req, res) => {
  productModel.getSingle(req.params.id, (result) => {
    return res.json(result[0])
  })
})

router.post('/api/products', (req, res) => {
  productModel.create(req.body, (result) => {
    return res.json({
      message: 'Created success'
    })
  })
})

router.put('/api/products/:id', (req, res) => {
  productModel.update(req.params.id, req.body, (result) => {
    return res.json({
      message: 'success updated',
    })
  })

})

router.delete('/api/products/:id', (req, res) => {
  productModel.deleteData(req.params.id, (result) => {
    return res.json({
      message: 'success deleted',
    })
  })
})

router.put('/api/products/:id/restore', (req, res) => {
  productModel.restore(req.params.id, (result) => {
    return res.json({
      message: `products with ID ${req.params.id} restored`
    })
  })
})
module.exports = router

// ASYNCRONOUS
// SYNCRONOUS