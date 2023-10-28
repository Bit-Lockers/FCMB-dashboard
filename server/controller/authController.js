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

const loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // simple check to ensure correct email and password are supplied
  if (!email || !password) {
    return next(
      new ErrorHandler("Please enter correct email and password", 400)
    );
  }

  // to find out if the user email already exists on database for login
  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(
      new ErrorHandler("Invalid email!, Please provide a valid email ", 401)
    );
  }

  // A little check to see if password matches
  const isPasswordMatched = await user.comparePassword(password);
  if (isPasswordMatched) {
    return next(
      new ErrorHandler(
        "Invalid password!, Please provide a valid password",
        401
      )
    );
  }

  //Now to send token along with user since all checks are met
  sendToken(user, 200, res);
});

module.exports = {
  registerUser,
  loginUser,
};
