const express = require('express')
const router = express.Router()

router.get('/products', (req, res) => {
  const data = [
    {
      name: 'baju',
      price: 1000
    },
    {
      name: 'baju',
      price: 1000
    }
  ]
  return res.json(data)
})

router.get('/products/:id', (req, res) => {
  return res.json({
    name: 'baju',
    price: 1000
  })
})

router.post('/products', (req, res) => {
  // create the data
  return res.json({
    message: 'success created',
    product: {

    }
  })
})
module.exports = router