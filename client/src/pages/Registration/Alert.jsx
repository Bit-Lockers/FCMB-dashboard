import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useEffect } from "react";

export default function PositionedSnackbar({ open, message, handleClose }) {
  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 10000);
  });
  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        message={message}
      />
    </Box>
  );
}
