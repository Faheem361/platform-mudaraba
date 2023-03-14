import React from "react";
import { Grid, useTheme } from "@mui/material";
import { FilterCard, TicketsTable } from "./_";
export const Ticket = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <div className="container dashboard-container ">
      <Grid container sx={sx.flexStart} pl={5}>
        <Grid item xs={12}>
          <h1 style={sx.investerHeading}>Tickets</h1>
        </Grid>
        <Grid item xs={12}>
          <h6 style={sx.investerSubHeading}>Track Your Complaints</h6>
        </Grid>
      </Grid>
      <Grid container sx={sx.flexStart} pl={3} spacing={2}>
        <FilterCard />
      </Grid>
      <Grid container sx={sx.flexCenter} style={{ padding: "1.5rem" }}>
        <Grid item xs={12} md={12} lg={12}>
          <Grid container>
            <TicketsTable />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const makeStyles = (theme) => ({
  investerHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: "#2e335b",
  },
  investerSubHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "17px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: "#2e335b",
  },
  boxStyle: {
    p: 3,
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
  cardTitle: {
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  amount: {
    fontWeight: "600",
    fontSize: "40px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  currency: {
    fontWeight: "600",
    fontSize: "19px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#979797",
    marginLeft: "5px",
  },
  btnAmount: {
    padding: "10px 25px",
    background: "#00B1FF",
    border: "1px solid #00B1FF",
    borderRadius: "8px",
    color: theme.palette.primary.main,
  },
  imgStyle: {
    width: "24px",
    height: "24px",
    marginRight: "5px",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  },
});
