import React, { useRef, useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  makeStyles
} from "@material-ui/core";
import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";
import { MdCheck } from "react-icons/md";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light"
};

const useStyle = makeStyles(theme => ({
  checkbox: {
    position: "relative",
    borderRadius: "9999px",
    width: "30px",
    height: "40px"
  }
}));

const btn = [
  {
    text: "취소",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "취소 선택"
      });
    }
  },
  {
    text: "확인",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "확인 선택"
      });
    }
  }
];

const FoodList = ({ data, popup, count }) => {
  const classes = useStyle();
  const onPopup = useRef();
  const upPopup = useRef();
  const [index, setIndex] = useState(1);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      setSelected(oldArr => [
        ...oldArr,
        {
          id: data[i].food_no,
          checked: false
        }
      ]);
    }
  }, []);

  const onPopupClick = index => {
    console.log(index);
    setIndex(index);
    onPopup.current.instance.show();
  };

  const handleCheckedItem = key => {
    var arr = [...selected];
    let checked = !arr[key].checked;
    arr[key].checked = !arr[key].checked;
    setSelected(arr);
    if (checked === true) upPopup.current.instance.show();
    count(arr.filter(value => value.checked === true).length);
  };

  return (
    <div className="flex justify-around">
      <List>
        {Object.keys(data).map(key => (
          <div className="relatvie z-0 flex items-center justify-around">
            <ListItem key={data[key].food_no} onClick={() => onPopupClick(key)}>
              <ListItemAvatar>
                <Avatar src="main/fodderex.png" alt="..." />
              </ListItemAvatar>
              <ListItemText
                primary={data[key].food_name}
                secondary={
                  <React.Fragment>
                    {data[key].food_category}
                    <br />
                    {data[key].food_tag}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Button
              className={classes.checkbox}
              variant={
                selected.length > 0
                  ? selected[key].checked
                    ? "contained"
                    : "outlined"
                  : "outlined"
              }
              color="secondary"
              onClick={() => handleCheckedItem(key)}
            >
              {selected.length > 0 ? (
                selected[key].checked ? (
                  <MdCheck className="w-5 h-5" />
                ) : (
                  "담기"
                )
              ) : null}
            </Button>
          </div>
        ))}
      </List>
      <mobiscroll.Popup ref={onPopup} display="center" buttons={null}>
        <div className="mbsc-align-center mbsc-padding">
          <img src="main/fodderex.png" alt="..." />
          <h3>생략</h3>
          <p>
            설명1 <br /> 설명2
          </p>
        </div>
      </mobiscroll.Popup>

      <mobiscroll.Popup ref={upPopup} display="bottom" buttons={btn}>
        <div className="mbsc-align-center mbsc-padding">
          <div className="mbsc-col text-center mbsc-col">
            {selected.filter(value => value.checked === true).length > 1 ? (
              <button>비교하기</button>
            ) : (
              <span>
                추가 선택 필요
                <br />
                (2개 이상 선택하세요.)
              </span>
            )}
          </div>
        </div>
      </mobiscroll.Popup>
    </div>
  );
};

export default FoodList;
