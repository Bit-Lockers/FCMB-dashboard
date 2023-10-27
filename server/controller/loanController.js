const loanRequestInfo = require("../logger/loanRequestInfo");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

const loanRequest = catchAsyncErrors(async (req, res) => {
  const context = await loanRequestInfo(req, "User requesing a loan", "loan request");
  res.send("hello dear");
});

module.exports = { loanRequest };
