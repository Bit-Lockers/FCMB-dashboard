const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

const registerUser = catchAsyncErrors(async (req, res, next) => {
  res.send("hello dear");
});

module.exports = { registerUser };
