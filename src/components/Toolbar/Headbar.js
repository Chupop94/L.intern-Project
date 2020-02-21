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
const Headbar = ({title, count, badge, compare, back}) => {

  if (count === undefined) {
      count = 0;
  }
  if (badge === undefined) {
    badge = true;
  }
  if (back === undefined) {
    back = true;
  }

  const compareTodata = () => {
      if(compare === null || compare.length === 1) {
        alert("비교대상 아이템이 부족합니다.");
        return;
      }
    window.sessionStorage.setItem(`checkedItem`, JSON.stringify(compare));
    window.location.href="/Compare";
  }

  const classes = useStyle();
  const onBackButton = () => {
    window.history.back(-1);
  };

  return (
      <div className="toolbar">
      {console.log(compare)}
    <ThemeProvider theme={theme}>
      <AppBar color="inherit" position="static" className={classes.app_bar}>
        <Toolbar variant="dense">
        {
          back ?
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
            <b className={(badge && back) ? "mr-4" : ((back && !badge) ? "mr-12" : "" ) }>{title}</b>
          </Typography>
          {
            badge ?
            <Badge color="secondary" badgeContent={count}>
              <img className="h-8 w-8" src="/main/bone.png" alt="..." onClick={() => compareTodata()}></img>
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
