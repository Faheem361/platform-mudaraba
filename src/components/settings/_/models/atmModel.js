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
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Check from "../../../../assets/check.png";
import Bank from "../../../../assets/bank.png";
import Profile from "../../../../assets/profile.png";

export const ATMmodel = (props) => {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    props.setATMShowModel(false);
  };
  const theme = useTheme();
  const sx = makeStyles(theme);
  const NationalAddress = Yup.object().shape({
    iban: Yup.string().min(0).required("Required"),
    abn: Yup.string().min(0).required("Required"),
    cleintName: Yup.string().min(0).required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      iban: "",
      abn: "",
      cleintName: "",
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
            Bank Account
          </Typography>
          <Typography
            id="modal-modal-description"
            className="userSubTitle"
            sx={sx.userSubTitle}
            style={{ marginTop: "10px" }}
          >
            Edit Your Bank Account
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Check}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>IBAN</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  name="iban"
                  placeholder="IBAN"
                  style={{ marginTop: "1rem" }}
                  value={formik.values.iban}
                  onChange={formik.handleChange}
                  helperText={formik.errors.iban}
                  error={formik.errors.iban}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Bank}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>Bank name</Typography>
                  </Grid>
                </Grid>

                <CssTextField
                  variant="outlined"
                  fullWidth
                  name="abn"
                  placeholder="ABN"
                  value={formik.values.abn}
                  onChange={formik.handleChange}
                  helperText={formik.errors.abn}
                  error={formik.errors.abn}
                  style={{ marginTop: "1rem" }}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1} sx={sx.flexCenter}>
                    <img
                      src={Profile}
                      style={{ width: "22px", height: "22px" }}
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8} sx={sx.flexStart}>
                    <Typography>Clint name</Typography>
                  </Grid>
                </Grid>
                <CssTextField
                  variant="outlined"
                  fullWidth
                  name="cleintName"
                  placeholder="Client Name"
                  value={formik.values.cleintName}
                  onChange={formik.handleChange}
                  helperText={formik.errors.cleintName}
                  error={formik.errors.cleintName}
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
