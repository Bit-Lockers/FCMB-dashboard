const loanRequestInfo = require("../logger/loanRequestInfo");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//CONSTANT ERROR MESSAGE
const DEFAULT_ERROR_MESSAGE = "Internal server error. Please try again later.";
const LOAN_NOT_FOUND_MESSAGE = "Loan request not found.";
const INVALID_DATE_MESSAGE = "Invalid repaymentTime format. Use YYYY-MM-DD.";

//model
const LoanRequest = require("../models/loanModel");

const loanRequestController = catchAsyncErrors(async (req, res, next) => {
  //later decode toke to get userID
  const { borrowerId } = req.body;
  const borrowerContext = await loanRequestInfo(
    req,
    "User requesing a loan",
    "loan request"
  );
  const { loanType, desiredAmount, purpose, repaymentTime, interestRate } =
    req.body;

  // Validate the repaymentTime format (YYYY-MM-DD)
  const repaymentTimeRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!repaymentTime.match(repaymentTimeRegex)) {
    return res.status(400).json({ error: INVALID_DATE_MESSAGE });
  }

  const newLoan = new LoanRequest({
    borrowerId,
    borrowerContext,
    loanType,
    desiredAmount,
    purpose,
    repaymentTime,
    interestRate,
  });
  try {
    const savedLoan = await newLoan.save();
    if (savedLoan) {
      res.status(200).json({ message: "Loan Request created successfully." });
    } else {
      res.status(400).json({ message: "Loan Request creation failed." });
    }
  } catch (error) {
    res.status(500).json({ message: DEFAULT_ERROR_MESSAGE });
  }
});

const loanAcceptController = catchAsyncErrors(async (req, res, next) => {
  const { loanRequestId, borrowerId, lenderId, decision } = req.body;
  // Decision can be "accepted" or "rejected"

  if (borrowerId == lenderId) {
    return res.status(400).json({ message: "You can't borrow from yourself." });
  }

  if (decision.toLowerCase() !== "accepted") {
    return res.status(400).json({ message: "Loan not accepted." });
  }

  const loanRequest = await LoanRequest.findById(loanRequestId);

  if (!loanRequest) {
    return res.status(400).json({ message: LOAN_NOT_FOUND_MESSAGE });
  }

  if (loanRequest.status != "Pending") {
    return res.status(400).json({ message: "Loan is unavaliable." });
  }

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  try {
    loanRequest.lenderId = lenderId;
    loanRequest.lenderAcceptDate = formattedDate;
    loanRequest.status = "Accepted";
    await loanRequest.save();

    //connect FCMB api to enable transfer from one account to the other
    res.status(200).json({ message: "Loan accepted." });
  } catch (error) {
    res.status(500).json({ message: DEFAULT_ERROR_MESSAGE });
  }
});

const viewOneLoanController = catchAsyncErrors(async (req, res, next) => {
  const { loanRequestId } = req.body;
  try {
    const loanRequest = await LoanRequest.findById(loanRequestId).populate(
      "borrowerId",
      "firstName lastName email preferredPhoneNumber dateOfBirth gender employmentStatus occupation salutation"
    );
    if (!loanRequest) {
      return res.status(400).json({ message: LOAN_NOT_FOUND_MESSAGE });
    }

    const {
      borrowerId,
      loanType,
      desiredAmount,
      purpose,
      repaymentTime,
      interestRate,
      status,
    } = loanRequest;

    res.status(200).json({
      firstName,
      lastName,
      email,
      BVNPhoneNUmber,
      borrowerId,
      loanType,
      desiredAmount,
      purpose,
      repaymentTime,
      interestRate,
      status,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

const viewManyLoanController = catchAsyncErrors(async (req, res, next) => {
  let { loanNumber } = req.body;

  let manyLoanRequests = [];
  try {
    const loanRequests = await LoanRequest.find();
    loanRequests.sort((a, b) => b.timeStamp - a.timeStamp);

    if (!isNaN(loanNumber)) {
      const numToCopy = Math.min(loanNumber, loanRequests.length);

      for (let i = 0; i < numToCopy; i++) {
        manyLoanRequests[i] = loanRequests[i];
      }
      res.status(200).json({ message: manyLoanRequests });
    } else {
      res.status(400).json({ message: "Invalid loanNumber" });
    }
  } catch (error) {
    res.status(500).json({ message: DEFAULT_ERROR_MESSAGE });
  }
});

const viewFilterLoanController = catchAsyncErrors(async (req, res, next) => {
  const { maxPrice, loanNumber } = req.body;

  if (isNaN(maxPrice)) {
    return res.status(400).json({ message: "Invalid maxPrice" });
  }
  if (isNaN(loanNumber)) {
    return res.status(400).json({ message: "Invalid loanNumber" });
  }

  let filteredLoanRequests = [];
  try {
    const loanRequests = await LoanRequest.find();
    loanRequests.sort((a, b) => b.timeStamp - a.timeStamp);

    const numToCopy = Math.min(loanNumber, loanRequests.length);

    for (let i = 0; i < numToCopy; i++) {
      if (maxPrice >= loanRequests[i].desiredAmount) {
        filteredLoanRequests.push(loanRequests[i]);
      }
      if (filteredLoanRequests.length >= loanNumber) {
        break;
      }
    }
    res.status(200).json({ message: filteredLoanRequests });
  } catch (error) {
    res.status(500).json({ message: DEFAULT_ERROR_MESSAGE });
  }
});

module.exports = {
  loanRequestController,
  loanAcceptController,
  viewOneLoanController,
  viewManyLoanController,
  viewFilterLoanController,
};
