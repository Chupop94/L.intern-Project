import React, { useState, useRef, useEffect } from "react";
import { makeStyles, Grid, ListItem, Button, ListItemText, Avatar, IconButton, Divider, Table, TableBody, TableRow, TableHead, TableCell } from "@material-ui/core";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import FavoriteIcon from "@material-ui/icons/Favorite";

import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";

//css
import "../../assets/sass/Compare/Second.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

const useStyle = makeStyles(theme => ({
  tablecell: {
    width:"33.3vw"
  },
  avatar : {
    position: "relative",
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: -theme.spacing(5),
    boxShadow: "1px 0 10px #cccccc",
    left:"50%",
  },
  avatar2 : {
    position: "relative",
    width: theme.spacing(8),
    height: theme.spacing(8),
    boxShadow: "1px 0 10px #cccccc",
  },
  cellcolor : {
    background:"#ECECEC"
  }
}));

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

var index = 0;

export default function CompareSecond() {
  const s_data = JSON.parse(window.sessionStorage.getItem(`standard`));
  const c_data = JSON.parse(window.sessionStorage.getItem(`compare`));
  const onPopup = useRef();
  const [popNUm, setpopNum] = useState(0);
  const [current_data, setCurrentData] = useState(c_data[0]);
  const classes = useStyle();

  const onPopupClick = index => {
    setpopNum(index);
    onPopup.current.instance.show();
  };

  //방향을 통해 다음 이미지로 수정
  const indexControl = (value) => {
    if(index === 0 && value === -1)
      index = c_data.length - 1;
    else if (index === (c_data.length - 1) && value === 1) {
      index = 0
    } else
     index = index + value;

     console.log("현 인덱스", index);
    handleCurrentData();
  }

  //데이터 수정
  const handleCurrentData = () => {
    Object.keys(c_data).some((key) => {
      if(Number.parseInt(key) === index) {
        setCurrentData(c_data[key]);
        return true;
      }
    });
  };

  const splitTag = (key, cdata) => {
    var data = cdata.food_tag;
    if(key === 1)
      data = cdata.item_analyze;

    var arr = data.split('#');
    console.log(arr);
    return arr;
  };

  return (
    <div className="second">
    <Headbar title="비교하기" badge={false}></Headbar>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell component="th" className={classes.tablecell}></TableCell>
          <TableCell component="th" align="center" className={classes.tablecell}>
          <Avatar src={"/data/" + s_data.food_no + ".png"} className={classes.avatar}/><br/>
          <span className="txt-sub">{s_data.distributor}</span><br/>
          <div className="txt_line">{s_data.food_name}<br/></div>
          하트
          </TableCell>
          <TableCell component="th" align="center" className={classes.tablecell}>
          <div className="flex items-center justify-between">
          <IoIosArrowBack onClick={()=> indexControl(-1)} />
          <Avatar src={"/data/" + current_data.food_no + ".png"} className={classes.avatar2}/>
          <IoIosArrowForward onClick={()=> indexControl(1)} />
          </div>
          <br/>
          <span className="txt-sub">{current_data.distributor}</span><br/>
          <div className="txt_line">{current_data.food_name}<br/></div>
          하트
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow className={classes.cellcolor}>
          <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>제품 가격</b></span></TableCell>
          <TableCell align="center" ><span className="txt-main">{s_data.price}원 ({s_data.kgram}kg)</span><span className="txt-sub"><br/>100g당 {s_data.gramper}원</span></TableCell>
          <TableCell align="center" ><span className="txt-main">{current_data.price}원 ({current_data.kgram}kg)</span><span className="txt-sub"><br/>100g당 {current_data.gramper}원</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>예상 사용기간</b></span></TableCell>
        <TableCell align="center"><span className="txt-main">{s_data.period}일<br/>(일일 권장량 {s_data.daily_amount}g)</span></TableCell>
        <TableCell align="center"><span className="txt-main">{current_data.period}일<br/>(일일 권장량 {current_data.daily_amount}g)</span></TableCell>
        </TableRow>
        <TableRow className={classes.cellcolor}>
        <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>주 원료</b></span></TableCell>
        <TableCell align="center" ><span className="txt-main">{splitTag(0, s_data).map((value, i) => {
          if(i === 0)
            return null;
          return (
            <span key={i}>{value}<br/></span>
          )
        })}</span></TableCell>
        <TableCell align="center" ><span className="txt-main">{splitTag(0, current_data).map((value, i) => {
          if(i === 0)
            return null;
          return (
            <span key={i}>{value}<br/></span>
          )
        })}</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>주 성분 분석</b></span></TableCell>
        <TableCell align="center" ><span className="txt-main">{splitTag(1, s_data).map((value, i) => {
          return (
            <span key={i}>{value}<br/></span>
          )
        })}</span></TableCell>
        <TableCell align="center" ><span className="txt-main">{splitTag(1, current_data).map((value, i) => {
          return (
            <span key={i}>{value}<br/></span>
          )
        })}</span></TableCell>
        </TableRow>
        <TableRow className={classes.cellcolor}>
        <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>제품 주의사항</b></span></TableCell>
        <TableCell align="center" ><span className="txt-main">{s_data.attention}</span></TableCell>
        <TableCell align="center" ><span className="txt-main">{current_data.attention}</span></TableCell>
        </TableRow>
        <TableRow>
        <TableCell component="th" scope="row" align="center"><span className="txt-main"><b>제품 특징</b></span></TableCell>
        <TableCell align="center" ><span className="txt-main">{s_data.feature}</span></TableCell>
        <TableCell align="center" ><span className="txt-main">{current_data.feature}</span></TableCell>
        </TableRow>
      </TableBody>
    </Table>
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
    </div>
  );
}
