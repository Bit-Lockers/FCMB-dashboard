const express = require("express");
const router = express.Router();
const { loanRequest } = require("../controller/loanController");

router.get("/request", loanRequest);

module.exports = router;