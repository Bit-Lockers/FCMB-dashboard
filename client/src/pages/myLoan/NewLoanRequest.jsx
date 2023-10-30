import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import LockIcon from "@mui/icons-material/Lock";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";


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


const detail1 = (key, index) => {
  return (
    <Box
      key={key}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 0px",
      }}
      className= "detail"
    >
      <Typography>{key}:</Typography>
      <Typography>{values1[index]}</Typography>
    </Box>
  );
};

const NewLoanRequest = () => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <Box sx={{ backgroundColor: "#f1f5f9" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h3" sx={{ fontSize: "30px" }}>
            New Loan Request
          </Typography>
          <Typography sx={{ color: "#667085" }}>
            Create a new loan request
          </Typography>
        </Box>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
        >
          {pageNumber === 1 && (
            <Box
              component="form"
              // onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Box>
                <Typography sx={{ textAlign: "center" }}>
                  Select Loan Type
                </Typography>
                <Typography sx={{ textAlign: "center" }}>
                  Select a loan category
                </Typography>
              </Box>
              <Button
                variant="outlined"
                sx={{ padding: "20px" }}
                onClick={() => setPageNumber(2)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CalendarTodayIcon />
                  Short term loan
                </Box>
              </Button>
              <Button
                variant="outlined"
                sx={{ padding: "20px" }}
                onClick={() => setPageNumber(2)}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <CalendarMonthIcon />
                  Long term loan
                </Box>
              </Button>
            </Box>
          )}
          {pageNumber === 2 && (
            <Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "24px",
                    color: "#333333",
                    textAlign: "center",
                  }}
                  variant="h2"
                >
                  Contact Information
                </Typography>
              </Box>
              <Box>
                <Box
                  component="form"
                  // onSubmit={tranferMoney}
                  noValidate
                  sx={{ mt: 1 }}
                >
                  <div className="form-group">
                    <label htmlFor="date" className="label">
                      Repayment Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="dateOfBirth"
                      // value={index1.dateOfBirth}
                      // onChange={handleChange}
                    />
                  </div>
                  <TextField
                    margin="normal"
                    fullWidth
                    name="Amount"
                    label="Loan Amount"
                    type="Number"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="Amount"
                    label="Interest Rate"
                    type="Number"
                    id="number"
                  />
                  <TextField
                    margin="normal"
                    fullWidth
                    name="Purpose"
                    label="Purpose"
                    type="text"
                  />
                  <Box sx={{ display: "flex", gap: "20px" }}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={()=>{setPageNumber(1)}}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      onClick={()=>{setPageNumber(3)}}
                    >
                      Next
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {pageNumber === 3 && (
            <Box sx={{display: "flex", flexDirection: "column"}}>
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
                <Button variant="outlined">
                Submit
              </Button>
              </Box>
              
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default NewLoanRequest;
