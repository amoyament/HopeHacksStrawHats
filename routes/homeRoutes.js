const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.route("/home").get(homeController.getHomePage);

module.exports = router;
