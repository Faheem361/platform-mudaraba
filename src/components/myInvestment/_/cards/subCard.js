import React from "react";
import { Grid, useTheme } from "@mui/material";

export const SingleCard = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid container spacing={1}>
      <Grid item sx={sx.flexCenter} style={{ width: "20px" }}>
        <img src={icon} />
      </Grid>
      <Grid
        item
        flexGrow={1}
        style={{ width: `calc(100% - 20px)`, overflow: "hidden" }}
      >
        <Grid container>
          <Grid item xs={12} sx={sx.flexStart}>
            <span style={sx.userTitle}>{title}</span>
          </Grid>
          <Grid item xs={12} sx={sx.flexStart}>
            <span style={sx.userSubTitle}>{subTitle}</span>
          </Grid>
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
  userTitle: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "29px",
    letterSpacing: "0.01em",
    color: " #2e335b",
  },
  userSubTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "11px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
    color: " #9197b3",
  },
});
