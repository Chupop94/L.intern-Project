import React, { PureComponent } from "react";
import Redirect from "../../security/Redirect";

// css import
import "../../assets/sass/Main/home.scss";
import HomeList from "../../components/List/HomeList";

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
      day: date.getDate(),
      value: [
        {
          id: 1,
          name: "개사료",
          fimg: "/main/fodderex.png",
          limg: "/main/smile.png",
        },
        {
          id: 2,
          name: "고양이 사료",
          fimg: "/main/fodderex.png",
          limg: "/main/smile.png",
        },
        {
          id: 3,
          name: "물고기 사료",
          fimg: "/main/fodderex.png",
          limg: "/main/smile.png",
        },
        {
          id: 4,
          name: "킹냥이 사료",
          fimg: "/main/fodderex.png",
          limg: "/main/smile.png",
        },
      ],
    };
  }

  onSearchPage = e => {
    window.location.href = "/ListPage";
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
            <span className="line-2">
              {this.state.pet.name}는 <span className="font-hairline">지금,</span>
            </span>
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
          <HomeList value={this.state.value}></HomeList>
        </div>
      </div>
    );
  }
}
