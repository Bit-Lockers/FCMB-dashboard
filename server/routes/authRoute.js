const express = require("express");
const router = express.Router();
const { registerUser } = require("../controller/authController");

router.get("/test", registerUser);

module.exports = router;
