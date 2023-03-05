import React from "react";
import { Avatar, Grid, useTheme } from "@mui/material";

export const EditableDataCard = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid container spacing={1}>
      <Grid item sx={sx.flexCenter} style={{ width: "30px" }}>
        <Grid container>
          <Grid item xs={4} sx={sx.flexStart}>
            <img src={icon} />
          </Grid>
          <Grid item xs={8} sx={sx.flexStart}>
            <span className="userSubTitle">{subTitle}</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        flexGrow={1}
        style={{ width: `calc(100% - 30px)`, overflow: "hidden" }}
      >
        <Grid container>
          <Grid item xs={12} sx={sx.flexStart}>
            <span className="userTitle">{title}</span>
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
});
