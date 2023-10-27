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
      .json({ message: "Internal server error. Please try again later." });
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

  const loanRequest = await LoanRequest.findOne({ _id: loanRequestId, borrowerId });

  if (!loanRequest) {
    return res.status(404).json({ message: "Loan Request not found." });
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
    res.status(200).json({ message: "Loan accepted." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { loanRequestController, loanAcceptController };
