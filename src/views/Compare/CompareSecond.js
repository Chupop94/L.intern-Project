import React, { useState, useRef } from "react";
import { makeStyles, Grid, ListItem, Button, ListItemText, Avatar, IconButton, Divider } from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";

import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";

//css
import "../../assets/sass/Compare/Second.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

const useStyle = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

export default function CompareSecond() {
  const s_data = JSON.parse(window.sessionStorage.getItem(`standard`));
  const c_data = JSON.parse(window.sessionStorage.getItem(`compare`));
  const onPopup = useRef();
  const [popNUm, setpopNum] = useState(0);

  const [data, setData] = useState([
    {
      id: 1,
      data: "비교값1",
    },
    {
      id: 2,
      data: "결과값1-1",
    },
    {
      id: 3,
      data: "결과값1-2",
    },

    {
      id: 4,
      data: "비교값2",
    },
    {
      id: 5,
      data: "결과값2-1",
    },
    {
      id: 6,
      data: "결과값2-2",
    },
    {
      id: 7,
      data: "비교값3",
    },
    {
      id: 8,
      data: "결과값3-1",
    },
    {
      id: 9,
      data: "결과값3-2",
    },
    {
      id: 10,
      data: "비교값4",
    },
    {
      id: 11,
      data: "결과값4-1",
    },
    {
      id: 12,
      data: "결과값4-2",
    },
    {
      id: 13,
      data: "비교값5",
    },
    {
      id: 14,
      data: "결과값5-1",
    },
    {
      id: 15,
      data: "결과값5-2",
    },
  ]);

  function FormRow(index) {
    return (
      <React.Fragment>
        {data.map(value => {
          return (
            <Grid item xs={4}>
              <ListItem key={value.id}>
                <ListItemText>
                  <h5>{value.data}</h5>
                </ListItemText>
              </ListItem>
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  const onPopupClick = index => {
    setpopNum(index);
    onPopup.current.instance.show();
  };

  return (
    <div className="second">
      <Headbar title="제품 비교하기" input={false}></Headbar>

      <div className="root">
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs className="margintop">
              <h2>제품</h2>
            </Grid>

            {data.map(value => (
              <Grid item xs>
                <div className="flex justify-around">
                  <Button onClick={() => onPopupClick(value)}>
                    <Avatar src={value.img} alt="..." className="avatar" />
                  </Button>
                </div>
                <div>
                  <h6>
                    {value.data}
                    <br />
                    <small>{value.id}</small>
                  </h6>
                </div>
              </Grid>
            ))}
            <mobiscroll.Popup ref={onPopup} display="center" buttons={null}>
              <div className="mbsc-align-center mbsc-padding">
                <img src="" alt="..." />
                <h3>생략</h3>
                <p>
                  설명1 <br /> 설명2
                </p>
                <IconButton color="secondary">
                  <FavoriteIcon />
                </IconButton>
              </div>
            </mobiscroll.Popup>
          </Grid>

          <Grid container direction="row" item xs={12} justify="space-evenly">
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
