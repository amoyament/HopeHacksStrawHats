const express = require("express");
const router = express.Router();
const lossController = require("../controllers/lossController");

router.route("/").get(lossController.getLossPage).post(lossController.runLossData);
