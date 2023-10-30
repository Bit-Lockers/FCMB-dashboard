require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/connectDb");
const PORT = process.env.PORT;
const errorMiddleware = require("./middleware/error");
const app = express();

//routes
const authRoute = require("./routes/authRoute");
const loanRoute = require("./routes/loanRoute");

//Handle Uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.stack}`);
  console.log("Shutting down due to Uncaught Exceptions");
  process.exit(1);
});

//middlewares
app.use(cors());
app.use(express.json());
app.use(errorMiddleware);

//app routes goes here guys
app.use("/api/v1", authRoute);
app.use("/peerloan", loanRoute);

//start server
const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server Listening on port:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    console.log("Shutting down the server due to unhandled promise rejection");
    process.exit(1);
  }
};
start();
