import React, { PureComponent } from "react";
import Redirect from "../../security/Redirect";
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar
} from "@material-ui/core";

// css import
import "../../assets/sass/Main/home.scss";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    //로그인이 되지 않으면 자동 리다이렉트
    new Redirect().CheckRedirect();

    //날짜 및 유저 정보 설정
    const date = new Date();
    this.state = {
      member: JSON.parse(window.sessionStorage.getItem("member")),
      pet: JSON.parse(window.sessionStorage.getItem("pet")),
      month: date.getMonth() + 1,
      day: date.getDate()
    };
  }

  onSearchPage = e => {
    window.location.href = "/SearchPage";
  };

  render() {
    return (
      <div className="home">
        <div className="top-div">
          <div className="textBox">
            <span className="line-1">
              {this.state.month}월 {this.state.day}일
            </span>
            <br />
            <span className="line-2">{this.state.pet.name}는 <span className="font-hairline">지금,</span></span>
            <br />
            <span className="line-3">
              <b> 소고기 킬러</b>>
            </span>
          </div>
          <div className="imgBox">
            <img src="/main/Home_Dog.png" alt="illust Box" />
          </div>
        </div>
        <div className="middle-div">
          <button onClick={e => this.onSearchPage(e)}>
              <img src="/main/Home_Bowl.png" alt="bowl" />
          </button>
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
