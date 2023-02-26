import { createTheme } from "@mui/material/styles";
const light = {
  palette: {
    primary: {
      main: "#FFFFFF", //card background
      borderRadius: "10px",
      fontSize: "16px",
      light: "#F3F3F3", // border light
      dark: "#000", // navbar
    },
    secondary: {
      main: "#f2f2f2", //app background
      light: "#ffffff", // menu icon background
      dark: "#ffffff", //not used
    },
  },
  typography: {
    h1: {
      color: "#2E335B", //login keep me,
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "13px",
      lineHeight: "23px",
      
    },
    h2: {
      fontStyle: "normal", //titles for all
      fontWeight: 700,
      color: "#2e335b",
      fontSize: "20px",
      lineHeight: "29px",
      letterSpacing: "-0.02em",
    },
    h3: {
      color: "#00B1FF", //register ,login button
    },
    h4: {
      color: "#231F20", //not used
    },
    h5: {
      color: "#262628", //not used
    },
    h6: {
      color: "#232323", //text color 1
    },
    body1: {
      color: "#2E335B", //not used
    },
    body2: {
      color: "#F2851F", //not used
    },
    subtitle1: {
      color: "#6F6F6F", //time
    },
    subtitle2: {
      color: "#F4F4F4", //not used
    },
    caption: {
      color: "#232323", //menu icon
    },
    overline: {
      color: "#8E8E93", //not used
    },
  },
};

export const appTheme = () => {
  const theme = light;
  return createTheme({
    ...theme,
    breakpoints: {},
  });
};
