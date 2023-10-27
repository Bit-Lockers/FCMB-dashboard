const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/authModel");
const sendToken = require("../utils/jwtToken");

const registerUser = catchAsyncErrors(async (req, res, next) => {
  //set all parameters required for registration to request.body
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
    BVNPhoneNumber,
    preferredPhoneNumber,
    dateOfBirth,
    gender,
    BVN,
    motherMaidenName,
    maritalStatus,
    occupation,
    employmentStatus,
    salutation,
    // image,
    address,
    city,
    state,
    country,
  } = req.body;

  //To make sure passwords match on registration
  if (password !== confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 403));
  }
  const checkUserEmail = await User.findOne({ email });
  if (checkUserEmail) {
    return next(new ErrorHandler("The email provided needs to be unique", 403));
  }
  // create the user itself
  const user = await User.create({
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
    BVNPhoneNumber,
    preferredPhoneNumber,
    dateOfBirth,
    gender,
    BVN,
    motherMaidenName,
    maritalStatus,
    occupation,
    employmentStatus,
    salutation,
    // image,
    address,
    city,
    state,
    country,
  });

  sendToken(user, 201, res);
});

module.exports = { registerUser };
