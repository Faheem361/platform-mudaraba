import React, { useState } from "react";
import "./dashboard.css";
import { Box, Avatar, Grid } from "@mui/material";
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
import { DataCard } from "./_";
import { Model, ATMmodel } from "./_";

const Dashboard = () => {
  const [showModel, setShowModel] = useState(false);
  const [showATMModel, setATMShowModel] = useState(false);
  const setModel = (props) => {
    console.log(props, "dddd");
    setShowModel(props);
  };
  console.log("showModel", showModel);
  return (
    <div className="container dashboard-container ">
      {showModel && <Model setShowModel={setShowModel} />}
      {showATMModel && <ATMmodel setATMShowModel={setATMShowModel} />}

      <h1 className="dashboard-heading">Your Profile Data and Edit</h1>
      <Grid container>
        <Grid item xs={12} md={12} lg={7}>
          <Box
            className="container-profile"
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
              <div className="col">
                <span className="title">Account Information</span>
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
                {/* <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Phone} />
                  </Grid>
                  <Grid item xs={10}>
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
                        <span className="userTitle">+966 508 888 993</span>
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
                        <span className="userSubTitle">Your Phone Number</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid> */}
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
          <Box
            className="container-profile"
            sx={{
              p: 2,
              mt: 5,
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
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <span className="title">National address</span>
              </Grid>

              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  // mr: 3,
                }}
              >
                <span
                  className="change-password"
                  style={{ cursor: "pointer" }}
                  onClick={() => setModel(true)}
                >
                  Edit Data
                </span>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={12} md={6} lg={3}>
                <DataCard
                  icon={Building}
                  title={"15"}
                  subTitle={"Building Number"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <DataCard
                  icon={Check}
                  title={"123456"}
                  subTitle={"Additional Code"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <DataCard icon={Gps} title={"Dammam"} subTitle={"City *"} />
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <DataCard
                  icon={PictureFrame}
                  title={"Albadya"}
                  subTitle={"Neighborhood *"}
                />
              </Grid>

              <Grid item xs={12} md={6} lg={3} sx={{ mt: 2 }}>
                <DataCard icon={Layers} title={"3"} subTitle={"unit number"} />
              </Grid>
              <Grid item xs={12} md={6} lg={3} sx={{ mt: 2 }}>
                <DataCard
                  icon={DirectBox}
                  title={"3456"}
                  subTitle={"Postal code *"}
                />
              </Grid>
              <Grid item xs={12} md={6} lg={3} sx={{ mt: 2 }}>
                <DataCard
                  icon={Routing}
                  title={`DammamAlbadya\\15\\3`}
                  subTitle={"Address*"}
                />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* right side */}
        <Grid item lg={5} xs={12} md={12}>
          <Box
            className="container-profile"
            sx={{
              p: 2,
              mb: 2,
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
              <Grid
                item
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <span className="title">Bank Account</span>
              </Grid>

              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  // mr: 3,
                }}
              >
                <span
                  className="change-password"
                  style={{ cursor: "pointer" }}
                  onClick={() => setATMShowModel(true)}
                >
                  Edit Data
                </span>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 5 }}>
              <Grid item xs={12} md={12} lg={4}>
                <img src={ATMCard} />
              </Grid>
              <Grid item xs={12} md={12} lg={8}>
                <Grid container sx={{ ml: 1 }}>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <span className="userSubTitle">IBAN</span>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "start",
                    }}
                  >
                    <span className="userTitle">SA0380000203608016117728</span>
                  </Grid>
                </Grid>
                <Grid container sx={{ ml: 1 }}>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <span className="userSubTitle">Clint name</span>
                  </Grid>
                  <Grid
                    item
                    xs={6}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <span className="userSubTitle">Bank name</span>
                  </Grid>
                </Grid>
                <Grid container sx={{ ml: 1 }}>
                  <Grid
                    item
                    xs={8}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <span>AKRAM - - ELKALLAS</span>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      alignItems: "center",
                    }}
                  >
                    <span>ANB</span>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="container-profile"
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
              spacing={1}
              sx={{
                mt: 1,
              }}
            >
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <span className="userTitle">Investor Agreement</span>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <span className="userSubTitle">
                  (Opening an Investment Account)
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <p className="agreement-para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Egestas interdum mi nunc quam tellus sagittis non sagittis.
                  Sit facilisis odio at elementum enim. Aenean posuere lectus
                  commodo pretium cras ornare egestas. Faucibus pellentesque
                  congue elit felis, laoreet tortor. Suspendisse ipsum enim
                  mauris porta ipsum morbi duis fermentum eu. Mattis viverra
                  blandit tellus lacus dignissim consequat consectetur mauris
                  quis. Fermentum, iaculis nunc pellentesque viverra nunc et
                  integer eget tortor. Neque, ultricies rutrum id cursus feugiat
                  id. Arcu fringilla vitae sed in malesuada nec aliquam.
                  Sagittis amet malesuada etiam gravida tellus quam mattis.
                  Ullamcorper id metus enim, sed scelerisque viverra
                  scelerisque. Vestibulum varius dolor sed eu, cursus laoreet.
                  Arcu at enim at scelerisque a, scelerisque. Vel nulla eu lacus
                  nunc imperdiet. Egestas risus vitae aliquam nam cursus aliquet
                  duis. Duis arcu ornare eu feugiat nunc. Arcu enim consequat,
                  dolor mus fermentum lobortis est. Commodo massa, odio dolor
                  non id pretium montes, tristique
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                  mb: 2,
                  mt: 1,
                }}
              >
                <button className="download">
                  <img src={Download} />
                  Download
                </button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default Dashboard;
// {
//   title: {
//     fontStyle: theme.typography.h2.fontStyle,
//     fontWeight: theme.typography.h2.fontWeight,
//     fontSize: theme.typography.h2.fontSize,
//     lineHeight: theme.typography.h2.lineHeight,
//     color: theme.typography.h2.color,
//     letterSpacing: theme.typography.h2.letterSpacing,
//     display: "flex",
//     alignItems: "flex-end",
//   },
// }
