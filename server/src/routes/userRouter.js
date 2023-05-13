const Router = require('express')
const router = new Router()

router.post('/registration', (req, res) => {
    res.json({message: 'User: Registration'})
})
router.post('/login', (req, res) => {
    res.json({message: 'User: Login'})
})

router.get('/auth', (req, res) => {
    res.json({message: 'User: Auf'})
})

module.exports = router
