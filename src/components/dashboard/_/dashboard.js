import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  useTheme,
  Grid,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const columns = [
  { id: "projectName", label: "Project Name", minWidth: 120 },
  {
    id: "dateOfMaturity",
    label: "Date of maturity",
    minWidth: 170,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "theAmount",
    label: "Amount",
    minWidth: 170,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
    // format: (value) => value.toLocaleString('en-US'),
  },
  // {
  //   id: "status",
  //   label: "status",
  //   minWidth: 150,
  //   // format: (value) => value.toLocaleString('en-US'),
  // },
  // {
  //   id: "note",
  //   label: "note",
  //   minWidth: 170,
  //   // format: (value) => value.toLocaleString('en-US'),
  // },
];

function createData(projectName, dateOfMaturity, theAmount, status) {
  return { projectName, dateOfMaturity, theAmount, status };
}
// Order number,due date,Payment Date, the amount
const rows = [
  createData("Saudi Industries Company", "12 MAR 2022", "10,000,000.00 rs"),
  createData("Saudi Industries Company", "12 MAR 2022", "10,000,000.00 rs"),
  createData("Saudi Industries Company", "12 MAR 2022", "10,000,000.00 rs"),
  createData("Saudi Industries Company", "12 MAR 2022", "10,000,000.00 rs"),
  createData("Saudi Industries Company", "12 MAR 2022", "10,000,000.00 rs"),
];

export function Operations() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  // const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  // };

  return (
    <>
      <Box sx={sx.boxStyle}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Grid item xs={12} md={12} lg={8}>
            <Typography sx={sx.investerHeading}>Scheduled Payments</Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={12}
            lg={12}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Typography sx={sx.investerSubHeading}>
              From 12 Mars until 12 Mars
            </Typography>
          </Grid>
        </Grid>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "18px",
                      letterSpacing: "-0.01em",
                      color: "#9197B3",
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
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id == "status" ? (
                              <>
                                <Chip label="Scheduled" sx={sx.process} />
                              </>
                            ) : (
                              <>
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}
const makeStyles = (theme) => ({
  boxStyle: {
    p: 2,
    mb: 5,
    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
    width: "100%",
  },
  investerHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: " #2e335b",
  },
  investerSubHeading: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.01em",
    color: "#00E2A1",
    marginBottom: "20px",
  },
  flexStart: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  withdraw: {
    boxShadow: "#ffe8f3",
    backgroundColor: "#ffe8f3",
    width: "90%",
    color: "#ff0076",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "8px",
  },
  deposit: {
    boxShadow: "#e6fcf4",
    backgroundColor: "#e6fcf4",
    width: "90%",
    color: "#1ce5ab",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "8px",
  },
  process: {
    background: "linear-gradient(0deg, #E6FCF4, #E6FCF4), #00B1FF",
    borderRadius: "4px",
    color: "#00B1FF",
    padding: "4px 12px",
  },
});
