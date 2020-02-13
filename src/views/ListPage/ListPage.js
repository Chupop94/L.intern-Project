// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React from "react";
import { makeStyles, AppBar, InputBase, Toolbar, Typography, IconButton, fade, Button } from "@material-ui/core";

import Carousel from "../../Carousel/Carousel";
// 자동으로 옆으로 넘어가는 스크롤 => 실시간 검색어 순위 상태bar 같은 것

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ButtonBase from "@material-ui/core/ButtonBase";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import SelectTodayList from "../Menu/SelectTodayList";

import Popup from "../../Popup/Popup";

//import SearchData from "./SearchData.js";
const images = [
  {
    url: "main/smile.png",
    title: "",
    width: "40%",
  },
];

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
    position: "relative",
    border: "1px",
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(11),
  },
  search: {
    position: "relative",
    outlineColor: "black",
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
    outlineColor: "black",
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
    <div className="w-screen">
      <AppBar position="static" className="shadow-none">
        <Toolbar variant="dense">
          <IconButton edge="start" className={useStyle().menuButton} color="default" aria-label="open drawer" onClick={onBackButton}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography className={useStyle().title} color="textPrimary" variant="h6">
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
              className="text-black"
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
