import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Registration.css";
import { CircularProgress, Stack } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  borderRadius: "16px",
  background: "#FFF",
};

export default function RegModal({ open, setOpen, handleOpen, handleClose }) {
  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="reg-modal">
          <Stack
            spacing={2}
            direction="column"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CircularProgress sx={{ color: "#0C3397" }} size={40} />
            <Typography>Creating Account ...</Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
