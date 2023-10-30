import React, { useState, useEffect } from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import SidebarDrawer from "../../components/SidebarBrawer";
import "../dashboard/dashbord.css";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import "../../app.scss";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArticleIcon from "@mui/icons-material/Article";
import { authState } from "../../context/authContext";
import LoanDetail from "./LoanDetail";

function LoanDailD() {
  const { user } = authState();
  const [state, setState] = useState(true);
  const [navbar, setNavbar] = useState(true);
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setState((prev) => !prev);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ background: "white" }}>
      <Navbar
        navbar={navbar}
        setNavbar={setNavbar}
        background="white"
        border={false}
      />
      <Box
        sx={{
          paddingTop: { md: "7vh", xs: "7vh" },
          backgroundColor: "white",
          margin: "0px !important",
        }}
      >
        <Stack
          direction="row"
          sx={{
            height: "100vh",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "20%",
              display: { md: state ? "block" : "none", sm: "none", xs: "none" },
            }}
          >
            <Sidebar />
          </Box>
          <Box
            className="dashboard-main"
            sx={{
              width: "100%",
              overflowY: "scroll",
              paddingRight: "10px",
              background: "#f6f9fd",
            }}
          >
            <Box sx={{ width: "100%", margin: "0", paddingTop: "15px" }}>
              <Box sx={{ padding: { md: "20px", xs: "0px 10px" } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "50px",
                    height: "50px",
                  }}
                >
                  <IconButton
                    sx={{
                      "&:focus": {
                        outline: "none",
                      },
                      display: { md: "block", ms: "none", xs: "none" },
                      width: "100%",
                      height: "100%",
                    }}
                    onClick={toggle}
                  >
                    {state ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
                  </IconButton>
                  <IconButton
                    sx={{
                      "&:focus": {
                        outline: "none",
                      },
                      display: { md: "none", sm: "block", xs: "block" },
                    }}
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    <ArticleIcon sx={{ fontSize: "1.2em" }} />
                  </IconButton>
                </Box>

                <div className="introduction">
                  <p className="welcome-message">
                    {" "}
                    Good evening, {user?.firstName}
                  </p>
                  <p className="welcome-info">
                    {" "}
                    Your financial dreams are just a click away!
                  </p>
                </div>
                <Box sx={{ marginTop: "20px" }}>
                  <LoanDetail />
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
        <SidebarDrawer open={open} close={handleDrawerClose} />
      </Box>
    </Box>
  );
}

export default LoanDailD;
