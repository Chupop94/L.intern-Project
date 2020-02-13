import React from "react";
import {
  makeStyles,
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  fade,
  createMuiTheme,
  ThemeProvider,
  Badge
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { IoIosArrowBack } from "react-icons/io";

import "../../assets/sass/Components/Headbar.scss"

const theme = createMuiTheme({
  palette: {
    inherit: {
      light: "#000000",
      main: "#000000",
      dark: "#000000"
    }
  }
});

const useStyle = makeStyles(theme => ({
  app_bar: {
    boxShadow: "none"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  iconflex: {
    marginLeft: theme.spacing(3)
  },
  photoButton: {
    position: "relative",
    border: "1px",
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
  search: {
    position: "relative",
    borderRadius: "9999px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    boxShadow : "1px 1px 10px #cccccc",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "primary",
    width: "100%",
    textAlign : "center"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const Headbar = ({ input, title, count }) => {
  if (count === undefined) {
      count = 0;
  }
  if (input === undefined) {
      input = false;
  }
  const classes = useStyle();
  const onBackButton = () => {
    window.history.back();
  };

  return (
      <div className="toolbar">
    <ThemeProvider theme={theme}>
      <AppBar color="inherit" position="static" className={classes.app_bar}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={onBackButton}
          >
            <IoIosArrowBack className="h-8 w-8" />
          </IconButton>
          <Typography className={classes.title} variant="h6">
            <b className="mr-4">{title}</b>
          </Typography>
          <Badge color="secondary" badgeContent={count}>
              <img className="h-8 w-8" src="main/bone.png" alt="..."></img>
          </Badge>
        </Toolbar>
        {input ? (
          <Toolbar>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                autoFocus={false}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }
                }
              />
            </div>
          </Toolbar>
        ) : null}
      </AppBar>
    </ThemeProvider>
    </div>
  );
};

export default Headbar;
