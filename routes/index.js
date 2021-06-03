const router = require('express').Router()

const productRoutes = require('./productRoutes')
const productRoutesApi = require('./productRoutesApi')
const userRoutes = require('./userRoutes')
router.use(productRoutes)
router.use(productRoutesApi)
router.use(userRoutes)

module.exports = router