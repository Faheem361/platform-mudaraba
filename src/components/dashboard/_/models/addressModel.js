import {
  Button,
  Grid,
  styled,
  TextField,
  Typography,
  Dialog,
  DialogContent,
  useTheme,
} from "@mui/material";

import React, { useMemo, useState } from "react";
import Box from "@mui/material/Box";
import { Formik, FieldArray, useFormik } from "formik";
import * as Yup from "yup";
import Building from "../../../../assets/building-4.png";
import Check from "../../../../assets/check.png";
import Gps from "../../../../assets/gps.png";
import DirectBox from "../../../../assets/directbox-notif.png";
import PictureFrame from "../../../../assets/picture-frame.png";
import Layers from "../../../../assets/layer.png";
import Routing from "../../../../assets/routing.png";
export const Model = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.setShowModel(false);
  };
  const theme = useTheme();
  const sx = makeStyles(theme);
  const NationalAddress = Yup.object().shape({
    buildingnumber: Yup.string().min(0).required("Required"),
    unitnumber: Yup.string().min(0).required("Required"),

    addationalcode: Yup.string().min(0).required("Required"),
    postalcode: Yup.string().min(0).required("Required"),
    city: Yup.string().min(0).required("Required"),
    neghborhood: Yup.string().min(0).required("Required"),
    address: Yup.string().min(0).required("Required"),

    // notes: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      buildingnumber: "",
      unitnumber: "",
      addationalcode: "",
      postalcode: "",
      city: "",
      neghborhood: "",
      address: "",
    },
    validationSchema: NationalAddress,

    onSubmit: async (values, action) => {
      await formdata(values);
      // action.resetForm();
    },
  });

  const formdata = async (data) => {};
  const style = {
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    // width: 800,
    // bgcolor: "background.paper",
    // border: "2px solid #000",
    // boxShadow: 24,
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
            National Address
          </Typography>
          <Typography
            id="modal-modal-description"
            className="userSubTitle"
            sx={sx.userSubTitle}
            style={{ marginTop: "10px" }}
          >
            Edit Your Data
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                {/* <EditableDataCard
                  subTitle=" Building number"
                  title={formik.values.buildingnumber}
                /> */}
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Building}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>Building number</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="buildingnumber"
                  placeholder="Building number"
                  style={{ marginTop: "1rem" }}
                  value={formik.values.buildingnumber}
                  onChange={formik.handleChange}
                  helperText={formik.errors.buildingnumber}
                  error={formik.errors.buildingnumber}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Layers}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography> Unit Number</Typography>
                  </Grid>
                </Grid>

                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="unitnumber"
                  placeholder="Unit number"
                  value={formik.values.unitnumber}
                  onChange={formik.handleChange}
                  helperText={formik.errors.unitnumber}
                  error={formik.errors.unitnumber}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Check}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>Addational Code</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="addationalcode"
                  placeholder="Addational Code"
                  value={formik.values.addationalcode}
                  onChange={formik.handleChange}
                  helperText={formik.errors.addationalcode}
                  error={formik.errors.addationalcode}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={DirectBox}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography> Postal Code</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="postalcode"
                  placeholder="Postal Code"
                  value={formik.values.postalcode}
                  onChange={formik.handleChange}
                  helperText={formik.errors.postalcode}
                  error={formik.errors.postalcode}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img src={Gps} style={{ width: "22px", height: "22px" }} />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography> City</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="city"
                  placeholder="City"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  helperText={formik.errors.city}
                  error={formik.errors.city}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={PictureFrame}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography> Neghborhood</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="neghborhood"
                  placeholder="Neghborhood"
                  value={formik.values.neghborhood}
                  onChange={formik.handleChange}
                  helperText={formik.errors.neghborhood}
                  error={formik.errors.neghborhood}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Routing}
                      style={{ width: "22px", height: "22px" }}
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography> Address</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  // label="Email"
                  name="address"
                  placeholder="Address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  helperText={formik.errors.address}
                  error={formik.errors.address}
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
