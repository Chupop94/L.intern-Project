import React from "react";
import { makeStyles, Divider, Avatar, MenuItem, MenuList, Paper } from "@material-ui/core";

//css
import Headbar from "../../components/Toolbar/Headbar.js";
import "../../assets/sass/UserPage/user.scss";
import { options } from "../../data/PetSpecices";

import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import CategoryOutlinedIcon from "@material-ui/icons/CategoryOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import SaveOutlinedIcon from "@material-ui/icons/SaveOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";

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
    <div>
      <div className="pt-3">
        <Headbar badge={false} title="마이페이지" />
      </div>

      <div className="flex justify-center">
        <Avatar src={pet.pet_img} alt="..." className={useStyles().large} />
      </div>
      <div className="text-center">
        <h4 className="title">
          <FavoriteIcon color="secondary" />
          {pet.name}
          <FavoriteIcon color="secondary" />
          <br />
          <small>나이 : {pet.age}살</small>
          <br />
          <small>종 : {options.filter((value) => 
            value.value === pet.speciesNo
          )[0].label}</small>
        </h4>
      </div>

      <div>
        <Paper>
          <MenuList>
            <Divider />
            <MenuItem>
              <NotificationsActiveOutlinedIcon fontSize="small" />
              &nbsp; 알림
            </MenuItem>
            <Divider />
            <MenuItem>
              <CategoryOutlinedIcon fontSize="small" />
              &nbsp; 광고
            </MenuItem>
            <Divider />
            <MenuItem>
              <HelpOutlineOutlinedIcon fontSize="small" />
              &nbsp; 도움말
            </MenuItem>
            <Divider />
            <MenuItem>
              <InfoOutlinedIcon fontSize="small" />
              &nbsp; 정보
            </MenuItem>
            <Divider />
            <MenuItem onClick={onBackButton}>
              <SaveOutlinedIcon fontsize="small" />
              &nbsp; 변경사항 저장
            </MenuItem>
            <Divider />
            <MenuItem onClick={e => handleLogout()}>
              <LockOpenOutlinedIcon fontSize="small" />
              &nbsp; 로그아웃
            </MenuItem>
          </MenuList>
        </Paper>
      </div>
    </div>
  );
};

export default UserPage;
