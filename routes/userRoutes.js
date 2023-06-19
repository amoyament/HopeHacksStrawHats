const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/')
.get(userController.getLoginPage)
.post(userController.login)

router.route('/signup')
.get(userController.getSignUpPage)
.post(userController.signUp)

module.exports = router