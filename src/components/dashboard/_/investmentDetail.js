import React from "react";
import { useTheme, Grid, Typography, Box, Button } from "@mui/material";

import ThreeWeb from "../../../assets/investment/threeWeb.png";

export const InvestmentDetail = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <>
      <Grid
        container
        spacing={0}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          overflow: "auto",
          mb: 2,
        }}
      >
        <Grid item xs={6} md={6} lg={6} sx={sx.flexStart}>
          <img src={ThreeWeb} alt="" />
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Typography sx={sx.investerSubHeading}>
          Saudi Industries Company
        </Typography>
        <Grid container>
          <Grid item xs={12} sx={sx.flexStart}>
            <Typography sx={{ color: "#9197B3" }} variant="body">
              APP-62305_hhai2
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={sx.flexStart} mt={5}>
            <Grid container>
              <Grid item xs={12} sx={sx.flexStart}>
                <span style={sx.cardTitle}>total Investment</span>
              </Grid>
              <Grid item xs={12} sx={sx.flexStart}>
                <span style={sx.amount}>1500</span>
                <span style={sx.currency}>R.S</span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6} sx={sx.flexStart} mt={5}>
            <Grid container>
              <Grid item xs={12} sx={sx.flexStart}>
                <span style={sx.cardTitle}>Total number of stampings</span>
              </Grid>
              <Grid item xs={12} sx={sx.flexStart}>
                <span style={sx.amount2}>5</span>
                <span style={sx.currency}>stampings</span>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
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
  flexEnd: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },

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
  currency: {
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "40px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#9197B3",
    marginLeft: "5px",
  },
  amount: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#00E2A1",
  },
  amount2: {
    fontStyle: "italic",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#00B1FF",
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
});
