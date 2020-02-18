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
import Searchbar from "./Searchbar";

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
    boxShadow: "none",
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
  }
}));

/*
title : Head Toolbar의 이름
count : 뼈다귀 badge 수정 개수
*/
const Headbar = ({title, count, badge}) => {

  if (count === undefined) {
      count = 0;
  }
  if (badge === undefined) {
    badge = true;
  }

  const classes = useStyle();
  const onBackButton = () => {
    window.history.back();
  };

  return (
      <div className="toolbar">
      {console.log(count)}
    <ThemeProvider theme={theme}>
      <AppBar color="inherit" position="static" className={classes.app_bar}>
        <Toolbar variant="dense">
        {
          badge ?
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={onBackButton}
          >
            <IoIosArrowBack className="h-8 w-8" />
          </IconButton>
          : null
        }

          <Typography className={classes.title} variant="h6">
            <b className={badge ? "mr-4" : ""}>{title}</b>
          </Typography>
          {
            badge ?
            <Badge color="secondary" badgeContent={count}>
              <img className="h-8 w-8" src="main/bone.png" alt="..."></img>
          </Badge>
          : null
          }
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </div>
  );
};

export default Headbar;
