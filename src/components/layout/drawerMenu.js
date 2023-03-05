import * as React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  IconButton,
  List,
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import WalletMoney from "../../assets/wallet-money.png";
import KeySquare from "../../assets/key-square.png";
import MoneySend from "../../assets/money-send.png";
import StatusUp from "../../assets/status-up.png";
import Settings from "../../assets/setting.png";
import logoText from "../../assets/mudaraba-logotext.png";
import logo from "../../assets/mudaraba-logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import { DataCard } from "../settings/_";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  justifyContent: "flex-end",
}));

export default function DrawerMenu({ open, handleDrawerClose }) {
  const navigate = useNavigate();
  const theme = useTheme();
  let location = useLocation();
  const sx = makeStyles(theme);
  const [value, setValue] = React.useState(0);
  const handlePageSwitch = (props) => {
    navigate(props);
  };
  React.useEffect(() => {
    let path = location.pathname;
    if (path) {
      switch (path.toLowerCase()) {
        case "/dashboard":
          setValue(0);
          break;
        case "/my-investment":
          setValue(1);
          break;
        case "/my-investment/":
          setValue(1);
          break;
        case "/wallet":
          setValue(2);
          break;
        case "/operations":
          setValue(3);
          break;
        case "/settings":
          setValue(4);
          break;
        default:
          setValue(0);
          break;
      }
    } else {
      setValue(0);
    }
  }, [location.pathname]);
  return (
    <Drawer
      sx={{
        width: open ? drawerWidth : "0px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <>
              <ChevronLeftIcon />
            </>
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <div>
        <img
          src={logo}
          alt=""
          onClick={() => handlePageSwitch("/dashboard")}
          style={{ cursor: "pointer" }}
        />
        <img
          src={logoText}
          alt=""
          onClick={() => handlePageSwitch("/dashboard")}
          style={{ cursor: "pointer" }}
        />
      </div>
      <List sx={sx.listItemsStyle}>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton
            onClick={() => handlePageSwitch("/dashboard")}
            sx={value == 0 ? sx.lightButton : ""}
          >
            <ListItemIcon>
              <img src={KeySquare} alt="" />
            </ListItemIcon>

            <Typography
              style={value == 0 ? sx.lightButton : sx.listItemText}
              variant="body2"
            >
              Dashboard
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton
            onClick={() => handlePageSwitch("/my-investment")}
            sx={value == 1 ? sx.lightButton : ""}
          >
            <ListItemIcon>
              <img src={MoneySend} alt="" />
            </ListItemIcon>

            <Typography
              style={value == 1 ? sx.lightButton : sx.listItemText}
              variant="body2"
            >
              My Investment
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton
            sx={value == 2 ? sx.lightButton : ""}
            onClick={() => handlePageSwitch("/wallet")}
          >
            <ListItemIcon>
              <img src={WalletMoney} alt="" />
            </ListItemIcon>

            <Typography
              style={value == 2 ? sx.lightButton : sx.listItemText}
              variant="body2"
            >
              Wallet
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton
            sx={value == 3 ? sx.lightButton : ""}
            onClick={() => handlePageSwitch("/operations")}
          >
            <ListItemIcon>
              <img src={StatusUp} alt="" />
            </ListItemIcon>

            <Typography
              style={value == 3 ? sx.lightButton : sx.listItemText}
              variant="body2"
            >
              Operations
            </Typography>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton
            sx={value == 4 ? sx.lightButton : ""}
            onClick={() => handlePageSwitch("/settings")}
          >
            <ListItemIcon>
              <img src={Settings} style={sx.settingImg} alt="" />
            </ListItemIcon>

            <Typography
              style={value == 4 ? sx.lightButton : sx.listItemText}
              variant="body2"
            >
              Settings
            </Typography>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <Grid container>
        <Grid item xs={12} md={8} lg={8}>
          <Grid container spacing={2}>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
                width: "20px",
              }}
            >
              <Avatar className="avatar " />
            </Grid>
            <Grid
              item
              xs={7}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                m: 2,
              }}
            >
              <Grid container>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <span className="userTitle">Saleh Muhammad</span>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                  }}
                >
                  <span className="userSubTitle">@salah_Mohamed</span>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid> */}
    </Drawer>
  );
}
const makeStyles = (theme) => ({
  listItemsStyle: {
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "19px !important",
    lineHeight: "24px !important",
    letterSpacing: "-0.01em !important",
    color: "#9197B3",
  },
  lightButton: {
    background: "linear-gradient(0deg, #00E2A1, #00E2A1), #00B1FF",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    color: "#fff",
  },
  settingImg: {
    marginRight: "5px",
  },
  listItem: {
    paddingTop: "20px",
  },
  listItemText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "17px",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    color: "#9197B3",
  },
});
