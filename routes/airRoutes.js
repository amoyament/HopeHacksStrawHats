const express = require("express");
const router = express.Router();
//import airController
const airController = require("../controllers/airController");


//load page for get request and api call for post request
router.route("/")
.get(airController.getPage)
.post(airController.apiCall)

module.exports = router