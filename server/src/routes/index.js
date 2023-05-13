const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const articleRouter = require('./articleRouter')
const homeRouter = require('./homeRouter')

router.use('/user', userRouter)
router.use('/article', articleRouter)
router.use('/home', homeRouter)

module.exports = router

