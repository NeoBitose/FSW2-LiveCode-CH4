const express = require("express");
const router = express.Router();
const dashboardController = require("../controller/dashboardController");

// Cars API
router.get("/dashboard", dashboardController.userPage);
router.get("/dashboard/create", dashboardController.createPage);
router.post("/dashboard/create", dashboardController.insertUser);

module.exports = router;
