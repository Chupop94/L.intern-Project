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
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  Box,
  Badge,
  Checkbox,
  FormControlLabel,
  ListItemSecondaryAction,
  Button,
} from "@material-ui/core";

//css
import "../../assets/sass/Compare/First.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

import ControlPointIcon from "@material-ui/icons/ControlPoint";
import ClearIcon from "@material-ui/icons/Clear";

const useStyle = makeStyles(theme => ({
  ButtonMiddle: {
    width: 200,
    height: 100,
    display: "flex",
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "21rem", height: "6rem" },
};

export default function ComparePage() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [isActive, setActive] = useState(false);
  const [topBlock, setBlock] = useState(false);
  const [isCompare, setCompare] = useState(false);

  const [data, setData] = useState([
    {
      id: 1,
      data: "일번1",
    },
    {
      id: 2,
      data: "일번2",
    },
    {
      id: 3,
      data: "일번3",
    },
    {
      id: 4,
      data: "일번4",
    },
    {
      id: 5,
      data: "일번5",
    },
    {
      id: 6,
      data: "일번6",
    },
  ]);

  // 담기버튼이 나오면서 해당 list의 index 값을 넘김
  const showListClick = index => {
    console.log(index);
    setIndex(index);
    setBlock(true);
  };

  const hideListClick = () => {
    setBlock(false);
  };

  // 선택한 List의 값이 나올 예정, 현재 index값만 나옴
  const handleShow = () => {
    setActive(true);
  };

  const handleHide = () => {
    setActive(false);
    setCompare(true);
  };

  const onCompareSecond = () => {
    window.location.href = "/CompareSecond";
  };

  return (
    <div className="first">
      <Headbar title="입력" input={false}></Headbar>

      {/* // 
        1. 선택을 하지 않았을때 비교하고싶은 사료 등록하고 
        2. 기준 사료를 선택을 하면 -> 기준사료 리스트가 box안으로
        3. 함께 비교할 사료를 선택
      // */}
      <div className={useStyle().ButtonMiddle}>
        {topBlock ? (
          <Box justifyContent="center">
            <Box className="boxchange" borderRadius={16} {...defaultProps}>
              <ListItemAvatar>
                <Avatar className="avatar" src="main/fodderex.png" alt="..." />
              </ListItemAvatar>
              <ListItemText primary={index.data} secondary={<React.Fragment>{"#태그 #태그 #태그"}</React.Fragment>} />

              <Button className="button" size="small" variant="contained" onClick={handleHide}>
                비교사료 추가
              </Button>
              <IconButton>
                <ClearIcon fontsize="small" className="clear" onClick={hideListClick} />
              </IconButton>
            </Box>
          </Box>
        ) : (
          <Box display="flex" justifyContent="center">
            <Box component="button" className="topbox" borderRadius={16} {...defaultProps} onClick={handleShow}>
              <ControlPointIcon />
              <h6>비교하고 싶은 사료를 등록하세요.</h6>
            </Box>
          </Box>
        )}
      </div>

      <div>
        <Grid>
          <Grid>
            <div>
              <List>
                {data.map(value => {
                  return (
                    <ListItem key={value.id}>
                      <ListItemAvatar>
                        <Avatar className="avatar" src="main/fodderex.png" alt="..." />
                      </ListItemAvatar>
                      <ListItemText primary={value.data} secondary={<React.Fragment>{"#태그 #태그 #태그"}</React.Fragment>} />

                      {isActive && (
                        <ListItemSecondaryAction className="items-start">
                          <Button variant="contained" className="button" size="medium" onClick={() => showListClick(value)}>
                            담기
                          </Button>
                        </ListItemSecondaryAction>
                      )}

                      {isCompare && (
                        <ListItemSecondaryAction className="items-start">
                          <Button variant="contained" className="button" size="medium" onClick={onCompareSecond}>
                            비교
                          </Button>
                        </ListItemSecondaryAction>
                      )}
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

//export default ComparePage;
