const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

const loanRequest = catchAsyncErrors(async (req, res, next) => {
  res.send("hello dear");
});

module.exports = { loanRequest };
