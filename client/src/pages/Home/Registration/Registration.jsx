import "./Registration.css";
import React, { useState } from "react";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Button from "../../../components/button";
import logo from "../../../assets/logo.svg";
import CheckIcon from "@mui/icons-material/Check";
const fullCenterALign = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Registration = () => {
  const [index, setIndex] = useState(0);
  return (
    <Stack direction="row" className="container">
      {/* left side */}
      <Box className="left-side">
        <div>
          <img
            style={{
              width: "200px",
              height: "150px",
            }}
            src={logo}
            alt="logo"
          />
          <div className="steps">
            <ul>
              <li style={{ position: "relative" }} onClick={() => setIndex(0)}>
                {index > 0 ? (
                  <CheckIcon
                    className="icon"
                    sx={{
                      color: "white",
                      background: "#2eb796",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  "1"
                )}

                <span
                  className="span"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 55,
                    width: "250px",
                  }}
                >
                  Personal & Contact Information
                </span>
              </li>
              <div
                style={{
                  marginLeft: "25px",
                  width: "50px",
                  height: "30px",
                  borderLeft: "1px dotted black",
                }}
              ></div>
              <li style={{ position: "relative" }} onClick={() => setIndex(1)}>
                {index > 1 ? (
                  <CheckIcon
                    className="icon"
                    sx={{
                      color: "white",
                      background: "#2eb796",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  "2"
                )}
                <span
                  className="span"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 55,
                    width: "250px",
                  }}
                >
                  Additional & Address Information
                </span>
              </li>
              <div
                style={{
                  marginLeft: "25px",
                  width: "50px",
                  height: "30px",
                  borderLeft: "1px dotted black",
                }}
              ></div>
              <li style={{ position: "relative" }} onClick={() => setIndex(2)}>
                {index > 2 ? (
                  <CheckIcon
                    className="icon"
                    sx={{
                      color: "white",
                      background: "#2eb796",
                      width: "50px",
                      height: "50px",
                    }}
                  />
                ) : (
                  "3"
                )}
                <span
                  className="span"
                  style={{
                    position: "absolute",
                    top: 20,
                    left: 55,
                    width: "250px",
                  }}
                >
                  upload Picture{" "}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Box>

      {/* Right side  */}
      <Box className="right-side" sx={{ ...fullCenterALign }}>
        {index === 0 && (
          <Box
            sx={{
              width: "70%",
              height: "90%",
            }}
            className="page-1"
          >
            <Box className="welcome">
              <p className="text"> Welcome!</p>
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
                  BVN Mobiel Number
                </label>
                <input
                  type="text"
                  id="bvn_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Preferred Mobile Number
                </label>
                <input
                  type="text"
                  id="preferred_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobiie Number"
                />
              </div>
              <div className="form-group-single form-group">
                <label htmlFor="last-name" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div style={{ width: "90%" }} className="continue">
              <Button text="continue" onClick={() => setIndex(1)} />
            </div>
            <Typography className="typo">
              Already have an account? <span className="sign-in">Sign In</span>
            </Typography>
          </Box>
        )}
        {index === 1 && (
          <Box
            sx={{
              width: "70%",
              height: "90%",
            }}
            className="page-1"
          >
            <Box className="welcome">
              <p className="text"> Welcome!</p>
              <h5 className="text-2">Sign Up to create your account</h5>
            </Box>
            <Box
              className="personal-information"
              sx={{ width: "90%", padding: "20px 0px 0px 0px" }}
            >
              <p className="personal-information"> Additional Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Mother’s madien name
                </label>
                <input
                  type="text"
                  id="title"
                  name="Mothers_madien_name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Marital Status
                </label>
                <select
                  id="marital_status"
                  name="marital_status"
                  className="select"
                >
                  <option value="option1">Single</option>
                  <option value="option2">Married</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  Occupation{" "}
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  placeholder="Enter Occupation"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Employment Status
                </label>
                <select
                  id="employment_status"
                  name="employment_status"
                  className="select"
                >
                  <option value="option1">Student</option>
                  <option value="option2">Employed</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  BVN{" "}
                </label>
                <input
                  type="text"
                  id="bvn"
                  name="bvn"
                  placeholder="Choose a BVN"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  placeholder="Choose a password"
                />
              </div>
            </div>
            <Box className="personal-information" sx={{ width: "90%" }}>
              <p className="personal-information"> Contact Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  BVN Mobiel Number
                </label>
                <input
                  type="text"
                  id="bvn_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Preferred Mobile Number
                </label>
                <input
                  type="text"
                  id="preferred_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobiie Number"
                />
              </div>
              <div className="form-group-single form-group">
                <label htmlFor="last-name" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div style={{ width: "90%" }} className="continue">
              <Button text="continue" onClick={() => setIndex(2)} />
            </div>
            <Typography className="typo">
              Already have an account? <span className="sign-in">Sign In</span>
            </Typography>
          </Box>
        )}
        {index === 2 && (
          <Box
            sx={{
              width: "70%",
              height: "90%",
            }}
            className="page-1"
          >
            <Box className="welcome">
              <p className="text"> Welcome!</p>
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
                  BVN Mobiel Number
                </label>
                <input
                  type="text"
                  id="bvn_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Preferred Mobile Number
                </label>
                <input
                  type="text"
                  id="preferred_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobiie Number"
                />
              </div>
              <div className="form-group-single form-group">
                <label htmlFor="last-name" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div style={{ width: "90%" }} className="continue">
              <Button text="continue" onClick={() => setIndex(3)} />
            </div>
            <Typography className="typo">
              Already have an account? <span className="sign-in">Sign In</span>
            </Typography>
          </Box>
        )}
        {index === 3 && (
          <Box
            sx={{
              width: "70%",
              height: "90%",
            }}
            className="page-1"
          >
            <Box className="welcome">
              <p className="text"> Welcome!</p>
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
                  BVN Mobiel Number
                </label>
                <input
                  type="text"
                  id="bvn_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Preferred Mobile Number
                </label>
                <input
                  type="text"
                  id="preferred_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobiie Number"
                />
              </div>
              <div className="form-group-single form-group">
                <label htmlFor="last-name" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
            <div style={{ width: "90%" }} className="continue">
              <Button text="continue" />
            </div>
            <Typography className="typo">
              Already have an account? <span className="sign-in">Sign In</span>
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  );
};

export default Registration;
