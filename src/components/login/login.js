import React, { useState } from "react";
import LoginBackground from "../../assets/login-right.png";
import { Grid } from "@mui/material";
import {
  Box,
  TextField,
  styled,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  IconButton,
  useTheme,
  Button,
  Checkbox,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import "./login.css";
import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomCheckbox } from "./_";
export default function Login() {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const toSignup = () => {
    navigate("/signup");
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().min(0).required("Required"),
    password: Yup.string().min(0).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    onSubmit: async (values, action) => {
      console.log(values);
      navigate("/dashboard");

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
        height: "100vh",
        //   backgroundPosition: "right",
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
            <span className="title">Welcome Back</span>
          </Grid>
        </Grid>
        <form onSubmit={formik.handleSubmit}>
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
                // label="Email"
                name="email"
                placeholder="Email"
                defaultValue={formik.values.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                helperText={formik.errors.email}
                error={formik.errors.email}
              />
            </Grid>
            <Grid item xs={10} sx={{ mt: 2 }}>
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
                  class="MuiFormHelperText-root Mui-error MuiFormHelperText-sizeMedium MuiFormHelperText-contained css-1h0eig7-MuiFormHelperText-root"
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
                color="primary"
                // {...label}
                // color="primary"
              />
              <Typography style={sx.keepMe}>Keep me logged in</Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={6} sx={sx.flexCenter}>
              <Typography style={(sx.keepMe, sx.forgotPassword)}>
                Forgot your password?
              </Typography>
            </Grid>
          </Grid>
          <Grid container sx={(sx.flexCenter, sx.marginContainer)}>
            <Grid item xs={12} sx={(sx.flexCenter, sx.margin)}>
              <Button style={sx.loginButton} type="submit">
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sx={(sx.flexCenter, sx.margin)}>
              <Button
                style={sx.registerButton}
                onClick={() => {
                  toSignup();
                }}
              >
                Investor Registration
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

const makeStyles = (theme) => ({
  textField: {
    "& .MuiOutlinedInput-adornedEnd": {
      backgroundColor: "red !important",
    },
    "& .MuiInputBase-root": {
      backgroundColor: "red !important",
    },
  },
  keepMe: {
    ...theme.typography.h1,
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotPassword: {
    display: "flex",
    alignItems: "flex-end",
    textDecorationLine: "underline",
    ...theme.typography.h1,
  },
  loginButton: {
    background: theme.typography.h3.color,
    borderRadius: theme.palette.primary.borderRadius,
    fontSize: theme.palette.primary.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h2.lineHeight,
    height: "60px",
    border: "2px solid #949393",
    color: theme.palette.primary.main,
    width: "80%",
  },
  registerButton: {
    // background: "#fff",
    background: theme.palette.primary.main,
    borderRadius: theme.palette.primary.borderRadius,
    fontWeight: theme.typography.h1.fontWeight,
    fontSize: theme.palette.primary.fontSize,
    lineHeight: theme.typography.h2.lineHeight,
    color: "#3B4065",
    border: "2px solid #949393",
    height: "60px",
    width: "80%",
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
  },
  title: {
    fontStyle: theme.typography.h2.fontStyle,
    fontWeight: theme.typography.h2.fontWeight,
    fontSize: theme.typography.h2.fontSize,
    lineHeight: theme.typography.h2.lineHeight,
    color: theme.typography.h2.color,
    letterSpacing: theme.typography.h2.letterSpacing,
    display: "flex",
    alignItems: "flex-end",
  },
  checkbox: {
    "&.Mui-checked": {
      color: "#00B1FF !important",
    },
    "& .MuiCheckbox-root": {
      color: "#00B1FF !important",
    },
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
