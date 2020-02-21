import React, { useState, useRef, useEffect } from "react";
import { withStyles, makeStyles, TableBody, TableCell, TableRow, Button, TableHead, Table, Avatar } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import FavoriteIcon from "@material-ui/icons/Favorite";

import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";

//css
import "../../assets/sass/Compare/Second.scss";
import Headbar from "../../components/Toolbar/Headbar.js";

const useStyle = makeStyles(theme => ({
  tablecell: {
    width: "33.3vw",
  },
  avatar: {
    position: "relative",
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginLeft: -theme.spacing(5),
    boxShadow: "1px 0 10px #cccccc",
    left: "50%",
  },
  avatar2: {
    position: "relative",
    width: theme.spacing(8),
    height: theme.spacing(8),
    boxShadow: "1px 0 10px #cccccc",
  },
  cellcolor: {
    background: "#ECECEC",
  },
  large: {
    position: "relative",
    width: theme.spacing(20),
    height: theme.spacing(20),
    //marginLeft: -theme.spacing(12.5),
    border: "1px solid #E8E8E8",
  },
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
  const onPopup2 = useRef();
  const [popNUm, setpopNum] = useState(0);
  const [current_data, setCurrentData] = useState(c_data[0]);
  const classes = useStyle();

  const onPopupClick = index => {
    setpopNum(index);
    onPopup.current.instance.show();
  };

  const onPopup2Click = index => {
    setpopNum(index);
    onPopup2.current.instance.show();
  };

  //방향을 통해 다음 이미지로 수정
  const indexControl = value => {
    if (index === 0 && value === -1) index = c_data.length - 1;
    else if (index === c_data.length - 1 && value === 1) {
      index = 0;
    } else index = index + value;

    console.log("현 인덱스", index);
    handleCurrentData();
  };

  //데이터 수정
  const handleCurrentData = () => {
    Object.keys(c_data).some(key => {
      if (Number.parseInt(key) === index) {
        setCurrentData(c_data[key]);
        return true;
      }
    });
  };

  const splitTag = (key, cdata) => {
    var data = cdata.food_tag;
    if (key === 1) data = cdata.item_analyze;

    var arr = data.split("#");
    console.log(arr);
    return arr;
  };

  //하트 색 변경
  const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75",
    },
    iconHover: {
      color: "#ff3d47",
    },
  })(Rating);

  return (
    <div className="second">
      <Headbar title="비교하기" badge={false}></Headbar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell component="th" className={classes.tablecell}></TableCell>
            <TableCell component="th" align="center" className={classes.tablecell}>
              <Avatar src={"/data/" + s_data.food_no + ".png"} className={classes.avatar} onClick={() => onPopupClick(s_data.food_no)} />

              <br />
              <span className="txt-sub">{s_data.distributor}</span>
              <div className="txt_line">
                {s_data.food_name}
                <br />
              </div>
            </TableCell>
            <TableCell component="th" align="center" className={classes.tablecell}>
              <div className="flex items-center justify-between">
                <IoIosArrowBack onClick={() => indexControl(-1)} />

                <Avatar
                  src={"/data/" + current_data.food_no + ".png"}
                  className={classes.avatar2}
                  onClick={() => onPopup2Click(current_data.food_no)}
                />

                <IoIosArrowForward onClick={() => indexControl(1)} />
              </div>
              <br />
              <span className="txt-sub">{current_data.distributor}</span>
              <br />
              <div className="txt_line">
                {current_data.food_name}
                <br />
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className={classes.cellcolor}>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>제품 가격</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {s_data.price}원 ({s_data.kgram}kg)
              </span>
              <span className="txt-sub">
                <br />
                100g당 {s_data.gramper}원
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {current_data.price}원 ({current_data.kgram}kg)
              </span>
              <span className="txt-sub">
                <br />
                100g당 {current_data.gramper}원
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>예상 사용기간</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {s_data.period}일<br />
                (일일 권장량 {s_data.daily_amount}g)
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {current_data.period}일<br />
                (일일 권장량 {current_data.daily_amount}g)
              </span>
            </TableCell>
          </TableRow>
          <TableRow className={classes.cellcolor}>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>주 원료</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {splitTag(0, s_data).map((value, i) => {
                  if (i === 0) return null;
                  return (
                    <span key={i}>
                      {value}
                      <br />
                    </span>
                  );
                })}
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {splitTag(0, current_data).map((value, i) => {
                  if (i === 0) return null;
                  return (
                    <span key={i}>
                      {value}
                      <br />
                    </span>
                  );
                })}
              </span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>주 성분 분석</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {splitTag(1, s_data).map((value, i) => {
                  return (
                    <span key={i}>
                      {value}
                      <br />
                    </span>
                  );
                })}
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">
                {splitTag(1, current_data).map((value, i) => {
                  return (
                    <span key={i}>
                      {value}
                      <br />
                    </span>
                  );
                })}
              </span>
            </TableCell>
          </TableRow>
          <TableRow className={classes.cellcolor}>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>제품 주의사항</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">{s_data.attention}</span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">{current_data.attention}</span>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row" align="center">
              <span className="txt-main">
                <b>제품 특징</b>
              </span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">{s_data.feature}</span>
            </TableCell>
            <TableCell align="center">
              <span className="txt-main">{current_data.feature}</span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <mobiscroll.Popup ref={onPopup} display="center" buttons={null}>
        <div className="flex justify-center">
          <Avatar src={"/data/" + s_data.food_no + ".png"} alt="..." className={useStyle().large} />
        </div>
        <div className="mbsc-align-center mbsc-padding">
          <pre>{s_data.food_name}</pre>
          <p>
            회사: {s_data.distributor} <br />
            대상: {s_data.food_category}
          </p>
          <br />
            <StyledRating
              name="customized-color"
              defaultValue={0}
              //getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              max={1}
            />
        </div>
      </mobiscroll.Popup>

      <mobiscroll.Popup ref={onPopup2} display="center" buttons={null}>
        <div className="flex justify-center">
          <Avatar src={"/data/" + current_data.food_no + ".png"} alt="..." className={useStyle().large} />
        </div>
        <div className="mbsc-align-center mbsc-padding">
          <pre>{current_data.food_name}</pre>
          <p>
            회사: {current_data.distributor} <br />
            대상: {current_data.food_category}
          </p>
          <br />
            <StyledRating
              name="customized-color"
              defaultValue={0}
              //getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              max={1}
            />
        </div>
      </mobiscroll.Popup>
    </div>
  );
}
