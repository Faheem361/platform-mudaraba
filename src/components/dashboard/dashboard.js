import React from "react";
import { Grid, useTheme } from "@mui/material";
import {
  CircularProgressCard,
  InvestmentDetail,
  Operations,
  DataCard,
} from "./_";
import Money from "../../assets/dashboard/money-send.png";
import ChartSquare from "../../assets/dashboard/chart-square.png";
import Ticket from "../../assets/dashboard/ticket-2.png";
import Category from "../../assets/dashboard/category-2.png";

export const Dashboard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <div className="container dashboard-container ">
      <Grid container sx={sx.flexStart} pl={5}>
        <Grid item xs={12}>
          <h1 style={sx.investerHeading}>Hello Salah Mohammad</h1>
        </Grid>
        <Grid item xs={12}>
          <h6 style={sx.investerSubHeading}>Latest report</h6>
        </Grid>
      </Grid>
      <Grid sx={sx.flexStart}>
        <Grid container item lg={3} sx={sx.boxStyle} mt={2} ml={3} spacing={1}>
          <DataCard
            icon={Money}
            title={"Total investment"}
            amount={"1,500"}
            currency={"R.S"}
          />
        </Grid>
        <Grid container item lg={3} sx={sx.boxStyle} mt={2} ml={3} spacing={1}>
          <DataCard
            icon={ChartSquare}
            title={"Number of investment"}
            amount={"3"}
            currency={"investment"}
          />
        </Grid>
        <Grid container item lg={3} sx={sx.boxStyle} mt={2} ml={3} spacing={1}>
          <DataCard
            icon={Ticket}
            title={"Total instruments"}
            amount={"5"}
            currency={"stampings"}
          />
        </Grid>
        <Grid container item lg={3} sx={sx.boxStyle} mt={2} ml={3} spacing={1}>
          <DataCard
            icon={Category}
            title={"Number of projects"}
            amount={"8"}
            currency={"Projects"}
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: "1.5rem" }}>
        <Grid item xs={12} md={8} lg={8}>
          <Grid container mb={5}>
            <Operations />
          </Grid>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <CircularProgressCard />
        </Grid>
        <Grid container sx={sx.flexStart}>
          <Grid item xs={12} md={12} lg={12}>
            <h6 style={sx.investerSubHeading}>Investment details</h6>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container sx={sx.flexStart}>
              <Grid item xs={5} sx={sx.boxStyle1}>
                <InvestmentDetail />
              </Grid>
              <Grid item xs={5} sx={sx.boxStyle1}>
                <InvestmentDetail />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const makeStyles = (theme) => ({
  investerHeading: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
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
    p: 2,
    mb: 3,
    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 4,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  boxStyle1: {
    p: 2,
    mb: 3,
    ml: 1,
    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 4,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
  },
});
