import React from "react";
import { makeStyles, Card, CardContent, AppBar, Toolbar, Typography, Button, IconButton, Avatar, MenuItem, Badge } from "@material-ui/core";
import Tag from "../../tag/Tag.js";

import NotificationsIcon from "@material-ui/icons/Notifications";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
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
}));

const UserPage = () => {
  return (
    <div>
      <div className={useStyles.root}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={useStyles.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={useStyles.title}>
              UserPage
            </Typography>
            <div class="button_flex">
              <IconButton aria-label="show 11 new notifications" color="inherit">
                <Badge badgeContent={11} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>

      <div className={(styles.main, styles.mainRaised)}>
        <Avatar class="p-10" alt="..." src="main/shiba.jpg"></Avatar>
      </div>

      <Card className={useStyles.card}>
        <div class="text-center text-5xl" className={useStyles.cardtitle}>
          <b>댕댕이</b>
        </div>
        <CardContent>
          <div class="border border-solid boder-black">
            <Tag></Tag>
          </div>
          <div class="flex justify-around">
            <FacebookIcon fontSize="large" color="action" />
            <InstagramIcon fontSize="large" color="action" />
            <TwitterIcon fontSize="large" color="action" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserPage;
