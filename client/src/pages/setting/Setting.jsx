import "./setting.css";
import { Box, Button, TextField, Typography } from "@mui/material";

import { PulseLoader } from "react-spinners";
import { useState } from "react";

const Setting = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
  };
  return (
    <Box sx={{ backgroundColor: "#f6f9fd" }}>
      <Box gutterButtom>
        <Box>
          <Typography variant="h3" sx={{ fontSize: "30px" }}>
            Account Settings
          </Typography>
          <Typography sx={{ color: "#667085" }}>Manage your Account</Typography>
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{
              fontSize: "24px",
              color: "#333333",
              textAlign: "center",
              marginTop: "40px"
            }}
            variant="h2"
          >
            Change Password
          </Typography>
          <Typography sx={{ color: "#667085", textAlign: "center" }}>
            Make sure you use 8 characters which must include{" "}
            <b>Letters, numbers & special characters.</b>
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            padding: "30px",
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              name="currentPassword"
              label="Current Password"
              type="text"
              id="number"
            />
            <TextField
              margin="normal"
              fullWidth
              name="newPassword"
              label="Enter New Password"
              type="text"
              id="number"
            />
            <TextField
              margin="normal"
              fullWidth
              name="verifyPassword"
              label="Verify new Password"
              type="text"
              id="number"
            />
            {loading && <PulseLoader />}
            <Box sx={{width: "100%", display: "flex", justifyContent: "center"}}>
              <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, padding: "20 30" }}>
                Change Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Setting;
