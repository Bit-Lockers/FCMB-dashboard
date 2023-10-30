import { Box, Button, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import LockIcon from "@mui/icons-material/Lock";

const SendMoney = () => {
  const [value, setValue] = useState("1");
  const [fundAccount, setFundAccount] = useState(false);
  const [loading, setLoading] = useState(false);
  const [accountName, setAccountName] = useState("Loading...a");
  const [reviewTransfer, setReviewTransfer] = useState(false);
  const [getPassword, setGetPassword] = useState(false);

  const [number, setNumber] = useState("");

  const tranferMoney = (event) => {
    event.preventDefault();
    setGetPassword(true);
  };

  const handleNumberChange = (event) => {
    const newNumber = event.target.value;
    setNumber(newNumber);
  };
  useEffect(() => {
    if (number.length >= 10) {
      setLoading(true);
    }
  }, [number]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (accountName != "Loading...") {
      setReviewTransfer(true);
    }
  };
  const submitFundAccount = (event) => {
    event.preventDefault();
    setFundAccount(true);
  };
  return (
    <Box sx={{ backgroundColor: "#f6f9fd" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h3" sx={{ fontSize: "30px" }}>
            Payments
          </Typography>
          <Typography sx={{ color: "#667085" }}>
            Track and manage all your payment
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            sx={{ padding: "10px 22px", backgroundColor: "#33C6A3" }}
          >
            <AddIcon />
            Send money
          </Button>
        </Box>
      </Box>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="PeerPocket Transfer" value="1" />
              <Tab label="Fund my Account" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Box
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "center",
              }}
            >
              {reviewTransfer ? (
                getPassword ? (
                  <Box
                    component="form"
                    onSubmit={handleSubmit}
                    noValidate
                    sx={{ mt: 1 }}
                  >
                    <Box>
                      <Typography sx={{ textAlign: "center" }}>
                        {" "}
                        <LockIcon
                          sx={{
                            color: "#33c6a3",
                            fontSize: "80px",
                          }}
                        />
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        Enter your password
                      </Typography>
                      <Typography sx={{ textAlign: "center" }}>
                        Enter your password to authorize this transaction
                      </Typography>
                    </Box>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Done
                    </Button>
                  </Box>
                ) : (
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
                        Review Transfer
                      </Typography>
                    </Box>
                    <Box>
                      <Box
                        component="form"
                        onSubmit={tranferMoney}
                        noValidate
                        sx={{ mt: 1 }}
                      >
                        <TextField
                          margin="normal"
                          fullWidth
                          id="email"
                          label="Beneficiary Name"
                          value="Use redux to fetch name here"
                          name="email"
                          autoFocus
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          name="Amount"
                          label="Amount"
                          type="text"
                        />
                        <TextField
                          margin="normal"
                          fullWidth
                          name="Amount"
                          label="Reason for transfer (optional)"
                          type="text"
                          id="number"
                        />
                        <Button
                          type="submit"
                          variant="contained"
                          sx={{ mt: 3, mb: 2 }}
                        >
                          Next
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                )
              ) : (
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
                      New Transfer
                    </Typography>
                    <Typography sx={{ color: "#667085", textAlign: "center" }}>
                      You can only transfer to a peerPocket Account
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Beneficiary Bank"
                        value="PeerPockect"
                        name="email"
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        fullWidth
                        name="Account Number"
                        label="Account Number"
                        type="text"
                        id="number"
                        value={number}
                        onChange={handleNumberChange}
                      />
                      {loading && (
                        <>
                          <TextField
                            margin="normal"
                            fullWidth
                            name="name"
                            label="Name"
                            type="text"
                            value={accountName}
                          />
                          <PulseLoader />
                        </>
                      )}
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Next
                      </Button>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            {fundAccount ? (
              <Box
                sx={{
                  zIndex: 2,
                  width: "100%",
                  height: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItem: "center",
                }}
              >
                <Box>
                  <Typography>This feature is coming soon</Typography>
                  <Button
                    onClick={() => {
                      setFundAccount(false);
                    }}
                    variant="outlined"
                    color="error"
                  >
                    Close
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "center",
                }}
              >
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
                      New Transfer
                    </Typography>
                    <Typography sx={{ color: "#667085", textAlign: "center" }}>
                      Fund your account with ther bank cards
                    </Typography>
                  </Box>
                  <Box>
                    <Box
                      component="form"
                      onSubmit={submitFundAccount}
                      noValidate
                      sx={{ mt: 1, display: "flex", justifyContent: "center" }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Next
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};

export default SendMoney;
