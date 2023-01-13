const router = require('express').Router()

const routes = require('../controller/controller')

router.post('/register', routes.postRegister)
router.post('/login', routes.postLogin)
router.post('/logout',routes.postLogout)
router.get('/user', routes.getUser)

module.exports = router