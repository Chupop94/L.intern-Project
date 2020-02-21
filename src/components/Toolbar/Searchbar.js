import React, { useState } from "react";
import { makeStyles, InputBase, Toolbar, fade } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import TagList from "./TagList";

const useStyle = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: "9999px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    boxShadow: "1px 1px 10px #cccccc",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "primary",
    width: "100%",
    textAlign: "center"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  }
}));

const Searchbar = ({ tag, data, handlesearch }) => {
  const [tagbox, setTagbox] = useState([]);
  const [ipt, setIpt] = useState("");
  const classes = useStyle();

  const removeTagbox = index => {
    var arr = [...tagbox];
    arr.splice(index, 1);
    setTagbox(arr);
    searchAlldata(arr.toString().replace(/,/g, " "));
  };

  const searchFood = e => {
    setIpt(e.target.value);
    searchAlldata(e.target.value);
  };

  const searchAlldata = txt => {
    console.log("온 값 : ", txt);
    var result = [];
    
    // 스페이스 간격이 있으면 간격 마다 계산
    if (txt.split(" ").length > 1) {
      txt.split(" ").map(s_txt => {
        Object.keys(data).map(key => {
          if (
            (data[key].food_name.search(s_txt) !== -1 ||
              data[key].food_tag.search(s_txt) !== -1) &&
            s_txt !== ""
          ) {
            result.push(data[key]);
            console.log("s_txt : " + s_txt);
          }
        });
      });
    } else {
      Object.keys(data).map(key => {
        if (
          (data[key].food_name.search(txt) !== -1 ||
            data[key].food_tag.search(txt) !== -1) &&
          txt !== ""
        ) {
          result.push(data[key]);
          console.log("txt : " + txt);
        }
      });
    }
    searchFilter(result);
  };

  //이중 검색 필터
  //들어가지 않은 데이터만 들어갈 수 있게 확인
  const searchFilter = (result) => {
    var arr = [];
    Object.keys(result).map(key => {
      if(arr.indexOf(result[key]) === -1) {
        arr.push(result[key]);
      }
    });

    handlesearch(arr);
  };

  //텍스트를 검색창으로 변경시키고, tag를 제거하는 방식을 적용
  const changeTagtoText = () => {
    if (tagbox.length === 0) return null;
    let arr = [...tagbox];
    arr = arr.toString().replace(/,/g, " ");
    setIpt(arr);
    setTagbox([]);
    searchAlldata(arr.toString().replace(/,/g, " "));
  };

  const updateTagbox = str => {
    if (tagbox.length === 3) {
      alert("태그는 최대 3개 입니다.");
    } else {
      setIpt("");
      setTagbox(oldArr => [...oldArr, str]);
      searchAlldata([...tagbox, str].toString().replace(/,/g, " "));
    }
  };

  return (
    <div>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder=""
            autoFocus={false}
            value={ipt}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            onChange={e => searchFood(e)}
            onClick={() => changeTagtoText()}
          />
          <div className="absolute">
          <div className="tag-list-div">
            {tagbox.length > 0
              ? tagbox.map((str, index) => (
                  <div className="tag-box" key={index}>
                    <span className="tag-item">
                      <b>{str}</b>
                    </span>
                    <span className="pr-1">
                      <button
                        className="tag-btn"
                        onClick={() => removeTagbox(index)}
                      >
                        X
                      </button>
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
        </div>
      </Toolbar>
      {tag ? <TagList updateTagbox={updateTagbox}></TagList> : null}
    </div>
  );
};

export default Searchbar;
