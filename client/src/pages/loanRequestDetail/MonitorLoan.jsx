import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import dayjs from "dayjs";

const columns = [
  { id: "beneficiary", label: "Beneficiary", width: 150 },
  {
    id: "amount",
    label: "Amount",
    width: 130,
  },
  {
    id: "interestRate",
    label: "Interest Rate",
    width: 80,
  },
  {
    id: "repaymentStatus",
    label: "Repayment Status",
    width: 100,
  },
  {
    id: "repaymentDate",
    label: "Repayment Date",
    width: 120,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "purpose",
    label: "Purpose",
    width: 100,
  },
];

function createData(
  beneficiary,
  amount,
  interestRate,
  repaymentStatus,
  repaymentDate,
  purpose
) {
  return {
    beneficiary,
    amount,
    interestRate,
    repaymentStatus,
    repaymentDate,
    purpose,
  };
}
const rows = [
  createData(
    "Bamidele precious",
    400000,
    10,
    "Pending",
    "27-10-2023",
    "House rent"
  ),
];

const MonitorLoan = () => {
  return (
    <>
      <Box sx={{marginTop: "20px"}}>
        <Typography variant="h2" sx={{color: "#181819", fontSize: "24px"}}>Monitor Loans</Typography>
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
              // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
    </>
  );
};

export default MonitorLoan;
