require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./db/connectDb");
const PORT = process.env.PORT;
const errorMiddleware = require("./middleware/error");
const app = express();
const http = require("http");
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    orgin: ["http://localhost:5173"],
  },
});

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

//simple logic for open channel messaging
let users = [];

io.on("connection", (socket) => {
  console.log(`User with ID ${socket.id} just connected`);

  //Listens and logs the message to the console
  socket.on("message", (data) => {
    console.log(data);
  });

  //sends message to all users on the server
  socket.on("message", (data) => {
    io.emit("messageResponse", data);
  });

  socket.on("typing", (data) => socket.broadcast.emit("typingResponse", data));

  //check for when a new user joins the chat
  socket.on("newUser", (data) => {
    users.push(data);
    console.log(users);

    io.emit("newUserResponse", users);
  });

  //to disconnect from the chat room
  socket.on("disconnect", () => {
    console.log(`User with ID ${socket.id} disconnected`);

    users = users.filter((user) => user.socketID !== socket.id);

    io.emit("newUserResponse", users);
    socket.disconnect();
  });
});
//End of chat system logic

//start server
const start = async () => {
  try {
    await db(process.env.MONGO_URI);
    server.listen(PORT, () => {
      console.log(`Server Listening on port:${PORT}`);
    });
  } catch (error) {
    console.log(error.message);
    console.log("Shutting down the server due to unhandled promise rejection");
    process.exit(1);
  }
};
start();
