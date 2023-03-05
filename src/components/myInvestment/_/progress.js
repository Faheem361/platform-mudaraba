// import * as React from "react";
// import PropTypes from "prop-types";
// import LinearProgress from "@mui/material/LinearProgress";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";

// function LinearProgressWithLabel(props) {
//   return (
//     <Box sx={{ display: "flex", alignItems: "center" }}>
//       <Box sx={{ width: "100%", mr: 1 }}>
//         <LinearProgress variant="determinate" {...props} />
//       </Box>
//       <Box sx={{ minWidth: 35 }}>
//         <Typography variant="body2" color="text.secondary">{`${Math.round(
//           props.value
//         )}%`}</Typography>
//       </Box>
//     </Box>
//   );
// }

// LinearProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate and buffer variants.
//    * Value between 0 and 100.
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function LinearWithValueLabel() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) =>
//         prevProgress >= 100 ? 10 : prevProgress + 10
//       );
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <Box sx={{ width: "100%" }}>
//       <LinearProgressWithLabel value={progress} />
//     </Box>
//   );
// }

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Grid, useTheme } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#00E2A1" : "#308fe8",
  },
}));

// Inspired by the former Facebook spinners.

export default function CustomizedProgressBars() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  return (
    <Grid container>
      <Grid item xs={6} sx={sx.flexStart}>
        Coverage
      </Grid>
      <Grid item xs={6} sx={sx.flexEnd}>
        <span style={{ color: "#9197B3" }}>50%</span>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ flexGrow: 1 }}>
          <BorderLinearProgress variant="determinate" value={50} />
        </Box>
      </Grid>
    </Grid>
  );
}
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
  flexEnd: {
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  },
});
