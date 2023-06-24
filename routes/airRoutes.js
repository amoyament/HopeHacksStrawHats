const express = require("express");
const router = express.Router();
const airController = require("../controllers/airController");

router.route("/")
.get(airController.getPage)
.post(airController.apiCall)

module.exports = router