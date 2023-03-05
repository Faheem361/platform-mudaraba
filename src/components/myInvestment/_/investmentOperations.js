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
} from "@mui/material";
import Layers from "../../../assets/layer.png";
import Calender from "../../../assets/calendar.png";
import { DataCard } from "././card";
import { Box } from "@mui/system";





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
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={sx.investerHeading}>Saudi Industries Company</Typography>
          
          <Grid item xs={5} sx={sx.flexCenter}>
                    <img
                      src={Layers}
                      style={{ width: "15px", height: "15px" }}
                      alt=""
                    />
                     <Typography  variant="body2" > APP-62305_hhai2</Typography>
                     <img
                      src={Layers}
                      style={{ width: "15px", height: "15px" }}
                      alt=""
                    />
                     <Typography  variant="body2" > 2</Typography>

                     <img
                      src={Layers}
                      style={{ width: "15px", height: "15px" }}
                      alt=""
                    />
                     <Typography  variant="body2" >B+</Typography>
                     <img
                      src={Layers}
                      style={{ width: "15px", height: "15px" }}
                      alt=""
                    />
                     <Typography  variant="body2" >12Mounths</Typography>
                     <img
                      src={Layers}
                      style={{ width: "15px", height: "15px" }}
                      alt=""
                    />
                     <Typography  variant="body2" >3Investor</Typography>


                  </Grid>





                   {/* <Grid item xs={12} > */}
<Box  sx={{ display: 'flex' }}>
                <DataCard
                  icon={Calender}
                  title={"20%"}
                  subTitle={"APR"}
                />
                <DataCard
                  icon={Calender}
                  title={"240,000rs"}
                  subTitle={"the instrument's value"}
                />
                <DataCard
                  icon={Calender}
                  title={"19%"}
                  subTitle={"IRP"}
                />
                <DataCard
                  icon={Calender}
                  title={"1000 instruments"}
                  subTitle={"Total instruments"}
                />
                <DataCard
                  icon={Calender}
                  title={"20%"}
                  subTitle={"Expected return on investment"}
                />
                </Box>
              {/* </Grid> */}
          


          {/* <Typography sx={sx.investerSubHeading} style={{ marginTop: "15px" }}>
            From 12 Mars until 12 Mars
          </Typography> */}
        </Grid>
        {/* <Grid
          item
          xs={12}
          md={12}
          lg={12}
          display={"flex"}
          justifyContent={"start"}
          alignItems={"start"}
        > */}
          {/* <Typography sx={sx.investerSubHeading}>
            From 12 Mars until 12 Mars
          </Typography> */}
          {/* <Typography sx={sx.investerSubHeading}>
            From 12 Mars until 12 Mars
          </Typography> */}
        </Grid>
      {/* </Grid> */}
      {/* <TableContainer sx={{ maxHeight: 440 }}>
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
      </TableContainer> */}
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </>
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
});
