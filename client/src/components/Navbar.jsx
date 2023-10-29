import React, { useState, useEffect } from "react";
import {
  Stack,
  Typography,
  Box,
  IconButton,
  ButtonGroup,
  Badge,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Drawer as SearchDrawer,
  MenuItem,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import Logout from "@mui/icons-material/Logout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DehazeIcon from "@mui/icons-material/Dehaze";
import MuiDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import SearchIcon from "@mui/icons-material/Search";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import "../app.scss";
import logo from "../assets/logo.svg";

function Navbar({ navbar, setNavbar, active, background, border }) {
  const [open, setOpen] = useState(false);
  const [Drawer, setDrawer] = React.useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  // Navbar scroll change background color function
  const changeBackground = () => {
    if (window.scrollY >= 72) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const handleMobileSearch = () => {
    setOpenSearch(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClose = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";

  const renderMenu = (
    <Menu
      sx={{ width: "100%" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <List sx={{ padding: "0" }}>
        <>
          <ListItem disablePadding sx={{ border: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "white" }}>
                    <DashboardRoundedIcon color="warning" />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Dashboard" secondary="role" />
            </ListItemButton>
          </ListItem>
          <>
            <ListItem disablePadding sx={{ border: "none" }}>
              <ListItemButton>
                <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "white" }}>
                      <DashboardRoundedIcon color="warning" />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Dashboard" secondary="role" />
              </ListItemButton>
            </ListItem>
            <Divider />
          </>

          <Divider />

          <ListItem disablePadding sx={{ border: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar sx={{ backgroundColor: "white" }}>
                    <Logout fontSize="small" sx={{ color: "black" }} />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </>

        <>
          <ListItem disablePadding sx={{ border: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar></ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding sx={{ border: "none" }}>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar></ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItemButton>
          </ListItem>
          <Divider />
        </>
      </List>
    </Menu>
  );

  return (
    <Stack
      direction="row"
      className={navbar ? `navbar ${active}` : "navbar"}
      sx={{
        height: "7vh",
        zIndex: "999",
        background: background,
        borderBottom: border ? ".2px solid #a39f9f " : "",
      }}
    >
      <div
        style={{
          height: "100%",
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
      <Stack
        direction="row"
        sx={{
          width: "82%",
          justifyContent: { md: "space-between", xs: "end" },
          marginRight: { xs: "10px" },
        }}
      >
        <Typography
          className="overview"
          sx={{
            display: { md: "flex", xs: "none" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Overview
        </Typography>
        <Stack direction="row">
          <IconButton>
            <NotificationsNoneIcon />
          </IconButton>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ width: "30px", height: "30px", margin: "0px 5px" }} />
            <Typography
              className="name"
              sx={{ display: { md: "block", xs: "none" } }}
            >
              Agu Bright
            </Typography>
          </Box>
        </Stack>
      </Stack>

      {/* <Box
        sx={{
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul className="link" style={{ width: "100%" }}>
          <li className="linkItem">
            {" "}
            <a href="/">Home</a>{" "}
          </li>

          <li className="linkItem">
            <a href="/brands">Brands</a>
          </li>

          <li className="linkItem">
            <a href="/products">Products</a>
          </li>

          <li className="linkItem">
            <a href="/orders/me">Orders</a>
          </li>
        </ul>
      </Box> */}

      {/* <ButtonGroup sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          sx={{
            display: { md: "none", xs: "block" },
            "&:focus": { outline: "none" },
          }}
          onClick={handleMobileSearch}
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
        >
          <SearchIcon sx={{ color: "black", fontSize: "1.3em" }} />
        </IconButton>

        <IconButton
          sx={{ "&:focus": { outline: "none" } }}
          onClick={handleProfileMenuOpen}
          aria-label="account of current user"
          aria-controls={menuId}
          aria-haspopup="true"
        >
          <AccountCircleIcon sx={{ color: "black", fontSize: "1.3em" }} />
        </IconButton>

        <Avatar
          onClick={handleProfileMenuOpen}
          sx={{ width: "35px", height: "35px" }}
        />

        <IconButton sx={{ "&:focus": { outline: "none" } }}>
          <Badge
            badgeContent={"0"}
            sx={{ color: "rgb(24, 104, 183)" }}
            color="secondary"
          >
            <ShoppingCartIcon sx={{ color: "black", fontSize: "1.3em" }} />
          </Badge>
        </IconButton>

        <IconButton
          sx={{ display: { md: "none" }, "&:focus": { outline: "none" } }}
          onClick={() => setOpen(true)}
        >
          <DehazeIcon sx={{ color: "black", fontSize: "1.3em" }} />
        </IconButton>
      </ButtonGroup> */}
      <MuiDrawer
        open={open}
        close={handleDrawerClose}
        handleClose={handleDrawerClose}
      />
      <SearchDrawer anchor="top" open={openSearch}>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{
            overFlow: "hidden",
            padding: "5px ",
            width: "98%",
          }}
        >
          {/* <PrimarySearchAppBar /> */}
          <IconButton onClick={() => setOpenSearch(false)}>
            <CloseIcon sx={{ fontWeight: "900", color: "black" }} />
          </IconButton>
        </Stack>
      </SearchDrawer>
      {renderMenu}
    </Stack>
  );
}

export default Navbar;
