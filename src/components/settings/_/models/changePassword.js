import {
  Button,
  Grid,
  styled,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  useTheme,
  Box,
} from "@mui/material";

import React, { useMemo, useState } from "react";
import { Formik, FieldArray, useFormik } from "formik";
import * as Yup from "yup";
import Key from "../../../../assets/key.png";

export const ChangePassword = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.setChangePasswordModel(false);
  };
  const theme = useTheme();
  const sx = makeStyles(theme);
  const NationalAddress = Yup.object().shape({
    password: Yup.string().min(0).required("Required"),
    newPassword: Yup.string().min(0).required("Required"),
    againNewPassword: Yup.string().min(0).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      newPassword: "",
      againNewPassword: "",
    },
    validationSchema: NationalAddress,

    onSubmit: async (values, action) => {
      await formdata(values);
    },
  });

  const formdata = async (data) => {};
  const style = {
    p: 4,
  };
  console.log("formikvalues", formik);
  const handleCloseModel = () => {};
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      //   maxWidth={"md"}
      fullWidth
    >
      <DialogContent>
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontWeight: "600",
            }}
          >
            Account Password
          </Typography>
          <Typography
            id="modal-modal-description"
            className="userSubTitle"
            sx={sx.userSubTitle}
            style={{ marginTop: "10px" }}
          >
            Change Your Password
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Key}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>Your Password</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="password"
                  placeholder="Old password"
                  style={{ marginTop: "1rem" }}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  helperText={formik.errors.password}
                  error={formik.errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Key}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>New Password</Typography>
                  </Grid>
                </Grid>

                <CssTextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="newPassword"
                  placeholder="New Password"
                  value={formik.values.newPassword}
                  onChange={formik.handleChange}
                  helperText={formik.errors.newPassword}
                  error={formik.errors.newPassword}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Key}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>New Password again</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  type="password"
                  name="againNewPassword"
                  placeholder="New Password Again"
                  value={formik.values.againNewPassword}
                  onChange={formik.handleChange}
                  helperText={formik.errors.againNewPassword}
                  error={formik.errors.againNewPassword}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
            </Grid>
            <Grid item sx={sx.flexCenter}>
              <Button style={sx.submitButton} onClick={() => handleClose(true)}>
                Save
              </Button>
            </Grid>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const makeStyles = (theme) => ({
  submitButton: {
    background: theme.typography.h3.color,
    borderRadius: theme.palette.primary.borderRadius,
    fontSize: theme.palette.primary.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    lineHeight: theme.typography.h2.lineHeight,
    height: "60px",
    border: `2px solid ${theme.typography.h3.color}`,
    color: theme.palette.primary.main,
    width: "70%",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px",
  },
  flexStart: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginTop: "10px",
    marginLeft: "10px",
  },
  userSubTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "18px",
    letterSpacing: "-0.01em",
    color: "#9197b3",
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
