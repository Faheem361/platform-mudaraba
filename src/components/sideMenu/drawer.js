import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Walletmoney from "../../assets/wallet-money.png";
import KeySquare from "../../assets/key-square.png";
import MoneySend from "../../assets/money-send.png";
import StatusUp from "../../assets/status-up.png";
import Settings from "../../assets/setting.png";
import logoText from "../../assets/mudaraba-logotext.png";
import logo from "../../assets/mudaraba-logo.png";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@mui/material";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft({ children }) {
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
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
          <img src={logo}></img>
          <img src={logoText}></img>
        </div>
        <List className={classes.listItemsStyle}>
          {["Dashboard", "My Investment", "Wallet", "Operations"].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {/* {index === 0 ? <InboxIcon /> : <MailIcon />} */}
                    {index == 0 && <img src={KeySquare} />}
                    {index == 1 && <img src={MoneySend} />}
                    {index == 2 && <img src={Walletmoney} />}
                    {index == 3 && <img src={StatusUp} />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <div className="d-flex">
          <Button className={classes.settingButton}>
            <img src={Settings} className={classes.settingImg} />
            <span>Settings</span>
          </Button>
        </div>
      </Drawer>
      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}
      {children}
    </Box>
  );
}

const useStyles = makeStyles({
  listItemsStyle: {
    fontFamily: "Source Sans Pro !important",
    fontStyle: "normal",
    fontWeight: "600 !important",
    fontSize: "19px !important",
    lineHeight: "24px !important",
    /* identical to box height */

    letterSpacing: "-0.01em !important",

    /* Gray\ Text */

    color: "#9197B3",
  },
  "& .css-10hburv-MuiTypography-root": {
    fontFamily: "Source Sans Pro",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "19px",
    lineHeight: "24px",
    /* identical to box height */

    letterSpacing: "-0.01em",

    /* Gray\ Text */

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
  "& .css-1k455el": {
    display: "none",
  },
});
