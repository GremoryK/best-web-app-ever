const Router = require('express')
const router = new Router()
const UserControllers = require('../controllers/userController')

router.post('/registration', UserControllers.registration)
router.post('/login', UserControllers.login)
router.get('/auth', UserControllers.check)

module.exports = router
