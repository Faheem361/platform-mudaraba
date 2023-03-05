import React, { useState } from "react";
import LoginBackground from "../../assets/login-right.png";
import {
  Box,
  TextField,
  styled,
  IconButton,
  Checkbox,
  useTheme,
  Button,
  Grid,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import * as Yup from "yup";
import { useFormik } from "formik";
import "./signup.css";

export function Signup() {
  const theme = useTheme();
  const navigate = useNavigate();
  const sx = makeStyles(theme);
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const toLogin = () => {
    navigate("/login");
  };
  const loginSchema = Yup.object().shape({
    firstName: Yup.string().min(0).required("Required"),
    lastName: Yup.string().min(0).required("Required"),
    email: Yup.string().min(0).required("Required"),
    password: Yup.string().min(0).required("Required"),
    mobile: Yup.string().min(0).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobile: "",
    },
    validationSchema: loginSchema,

    onSubmit: async (values, action) => {
      console.log(values);
      // action.resetForm();
    },
  });
  return (
    <Grid
      container
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      style={{
        backgroundImage: `url(${LoginBackground})`,
        height: "auto",
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid item xs={12} md={6} lg={4} sx={sx.containerLogin}>
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span className="title">Create an Account</span>
          </Grid>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
          <Grid container sx={(sx.flexCenter, sx.margin)}>
            <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
              <Checkbox
                sx={sx.checkbox}
                // {...label}
                color="primary"
              />
              <Typography style={sx.keepMe}>Individual</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
              <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
                <Checkbox
                  sx={sx.checkbox}
                  // {...label}
                  color="primary"
                />
                <Typography style={sx.keepMe}>Business</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={10}>
              <CssTextField
                variant="outlined"
                fullWidth
                name="firstName"
                id="firstName"
                placeholder="First Name"
                defaultValue={formik.values.firstName}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                helperText={formik.errors.firstName}
                error={formik.errors.firstName}
              />
            </Grid>
            <Grid item xs={10}>
              <CssTextField
                variant="outlined"
                fullWidth
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                defaultValue={formik.values.lastName}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                helperText={formik.errors.lastName}
                error={formik.errors.lastName}
              />
            </Grid>
            <Grid item xs={10}>
              <CssTextField
                variant="outlined"
                fullWidth
                id="email"
                name="email"
                placeholder="Email"
                defaultValue={formik.values.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.errors.email}
                error={formik.errors.email}
              />
            </Grid>
            <Grid item xs={10}>
              <CssTextField
                variant="outlined"
                fullWidth
                id="mobile"
                placeholder="Mobile"
                defaultValue={formik.values.mobile}
                value={formik.values.mobile}
                onChange={formik.handleChange}
                helperText={formik.errors.mobile}
                error={formik.errors.mobile}
              />
            </Grid>
            <Grid item xs={10}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  background: "#F6F7F9",
                  borderRadius: "10px !important",
                }}
              >
                <CssTextField
                  fullWidth
                  style={sx.textField}
                  type={showPassword ? "text" : "password"}
                  // endAdornment={
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       onClick={handleClickShowPassword}
                  //       onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       {showPassword ? <VisibilityOff /> : <Visibility />}
                  //     </IconButton>
                  //   </InputAdornment>
                  // }
                  name="password"
                  placeholder="Password"
                  // label="Password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  // helperText={formik.errors.password}
                  // error={formik.errors.password}
                />
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  style={{ paddingBottom: "10px", marginRight: "15px" }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </Box>
              {formik.errors.password && (
                <p
                  className="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1h0eig7-MuiFormHelperText-root"
                  id="lastName-helper-text"
                >
                  {formik.errors.password}
                </p>
              )}
            </Grid>
          </Grid>
          <Grid container sx={(sx.flexCenter, sx.margin)}>
            <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
              <Checkbox
                sx={sx.checkbox}
                // {...label}
                color="primary"
              />
              <Typography style={sx.keepMe}>Keep me logged in</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
              <Typography style={sx.forgotPassword}>
                Forgot your password?
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={(sx.flexCenter, sx.marginContainer)}>
            <Grid item xs={12} sx={(sx.flexCenter, sx.margin)}>
              <Button style={sx.registerButton} type="submit">
                Register
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              sx={(sx.flexCenter, sx.margin)}
              flexDirection={"row"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography style={sx.keepMe}>
                Already have an account?
              </Typography>
              <Button spacing={0} sx={sx.login} onClick={() => toLogin()}>
                <Typography style={sx.keepMe}>Login</Typography>
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

const makeStyles = (theme) => ({
  checkbox: {
    "&.Mui-checked": {
      color: "#00B1FF !important",
    },
    "& .MuiCheckbox-root": {
      color: "#00B1FF !important",
    },
  },
  keepMe: {
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "23px",
    color: "#2E335B",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    fontWeight: 700,
    fontSize: "13px",
    lineHeight: "23px",
    display: "flex",
    alignItems: "flex-end",
    textDecorationLine: "underline",
    color: "#2E335B",
  },
  login: {
    cursor: "pointer",
    color: theme.palette.primary.dark,
    textTransform: "unset",
  },
  registerButton: {
    background: theme.typography.h3.color,
    borderRadius: theme.palette.primary.borderRadius,
    fontSize: "16px",
    fontWeight: 700,
    height: "60px",
    border: "2px solid #949393",
    color: "#fff",
    width: "80%",
    textTransform: "unset",
  },
  margin: {
    marginTop: "10px",
    marginBottom: "10px",
  },
  marginContainer: {
    marginBottom: "60px",
  },
  containerLogin: {
    background: "#ffffff",
    borderRadius: "23px !important",
    margin: "30px 0px",
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
// const CssTextField = styled(TextField)({
//   "& label.Mui-focused": {
//     color: "#00E2A1",
//   },
//   //   "& .MuiInput-underline:after": {
//   //     borderBottomColor: "green",
//   //   },
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       //   borderColor: "red",
//       background: "#F6F7F9",
//       border: "none",
//       borderRadius: "10px",
//     },
//     // "&:hover fieldset": {
//     //   borderColor: "",
//     // },
//     "&.Mui-focused fieldset": {
//       background: "#F6F7F9",
//       border: "1px solid #00E2A1",
//       color: "#000",
//       borderRadius: "5px",
//     },
//   },
// });
