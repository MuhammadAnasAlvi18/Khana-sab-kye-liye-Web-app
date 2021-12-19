import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "../DrawerComponent/drawercomponent";
import logo from '../Assets/logo.png'

const useStyles = makeStyles((theme) => ({
    Toolbar:{
        backgroundColor:'lightgreen'
    },
    AppBar:{
        backgroundColor : 'lightgreen',
        height : 100
    },
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "green",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "green",
      fontSize:'23px',
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar className={classes.AppBar} position="static">
      <CssBaseline />
      <Toolbar className={classes.Toolbar}>
        <Typography variant="h4" className={classes.logo}>
          <img src={logo} style={{width:150 , height:150}}></img>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/request" className={classes.link}>
              Request
            </Link>
            <Link to="/accept" className={classes.link}>
              Accept
            </Link>
            <Link to="/reject" className={classes.link}>
              Reject
            </Link>
            <Link to="/manager" className={classes.link}>
              Branch Manager
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;