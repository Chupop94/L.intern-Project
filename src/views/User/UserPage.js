import React from "react";
import { makeStyles, Divider, AppBar, Toolbar, Typography, Button, IconButton, Avatar, MenuItem, MenuList, Paper } from "@material-ui/core";

import Tag from "../../tag/Tag.js";
//Relative imports outside of src/ are not supported.
//import avatar from "../../../public/main/shiba.jpg";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
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
  card: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  cardtitle: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  large: {
    position: "relative",
    width: theme.spacing(15),
    height: theme.spacing(15),
    //marginLeft: -theme.spacing(12.5),
    border: "5px solid #E8E8E8",
  },
}));

const UserPage = () => {
  const handleLogout = () => {
    window.sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <div className={useStyles().grow}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={useStyles().menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              UserPage
            </Typography>
            <div className="flex justify-end">
              <Button simple="true">
                <FacebookIcon fontSize="small" color="action" />
              </Button>
              <Button simple="true">
                <InstagramIcon fontSize="small" color="action" />
              </Button>
              <Button simple="true">
                <TwitterIcon fontSize="small" color="action" />
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className="flex justify-center">
        <Avatar src="main/shiba.jpg" alt="..." className={useStyles().large} />
      </div>
      <div className="text-center">
        <h4 className="title">
          Name
          <br />
          <small>추가부분</small>
        </h4>
        <Divider />
        <br />
        <Tag></Tag>
        <Divider />
      </div>

      <div>
        <Paper>
          <MenuList>
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem>example</MenuItem>
            <Divider />
            <MenuItem onClick={e=> handleLogout()}>로그아웃</MenuItem>
          </MenuList>
        </Paper>
      </div>
    </div>
  );
};

export default UserPage;
