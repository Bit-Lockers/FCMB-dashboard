import { useState } from "react";
import "./home.css";
import "../Registration/Registration.css";
import logo from "../../assets/logo.svg";
import { Stack, Typography } from "@mui/material";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="sign-inn" style={{ width: "30%", height: "70%" }}>
        <div>
          <img
            style={{
              width: "200px",
              height: "150px",
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <div
          className="dflex1"
          style={{
            width: 294,
            height: 70,
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 16,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#040C21",
              fontSize: 32,
              fontFamily: "Graphik",
              fontWeight: "500",
              letterSpacing: 0.2,
              wordWrap: "break-word",
            }}
          >
            Welcome back!
          </div>
          <div
            style={{
              color: "#091C33",
              fontSize: 16,
              fontFamily: "Inter",
              fontWeight: "500",
              letterSpacing: 0.2,
              wordWrap: "break-word",
            }}
          >
            Sign in to continue to your dashboard
          </div>
        </div>

        <div className="form-container">
          <div className="form-group form-group-single ">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your email"
            />
          </div>
          <div className="form-group form-group-single">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
            />
          </div>
        </div>
        <div style={{ width: "90%" }}>
          <Button text="continue" />
        </div>
        <Typography className="typo">
          Don't have an account?{" "}
          <span className="sign-in" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </Typography>
      </div>
    </div>
  );
};

export default Home;
