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
import { useLocation, useNavigate } from "react-router-dom";
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
        case "performance":
          setValue(2);
          break;
        case "performance":
          setValue(3);
          break;
        case "setting":
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
          <ListItemButton
            onClick={() => handlePageSwitch("/dashboard")}
            sx={value == 0 ? sx.lightButton : ""}
          >
            <ListItemIcon>
              <img src={KeySquare} alt="" />
            </ListItemIcon>

            <ListItemText>Dashboard</ListItemText>
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

            <ListItemText> My Investment</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton sx={value == 2 ? sx.lightButton : ""}>
            <ListItemIcon>
              <img src={WalletMoney} alt="" />
            </ListItemIcon>

            <ListItemText>Wallet</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton sx={value == 3 ? sx.lightButton : ""}>
            <ListItemIcon>
              <img src={StatusUp} alt="" />
            </ListItemIcon>

            <ListItemText>Operations</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={sx.listItem}>
          <ListItemButton sx={value == 4 ? sx.lightButton : ""}>
            <ListItemIcon>
              <img src={Settings} style={sx.settingImg} alt="" />
            </ListItemIcon>

            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <div className="d-flex">
        <Button sx={sx.settingButton}>
          <img src={Settings} style={sx.settingImg} alt="" />
          <span>Settings</span>
        </Button>
      </div> */}
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
  lightButton: {
    background: "linear-gradient(0deg, #00E2A1, #00E2A1), #00B1FF",
    // width: "200px",
    // height: "46px",
    color: "#fff",
  },
  settingImg: {
    marginRight: "5px",
  },
  listItem: {
    paddingTop: "20px",
  },
});
