import React from "react";
import { List, ListItem, ListItemText, Avatar, ListItemAvatar } from "@material-ui/core";

const EatenList = ({ value }) => {
  return (
    <List>
      {Object.keys(value).map(key => (
        <ListItem key={value[key].id} className="item" button>
          <ListItemAvatar>
            <Avatar src={value[key].img}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={value[key].name}
            secondary={
              <React.Fragment>
                {value[key].ingre}
                <br />
                {value[key].tag}
              </React.Fragment>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default EatenList;
