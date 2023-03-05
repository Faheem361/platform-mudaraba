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
  Skeleton,
} from "@mui/material";
const columns = [
  { id: "id", label: "Order number", minWidth: 120 },
  { id: "name", label: "Date", minWidth: 120 },
  {
    id: "username",
    label: "Payment Date",
    minWidth: 120,
    // format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: "email",
    label: "The Amount",
    minWidth: 170,
    // format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(id, name, username, email) {
  return { id, name, username, email };
}
// Order number,due date,Payment Date, the amount

export function InvestmentPayments() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [user, setUser] = React.useState([null]);

  const rows = [
    user?.map((item) => {
      if (item != null) {
        return createData(item.id, item.name, item.username, item.email);
      } else return;
    }),

    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
    // createData(
    //   "APP-FUND-000192",
    //   "12 Mars 2022",
    //   "12 Mars 2022",
    //   "3,200,000.00 R.S"
    // ),
  ];

  // const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  // };
  React.useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((result) => {
          setUser([...result]);
        });
    }, 10000);
  }, []);
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Typography sx={sx.investerHeading}>Scheduled Payments</Typography>
          {/* <Typography sx={sx.investerSubHeading} style={{ marginTop: "15px" }}>
            From 12 Mars until 12 Mars
          </Typography> */}
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
          {/* <Typography sx={sx.investerSubHeading}>
            From 12 Mars until 12 Mars
          </Typography> */}
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
            {rows[0]
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, index) => {
                if (row) {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns?.map((column) => {
                        const value = row[column?.id];
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
                } else {
                  return (
                    <>
                      <TableRow hover role="checkbox" tabIndex={-1} key={0}>
                        {columns?.map((column) => {
                          return (
                            <TableCell align={column.align}>
                              <Skeleton animation="wave" />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                      <TableRow hover role="checkbox" tabIndex={-1} key={1}>
                        {columns?.map((column) => {
                          return (
                            <TableCell align={column.align}>
                              <Skeleton animation="wave" />
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    </>
                  );
                }
              })}
          </TableBody>
        </Table>
      </TableContainer>
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
