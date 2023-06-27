const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

//load page for get request and login function for post request

router.route('/')
.get(userController.getLoginPage)
.post(userController.login)

//load page for get request and sign up function for post request

router.route('/signup')
.get(userController.getSignUpPage)
.post(userController.signUp)
  
module.exports = router