const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const User = require("../models/authModel");
const sendToken = require("../utils/jwtToken");
const axios = require("axios");

const registerUser = catchAsyncErrors(async (req, res, next) => {
  //set all parameters required for registration to request.body
  const {
    firstName,
    middleName,
    lastName,
    email,
    password,
    confirmPassword,
    bvnMobileNumber,
    preferredPhoneNumber,
    dateOfBirth,
    gender,
    bvn,
    motherMaidenName,
    maritalStatus,
    occupation,
    employmentStatus,
    salutation,
    address,
  } = req.body;

  //To make sure passwords match on registration
  if (password !== confirmPassword) {
    return next(new ErrorHandler("Passwords do not match", 403));
  }
  const checkUserEmail = await User.findOne({ email });
  if (checkUserEmail) {
    return next(new ErrorHandler("The email provided needs to be unique", 403));
  }
  // Convert the dateOfBirth string to a Date object for UTC time format
  const dobDate = new Date(dateOfBirth);
  // create the user itself
  const user = await User.create({
    firstName,
    middleName,
    lastName,
    motherMaidenName,
    dateOfBirth: dobDate,
    gender,
    bvnMobileNumber,
    preferredPhoneNumber,
    email,
    address,
    bvn,
    maritalStatus,
    occupation,
    employmentStatus,
    salutation,
    image,
    password,
    confirmPassword,
  });

  sendToken(user, 201, res);
});

// Authentication logic for user login
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
  if (!isPasswordMatched) {
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

const getOneUser = catchAsyncErrors(async (req, res, next) => {
  try {
    //set the user id as a request parameter on the endpoint
    const { user_id } = req.params;
    // To find the user in the database
    const user = await User.findOne({ _id: user_id });
    // Throw error if no user with ID is found
    if (!user) {
      return next(new ErrorHandler("No user with ID found", 404));
    }
    // To return user if found in the database
    res.status(200).json({
      message: "User with ID successfully found",
      user,
    });
  } catch (error) {
    return next(new ErrorHandler("User not successfully found", 500));
  }
});

const getAllUsers = catchAsyncErrors(async (req, res, next) => {
  try {
    // First we have to count all users in the datebase
    const userCount = await User.countDocuments();
    //Find all the users in the database
    const allUsers = await User.find();
    // Error handling if no user is found in the database
    if (userCount === 0) {
      return next(new ErrorHandler("No user found in the database", 404));
    }
    res.status(200).json({
      message: "All Users successfully found",
      allUsers,
      userCount,
    });
  } catch (error) {
    return next(new ErrorHandler("All users not found in the database", 500));
  }
});

//API  call for creating an account using axios

const apiUrl =
  "https://devapi.fcmb.com/OpenAccount-clone/api/Accounts/v1/CreateRetailAccountWithBvn";

// Request body paramters
const { firstName, midlleName, lastName, motherMaidenName } = req.body;

// Axios configuration
const config = {
  method: "post", // Use 'post' for POST requests
  url: apiUrl,
  data: body, // Set the request body
  headers: {
    Client_id: "250",
    "x-token":
      "aa9d142f294e393d45fffa83e8ff2b735060b393aece60c6a4b29ac1f0ad8bfc8750f49bbc1dd372f719ed283170d207a112260b1cad4638cbc36900549b0882",
    UTCTimestamp: "2023-08-12T17:25:53.435",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
    "Ocp-Apim-Subscription-Key": "5089766abfc04e6abec49840bf83d7bf",
  },
};

async function makeRequest() {
  try {
    const response = await axios(config);
    console.log("Response Data:", response.data);
  } catch (error) {
    console.error("Error:", error.response.data);
  }
}

// Call the async function to make the request
makeRequest();

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getOneUser,
};
