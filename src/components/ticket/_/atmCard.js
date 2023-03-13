import React from "react";
import { Grid, useTheme } from "@mui/material";
import ATMCardPic from "../../../assets/Card.png";
import Card from "../../../assets/wallet/card.png";
export const ATMCard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid item xs={12} md={6} lg={5}>
      <Grid container sx={sx.boxStyle}>
        <Grid item xs={12} display={"flex"}>
          <img src={Card} alt="" style={sx.imgStyle} />
          <span style={sx.cardTitle}>Your Card</span>
        </Grid>

        <Grid container sx={sx.innerBox}>
          <Grid item xs={12} md={12} lg={4}>
            <img src={ATMCardPic} alt="" className="img-fluid" />
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
      </Grid>
    </Grid>
  );
};

const makeStyles = (theme) => ({
  boxStyle: {
    p: 2,
    mb: 5,
    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
    width: "100%",
  },
  innerBox: {
    p: 2,
    mt: 1,
    bgcolor: "#F6F7F9",
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid #F6F7F9",
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
