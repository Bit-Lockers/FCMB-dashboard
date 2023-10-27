import "./Registration.css";
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";

const fullCenterALign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Registration = () => {
  const [index, setIndex] = useState();
  return (
    <Stack direction="row" className="container">
      <Box className="left-side"></Box>
      <Box className="right-side" sx={{ ...fullCenterALign }}>
        <Stack
          justifyContent="space-between"
          sx={{
            width: "60%",
            height: "90%",
            border: "1px solid black",
          }}
          className="page-1"
        >
          <Box className="welcome">
            <p className="text"> Welcome</p>
            <h5 className="text-2">Sign Up to create your account</h5>
          </Box>
          <Box className="personal-information">
            <p className="text"> Personal Information</p>
            <hr />
          </Box>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="first-name">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Mr/Mrs/Miss"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="John "
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Middle Name</label>
              <input
                type="text"
                id="middle-name"
                name="middle-name"
                placeholder="Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Mark"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Gender</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Registration;
