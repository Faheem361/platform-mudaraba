import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Tab, Tabs, useTheme, Grid, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  InvestmentOperations,
  InvestmentPayments,
  InvestmentPerformance,
} from ".";

import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { LinearProgress, Stack } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#00E2A1",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    color: "#2E335B",
    "&:hover": {
      color: "#00E2A1",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#00E2A1",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#d1eaff",
    },
  })
);

export const CustomTabs = () => {
  const [value, setValue] = React.useState(0);
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const navigate = useNavigate();
  const theme = useTheme();
  const sx = makeStyles(theme);
  const handleChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate(`?tab=operations`);
        break;
      case 1:
        navigate(`?tab=payments`);
        break;
      case 2:
        navigate(`?tab=performance`);
        break;
      default:
        navigate(`?tab=operations`);
        break;
    }
  };
  React.useEffect(() => {
    if (tab) {
      switch (tab.toLowerCase()) {
        case "operations":
          setValue(0);
          break;
        case "payments":
          setValue(1);
          break;
        case "performance":
          setValue(2);
          break;
        default:
          setValue(0);
          break;
      }
    } else {
      setValue(0);
    }
  }, [tab]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange1 = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={sx.boxStyle}>
          <Grid
            container
            spacing={2}
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item xs={12}>
              <Typography sx={sx.investerSubHeading}>
                Scheduled Opportunities
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"start"}
              alignItems={"start"}
            >
              <Typography sx={sx.scheduleSub}>
                You Have more than 50 Investment Opportunities
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"start"}
            alignItems={"start"}
            sx={{ mt: 5 }}
          >
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="my-investment-tabs"
            >
              <AntTab label="Available" />
              <AntTab label="Finished" />
              <AntTab label="My investments" />
            </AntTabs>
          </Grid>
        </Box>
        <Grid sx={{ padding: "0px" }}>
          <TabPanel
            value={value}
            index={0}
            style={{
              backgroundColor: "transparent",
              padding: "0px",
              margin: "0px",
            }}
          >
            {/* <Grid container sx={sx.boxStyle2}> */}
            <InvestmentOperations />
            {/* </Grid> */}
          </TabPanel>
        </Grid>
      </Box>
    </>
  );
};

const makeStyles = (theme) => ({
  boxStyle: {
    p: 2,
    mb: 5,
    bgcolor: theme.palette.primary.main,
    color: (theme) => (theme.palette.mode === "dark" ? "grey.300" : "grey.800"),
    border: "1px solid",
    borderColor: (theme) =>
      theme.palette.mode === "dark" ? "grey.800" : "grey.300",
    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  boxStyle2: {
    mb: 5,

    borderRadius: 2,
    fontSize: "0.875rem",
    fontWeight: "700",
  },
  investerHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "23px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: " #2e335b",
  },
  investerSubHeading: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "17px",
    lineHeight: "29px",
    display: "flex",
    alignItems: "flex-end",
    letterSpacing: "-0.02em",
    color: " #2e335b",
  },
  scheduleSub: {
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
    color: "#9197B3",
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
});
