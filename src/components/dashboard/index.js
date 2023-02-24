import React from "react";
import Box from "@mui/material/Box";
import "./dashboard.css";
import { Avatar, Grid } from "@mui/material";
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
const Dashboard = () => {
  return (
    <div className="container dashboard-container ">
      <h1 className="dashboard-heading">Your Profile Data and Edit</h1>
      <Grid container>
        <Grid item xs={7}>
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
            <Grid container>
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
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={4}>
                <Grid container>
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
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container sx={{ ml: 1 }}>
                  <Grid
                    item
                    xs={1}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                    }}
                  >
                    <img src={SMS} />
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
                        <span className="userTitle">
                          salahmohamed@gmail.comnities
                        </span>
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
                        <span className="userSubTitle">Your Account Mail</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={4}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Global} />
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
                        <span className="userTitle">Egyptian</span>
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
                        <span className="userSubTitle">Nationality</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={5}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={User} />
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
                        <span className="userTitle">2081189108</span>
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
                        <span className="userSubTitle">
                          National Identification Number
                        </span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Calender} />
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
                        <span className="userTitle">12 Mars 1995</span>
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
                        <span className="userSubTitle">Date of Birth</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={4}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={CreateDate} />
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
                        <span className="userTitle">12 Mars 2022</span>
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
                        <span className="userSubTitle">Date created</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Award} />
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
                        <span className="userTitle">Account Status</span>
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
                        <span className="userSubTitle">Account Status</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              spacing={2}
              sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={4}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Key} />
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
                        <span className="userTitle">*************</span>
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
                        <span className="userSubTitle">Password</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
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
              sx={{ mt: 5, display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={4}>
                <Grid container>
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
                        <span className="title">National address</span>{" "}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                <span className="change-password">Edit Data</span>
              </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Building} />
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
                        <span className="userTitle">15</span>
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
                        <span className="userSubTitle">Building Number</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Check} />
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
                        <span className="userTitle">123456</span>
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
                        <span className="userSubTitle">Additional Code</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Gps} />
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
                        <span className="userTitle">Dammam</span>
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
                        <span className="userSubTitle">City *</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={PictureFrame} />
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
                        <span className="userTitle">Albadya</span>
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
                        <span className="userSubTitle">Neighborhood *</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 5 }}>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Layers} />
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
                        <span className="userTitle">3</span>
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
                        <span className="userSubTitle">unit number</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={DirectBox} />
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
                        <span className="userTitle">3456</span>
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
                        <span className="userSubTitle">Postal code *</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container>
                  <Grid
                    item
                    xs={2}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img src={Routing} />
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
                        <span className="userTitle">Dammam\Albadya\15\3</span>
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
                        <span className="userSubTitle">Address*</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/* right side */}
        <Grid item xs={5}>
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
              spacing={3}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Grid item xs={6}>
                <Grid container>
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
                        <span className="title">Bank Account</span>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                xs={4}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  mr: 3,
                }}
              >
                <span className="change-password">Edit Data</span>
              </Grid>
            </Grid>

            <Grid container spacing={1} sx={{ mt: 5 }}>
              <Grid item xs={4}>
                <img src={ATMCard} />
              </Grid>
              <Grid item xs={8}>
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
