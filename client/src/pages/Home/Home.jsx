import { useState } from "react";
import "./home.css";
import "../Registration/Registration.css";
import logo from "../../assets/logo.svg";
import { Stack, Typography } from "@mui/material";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { authState } from "../../context/authContext";
import RegModal from "../Registration/RegModal";
import PositionedSnackbar from "../Registration/Alert";
const Home = () => {
  const { setUser } = authState();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState();
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const loginUser = async () => {
    try {
      setOpen(true);
      const res = await axios.post(
        `http://localhost:5000/api/v1/login`,
        userData,
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      setUser(res?.data?.user);
      setOpen(false);
      navigate("/dashboard");
    } catch (error) {
      setOpen(false);
      setMessage(error?.response?.data?.errMessage);
      setAlert(true);
    }
  };
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAClose = () => {
    setAlert(false);
  };
  return (
    <div className="home-container">
      <div className="sign-inn" style={{ width: "30%", height: "70%" }}>
        <div>
          <img
            style={{
              width: "150px",
              height: "50px",
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
              textAlign: "center"
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
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter Your email"
            />
          </div>
          <div className="form-group form-group-single">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              value={userData.password}
              type="password"
              id="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div style={{ width: "90%" }}>
          <Button text="Sign In" onClick={() => loginUser()} />
        </div>
        <Typography className="typo">
          Don't have an account?{" "}
          <span className="sign-in" onClick={() => navigate("/register")}>
            Sign up
          </span>
        </Typography>
        <RegModal
          open={open}
          close={close}
          handleClose={handleClose}
          handleOpen={handleOpen}
          message="Signing In ..."
        />
        <PositionedSnackbar
          open={alert}
          message={message}
          handleClose={handleAClose}
        />
      </div>
    </div>
  );
};

export default Home;
