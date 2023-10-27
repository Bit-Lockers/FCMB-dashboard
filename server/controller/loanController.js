const loanRequestInfo = require("../logger/loanRequestInfo");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

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
    const savedLoan = await newLoan.save();
    if (savedLoan) {
      res.status(200).json({ message: "Loan Request created successfully." });
    } else {
      res.status(500).json({ message: "Loan Request creation failed." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: error.message });
  }
});

module.exports = { loanRequestController };
