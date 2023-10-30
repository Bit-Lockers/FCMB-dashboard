import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <>
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    </>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        maxHeight: "100vh",
        width: "100%",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "100px",
          }}
        >
          <Avatar sx={{ height: "80px", width: "80px" }}>H</Avatar>
          <Typography>Bamidele Precious</Typography>
          <Typography>Bamideleprecious100@gmail.com</Typography>
        </Box>

        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                {
                  <CheckCircleIcon
                    sx={{ color: "#33C6A3", fontSize: "24px" }}
                  />
                }{" "}
                BVN
              </Box>
            }
            {...a11yProps(0)}
            sx={{ marginBottom: "20px" }}
          />
          <Tab
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                {
                  <CheckCircleIcon
                    sx={{ color: "#33C6A3", fontSize: "24px" }}
                  />
                }{" "}
                Personal & Contact Information
              </Box>
            }
            {...a11yProps(1)}
            sx={{ marginBottom: "20px" }}
          />
          <Tab
            label={
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  gap: "20px",
                  textAlign: "left",
                }}
              >
                {
                  <CheckCircleIcon
                    sx={{ color: "#33C6A3", fontSize: "24px" }}
                  />
                }{" "}
                Additional & Address Information
              </Box>
            }
            {...a11yProps(2)}
            sx={{ marginBottom: "20px" }}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box>
          <Box>
            <CheckCircleIcon sx={{ fontSize: "80px", color: "#33C6A3" }} />
            <Typography>
              Your BVN is already linked and cannot be changed
            </Typography>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          className="right-side"
          sx={{
            display: "flex",
            alignItems: "start",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              width: "70%",
              height: "100%",
              marginBottom: "50px",
            }}
          >
            <Box
              className="personal-information"
              sx={{ width: "90%", padding: "20px 0px 0px 0px" }}
            >
              <p className="personal-information"> Personal Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Title
                </label>
                <input
                  type="text"
                  id="salutation"
                  name="salutation"
                  placeholder="Mr/Mrs/Miss"
                />
              </div>
              <div className="form-group">
                <label htmlFor="salutation" className="label">
                  Title
                </label>
                <select id="category" name="category" className="select">
                  <option value="optnion1">Mr</option>
                  <option value="option2">Mrs</option>
                  <option value="option3">Miss</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="John "
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middle-name"
                  name="middle-name"
                  placeholder="Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="Mark"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Gender
                </label>
                <select id="category" name="category" className="select">
                  <option value="option1">Male</option>
                  <option value="option2">Female</option>
                </select>
              </div>
            </div>
            <Box className="personal-information" sx={{ width: "90%" }}>
              <p className="personal-information"> Contact Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  BVN Mobiel Number
                </label>
                <input
                  type="text"
                  id="bvn_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Preferred Mobile Number
                </label>
                <input
                  type="text"
                  id="preferred_mobile_number"
                  name="bvn_mobile_number"
                  placeholder="Enter Mobiie Number"
                />
              </div>
              <div className="form-group-single form-group">
                <label htmlFor="last-name" className="label">
                  Email Address
                </label>
                <input
                  type="text"
                  id="email_address"
                  name="email_address"
                  placeholder="Enter Email Address"
                />
              </div>
            </div>
          </Box>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
          <Box
            sx={{
              height: "100%",
            }}
            className="page-1"
          >
            <Box
              className="personal-information"
              sx={{ width: "90%", padding: "20px 0px 0px 0px" }}
            >
              <p className="personal-information"> Additional Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Mother’s madien name
                </label>
                <input
                  type="text"
                  id="title"
                  name="Mothers_madien_name"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Marital Status
                </label>
                <select
                  id="marital_status"
                  name="marital_status"
                  className="select"
                >
                  <option value="option1">Single</option>
                  <option value="option2">Married</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="last-name" className="label">
                  Occupation{" "}
                </label>
                <input
                  type="text"
                  id="occupation"
                  name="occupation"
                  placeholder="Enter Occupation"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Employment Status
                </label>
                <select
                  id="employment_status"
                  name="employment_status"
                  className="select"
                >
                  <option value="option1">Student</option>
                  <option value="option2">Employed</option>
                </select>
              </div>
            </div>
            <Box className="personal-information" sx={{ width: "90%" }}>
              <p className="personal-information"> Address Information</p>
              <hr className="line" />
            </Box>
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Address Line{" "}
                </label>
                <input
                  type="text"
                  id="address_line"
                  name="address_line"
                  placeholder="Enter Address Line"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  House Number{" "}
                </label>
                <input
                  type="text"
                  id="house_number"
                  name="house_number"
                  placeholder="Enter house number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  Street Name{" "}
                </label>
                <input
                  type="text"
                  id="street_name"
                  name="street_name"
                  placeholder="Enter street name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="first-name" className="label">
                  City{" "}
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  Country{" "}
                </label>
                <select id="country" name="country" className="select">
                  <option value="option1">Nigeria</option>
                  <option value="option2">Married</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="category" className="label">
                  State{" "}
                </label>
                <select id="State" name="State" className="select">
                  <option value="option1">Enugu</option>
                  <option value="option2">Married</option>
                </select>
              </div>
            </div>
          </Box>
      </TabPanel>
    </Box>
  );
}
