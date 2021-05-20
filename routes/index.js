const router = require('express').Router()

const productRoutes = require('./productRoutes')
const userRoutes = require('./userRoutes')
router.use(productRoutes)
router.use(userRoutes)

module.exports = router