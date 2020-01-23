import React, { Component } from "react";
import Button from "components/CustomButton/CustomButton.jsx";

export default class Footer extends Component {
  render() {
    return (
      <div className="fixed_footer">
        <div className="button_flex">
          <Button fill>홈</Button>
          <Button fill>검색</Button>
          <Button fill>분석</Button>
          <Button fill>마이</Button>
        </div>
      </div>
    );
  }
}
