import React, { Component } from "react";
import mobiscroll from "../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../lib/mobiscroll/css/mobiscroll.react.min.css";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

const btn = [
  {
    text: "먹은 음식 담기",
    icon: "",
    handler: function(event, inst) {
      inst.hide();
      mobiscroll.toast({
        message: " 담기 완료! ",
      });
    },
  },
];

export default class pop extends Component {
  showPopup = () => {
    this.refs.CusttomPopup.instance.show();
  };

  render() {
    return (
      <div>
        <div className="mbsc-btn-group-block">
          <mobiscroll.Button id="showPopup" onClick={this.showPopup}>
            {" "}
            >{" "}
          </mobiscroll.Button>
        </div>

        <mobiscroll.Popup ref="CusttomPopup" display="center" button={btn}>
          <div className="mbsc-align-center mbsc-padding">
            <img src="main/fodderex.png" alt="..." />
            <h3>이름</h3>
            <p>
              설명1 <br /> 설명2
            </p>
          </div>
        </mobiscroll.Popup>
      </div>
    );
  }
}
