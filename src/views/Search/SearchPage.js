// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React from "react";
import {
  makeStyles,
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  fade,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";

import Carousel from "../../Carousel/Carousel";
// 자동으로 옆으로 넘어가는 스크롤 => 실시간 검색어 순위 상태bar 같은 것

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import SelectTodayList from "../Menu/SelectTodayList";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Popup from "../../Popup/Popup";

//import SearchData from "./SearchData.js";

const useStyle = makeStyles(theme => ({
  root: {
    width: "w-screen",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
    marginLeft: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(6),
  },
  titleItem: {
    margin: theme.spacing(4, 0, 2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
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
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

function generate(element) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const SearchPage = () => {
  const pet = JSON.parse(window.sessionStorage.getItem("pet"));
  console.log(pet.name);

  const onBackButton = () => {
    window.history.back();
  };

  const handleListItemClick = () => {
    console.log("Click");
  };

  const [selectedIndex, setSelectedIndex] = React.useState(1);
  /*
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
*/
  const [dense] = React.useState(false);

  return (
    <div className={useStyle().grow}>
      <AppBar color="white" position="static" className="shadow-none">
        <Toolbar variant="dense">
          <IconButton edge="start" className={useStyle().menuButton} color="inherit" aria-label="open drawer" onClick={onBackButton}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography className={useStyle().title} variant="h6" color="inherit">
            입력
          </Typography>
          <Button>
            <img className="h-10 w-10" src="main/bone.png" alt="..."></img>
          </Button>
        </Toolbar>
        <Toolbar className="placeholder-black">
          <div className={useStyle().search}>
            <div className={useStyle().searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: useStyle().inputRoot,
                input: useStyle().inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <div className="flex justify-around">
        <Carousel></Carousel>
      </div>

      <div className={useStyle().root}>
        <Grid>
          <Grid>
            <div className={useStyle().demo}>
              <List dense={dense}>
                {generate(
                  <ListItem onClick={handleListItemClick}>
                    <ListItemAvatar>
                      <Avatar src="main/fodderex.png" alt="..." />
                    </ListItemAvatar>
                    <ListItemText primary="음식List" secondary={<React.Fragment>{"#태그 #태그 #태그"}</React.Fragment>} />
                    <Popup />
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
      <button className="select-button">새로 담기</button>
    </div>
  );
};

export default SearchPage;
