const router = require('express').Router();
const apiRoutes = require('./api')
const frontRoutes = require("./frontRoutes")
const userRoutes = require("./users")

router.use(frontRoutes)
router.use('/api', apiRoutes)
router.use('/users', userRoutes)

module.exports = router