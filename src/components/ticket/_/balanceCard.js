import React from "react";

import { Box, FormControl, FormControlLabel, FormLabel, Grid, RadioGroup, useTheme } from "@mui/material";
import EmptyWallet from "../../../assets/wallet/empty-wallet-tick.png";
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
export const BalanceCard = () => {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid item xs={12} md={12} lg={12}>
     <Grid item xs={12} sx={{ mt: 4 }} display={"flex"}>

     <h6 style={sx.investerSubHeading}>Filter By</h6>

    
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel  value="Ticket No" control={<Radio />} label="Ticket No" />
        <FormControlLabel value="CNIC" control={<Radio />} label="CNIC" />
        </RadioGroup>
       



     </Grid>
     
     
        <Grid item xs={12} sx={{ mt: 4 }} display={"flex"}>

        





        <h6 style={sx.investerSubHeading}>Search Tickets</h6>






        <Box
      component="form"
      sx={{
        '& > :not(style)': {  width: '75ch',ml:2,mr:2 },
      }}
      noValidate
      autoComplete="off"
    >
        <TextField id="outlined-basic" label="Search..." variant="outlined" />

</Box>

          <button style={sx.btnSearch}>Search</button>
          <button style={sx.btnTicket}>New Ticket</button>
          

      

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
  cardTitle: {
    fontWeight: "500",
    fontSize: "19px",
    lineHeight: "24px",
    display: "flex",
    alignItems: " flex-end",
    letterSpacing: "-0.02em",
    color: "#2E335B",
  },

  
  btnSearch: {
    padding: "10px 20px",
    background: "#00e1a0",
    border: "1px solid",
    borderRadius: "8px",
    color: theme.palette.primary.main,
  },
  btnTicket: {
    padding: "10px 20px",
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
});
