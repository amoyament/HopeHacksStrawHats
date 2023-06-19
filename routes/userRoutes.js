const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/')
.get(userController.getLoginPage)
//.post(userController.login)


module.exports = router