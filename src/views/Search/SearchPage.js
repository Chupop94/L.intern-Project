// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React from "react";
import { makeStyles, AppBar, InputBase, Toolbar, Typography, Button, IconButton, fade } from "@material-ui/core";

import Carousel from "../../Carousel/Carousel.js";
// 자동으로 옆으로 넘어가는 스크롤 => 실시간 검색어 순위 상태bar 같은 것

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import SelectTodayList from "../Menu/SelectTodayList";

//import SearchData from "./SearchData.js";

const useStyle = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  iconflex: {
    marginLeft: theme.spacing(3),
  },
  photoButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(11),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
}));

const SearchPage = () => {
  const onBackButton = () => {
    window.history.back();
  };
  return (
    <div className={useStyle().grow}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={useStyle().menuButton} color="inherit" aria-label="open drawer" onClick={onBackButton}>
            <ArrowBackIcon />
          </IconButton>
          <Typography className={useStyle().title} variant="h6" color="inherit">
            입력
          </Typography>
        </Toolbar>
        <Toolbar>
          <div className="flex items-center">
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
          </div>
          <div>
            <IconButton edge="start" className={useStyle().photoButton} color="inherit" aria-label="open drawer">
              <AddAPhotoIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <div className="flex justify-around">
        <Carousel></Carousel>
      </div>
      <div>
        <ul>
          <p />
          <li>
            <SelectTodayList name="냉장고"></SelectTodayList>
          </li>
          <p />
          <li>
            <SelectTodayList name="사료"></SelectTodayList>
          </li>
          <p />
          <li>
            <SelectTodayList name="간식"></SelectTodayList>
          </li>
          <p />
          <li>
            <SelectTodayList name="간식"></SelectTodayList>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchPage;
