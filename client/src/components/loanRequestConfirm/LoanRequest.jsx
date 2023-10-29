import "./loanRequest.css";
import { Avatar, Box, Button, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useState } from "react";
import { SyncLoader } from "react-spinners";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const styles = {
  boxContainer: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(154, 163, 177, 0.3)",
    // position: "absolute",
  },
  boxItem: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    borderRadius: "16px",
    width: "500px",
    height: "350px",
  },
  boxItem2: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "16px",
    width: "500px",
    height: "350px",
  },
  boxItem3: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: "16px",
    width: "500px",
    height: "350px",
  },
  innerboxItem3: {
    maxWidth: "298px",
    height: "210px",
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center",
    gap: "20px",
  },
};

const LoanRequest = () => {
  const [loading, setLoading] = useState(false);
  const [loanSubmitted, setLoanSubmitted] = useState(false);
  if (loanSubmitted) {
    return (
      <Box sx={styles.boxContainer}>
        <Box sx={styles.boxItem3}>
          <Box sx={styles.innerboxItem3}>
            <Box
              sx={{ width: "100%", display: "flex", justifyContent: "center" }}
            >
              <CheckCircleIcon sx={{ fontSize: "80px", color: "#33C6A3" }} />
            </Box>
            <Typography sx={{ textAlign: "center", color: "#333333" }}>
              Loan Request Approved
            </Typography>
            <Typography sx={{ textAlign: "center", color: "#3B454A" }} gutterBottom>
              You have approved the request. Kindly return to the dashboard to
              continue.
            </Typography>
          </Box>
          <Button
            variant="contained"
            sx={{
              padding: "10px 22px",
              backgroundColor: "#0C3397",
              width: "70%",
            }}
          >
            Continue
          </Button>
        </Box>
      </Box>
    );
  } else if (loading) {
    return (
      <Box sx={styles.boxContainer}>
        <Box sx={styles.boxItem2}>
          <SyncLoader />
        </Box>
      </Box>
    );
  } else {
    return (
      <Box sx={styles.boxContainer}>
        <Box sx={styles.boxItem}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              padding: "30px",
            }}
          >
            <CheckCircleOutlineIcon sx={{ fontSize: "60px" }} />
            <Box>
              <Typography>You are about to accept this loan request</Typography>
              <Typography sx={{ color: "#555555", paddingBottom: "10px" }}>
                Kindly confirm submission
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Box>
                  <Avatar sx={{ bgcolor: "#4A77AA" }}>B</Avatar>
                </Box>
                <Box>
                  <Typography>Bamidele Precious</Typography>
                  <Typography sx={{ color: "#555555" }}>Beneficiary</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "24px",
              padding: "10px",
              justifyContent: "center",
            }}
            className="btns"
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D0D5DD",
                padding: "10px 50px",
                "&:hover": {
                  backgroundColor: "#850101",
                },
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#178450",
                padding: "10px 50px",
                "&:hover": {
                  backgroundColor: "#056608",
                },
              }}
              onClick={() => setLoading(true)}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default LoanRequest;

//  <Box sx={styles.boxContainer}>
//       <Box sx={styles.boxItem}>
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: "column",
//             gap: "40px",
//             padding: "30px",
//           }}
//         >
//           <CheckCircleOutlineIcon sx={{ fontSize: "60px" }} />
//           <Box>
//             <Typography>You are about to accept this loan request</Typography>
//             <Typography sx={{ color: "#555555", paddingBottom: "10px" }}>
//               Kindly confirm submission
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Box>
//                 <Avatar sx={{ bgcolor: "#4A77AA" }}>B</Avatar>
//               </Box>
//               <Box>
//                 <Typography>Bamidele Precious</Typography>
//                 <Typography sx={{ color: "#555555" }}>Beneficiary</Typography>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             gap: "24px",
//             padding: "10px",
//             justifyContent: "center",
//           }}
//           className="btns"
//         >
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#D0D5DD",
//               padding: "10px 50px",
//               "&:hover": {
//                 backgroundColor: "#850101",
//               },
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "#178450",
//               padding: "10px 50px",
//               "&:hover": {
//                 backgroundColor: "#056608",
//               },
//             }}
//             onClick={() => setLoading(true)}
//           >
//             Confirm
//           </Button>
//         </Box>
//       </Box>
//     </Box>
