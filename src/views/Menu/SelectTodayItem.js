import React from "react";
import { Avatar, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7.7),
    height: theme.spacing(7.7),
    marginLeft : - theme.spacing(7.7) / 2,
  }
}));

const SelectTodayItem = ({ value }) => {
  return (
    <div className="menu-item">
        <ul>
          <li className="menu-item-li">
            <Avatar
              src={value.image}
              className={useStyles().large}
            ></Avatar>
          </li>
          <p />
          <li>{value.category}</li>
        </ul>
    </div>
  );
};

export default React.memo(SelectTodayItem);
