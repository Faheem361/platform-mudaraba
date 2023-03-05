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
} from "@mui/material";

import { DataCard } from "././card";
import { DataCard2 } from "./card2";
import { DataCard3 } from "./card3";

const columns = [
  { id: "orderNumber", label: "Order number", minWidth: 120 },
  { id: "Date", label: "Date", minWidth: 120 },
  {
    id: "paymentDate",
    label: "Payment Date",
    minWidth: 120,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "theAmount",
    label: "The Amount",
    minWidth: 170,
    // format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(orderNumber, Date, paymentDate, theAmount) {
  return { orderNumber, Date, paymentDate, theAmount };
}
// Order number,due date,Payment Date, the amount
const rows = [
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
  createData(
    "APP-FUND-000192",
    "12 Mars 2022",
    "12 Mars 2022",
    "3,200,000.00 R.S"
  ),
];

export function InvestmentOperations() {
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
    <Grid container>
      <Grid item>
        <Box sx={sx.boxStyle2}>
          <DataCard />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={sx.boxStyle2}>
          <DataCard2 />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={sx.boxStyle2}>
          <DataCard3 />
        </Box>
      </Grid>
      <Grid item>
        <Box sx={sx.boxStyle2}>
          <DataCard3 />
        </Box>
      </Grid>
    </Grid>
  );
}
const makeStyles = (theme) => ({
  boxStyle: {
    p: 2,
    mb: 5,
    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "grey.50"),
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
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
  boxStyle2: {
    p: 3,
    mb: 5,
    bgcolor: (theme) => (theme.palette.mode === "dark" ? "#101010" : "grey.50"),
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
});
