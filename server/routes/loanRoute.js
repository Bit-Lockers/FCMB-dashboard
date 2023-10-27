const express = require("express");
const router = express.Router();
const { loanRequest } = require("../controller/loanController");
const { loanRequestLimiter } = require("../middleware/limiter/limiter");

//middleware
const requestIp = require("request-ip");
const useragent = require("express-useragent");

router.get(
  "/request",
  loanRequestLimiter,
  requestIp.nw(),
  useragent.express(),
  loanRequest
);

module.exports = router;
