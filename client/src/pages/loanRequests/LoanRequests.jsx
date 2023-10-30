import "./LoanRequests.css";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import DownloadIcon from "@mui/icons-material/Download";
import FilterListIcon from "@mui/icons-material/FilterList";

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
  { id: "beneficiary", label: "Beneficiary", width: 150 },
  { id: "loanType", label: "Loan Type", width: 100 },
  {
    id: "desiredAmount",
    label: "Desired Amount",
    width: 130,
  },
  {
    id: "purpose",
    label: "Purpose",
    width: 100,
  },
  {
    id: "interestRate",
    label: "Interest Rate",
    width: 80,
  },
  {
    id: "repaymentDate",
    label: "Repayment Date",
    width: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    width: 70,
  },
];

function createData(
  beneficiary,
  loanType,
  desiredAmount,
  purpose,
  interestRate,
  repaymentDate,
  action
) {
  return {
    beneficiary,
    loanType,
    desiredAmount,
    purpose,
    interestRate,
    repaymentDate,
    action,
  };
}

const request = (link) => {
  return (
    <a href={link} style={{ textDecoration: "none", color: "#0C3397" }}>
      View
    </a>
  );
};

const rows = [
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Bamidele precious",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
  createData(
    "Agu Bright",
    "Short-term",
    400000,
    "House rent",
    10,
    "27-10-2020",
    request("https://google.com/")
  ),
];

const LoanRequests = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", padding: "20px" }}>
      <Box className="heading">
        <Box>
          <Typography variant="h2">Loan Requests</Typography>
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
            sx={{ display: "flex", padding: "10px 20px", cursor: "pointer" }}
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

      <TableContainer sx={{ maxHeight: 1500 }}>
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
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
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
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <TablePagination
          rowsPerPageOptions={[10]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};

export default LoanRequests;
