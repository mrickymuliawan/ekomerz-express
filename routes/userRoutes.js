const express = require('express')
const router = express.Router()
const userModel = require('../models/userModel')
// RESTAPI ROUTES
// get /users
// get /users/1
// post /users
// put /users/1
// delete /users/1

router.get('/users', (req, res) => {
  userModel.get((result) => {
    res.json(result)
  })
})


router.get('/archived-users', (req, res) => {
  userModel.getArchived((result) => {
    res.json(result)
  })
})

router.get('/users/:id', (req, res) => {
  userModel.getSingle(req.params.id, (result) => {
    return res.json(result[0])
  })
})

router.post('/users', (req, res) => {
  userModel.create(req.body, (result) => {
    if (result == 'error') {
      return res.status(500).json({
        error: 'something wrong'
      })
    }
    return res.json({
      message: 'Created success'
    })
  })
})

router.put('/users/:id', (req, res) => {
  userModel.update(req.params.id, req.body, (result) => {
    return res.json({
      message: 'success updated',
    })
  })

})

router.delete('/users/:id', (req, res) => {
  userModel.deleteData(req.params.id, (result) => {
    return res.json({
      message: 'success deleted',
    })
  })
})

router.put('/users/:id/restore', (req, res) => {
  userModel.restore(req.params.id, (result) => {
    return res.json({
      message: `users with ID ${req.params.id} restored`
    })
  })
})
module.exports = router

// ASYNCRONOUS
// SYNCRONOUS