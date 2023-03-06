import React from "react";
import { useTheme, Grid, Typography, Box, Button } from "@mui/material";
import Tag from "../../../../assets/investment/tag-2.png";
import Task from "../../../../assets/investment/task-square.png";
import Chart from "../../../../assets/investment/chart-2.png";
import Calendar from "../../../../assets/investment/calendar-2.png";
import People from "../../../../assets/investment/people.png";
import Activity from "../../../../assets/investment/Activity.png";
import BigChart from "../../../../assets/investment/Chart.png";
import Coin from "../../../../assets/investment/coin.png";
import Percent from "../../../../assets/investment/percentage-square.png";
import Receipt from "../../../../assets/investment/receipt-2.png";
import RecieptSearch from "../../../../assets/investment/receipt-search.png";
import TwoWeb from "../../../../assets/investment/twoWeb.png";
import CustomizedProgressBars from "../progress";
import { SingleCard } from "./subCard";
export const DataCard2 = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid
      container
      spacing={0}
      sx={{ display: "flex", justifyContent: "space-between" }}
    >
      <Grid
        container
        sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
      >
        <Grid item xs={6} md={6} lg={6} sx={sx.flexStart}>
          <img src={TwoWeb} alt="" />
        </Grid>
        <Grid item xs={3} md={3} lg={3} sx={sx.flexEnd}>
          <span style={sx.timeButton}>1 day left</span>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} lg={12}>
        <Typography sx={sx.investerHeading}>
          Saudi Industries Company
        </Typography>
        <Grid container>
          <Grid item xs={12} md={6} lg={6} sx={sx.flexStart}>
            <Grid container>
              <Grid item lg={4} sx={{ display: "flex", ml: 1, mt: 1 }}>
                <img
                  src={Tag}
                  alt=""
                  style={{ marginLeft: "5px", width: "20px" }}
                  // className="img-fluid"
                />
                <Typography sx={{ color: "#9197B3" }} variant="body2">
                  APP-62305_hhai2
                </Typography>
              </Grid>
              <Grid item lg={1} sx={{ display: "flex", ml: 1, mt: 1 }}>
                <img
                  src={Task}
                  alt=""
                  style={{ marginLeft: "5px", width: "20px" }}
                  className="img-fluid"
                />
                <Typography sx={{ color: "#9197B3" }} variant="body2">
                  2
                </Typography>
              </Grid>
              <Grid item lg={1} sx={{ display: "flex", ml: 1, mt: 1 }}>
                <img
                  src={Chart}
                  alt=""
                  className="img-fluid"
                  style={{ marginLeft: "5px", width: "20px" }}
                />
                <Typography sx={{ color: "#9197B3" }} variant="body2">
                  B+
                </Typography>
              </Grid>
              <Grid item lg={2} sx={{ display: "flex", ml: 1, mt: 1 }}>
                <img
                  src={Calendar}
                  alt=""
                  className="img-fluid"
                  style={{ marginLeft: "5px", width: "20px" }}
                />
                <Typography sx={{ color: "#9197B3" }} variant="body2">
                  12Months
                </Typography>
              </Grid>
              <Grid item lg={3} sx={{ display: "flex", ml: 1, mt: 1 }}>
                <img
                  src={People}
                  alt=""
                  style={{ marginLeft: "5px", width: "20px" }}
                />
                <Typography sx={{ mr: 1, color: "#9197B3" }} variant="body2">
                  3Investor
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <CustomizedProgressBars />
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12} md={9} lg={9} sx={{ mt: 3 }}>
            <Box sx={sx.subCardContainer}>
              <Grid container>
                <Grid item xs={6} md={4} lg={1} sx={{ mr: 1, ml: 1 }}>
                  <SingleCard icon={Activity} title={"20%"} subTitle={"APR"} />
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{ ml: 1 }}>
                  <SingleCard
                    icon={Coin}
                    title={"240,000rs"}
                    subTitle={"the instrument's value"}
                  />
                </Grid>
                <Grid item xs={6} md={4} lg={1} sx={{ mr: 1, ml: 1 }}>
                  <SingleCard icon={BigChart} title={"19%"} subTitle={"IRP"} />
                </Grid>
                <Grid item xs={6} md={4} lg={3} sx={{ ml: 1 }}>
                  <SingleCard
                    icon={Receipt}
                    title={"1000 instruments"}
                    subTitle={"Total instruments"}
                  />
                </Grid>
                <Grid item xs={12} md={4} lg={3} sx={{ ml: 1 }}>
                  <SingleCard
                    icon={Percent}
                    title={"20%"}
                    subTitle={"Expected return on investment"}
                  />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3} sx={{ mt: 3 }}>
            <Button style={sx.loginButton}>Investment Now</Button>
            <Button style={sx.invest}>
              <img src={RecieptSearch} />
              Submission Memorandum
            </Button>
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
  flexEnd: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
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
  subCardContainer: {
    background: "rgba(206, 213, 228, 0.26)",
    display: "flex",
    padding: "20px 5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  loginButton: {
    background: "#00B1FF",
    borderRadius: "10px",
    // fontSize: theme.palette.primary.fontSize,
    fontSize: "12px",
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h2.lineHeight,
    height: "40px",
    border: "1px solid #00B1FF",
    color: "#fff",
    width: "95%",
  },
  invest: {
    color: "#00B1FF",
    fontSize: "11px",
  },
  timeButton: {
    background: "rgba(255, 4, 120, 0.07)",
    border: "1px solid #F2F4F8",
    borderRadius: "10px",
    color: "#FF0076",
    padding: "10px",
    fontSize: "10px",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
