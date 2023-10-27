const mongoose = require("mongoose");
const validator = require("validator");

const authSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: [true, "Please provide a FirstName to create an account"],
    minlength: 3,
    maxlength: [20, "Your FirstName should not exceed 20 characters"],
  },
  MiddleName: {
    type: String,
    required: [true, "Please provide a lastname to create an account"],
    minlength: 3,
    maxlength: [20, "Your FirstName should not exceed 20 characters"],
  },
  LastName: {
    type: String,
    required: [true, "Please provide a lastname to create an account"],
    minlength: 3,
    maxlength: [20, "Your FirstName should not exceed 20 characters"],
  },
  Email: {
    type: String,
    required: [true, "Please provide an email to create an account"],
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  BVNPhoneNumber: {
    type: Number,
    required: [
      true,
      "Please provide the phone number tied to your BVN to open an account",
    ],
    unique: [true, "Please provide a unique phone number to open an account"],
    maxlength: [11, "Your phone number should not exceed 11 characters"],
  },
  PreferredPhoneNumber: {
    type: Number,
    required: [true, "Please provide a preferred number to open an account"],
  },
  DateOfBirth: {
    type: Number,
    required: [true, "Please provide an date of birth to create an account"],
  },
  Gender: {
    type: String,
    required: [true, "Please provide a gender to create an account"],
    enum: ["Male", "Female"],
  },
  BVN: {
    type: Number,
    required: [true, "Please provide a BVN for verification"],
    unique: true,
  },
  motherMaidenName: {
    type: String,
    required: [
      true,
      "Please provide mother's maiden name to create an account",
    ],
    minlength: 3,
    maxlength: [20, "Your motherMaidenName should not exceed 20 characters"],
  },
  maritalStatus: {
    type: String,
    required: [
      true,
      "Please provide mother's maiden name to create an account",
    ],
    enum: ["Married", "Single"],
  },
  occupation: {
    type: String,
    required: [true, "Please provide an occupation to create an account"],
  },
  employmentStatus: {
    type: String,
    required: [true, "Please provide an occupation to create an account"],
  },
  salutation: {
    type: String,
    required: [true, "Please provide a salutation to create an account"],
    enum: ["Mr", "Mrs", "Master", "Mistress"],
  },
  image: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  Address: {
    type: String,
    required: [true, "Please provide an address to create an account"],
  },
  City: {
    type: String,
    required: [true, "Please provide a city name to create an account"],
  },
  State: {
    type: String,
    required: [true, "Please provide a state to create an account"],
  },
  Country: {
    type: String,
    required: [true, "Please provide a country to create an account"],
  },
});

module.exports = mongoose.model("User", authSchema);
