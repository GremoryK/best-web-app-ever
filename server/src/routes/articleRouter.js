const Router = require('express')
const router = new Router()
const articleController = require('../controllers/articleController')

router.post('/create', articleController.createOne)
router.get('/get', articleController.getAll)
router.delete('/delete',articleController.delete)

module.exports = router
