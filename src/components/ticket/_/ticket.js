import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  useTheme,
  Box,
  Chip,
} from "@mui/material";
import doc from "../../../assets/doc.png";
const columns = [
  { id: "ticketNo", label: "Ticket No", minWidth: 120 },
  {
    id: "Date",
    label: "Date",
    minWidth: 170,
  },
  {
    id: "document",
    label: "Document",
    minWidth: 170,
    data: "image_url",
  },
  {
    id: "ticketType",
    label: "Ticket Type",
    minWidth: 170,
  },
  {
    id: "theStatus",
    label: "Status",
    minWidth: 150,
  },
  {
    id: "view",
    label: "View",
    minWidth: 170,
  },
];

function createData(ticketNo, Date, document, ticketType, theStatus, view) {
  return { ticketNo, Date, document, ticketType, theStatus, view };
}
// Order number,due date,Payment Date, the amount
const rows = [
  createData(
    "43434365fg",
    "12-04-2023",
    "document",
    "ABC3233",
    "IN Process",
    "View"
  ),
  createData(
    "43434365fg",
    "12-04-2023",
    "document",
    "ABC3233",
    "IN Process",
    "View"
  ),
  createData(
    "43434365fg",
    "12-04-2023",
    "document",
    "ABC3233",
    "Closed",
    "View"
  ),
];

export function TicketsTable() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <>
      <Box sx={sx.boxStyle}>
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
                      fontWeight: 500,
                      fontSize: "16px",
                      lineHeight: "18px",
                      letterSpacing: "-0.01em",
                      color: "black",
                      background: "#fafbff",
                      textAlign: "center",
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
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              textAlign: "center",
                            }}
                          >
                            {column.id == "document" ? (
                              <>
                                <img src={doc} alt="" />
                              </>
                            ) : column.id == "theStatus" ? (
                              <>
                                {value == "IN Process" ? (
                                  <>
                                    <Chip label="In Process" sx={sx.process} />
                                  </>
                                ) : (
                                  <>
                                    <Chip label="Closed" sx={sx.close} />
                                  </>
                                )}
                              </>
                            ) : column.id == "view" ? (
                              <button style={sx.btnView}>View</button>
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
  process: {
    boxShadow: "#ffe8f3",
    backgroundColor: "#ffe8f3",
    width: "90%",
    color: "#ff0076",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "8px",
  },
  close: {
    boxShadow: "#e6fcf4",
    backgroundColor: "#e6fcf4",
    width: "90%",
    color: "#1ce5ab",
    fontSize: "14px",
    fontWeight: "600",
    borderRadius: "8px",
  },
  btnView: {
    padding: "8px 20px",
    background: "linear-gradient(0deg, #CECED0, #CECED0), #00B1FF",
    borderRadius: "8px",
    color: "#fff",
    border: "none",
  },
});
