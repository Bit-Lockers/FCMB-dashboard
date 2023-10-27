const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const loanRequestSchema = new Schema(
  {
    borrower: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    borrowerName: {
      type: String,
      required: true,
    },
    borrowerDetails: {
      type: String,
    },
    loanType: {
      type: String,
      required: true,
      enum: ["short-term", "long-term"],
    },
    desiredAmount: {
      type: Number,
      required: true,
    },
    purpose: {
      type: String,
      required: true,
    },
    repaymentTime: {
      type: Date,
      required: true,
      match: /^\d{4}-\d{2}-\d{2}$/, //eg YYYY-MM-DD
    },
    lenderId: {
      type: Schema.Types.ObjectId,
      default: null,
    },
    lenderName: {
      type: String,
      default: "empty",
    },
    interestRate: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "Pending",
      enum: ["Active", "Pending", "Approved", "Rejected", "Closed"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LoanRequest", loanRequestSchema);
