// 홈_입력_검색tab을 눌렀을 때, 밑에서 키보드가 나오는 상황
import React, { useState, useRef } from "react";
import {
  makeStyles,
  AppBar,
  InputBase,
  Toolbar,
  Typography,
  IconButton,
  fade,
  Grid,
  List,
  Button,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Badge,
} from "@material-ui/core";

import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";

import Carousel from "../../Carousel/Carousel";
// 자동으로 옆으로 넘어가는 스크롤 => 실시간 검색어 순위 상태bar 같은 것

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

//css
import "../../assets/sass/Search/searchPage.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

const useStyle = makeStyles(theme => ({
  root: {
    width: "w-screen",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
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
  demo: {
    backgroundColor: theme.palette.background.paper,
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
  buttonroot: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const btn = [
  {
    text: "취소",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "취소 선택",
      });
    },
  },
  {
    text: "확인",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "확인 선택",
      });
    },
  },
];

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "3rem", height: "3rem" },
};

const SearchPage = () => {
  const onBackButton = () => {
    window.history.back();
  };

  const [data, setData] = useState([
    {
      id: 1,
      data: "일번1",
      count: 0,
    },
    {
      id: 2,
      data: "일번2",
      count: 0,
    },
    {
      id: 3,
      data: "일번3",
      count: 0,
    },
    {
      id: 4,
      data: "일번4",
      count: 0,
    },
    {
      id: 5,
      data: "일번5",
      count: 0,
    },
    {
      id: 6,
      data: "일번6",
      count: 0,
    },
  ]);

  const [index, setIndex] = useState(1);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  /*
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
*/
  const [dense, setDense] = useState(false);
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(0);
  const onPopup = useRef();
  const upPopup = useRef();

  //Todo : List를 클릭하면 Popup과 함께 List가 재랜더링 되는 것을 알 수 있음. 최적화 추후 예정
  const onPopupClick = index => {
    console.log(index);
    setIndex(index);
    onPopup.current.instance.show();
  };

  const upPopupClick = index => {
    setIndex(index);
    upPopup.current.instance.show();
    setTotal(total + 1);
    console.log(total);
  };

  return (
    <div className={useStyle().grow}>
      <Headbar title="입력" input={true}></Headbar>
      <div className="flex justify-around">
        <Carousel></Carousel>
      </div>

      <div className={useStyle().root}>
        <Grid>
          <Grid>
            <div className={useStyle().demo}>
              <List>
                {data.map(value => (
                  <div className="flex items-start justify-around">
                    <ListItem key={value.id} onClick={() => onPopupClick(value.id)}>
                      <ListItemAvatar>
                        <Avatar src="main/fodderex.png" alt="..." />
                      </ListItemAvatar>
                      <ListItemText primary="음식List" secondary={<React.Fragment>{"#태그 #태그 #태그"}</React.Fragment>} />
                    </ListItem>

                    <div key={value.id} onClick={() => upPopupClick(value.id)}>
                      <Box display="flex" justifyContent="center">
                        <Box component="button" className="text-center " borderRadius="50%" {...defaultProps}>
                          <AddShoppingCartIcon />
                        </Box>
                      </Box>
                    </div>
                  </div>
                ))}
              </List>
              <mobiscroll.Popup ref={onPopup} display="center" buttons={null}>
                <div className="mbsc-align-center mbsc-padding">
                  <img src="main/fodderex.png" alt="..." />
                  <h3>생략</h3>
                  <p>
                    설명1 <br /> 설명2
                  </p>
                </div>
              </mobiscroll.Popup>

              <mobiscroll.Popup ref={upPopup} display="bottom">
                <div className="mbsc-align-center mbsc-padding">
                  <div className="mbsc-col text-center"> 총 담은 개수 : {total} 개</div>
                </div>
              </mobiscroll.Popup>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default React.memo(SearchPage);
