import "./Registration.css";
import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import Button from "../../../components/button";
const fullCenterALign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Registration = () => {
  const [index, setIndex] = useState();
  return (
    <Stack direction="row" className="container">
      {/* left side */}
      <Box className="left-side"></Box>

      {/* Right side  */}
      <Box className="right-side" sx={{ ...fullCenterALign }}>
        <Box
          sx={{
            width: "70%",
            height: "90%",
          }}
          className="page-1"
        >
          <Box className="welcome">
            <p className="text"> Welcome</p>
            <h5 className="text-2">Sign Up to create your account</h5>
          </Box>
          <Box
            className="personal-information"
            sx={{ width: "90%", padding: "20px 0px 0px 0px" }}
          >
            <p className="personal-information"> Personal Information</p>
            <hr className="line" />
          </Box>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="first-name" className="label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Mr/Mrs/Miss"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="John "
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="label">
                Middle Name
              </label>
              <input
                type="text"
                id="middle-name"
                name="middle-name"
                placeholder="Doe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="label">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Mark"
              />
            </div>
            <div className="form-group">
              <label htmlFor="category" className="label">
                Gender
              </label>
              <select id="category" name="category" className="select">
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="date" className="label">
                Date
              </label>
              <input type="date" id="date" name="date" />
            </div>
          </div>
          <Box className="personal-information" sx={{ width: "90%" }}>
            <p className="personal-information"> Contact Information</p>
            <hr className="line" />
          </Box>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="first-name" className="label">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Mr/Mrs/Miss"
              />
            </div>
            <div className="form-group">
              <label htmlFor="first-name" className="label">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                placeholder="John "
              />
            </div>
            <div className="form-group-single form-group">
              <label htmlFor="last-name" className="label">
                Middle Name
              </label>
              <input
                type="text"
                id="middle-name"
                name="middle-name"
                placeholder="Doe"
              />
            </div>
          </div>
          <div style={{ width: "90%" }} className="continue">
            <Button text="continue" />
          </div>
        </Box>
      </Box>
    </Stack>
  );
};

export default Registration;
