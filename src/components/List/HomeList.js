import React from "react";
import { List, ListItem, ListItemText, Avatar, ListItemAvatar } from "@material-ui/core";
// css import
import "../../assets/sass/Main/home.scss";

const HomeList = ({ value }) => {
  return (
    <List className="list">
      {Object.keys(value).map(key => (
        <ListItem key={value[key].id} className="item" button>
          {console.log(value[key].id)}
          <ListItemAvatar>
            <Avatar src={value[key].fimg}></Avatar>
          </ListItemAvatar>
          <ListItemText className="text">{value[key].name}</ListItemText>
          <ListItemAvatar className="secondIcon">
            <Avatar src={value[key].limg}></Avatar>
          </ListItemAvatar>
        </ListItem>
      ))}
    </List>
  );
};

export default React.memo(HomeList);
