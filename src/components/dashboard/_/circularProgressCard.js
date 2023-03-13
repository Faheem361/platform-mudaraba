import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import { Circular } from "./circularProgress";

export function CircularProgressCard() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid container sx={sx.boxStyle}>
      <Grid item xs={12} sx={sx.flexStart}>
        <span style={sx.cardTitle}>Profits</span>
      </Grid>
      <Grid item xs={12}>
        <Circular />
      </Grid>
    </Grid>
  );
}

const makeStyles = (theme) => ({
  boxStyle: {
    p: 2,
    ml: 2,
    mb: 5,
    bgcolor: "white",
    color: "black",
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 4,
    fontSize: "0.875rem",
    fontWeight: "700",
    width: "100%",
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
  currency: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "40px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#979797",
    marginLeft: "5px",
  },
  amount: {
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "20px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  imgStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "24px",
    height: "24px",
    marginRight: "5px",
  },
});
