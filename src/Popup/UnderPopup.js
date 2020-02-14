import React, { Component } from "react";
import mobiscroll from "../lib/mobiscroll/js/mobiscroll.react.min.js";
import "../lib/mobiscroll/css/mobiscroll.react.min.css";

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "light",
};

export default class Under extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [
        {
          id: 1,
          text: "취소",
        },
        {
          id: 2,
          text: "완료",
        },
      ],
    };
  }

  showList = () => {
    this.refs.list.instance.show();
  };

  showGrid = () => {
    this.refs.grid.instance.show();
    this.setState({
      count: this.state.count + 1,
    });
  };

  onListItemTap = (event, inst) => {
    this.refs.list.instance.hide();
    mobiscroll.toast({
      message: event.target.innerText + " clicked",
    });
  };

  onGridItemTap = (event, inst) => {
    this.refs.grid.instance.hide();
    mobiscroll.toast({
      message: event.target.innerText + " clicked",
    });
  };

  render() {
    return (
      <div onClick={this.countPush}>
        <div className="button-small">
          <mobiscroll.Button onClick={this.showGrid} onChange={this.countClick}>
            담기
          </mobiscroll.Button>
        </div>

        <mobiscroll.Popup ref="grid" buttons={[]} display="bottom" cssClass="mbsc-no-padding">
          <div className="mbsc-grid">
            <div className="mbsc-row flex h-10 items-center">
              <div className="mbsc-col text-center"> 총 담은 개수 : {this.state.count} 개</div>
            </div>

            <div className="mbsc-row">
              <div className="mbsc-col">
                <mobiscroll.Optionlist
                  type="menu"
                  select="single"
                  snap={true}
                  itemWidth={80}
                  display="inline"
                  cssClass="md-bottom-grid"
                  data={this.state.actions}
                  onItemTap={this.onGridItemTap}
                >
                  {this.state.options.map(function(option, index) {
                    return (
                      <mobiscroll.OptionItem key={option.id} icon={option.icon}>
                        {option.text}
                      </mobiscroll.OptionItem>
                    );
                  }, this)}
                </mobiscroll.Optionlist>
              </div>
            </div>
          </div>
        </mobiscroll.Popup>
      </div>
    );
  }
}

/**
 * <mobiscroll.Popup ref="grid" buttons={[]} display="bottom" cssClass="mbsc-no-padding">
          <mobiscroll.Optionlist
            type="menu"
            buttons={btn}
            select="single"
            snap={true}
            itemWidth={80}
            //display="inline"
            cssClass="md-bottom-grid"
            data={this.state.actions}
            onItemTap={this.onGridItemTap}
          >
            {this.state.options.map(function(option, index) {
              return (
                <mobiscroll.OptionItem key={option.id} icon={option.icon}>
                  {option.text}
                </mobiscroll.OptionItem>
              );
            }, this)}
          </mobiscroll.Optionlist>
        </mobiscroll.Popup>
 */
