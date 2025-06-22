const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')
const middlewareToken = require('../middlewares/authToken')

router.post('/login', authController.login)
router.get('/heartbeat', middlewareToken.authToken, authController.heartBeat)

module.exports = router