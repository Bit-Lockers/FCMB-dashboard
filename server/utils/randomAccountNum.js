const Account = require("../models/AccountModel")

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}


function concatenateRandomIntegers() {
  let concatenatedNumber = "";
  for (let i = 0; i < 10; i++) {
    const randomNumber = getRandomInt(0, 9);
    concatenatedNumber += randomNumber;
  }
  return parseInt(concatenatedNumber, 10);
}

async function generateUniqueAccountNumber() {
  let accountNumber;

  do {
    accountNumber = concatenateRandomIntegers(10); // Generate a 10-digit number
    const existingAccount = await Account.findOne({ accountNumber });
    
    if (!existingAccount) {
      break; // Exit the loop if the account number doesn't exist in the database
    }
  } while (true);
  return accountNumber;
}

module.exports = { generateUniqueAccountNumber };
