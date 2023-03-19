import React from "react";
import { Avatar, Grid, useTheme } from "@mui/material";

export const DataCard = ({ icon, title, amount, currency }) => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid container spacing={1} sx={sx.flexCenter}>
      <Grid item sx={sx.imgContainer}>
        <img src={icon} style={sx.imgStyle} />
      </Grid>
      <Grid
        item
        flexGrow={1}
        style={{ width: `calc(100% - 60px)`, overflow: "hidden" }}
      >
        <Grid item xs={12} sx={sx.flexStart}>
          <span style={sx.cardTitle}>{title}</span>
        </Grid>
        <Grid item xs={12} sx={sx.flexStart}>
          <span style={sx.amount}>{amount}</span>
          <span style={sx.currency}>{currency}</span>
        </Grid>
      </Grid>
    </Grid>
  );
};

const makeStyles = (theme) => ({
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
    fontSize: "13px",
    lineHeight: "40px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#979797",
    marginLeft: "5px",
  },
  amount: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  cardTitle: {
    fontWeight: "600",
    fontSize: "15px",
    fontStyle: "italic",
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
    width: "30px",
    height: "30px",
    marginRight: "5px",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#E6FCF4",
    borderRadius: "16px",
    width: "50px",
    height: "50px",
    left: "calc(50% - 66px/2 - 293px)",
    top: "calc(50% - 65px/2 - 0.5px)",
  },
});
