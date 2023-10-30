// src/components/Chatbot.js

import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Paper,
  Typography,
  IconButton,
} from "@mui/material";
import axios from "axios";
import ForumIcon from "@mui/icons-material/Forum";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
const DisputeChatbot = () => {
  const [messages, setMessages] = useState(["How can i help you today"]);
  const [userMessage, setUserMessage] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [view, setView] = useState(false);

  const addUserMessage = () => {
    setUserMessage((prev) => [...prev, messageText]);
    axios
      .get(
        "https://peerpocket-disputes.onrender.com/chat?message=" + messageText
      )
      .then((response) => {
        const botResponse = response.data.response;
        if (Array.isArray(botResponse)) {
          setMessages((prev) => [...prev, ...botResponse]);
          setMessageText("");
        } else {
          setMessages((prev) => [...prev, botResponse]);
          setMessageText("");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleInputChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addUserMessage();
    }
  };

  return (
    <>
      {!view ? (
        <IconButton
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "20px",
            background: "#0c3397",
          }}
          onClick={() => setView(true)}
        >
          <ForumIcon sx={{ color: "white" }} />
        </IconButton>
      ) : (
        <>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={() => setView(false)}>
              <DisabledByDefaultIcon sx={{ color: "red" }} />
            </IconButton>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            height="400px"
            sx={{ width: "450px" }}
          >
            <Paper elevation={3} style={{ flex: 1, overflowY: "auto" }}>
              <Box p={2}>
                {messages.map((message, index) => (
                  <Typography key={index} variant="body1">
                    <Box
                      sx={{
                        textAlign: "right",
                        backgroundColor: "#e7f1fc",
                        padding: "5px",
                        margin: "5px 0",
                      }}
                    >
                      {userMessage.length > 0 && userMessage[index - 1]}
                    </Box>
                    <Box sx={{ backgroundColor: "#e7f1fc", padding: "10px" }}>
                      {message}
                    </Box>
                  </Typography>
                ))}
              </Box>
            </Paper>
            <Box p={2} display="flex">
              <TextField
                variant="outlined"
                fullWidth
                placeholder="Type a message..."
                value={messageText}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={addUserMessage}
              >
                Send
              </Button>
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default DisputeChatbot;
