import * as React from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import WalletMoney from "../../assets/wallet-money.png";
import KeySquare from "../../assets/key-square.png";
import MoneySend from "../../assets/money-send.png";
import StatusUp from "../../assets/status-up.png";
import Settings from "../../assets/setting.png";
import logoText from "../../assets/mudaraba-logotext.png";
import logo from "../../assets/mudaraba-logo.png";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";

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
  const sx = makeStyles(theme);
  const handlePageSwitch = (props) => {
    navigate(props);
  };
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
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <div style={{ marginTop: "20px" }}>
        <img src={logo} alt="" />
        <img src={logoText} alt="" />
      </div>
      <List sx={sx.listItemsStyle}>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton onClick={() => handlePageSwitch("/dashboard")}>
            <ListItemIcon>
              <img src={KeySquare} alt="" />
            </ListItemIcon>

            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton onClick={() => handlePageSwitch("/my-investment")}>
            <ListItemIcon>
              <img src={MoneySend} alt="" />
            </ListItemIcon>

            <ListItemText> My Investment</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton>
            <ListItemIcon>
              <img src={WalletMoney} alt="" />
            </ListItemIcon>

            <ListItemText>Wallet</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton>
            <ListItemIcon>
              <img src={StatusUp} alt="" />
            </ListItemIcon>

            <ListItemText>Operations</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <div className="d-flex">
        <Button sx={sx.settingButton}>
          <img src={Settings} style={sx.settingImg} alt="" />
          <span>Settings</span>
        </Button>
      </div>
    </Drawer>
  );
}
const makeStyles = (theme) => ({
  listItemsStyle: {
    fontFamily: "Source Sans Pro !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "19px !important",
    lineHeight: "24px !important",
    letterSpacing: "-0.01em !important",
    color: "#9197B3",
  },
  settingButton: {
    background: "linear-gradient(0deg, #00E2A1, #00E2A1), #00B1FF",
    borderradius: "8px",
    width: "200px",
    height: "46px",
    color: "#fff !important",
  },
  settingImg: {
    marginRight: "5px",
  },
  listItem: {
    paddingTop: "20px",
  },
});
