// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Grid } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import DrawerMenu from "./drawerMenu";

// const drawerWidth = 240;

// export function Layout({ children }) {
//   const theme = useTheme();
//   const sx = makeStyles(theme);
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Grid container>
//       <CssBaseline />
//       <Grid container style={{ position: "absolute", top: 0, left: 20 }}>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           onClick={handleDrawerOpen}
//           edge="start"
//           sx={{ mr: 2, ...(open && { display: "none" }) }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Grid>
//       <Grid container sx={sx.desktopDrawer}>
//         <Grid
//           item
//           style={{
//             width: open ? `${drawerWidth}px` : "0px",
//           }}
//         >
//           <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
//         </Grid>
//         <Grid
//           item
//           sx={{
//             width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
//           }}
//         >
//           {children}
//         </Grid>
//       </Grid>

//       <Grid container sx={sx.mobileDrawer}>
//         <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
//         {children}
//       </Grid>
//     </Grid>
//   );
// }
// const makeStyles = (theme) => ({
//   mobileDrawer: {
//     display: "none",
//     [theme.breakpoints.down("md")]: {
//       display: "flex",
//     },
//   },
//   desktopDrawer: {
//     display: "flex",
//     [theme.breakpoints.down("md")]: {
//       display: "none",
//     },
//   },
// });

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { Grid } from "@mui/material";
// import DrawerMenu from "./drawerMenu";

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export function Layout({ children }) {
//   const theme = useTheme();
//   const sx = makeStyles(theme);
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <Grid container style={{ position: "absolute", top: 0, left: 20 }}>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{ mr: 2, ...(open && { display: "none" }) }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Grid>
//         <Grid container sx={sx.desktopDrawer}>
//           <Grid
//             item
//             style={{
//               width: open ? `${drawerWidth}px` : "0px",
//             }}
//           >
//             <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
//           </Grid>
//           <Grid
//             item
//             sx={{
//               width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
//             }}
//           >
//             {children}
//           </Grid>
//         </Grid>

//         <Grid container sx={sx.mobileDrawer}>
//           <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
//           {children}
//         </Grid>
//       </Drawer>
//     </Box>
//   );
// }

// const makeStyles = (theme) => ({
//   mobileDrawer: {
//     display: "none",
//     [theme.breakpoints.down("md")]: {
//       display: "flex",
//     },
//   },
//   desktopDrawer: {
//     display: "flex",
//     [theme.breakpoints.down("md")]: {
//       display: "none",
//     },
//   },
// });

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import WalletMoney from "../../assets/wallet-money.png";
import KeySquare from "../../assets/key-square.png";
import MoneySend from "../../assets/money-send.png";
import StatusUp from "../../assets/status-up.png";
import Settings from "../../assets/setting.png";
import logoText from "../../assets/mudaraba-logotext.png";
import logo from "../../assets/mudaraba-logo.png";
import Tickets from "../../assets/ticket.png";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  minHeight: "40px",
  boxShadow: "none",
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    boxShadow: "none",
    background: "#fafbff",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export function Layout({ children }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
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
        case "/tickets":
          setValue(3);
          break;
        case "/operations":
          setValue(4);
          break;
        case "/settings":
          setValue(5);
          break;
        default:
          setValue(0);
          break;
      }
    } else {
      setValue(0);
    }
  }, [location.pathname]);
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
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Grid container sx={sx.desktopDrawer}>
        <Grid
          item
          style={{
            width: open ? `${drawerWidth}px` : "0px",
          }}
        > */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
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
          {open && (
            <img
              src={logoText}
              alt=""
              onClick={() => handlePageSwitch("/dashboard")}
              style={{ cursor: "pointer" }}
            />
          )}
        </div>
        <List sx={sx.listItemsStyle}>
          <ListItem disablePadding sx={sx.listItem}>
            <ListItemButton
              onClick={() => handlePageSwitch("/dashboard")}
              sx={value == 0 ? sx.lightButton : ""}
            >
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
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
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
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
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
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
              onClick={() => handlePageSwitch("/tickets")}
            >
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
                <img src={Tickets} alt="" />
              </ListItemIcon>

              <Typography
                style={value == 3 ? sx.lightButton : sx.listItemText}
                variant="body2"
              >
                Tickets
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={sx.listItem}>
            <ListItemButton
              sx={value == 4 ? sx.lightButton : ""}
              onClick={() => handlePageSwitch("/operations")}
            >
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
                <img src={StatusUp} alt="" />
              </ListItemIcon>

              <Typography
                style={value == 4 ? sx.lightButton : sx.listItemText}
                variant="body2"
              >
                Operations
              </Typography>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={sx.listItem}>
            <ListItemButton
              sx={value == 5 ? sx.lightButton : ""}
              onClick={() => handlePageSwitch("/settings")}
            >
              <ListItemIcon sx={open ? sx.listItemImg : sx.listItemImgClose}>
                <img src={Settings} alt="" sx={sx.listItemImg} />
              </ListItemIcon>

              <Typography
                style={value == 5 ? sx.lightButton : sx.listItemText}
                variant="body2"
              >
                Settings
              </Typography>
            </ListItemButton>
          </ListItem>
        </List>
        {/* <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      {/* </Grid>
        <Grid
          item
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          }}
        > */}
      {children}
      {/* </Grid>
      </Grid> */}
    </Box>
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
  listItemImg: {
    minWidth: "35px !important",
  },
  listItemImgClose: {
    minWidth: "60px !important",
  },
});
