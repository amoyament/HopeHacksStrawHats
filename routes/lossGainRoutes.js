const express = require("express");
const router = express.Router();
const lossController = require("../controllers/lossController");

//load page for get request and api call for post request
router.route("/").get(lossController.getLossPage).post(lossController.getLossData);

module.exports = router;
