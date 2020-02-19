import React, { useState } from "react";
import { makeStyles, Grid, ListItem, ListItemText, Avatar, Divider } from "@material-ui/core";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//css
import "../../assets/sass/Compare/Second.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

const useStyle = makeStyles(theme => ({
  gridroot: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function CompareSecond() {
  const s_data = JSON.parse(window.sessionStorage.getItem(`standard`));
  const c_data = JSON.parse(window.sessionStorage.getItem(`compare`));

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
              <Divider orientation="vertical" flexItem />
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (

    <div className="second">

      <Headbar title="제품 비교하기" input={false}></Headbar>

      <div className="root">
        <Grid container spacing={3}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs className="margintop">
              <h2>제품</h2>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <div className="flex justify-around">
                <Avatar src="main/bone.png" alt="..." className="avatar" />
              </div>
              <div>
                <h6>
                  Name
                  <br />
                  <small>추가부분</small>
                </h6>
              </div>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <div className="flex justify-around">
                <Avatar src="main/fodderex.png" alt="..." className="avatar" />
              </div>
              <div>
                <h6>
                  Name
                  <br />
                  <small>추가부분</small>
                </h6>
              </div>
            </Grid>
          </Grid>

          <Grid container direction="row" item xs={12} justify="space-evenly">
            <FormRow />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
