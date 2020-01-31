import React, { PureComponent } from "react";
import Redirect from "../../security/Redirect";
import { Button } from "react-bootstrap";
import { List, ListItem, ListItemText, Avatar, ListItemAvatar } from "@material-ui/core";

// css import
import "../../assets/sass/Main/home.scss";

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <div className="top-div">
          <div className="textBox">
            <span className="line-1">
              {this.state.month}월 {this.state.day}일
            </span>
            <br />
            <span className="line-2">{this.state.pet.name}는 지금,</span>
            <br />
            <span className="line-3">
              <b> 소고기 킬러</b> >{" "}
            </span>
          </div>
          <div className="imgBox">
            <img className="center" src="/main/shiba.jpg" alt="illust Box" />
          </div>
        </div>
        <div className="middle-div">
          <Button variant="dark">
            <span>입력 BTN</span>
          </Button>
        </div>

        <div className="bottom-div">
          <List className="list">
            {[0, 1, 2, 3, 4, 5, 6].map(value => {
              return (
                <ListItem className="item" key={value} button>
                  <ListItemAvatar>
                    <Avatar src="/main/fodderex.png"></Avatar>
                  </ListItemAvatar>
                  <ListItemText className="text">hello</ListItemText>
                  <ListItemAvatar className="secondIcon">
                    <Avatar src="/main/smile.png"></Avatar>
                  </ListItemAvatar>
                </ListItem>
              );
            })}
          </List>
        </div>
      </div>
    );
  }
}
//<th scope="row">1</th>자리에 이것을 넣으면 이미지 가능 : <UserCard avatar={avatar} name="" userName="" />
