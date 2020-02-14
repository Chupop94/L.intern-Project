import React, { useState } from "react";
import {
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Avatar,
  makeStyles,
  Grid
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";

import "../../assets/sass/Menu/SelectTodayList.scss";
import SelectTodayItem from "./SelectTodayItem";

const hard_data = {
  냉장고: [
    { category: "하얀시바1", image: "/main/shiba.jpg" },
    { category: "하얀시바2", image: "/main/shiba.jpg" },
    { category: "하얀시바3", image: "/main/shiba.jpg" },
    { category: "하얀시바4", image: "/main/shiba.jpg" },
    { category: "하얀시바5", image: "/main/shiba.jpg" },
    { category: "하얀시바1", image: "/main/shiba.jpg" },
    { category: "하얀시바2", image: "/main/shiba.jpg" },
    { category: "하얀시바3", image: "/main/shiba.jpg" },
    { category: "하얀시바4", image: "/main/shiba.jpg" },
    { category: "하얀시바5", image: "/main/shiba.jpg" }
  ],
  사료: [
    { category: "검은시바1", image: "/main/shiba.jpg" },
    { category: "검은시바2", image: "/main/shiba.jpg" },
    { category: "검은시바3", image: "/main/shiba.jpg" },
    { category: "검은시바4", image: "/main/shiba.jpg" },
    { category: "검은시바5", image: "/main/shiba.jpg" }
  ],
  간식: [
    { category: "노란시바1", image: "/main/shiba.jpg" },
    { category: "노란시바2", image: "/main/shiba.jpg" },
    { category: "노란시바3", image: "/main/shiba.jpg" },
    { category: "노란시바4", image: "/main/shiba.jpg" },
    { category: "노란시바5", image: "/main/shiba.jpg" }
  ]
};

const SelectTodayList = ({ name }) => {
  const [expandTrigger, setExpandTrigger] = useState(false);

  const onTriggerExpand = e => {
    setExpandTrigger(!expandTrigger);
  };

  return (
    <div className="w-screen">
      <div className="card-list">
        <Card className="card">
          <CardContent className="back">
          <div className="card-header-div">
            <div>
              <b>{name}의</b> 냉장고
            </div>
            <div>
              <IconButton onClick={onTriggerExpand}>
                {expandTrigger ? <ExpandLess /> : <ExpandMore />}
              </IconButton>
            </div>
          </div>
            <div className="card-content">
              {hard_data["냉장고"].slice(0, 4).map((value, index) => (
                <SelectTodayItem key={index} value={value}></SelectTodayItem>
              ))}
              {expandTrigger
                ? hard_data["냉장고"]
                    .slice(4)
                    .map((value, index) => (
                      <SelectTodayItem
                        key={index}
                        value={value}
                      ></SelectTodayItem>
                    ))
                : null}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default React.memo(SelectTodayList);
