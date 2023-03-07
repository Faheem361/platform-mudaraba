import React from "react";
import { Grid, TextField, useTheme, styled } from "@mui/material";
import CardSend from "../../../assets/wallet/card-send.png";
export const AccountCard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid item xs={12} md={6} lg={3}>
      <Grid container sx={sx.boxStyle}>
        <Grid item xs={12} display={"flex"}>
          <img src={CardSend} alt="" style={sx.imgStyle} />
          <span style={sx.cardTitle}>Account Transfer</span>
        </Grid>
        <Grid item xs={12} display={"flex"} sx={{ mt: 2 }}>
          <CssTextField
            variant="outlined"
            fullWidth
            id="amount"
            name="amount"
            placeholder="Amount"
            defaultValue={""}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }} display={"flex"}>
          <button style={sx.btnAmount}>Money Transfer</button>
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
    width: "100%",
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
  inputField: {
    background: "#f6f7f9",
    // opacity: "0.08",
    border: "none",
    borderRadius: "10px",
    color: "#000",
    // height: "50px",
  },
});

const CssTextField = styled(TextField)({
  color: "#000",
  border: "0px solid #fff !important",
  borderRadius: "10px !important",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "0px solid #fff !important",
    borderRadius: "10px !important",
  },
  "& .MuiTextField-root": {
    outline: "none",
    border: "0px solid #fff !important",
    borderRadius: "10px !important",
  },
  "& .MuiInputBase-input": {
    background: "#F6F7F9",
    borderRadius: "10px !important",
  },
  "& label.Mui-focused": {
    color: "#000",
  },
});
