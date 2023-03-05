import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import DrawerMenu from "./drawerMenu";

const drawerWidth = 240;

export function Layout({ children }) {
  const theme = useTheme();
  const sx = makeStyles(theme);
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <CssBaseline />
      <Grid container style={{ position: "absolute", top: 0, left: 20 }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
      <Grid container sx={sx.desktopDrawer}>
        <Grid
          item
          style={{
            width: open ? `${drawerWidth}px` : "0px",
          }}
        >
          <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
        </Grid>
        <Grid
          item
          sx={{
            width: open ? `calc(100% - ${drawerWidth}px)` : "100%",
          }}
        >
          {children}
        </Grid>
      </Grid>

      <Grid container sx={sx.mobileDrawer}>
        <DrawerMenu open={open} handleDrawerClose={handleDrawerClose} />
        {children}
      </Grid>
    </Grid>
  );
}
const makeStyles = (theme) => ({
  mobileDrawer: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
  desktopDrawer: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
});

// import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

// export function Layout({ children }) {
//   const { collapseSidebar } = useProSidebar();

//   return (
//     <div style={{ display: "flex", height: "100%" }}>
//       <Sidebar>
//         <Menu>
//           <MenuItem> Documentation</MenuItem>
//           <MenuItem> Calendar</MenuItem>
//           <MenuItem> E-commerce</MenuItem>
//         </Menu>
//       </Sidebar>
//       <main>
//         <button onClick={() => collapseSidebar()}>Collapse</button>
//       </main>
//     </div>
//   );
// }
