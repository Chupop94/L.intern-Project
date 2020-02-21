import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import "../../assets/sass/Search/InputPage.scss";

const useStyles = makeStyles(theme => ({
  large: {
    textAlign: "center",
    left:"50%",
    marginLeft: -theme.spacing(2.5)
  }
}));

const InputCategory = ({ title, data }) => {
  const classes = useStyles();
  return (
    <div>
      <div className="text-lg pl-4">
        <b>{title}</b>
      </div>
      <div className="category-div">
        {Object.keys(data).map(key => (
          <div className="category-box">
            <ul key={data[key].id}>
              <li>
                <Avatar className={classes.large} src={data[key].icon} />
              </li>
              <li>{data[key].name}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputCategory;
