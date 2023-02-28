import React from "react";
import { Grid, useTheme } from "@mui/material";
import { CustomTabs } from "./_";
const Dashboard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <div className="container dashboard-container ">
      <Grid
        container
        display={"flex"}
        justifyContent={"start"}
        alignItems={"start"}
        pl={5}
      >
        <Grid item xs={12}>
          <h1 style={sx.investerHeading}>Operations</h1>
        </Grid>
        <Grid item xs={12}>
          <h6 style={sx.investerSubHeading}>Your Opportunity and more</h6>
        </Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        style={{ padding: "1.5rem" }}
      >
        <Grid item xs={12} md={12} lg={12}>
          <Grid container>
            <CustomTabs />
          </Grid>
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
    color: "#2e335b",
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
});
