import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Divider,
  IconButton,
} from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import React from "react";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PaymentIcon from "@mui/icons-material/Payment";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import "./navbar.css";
function Sidebar() {
  return (
    <>
      <ul
        className="list-itemss"
        style={{
          marginTop: "25px",
          display: "flex",
          flexDirection: "column",
          height: "50%",
          justifyContent: "space-between",
        }}
      >
        <li
          className="item"
          style={{
            background: "rgba(236, 255, 250, 0.64)",
            borderRight: "4px solid #082778  ",
          }}
        >
          <IconButton>
            <HomeIcon />
          </IconButton>
          <a>Dashboard</a>
        </li>
        <li className="item">
          <IconButton>
            <VolunteerActivismIcon />
          </IconButton>

          <a>Lend</a>
        </li>
        <li className="item">
          <IconButton>
            <PaymentIcon />
          </IconButton>
          <a>My Loan</a>
        </li>
        <li className="item">
          <IconButton>
            <PaymentsIcon />
          </IconButton>
          <a>Payment</a>
        </li>
        <li className="item">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <a>Profile</a>
        </li>
        <li className="item">
          <IconButton>
            <SettingsIcon />
          </IconButton>

          <a>Setting</a>
        </li>
      </ul>
      <div className="item">
        <IconButton>
          <LogoutIcon />
        </IconButton>
        <a>sign out</a>
      </div>
    </>
  );
}

export default Sidebar;
