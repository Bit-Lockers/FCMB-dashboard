const express = require("express");
const router = express.Router();
const { loanRequestController } = require("../controller/loanController");
const { loanRequestLimiter } = require("../middleware/limiter/limiter");

//middleware
const requestIp = require("request-ip");
const useragent = require("express-useragent");

router.post(
  "/request",
  loanRequestLimiter,
  requestIp.nw(),
  useragent.express(),
  loanRequestController
);

module.exports = router;
