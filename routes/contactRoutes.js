const express = require('express')
const router = express.Router()
const contactController = require('../controllers/contactController')

//load page for get request and sendMessage function for post request
router.route('/')
.get(contactController.getContactPage)
.post(contactController.sendMessage)

module.exports = router