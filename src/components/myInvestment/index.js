import React, { useState } from "react";
import { Box, Avatar, Grid, useTheme, Typography } from "@mui/material";
import Phone from "../../assets/phone.png";
import SMS from "../../assets/sms.png";
import Global from "../../assets/global.png";
import User from "../../assets/user-square.png";
import Calender from "../../assets/calendar.png";
import CreateDate from "../../assets/calendar-tick.png";
import Award from "../../assets/award.png";
import Key from "../../assets/key.png";
import RightArrow from "../../assets/arrow-right.png";
import Building from "../../assets/building-4.png";
import Check from "../../assets/check.png";
import Gps from "../../assets/gps.png";
import DirectBox from "../../assets/directbox-notif.png";
import PictureFrame from "../../assets/picture-frame.png";
import Layers from "../../assets/layer.png";
import Routing from "../../assets/routing.png";
import ATMCard from "../../assets/Card.png";
import Download from "../../assets/download.png";
import { DataCard } from "../dashboard/_";

const Dashboard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [showModel, setShowModel] = useState(false);
  const [showATMModel, setATMShowModel] = useState(false);
  const setModel = (props) => {
    console.log(props, "dddd");
    setShowModel(props);
  };
  return (
    <div className="container dashboard-container ">
      <Grid
        container
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        spacing={1}
        sx={{ ml: 5 }}
      >
        <Grid item xs={11}>
          <h1 style={sx.investerHeading}>Operations</h1>
        </Grid>
        <Grid item xs={11}>
          <h6 style={sx.investerSubHeading}>Your Opportunity and more</h6>
        </Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid item xs={11} md={11} lg={11}>
          <Box
            // className="container-profile"
            sx={{
              p: 2,
              mb: 5,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.50",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={12}>
                <Typography sx={sx.investerSubHeading}>
                  Scheduled Opportunities
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                display={"flex"}
                justifyContent={"start"}
                alignItems={"start"}
              >
                <Typography sx={sx.scheduleSub}>
                  you Have more than 50 Investment Opportunities
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
              sx={{ mt: 5 }}
            >
              <Typography sx={sx.investerSubHeading}>
                Investment Operations
              </Typography>
              <Typography
                sx={sx.investerSubHeading}
                style={{ paddingLeft: "20px" }}
              >
                Payments
              </Typography>
              <Typography
                sx={sx.investerSubHeading}
                style={{ paddingLeft: "20px" }}
              >
                Investment performance
              </Typography>
            </Grid>
          </Box>
          <Box
            // className="container-profile"
            sx={{
              p: 2,
              bgcolor: (theme) =>
                theme.palette.mode === "dark" ? "#101010" : "grey.50",
              color: (theme) =>
                theme.palette.mode === "dark" ? "grey.300" : "grey.800",
              border: "1px solid",
              borderColor: (theme) =>
                theme.palette.mode === "dark" ? "grey.800" : "grey.300",
              borderRadius: 2,
              fontSize: "0.875rem",
              fontWeight: "700",
            }}
          >
            <div className="row">
              <div className="col-12">
                <span className="title">Operations</span>
              </div>
            </div>
            <Grid container spacing={2}>
              <Grid
                item
                xs={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                }}
              >
                <Avatar className="avatar" />
              </Grid>
              <Grid
                item
                xs={7}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  m: 2,
                }}
              >
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <span className="userTitle">Saleh Muhammad</span>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <span className="userSubTitle">@salah_Mohamed</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 3 }}>
              <Grid item xs={12} md={6} lg={4}>
                <DataCard
                  icon={Phone}
                  title={"+966 508 888 993"}
                  subTitle={"Your Phone Number"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={8}>
                <DataCard
                  icon={SMS}
                  title={"salahmohamed@gmail.comnities"}
                  subTitle={"Your Account Mail"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={4} sx={{ mt: 2 }}>
                <DataCard
                  icon={Global}
                  title={"Egyptian"}
                  subTitle={"Nationality"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={5} sx={{ mt: 2 }}>
                <DataCard
                  icon={User}
                  title={"2081189108"}
                  subTitle={"National Identification Number"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3} sx={{ mt: 2 }}>
                <DataCard
                  icon={Calender}
                  title={"12 Mars 1995"}
                  subTitle={"Date of Birth"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={4} sx={{ mt: 2 }}>
                <DataCard
                  icon={CreateDate}
                  title={"12 Mars 2022"}
                  subTitle={"Date created"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={4} sx={{ mt: 2 }}>
                <DataCard
                  icon={Award}
                  title={"Account Status"}
                  subTitle={"Account Status"}
                />
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={12} md={6} lg={4}>
                <DataCard
                  icon={Key}
                  title={"*************"}
                  subTitle={"Password"}
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="change-password">Change Your Password</span>
                <img src={RightArrow} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;

const makeStyles = (theme) => ({
  investerHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",

    /* Black */

    color: " #2e335b",
  },
  investerSubHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "17px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",

    /* Black */

    color: " #2e335b",
  },

  scheduleSub: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
    color: "#9197B3",
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
