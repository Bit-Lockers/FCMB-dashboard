const mongoose = require("mongoose");
const validator = require("validator");

const authSchema = new mongoose.Schema({});

module.exports = mongoose.model("User", authSchema);
