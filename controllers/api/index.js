const router = require('express').Router();
const commentRoutes = require('./commentRoutes')
const sessionRoutes = require("./sessionRoutes")
const userRoutes = require("./usersroutes")
const blogRoutes = require("./blogRoutes")


router.use('/comments', commentRoutes)
router.use('/sessions', sessionRoutes)
router.use('/users', userRoutes)
router.use('/blogs', blogRoutes)

module.exports = router