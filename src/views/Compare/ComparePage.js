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

import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ExposurePlus1Icon from "@material-ui/icons/ExposurePlus1";
import ExposureNeg1Icon from "@material-ui/icons/ExposureNeg1";
import ExposureZeroIcon from "@material-ui/icons/ExposureZero";
import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";

import Carousel from "../../Carousel/Carousel";

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
    marginLeft: theme.spacing(9),
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
}));

const defaultProps = {
  bgcolor: "background.paper",
  borderColor: "text.primary",
  m: 1,
  border: 1,
  style: { width: "3rem", height: "3rem" },
};
/*
function generate(element) {
  return [0, 1, 2, 3].map(value =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
*/

const btn = [
  {
    text: "먹은 음식 담기",
    icon: "",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: " 담기 완료! ",
      });
    },
  },
];

const ComparePage = () => {
  const [index, setIndex] = useState(1);
  const [checked, setChecked] = React.useState([1]);
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = useState(0);
  const onPopup = useRef();

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

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const onBackButton = () => {
    window.history.back();
  };

  const onPopupClick = index => {
    console.log(index);
    setIndex(index);
    onPopup.current.instance.show();
  };

  return (
    <div className={useStyle().grow}>
      <AppBar color="white" position="static" className="shadow-none">
        <Toolbar variant="dense">
          <IconButton edge="start" className={useStyle().menuButton} color="inherit" aria-label="open drawer" onClick={onBackButton}>
            <ArrowBackIosIcon />
          </IconButton>
          <Typography className={useStyle().title} variant="h6" color="inherit">
            담은목록
          </Typography>
          <div className="mt-3">
            <Badge color="secondary" badgeContent={count}>
              <img className="h-10 w-10" src="main/bone.png" alt="..." />
            </Badge>
          </div>
        </Toolbar>
      </AppBar>

      <div className={useStyle().root}>
        <Grid>
          <Grid>
            <div className={useStyle().demo}>
              <List>
                {data.map(value => {
                  const labelId = `checkbox-list-secondary-label-${value}`;
                  return (
                    <ListItem key={value.id}>
                      <ListItemAvatar>
                        <Avatar src="main/fodderex.png" alt="..." />
                      </ListItemAvatar>
                      <ListItemText primary="맛있는 음식List" secondary={<React.Fragment>{"#태그 #태그 #태그"}</React.Fragment>} />
                      <ListItemSecondaryAction className="items-start">
                        <Checkbox
                          edge="end"
                          onChange={handleToggle(value)}
                          checked={checked.indexOf(value) !== -1}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  );
                })}
                <Button size="large" variant="contained" color="primary">
                  등록하기
                </Button>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ComparePage;

/**
 *   <mobiscroll.Popup ref={onPopup} display="bottom" className="mbsc-justify-content-around">
                <div>
                  <div className="mbsc-row" className="-mr-16">
                    <div className="mbsc-col">
                      <Grid container>
                        <Grid item xs>
                          <Box component="button" className="text-center " borderRadius="50%" {...defaultProps} onClick={() => setCount(-1)}>
                            <ExposureNeg1Icon fontSize="small" />
                          </Box>
                        </Grid>
                        <Grid item xs>
                          <Box component="button" className="text-center " borderRadius="50%" {...defaultProps} onClick={() => setCount(0)}>
                            <ExposureZeroIcon fontSize="small" />
                          </Box>
                        </Grid>
                        <Grid item xs>
                          <Box component="button" className="text-center " borderRadius="50%" {...defaultProps} onClick={() => setCount(+1)}>
                            <ExposurePlus1Icon fontSize="small" />
                          </Box>
                        </Grid>
                      </Grid>
                    </div>
                  </div>
                </div>
              </mobiscroll.Popup>
 */
