import React, { Component } from "react";
import { makeStyles, FormGroup, Divider, AppBar, Toolbar, Button, IconButton, Avatar, MenuItem, MenuList, Paper } from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";

//css
import Headbar from "../../components/Toolbar/Headbar.js";
import "../../assets/sass/UserPage/user.scss";

import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";

import { IoIosArrowBack } from "react-icons/io";

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
  app_bar: {
    boxShadow: "none",
  },
}));

const UserPage = () => {
  const pet = JSON.parse(window.sessionStorage.getItem(`pet`));

  const handleLogout = () => {
    window.sessionStorage.clear();
    window.location.href = "/";
  };

  const onBackButton = () => {
    window.history.back();
  };

  return (
    <div className="div-full">
      <h2 className="text-center text-white pt-4">
        <b>마이 페이지</b>
      </h2>

      <div>
        <div className="flex justify-center">
          <Avatar src={pet.petImg} alt="..." className={useStyles().large} />
        </div>
        <div className="text-center">
          <h4 className="title">
            {pet.name}
            <br />
            <small>나이 : {pet.age}쨜</small>
            <br />
            <small>종 : 안얄랴줌</small>
          </h4>
        </div>

        <div>
          <Paper className="div-full">
            <MenuList>
              <MenuItem>
                <SettingsOutlinedIcon fontSize="small" />
                설정
              </MenuItem>
              <Divider />
              <MenuItem>
                <NotificationsActiveOutlinedIcon fontSize="small" />
                알림
              </MenuItem>
              <Divider />
              <MenuItem>
                <CategoryOutlinedIcon fontsize="small" />
                광고
              </MenuItem>
              <Divider />
              <MenuItem>
                <HelpOutlineOutlinedIcon fontsize="small" />
                도움말
              </MenuItem>
              <Divider />
              <MenuItem>
                <InfoOutlinedIcon fontsize="small" />
                정보
              </MenuItem>
              <Divider />
              <MenuItem onClick={onBackButton}>
                <SaveOutlinedIcon fontsize="small" />
                변경사항 저장
              </MenuItem>
              <Divider />
              <MenuItem onClick={e => handleLogout()}>
                <LockOpenOutlinedIcon fontsize="small" />
                로그아웃
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
