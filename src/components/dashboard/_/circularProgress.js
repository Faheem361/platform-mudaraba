import * as React from "react";
import { useTheme, Grid, Typography, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

export const Circular = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt="2rem">
      <CircularProgress
        color="error"
        variant="determinate"
        value={70}
        thickness={4}
        size="12rem"
      />

      <Typography variant="h4" position="absolute">
        +12.5%{" "}
        <Typography variant="h6" align="center">
          profit rate
        </Typography>
      </Typography>
    </Box>
  );
};

const makeStyles = (theme) => ({
  boxStyle: {
    p: 3,
    mb: 5,
    bgcolor: "white",
    color: "black",
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 4,
    fontSize: "0.875rem",
    fontWeight: "700",
    width: "100%",
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
  currency: {
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "40px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#979797",
    marginLeft: "5px",
  },
  amount: {
    fontWeight: "600",
    fontSize: "25px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },
  cardTitle: {
    fontWeight: "500",
    fontSize: "16px",
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
    width: "24px",
    height: "24px",
    marginRight: "5px",
  },
});
