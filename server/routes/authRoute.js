const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controller/authController");

// routes for authentication => /api/v1/
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

module.exports = router;
