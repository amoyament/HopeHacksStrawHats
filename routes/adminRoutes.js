const express = require("express");
const router = express.Router();
const {isAdmin} = require("../middleware/isAdmin")
const adminController = require("../controllers/adminController");

router.route("/").get(adminController.getAdminPage).post(adminController.login);

router.get("/console", isAdmin, adminController.console);
router.put("/update", adminController.update);
router.delete("/delete", adminController.delete);
router.post("/logout", adminController.logout);
module.exports = router;
