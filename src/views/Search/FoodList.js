import React, { useRef, useState, useEffect } from "react";
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, makeStyles, withStyles } from "@material-ui/core";
import mobiscroll from "../../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../../lib/mobiscroll/css/mobiscroll.react.min.css";
import { MdCheck } from "react-icons/md";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Rating from "@material-ui/lab/Rating";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

const useStyle = makeStyles(theme => ({
  checkbox: {
    position: "relative",
    borderRadius: "9999px",
    width: "30px",
    height: "40px",
  },
}));

const btn = [
  {
    text: "취소",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "취소 선택",
      });
    },
  },
  {
    text: "확인",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: "확인 선택",
      });
    },
  },
];

const btn2 = [
];

const FoodList = ({ data, count, all, compare}) => {
  const classes = useStyle();
  const onPopup = useRef();
  const upPopup = useRef();
  const [index, setIndex] = useState(-1);
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    for (let i = 0; i < data.length; i++)
      setSelected(oldArr => [
        ...oldArr,
        {
          id: data[i].food_no,
          checked: false,
        },
      ]);
  }, []);

  const onPopupClick = index => {
    console.log(index);
    setIndex(index);
    onPopup.current.instance.show();
  };

  const handleCheckedItem = key => {
    console.log("키 : ", key);
    var arr = [...selected];
    let checked = !arr[key].checked;
    arr[key].checked = !arr[key].checked;
    setSelected(arr);
    if (checked === true) upPopup.current.instance.show();
    count(arr.filter(value => value.checked === true).length);
    compare(compareTodata(arr));
  };

  const compareTodata = (arr) => {
    var c_arr = arr;
    var c_data = [];
    if(c_arr === undefined)
      c_arr = selected;

    Object.keys(all).map(key => {
      if(c_arr[key].checked)
        c_data.push(all[key]);
    });
    return c_data;
  }
  
  const routeToCompare = () => {
    var c_data = compareTodata();
    window.sessionStorage.setItem(`checkedItem`, JSON.stringify(c_data));
    window.location.href="/Compare";
  }

  const StyledRating = withStyles({
    iconFilled: {
      color: "#ff6d75",
    },
    iconHover: {
      color: "#ff3d47",
    },
  })(Rating);

  return (
    <div className="flex justify-around">
      {console.log(selected)}
      <List>
        {Object.keys(data).map(key => (
          <div className="relatvie z-0 flex items-center justify-around">
            <ListItem key={data[key].food_no} onClick={() => onPopupClick(key)}>
              <ListItemAvatar>
                <Avatar src={"/data/" + data[key].food_no + ".png"} alt="..." />
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
              variant={selected.length > 0 ? (selected[data[key].food_no - 1].checked ? "contained" : "outlined") : "outlined"}
              color="secondary"
              onClick={() => handleCheckedItem(data[key].food_no - 1)}
            >
              {selected.length > 0 ? selected[data[key].food_no - 1].checked ? <MdCheck className="w-5 h-5" /> : "담기" : null}
            </Button>
          </div>
        ))}
      </List>
      <mobiscroll.Popup ref={onPopup} display="center">
      {index !== -1 ?
        <div className="mbsc-align-center mbsc-padding">
        <div className="flex justify-center pb-4">
          <img src={"/data/" + data[index].food_no + ".png"} alt="..." />
        </div>
          <div className="text-xs text-gray-500">{data[index].distributor}</div><br/>
          <div className="text-sm">{data[index].food_name}</div><br/>
          <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  // getLabelText={value => `${value} Heart${value !== 1 ? "s" : ""}`}
                  precision={1}
                  icon={<FavoriteIcon fontSize="inherit" />}
                  max={1}
                />
        </div>
        : null }
      </mobiscroll.Popup>

      <mobiscroll.Popup ref={upPopup} display="bottom" buttons={btn2} >
        <div className="mbsc-align-center w-screen bg-yellow-200">
          <div className="mbsc-col text-center mbsc-col">
            {selected.filter(value => value.checked === true).length > 1 ? (
              <button onClick={()=> routeToCompare()}>비교하기</button>
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
