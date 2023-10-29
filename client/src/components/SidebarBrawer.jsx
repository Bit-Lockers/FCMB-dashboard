import { Drawer, IconButton } from "@mui/material";
import PaymentIcon from "@mui/icons-material/Payment";
import PaymentsIcon from "@mui/icons-material/Payments";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/logo.svg";

function SidebarDrawer({ open, close }) {
  return (
    <Drawer anchor="left" open={open} onClose={close}>
      <>
        <div
          style={{
            height: "10%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            style={{
              width: "150px",
              height: "50px",
            }}
            src={logo}
            alt="logo"
          />
        </div>
        <ul
          className="list-itemss"
          style={{
            width: "80vw",

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
    </Drawer>
  );
}

export default SidebarDrawer;
