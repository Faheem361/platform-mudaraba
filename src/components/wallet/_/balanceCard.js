import React from "react";
import { Grid, useTheme } from "@mui/material";
import EmptyWallet from "../../../assets/wallet/empty-wallet-tick.png";
export const BalanceCard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Grid container sx={sx.boxStyle}>
        <Grid item xs={12} display={"flex"} sx={{ mb: 1 }}>
          <img src={EmptyWallet} alt="" style={sx.imgStyle} />
          <span style={sx.cardTitle}>total balance</span>
        </Grid>
        <Grid item xs={12} display={"flex"} sx={{ mt: 3 }}>
          <span style={sx.amount}>1,000,500</span>
          <span style={sx.currency}>rs</span>
        </Grid>
        <Grid item xs={12} sx={{ mt: 4 }} display={"flex"}>
          <button style={sx.btnAmount}>Add Balance</button>
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
