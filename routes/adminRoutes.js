const express = require("express");
const router = express.Router();
//import isAdmin middle function
const {isAdmin} = require("../middleware/isAdmin")
//import adminCOntroller
const adminController = require("../controllers/adminController");

//handles post and get request to /admin
router.route("/").get(adminController.getAdminPage).post(adminController.login);

//gets admin console if isAdmin middleware check passes
router.get("/console", isAdmin, adminController.console);

router.put("/update", adminController.update);
router.delete("/delete", adminController.delete);
router.post("/logout", adminController.logout);
module.exports = router;
