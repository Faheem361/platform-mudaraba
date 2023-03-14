import React from "react";

import {
  Box,
  Grid,
  RadioGroup,
  useTheme,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
export const FilterCard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Box sx={sx.boxStyle}>
        <Grid item xs={12} sx={{ mt: 4 }} display={"flex"}>
          <Grid container>
            <Grid item xs={2}>
              <h6 style={sx.investerSubHeading}>Filter By</h6>
            </Grid>
            <Grid item xs={10}>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="Ticket No"
                  control={<Radio sx={sx.radioBtn} />}
                  label="Ticket No"
                />
                <FormControlLabel
                  value="CNIC"
                  control={<Radio sx={sx.radioBtn} />}
                  label="CNIC"
                />
              </RadioGroup>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ mt: 4 }} display={"flex"}>
          <Grid container>
            <Grid item xs={2}>
              <h6 style={sx.investerSubHeading}>Search Tickets</h6>
            </Grid>
            <Grid item xs={10} sx={sx.flexStart}>
              <Grid container>
                <Grid item xs={12} md={12} lg={8}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Search..."
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                  <button style={sx.btnSearch}>Search</button>
                  <button style={sx.btnTicket}>New Ticket</button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

const makeStyles = (theme) => ({
  boxStyle: {
    p: 4,
    mb: 3,
    mt: 3,

    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
    width: "100%",
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

  btnSearch: {
    padding: "10px 25px",
    background: "#00e1a0",
    border: "1px solid",
    fontWeight: "500",
    fontSize: "15px",
    borderRadius: "8px",
    color: theme.palette.primary.main,
  },
  btnTicket: {
    fontWeight: "500",
    fontSize: "15px",
    padding: "10px 25px",
    background: "#00b3ff",
    border: "1px solid",
    borderRadius: "8px",
    color: theme.palette.primary.main,
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
  radioBtn: {
    color: "#2E335B",
    "&.Mui-checked": {
      color: "#00E2A1",
    },
  },
});
