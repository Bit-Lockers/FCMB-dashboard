import "./styles.css";
import {
  Box,
  Button,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  alpha,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import DownloadIcon from "@mui/icons-material/Download";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const columns = [
  { id: "dateCreated", label: "Beneficiary", width: 150 },
  {
    id: "loanType",
    label: "Loan Type",
    width: 130,
  },
  {
    id: "desiredAmount",
    label: "Desired Amount",
    width: 80,
  },
  {
    id: "purpose",
    label: "Purpose",
    width: 100,
  },

  {
    id: "interestRate",
    label: "Interest Rate",
    width: 100,
  },
  {
    id: "status",
    label: "Status",
    width: 100,
  },
  {
    id: "repaymentDate",
    label: "Repayment Date",
    width: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "action",
    width: 100,
  },
];

function createData(
  dateCreated,
  loanType,
  desiredAmount,
  purpose,
  interestRate,
  repaymentDate,
  action
) {
  return {
    dateCreated,
    loanType,
    desiredAmount,
    purpose,
    interestRate,
    repaymentDate,
    action,
  };
}
const rows = [
  //   createData(
  //     "Bamidele precious",
  //     400000,
  //     10,
  //     "Pending",
  //     "27-10-2023",
  //     "House rent"
  //   ),
];

const MyLoanDashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h3" sx={{ fontSize: "30px" }}>
              Recent Request
            </Typography>
            <Typography sx={{ color: "#667085" }}>
              Track and manage all your loan requests
            </Typography>
          </Box>
          <Box>
            <Button
              onClick={() => navigate("/newLoan")}
              variant="contained"
              sx={{ padding: "10px 22px", backgroundColor: "#0C3397" }}
            >
              <AddIcon />
              Create Request
            </Button>
          </Box>
        </Box>
        <Box>
          <TableContainer sx={{ maxHeight: 1500 }}>
            <Box className="heading">
              <Box>
                <Typography variant="h2">All Requests</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                <Search className="searchbar">
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px 20px",
                    cursor: "pointer",
                  }}
                >
                  <DownloadIcon style={{ color: "#002E6E" }} />
                  <Typography>Export</Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px 20px",
                    backgroundColor: "#F0F4FF",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  <FilterListIcon style={{ color: "#002E6E" }} />
                  <Typography>Filter</Typography>
                </Box>
              </Box>
            </Box>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        width: column.width,
                        height: "60px",
                        color: "#091C33",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={columns.length}>
                      <Typography variant="p">
                        You have not created any loan request. Do you need a
                        loan? Tap the button below to create an account.
                      </Typography>
                      <Box>
                        <Button
                          onClick={() => navigate("/newLoan")}
                          variant="contained"
                          sx={{
                            padding: "10px 22px",
                            backgroundColor: "#0C3397",
                          }}
                        >
                          <AddIcon />
                          Create Request
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                ) : (
                  rows.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        style={{ height: "76px" }}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </>
  );
};

export default MyLoanDashboard;
