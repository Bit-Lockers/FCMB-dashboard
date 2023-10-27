const loanRequestInfo = require("../logger/loanRequestInfo");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//model
const LoanRequest = require("../models/loanModel");

const loanRequestController = catchAsyncErrors(async (req, res) => {
  //later decode toke to get userID
  const { borrowerId } = req.body;
  const borrowerContext = loanRequestInfo(
    req,
    "User requesing a loan",
    "loan request"
  );
  const { loanType, desiredAmount, purpose, repaymentTime, interestRate } =
    req.body;

  // Validate the repaymentTime format (YYYY-MM-DD)
  const repaymentTimeRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!repaymentTime.match(repaymentTimeRegex)) {
    return res
      .status(400)
      .json({ error: "Invalid repaymentTime format. Use YYYY-MM-DD." });
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
    await newLoan.save();
    if (newLoan.isNew) {
      res
        .status(400)
        .json({ message: "Loan Request has not been saved to the database." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later." });
  }
});

module.exports = { loanRequestController };
