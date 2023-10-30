import "./loanDetail.css";
import { Avatar, Box, Button, Grid, Paper, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Clear from "@mui/icons-material/Clear";
import MonitorLoan from "./MonitorLoan";
import axios from "axios";
import { useEffect, useState } from "react";

const keys1 = [
  "Status",
  "Repayment Date",
  "Loan Type",
  "Beneficiary",
  "Purpose",
  "Interest Rate",
  "Desired Amount",
];
const values1 = [
  "Awaiting approval",
  "Qednesday, Jun 7, 2023",
  "Short-term",
  "Bamidele Precious",
  "House rent",
  "10%",
  "400,000.00",
];

const keys2 = ["Name", "Address", "Email Address", "Phone Number"];
const values2 = [
  "Kenneth Irechukwu",
  "56 Olasonde, Mushin Lagos",
  "Kaneth.ieeiei@gmai.com",
  "081019101811",
];

const detail1 = (key, index) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0px",
      }}
      className="detail"
    >
      <Typography>{key}:</Typography>
      <Typography>{values1[index]}</Typography>
    </Box>
  );
};

const detail2 = (key, index) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0px",
      }}
      className="detail"
    >
      <Typography>{key}:</Typography>
      <Typography>{values2[index]}</Typography>
    </Box>
  );
};

const LoanDetail = () => {
  const [probability, setProbability] = useState("loading...")
  const requestBody = {
    age: 28,
    sex: "Female",
    marital_status: "single",
    employment_status: "employee",
  };

  const url = "https://credit-score-calc.onrender.com/calc";
  useEffect(() => {
    axios
    .post(url, requestBody)
    .then((response) => {
      setProbability(`${response.data.credit_score}%`)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  }, [])
  
  return (
    <Paper sx={{ backgroundColor: "#F0F4FF", padding: "20px" }}>
      <Typography
        variant="h2"
        className="heading"
        sx={{ color: "#091C33", fontSize: "30px" }}
        gutterBottom
      >
        Request Details
      </Typography>
      <Grid container spacing={4} sx={{ margin: "5px" }} gutterBottom>
        <Grid
          item
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            padding: "32px 40px",
          }}
          xs={8}
        >
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
            gutterBottom
          >
            <Typography
              variant="h4"
              sx={{ fontSize: "20px", color: "#091C33" }}
            >
              Loan Request Details
            </Typography>
            <Box
              sx={{
                backgroundColor: "#F0F4FF",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              {keys1.map((key, index) => {
                return detail1(key, index);
              })}
            </Box>

            <Typography
              variant="h4"
              sx={{ fontSize: "20px", color: "#091C33" }}
            >
              Beneficiary Details
            </Typography>
            <Box
              sx={{
                backgroundColor: "#F0F4FF",
                borderRadius: "8px",
                padding: "24px",
              }}
            >
              {keys2.map((key, index) => {
                return detail2(key, index);
              })}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              padding: "20px",
              justifyContent: "center",
            }}
            className="btns"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EB4D4B",
                padding: "10px 30px",
                "&:hover": {
                  backgroundColor: "#850101",
                  //   color: "#3c52b2",
                },
              }}
            >
              <Clear /> Decline
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#178450",
                padding: "10px 30px",
                "&:hover": {
                  backgroundColor: "#056608",
                },
              }}
            >
              <CheckIcon /> Accept
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box
            sx={{
              backgroundColor: "#FFFFFF",
              padding: "32px",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
            }}
          >
            <Box sx={{ display: "flex", gap: 2 }}>
              <Box>
                <Avatar>B</Avatar>
              </Box>
              <Box>
                <Typography>Bamidele Precious</Typography>
                <Typography variant="subtitle1">Beneficiary</Typography>
                <Typography>Credit Score: {probability}</Typography>
              </Box>
            </Box>
            <Button variant="contained" sx={{ padding: "10px 22px" }}>
              Chat with beneficiary
            </Button>
          </Box>
        </Grid>
      </Grid>
      <MonitorLoan />
    </Paper>
  );
};

export default LoanDetail;
