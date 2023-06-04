const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const articleRouter = require('./articleRouter')
const homeRouter = require('./homeRouter')
const typeRouter = require('./typeRouter')


router.use('/home', homeRouter)
router.use('/user', userRouter)
router.use('/article', articleRouter)
router.use('/type', typeRouter)

module.exports = router
