// import * as React from "react";
// import { useTheme, Grid, Typography, Box } from "@mui/material";
// import CircularProgress from "@mui/material/CircularProgress";

// export const Circular = () => {
//   const theme = useTheme();
//   const sx = makeStyles(theme);
//   return (
//     <Box display="flex" justifyContent="center" alignItems="center" mt="2rem">
//       <CircularProgress
//         color="error"
//         variant="determinate"
//         value={70}
//         thickness={4}
//         size="8rem"
//       />

//       <Typography variant="h4" position="absolute">
//         +12.5%
//         <Typography variant="h6" align="center">
//           profit rate
//         </Typography>
//       </Typography>
//     </Box>
//   );
// };

// const makeStyles = (theme) => ({
//   boxStyle: {
//     p: 3,
//     mb: 5,
//     bgcolor: "white",
//     color: "black",
//     border: "1px solid",
//     borderColor: (theme) =>
//       theme.palette.mode === "dark" ? "grey.800" : "grey.300",
//     borderRadius: 4,
//     fontSize: "0.875rem",
//     fontWeight: "700",
//     width: "100%",
//   },

//   flexStart: {
//     display: "flex",
//     justifyContent: "start",
//     alignItems: "center",
//   },
//   flexCenter: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   currency: {
//     fontWeight: "600",
//     fontSize: "14px",
//     lineHeight: "40px",
//     display: "flex",
//     alignItems: " flex-end",
//     letterSpacing: "-0.02em",
//     color: "#979797",
//     marginLeft: "5px",
//   },
//   amount2: {
//     fontStyle: "italic",
//     fontWeight: "600",
//     fontSize: "23px",
//     lineHeight: "24px",
//     display: "flex",
//     alignItems: " flex-end",
//     letterSpacing: "-0.02em",
//     color: "#00B1FF",
//   },

//   amount: {
//     fontWeight: "600",
//     fontSize: "25px",
//     lineHeight: "24px",
//     display: "flex",
//     alignItems: " flex-end",
//     letterSpacing: "-0.02em",
//     color: "#2E335B",
//   },
//   cardTitle: {
//     fontWeight: "500",
//     fontSize: "16px",
//     lineHeight: "20px",
//     display: "flex",
//     alignItems: " flex-end",
//     letterSpacing: "-0.02em",
//     color: "#2E335B",
//   },
//   imgStyle: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "24px",
//     height: "24px",
//     marginRight: "5px",
//   },
// });

import * as React from "react";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        color="success"
        thickness={4}
        size="10rem"
        {...props}
      />
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          top: "25%",
          left: "15%",
        }}
      >
        <Typography variant="h6" color="#00E2A1">
          {`${Math.round(props.value)}%`}
        </Typography>
        <Typography variant="h6" color="#9197B3" align="center">
          profit rate
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

export function Circular() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return <CircularProgressWithLabel value={70} />;
}
