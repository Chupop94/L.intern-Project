import React, { PureComponent } from "react";
import { Fab, IconButton } from "@material-ui/core";
import {
  AiOutlineUser,
  AiOutlineLineChart,
  AiFillHome,
  AiOutlinePlus
} from "react-icons/ai";
import { GoSearch } from "react-icons/go";

export default class Footer extends PureComponent {
  handleMovePage = num => {
    switch (num) {
      case 1:
        window.location.href = "/Home";
        break;
      case 2:
        window.location.href = "/";
        break;
      case 3:
        window.location.href = "/";
        break;
      case 4:
        window.location.href = "/UserPage";
        break;
      case 5:
        window.location.href = "/SearchPage";
        break;
      default:
        break;
    }
  };

  getLocationColorHome = () => {
    // 홈 화면에 있는 경우
    if (window.location.href.indexOf("/Home") === -1) {
      return (
        <ul>
          <li>
            <AiFillHome />
          </li>
          <li className="text-xs pt-2">홈</li>
        </ul>
      );
    } else {
      return (
        <ul className="orange-color">
          <li>
            <AiFillHome />
          </li>
          <li className="text-xs pt-2">홈</li>
        </ul>
      );
    }
  };

  getCheckPage = location => {
    if (window.location.href.indexOf(location) === -1) {
      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="fixed_footer">
        <div className="button_flex">
          <IconButton
            className="tab-item"
            onClick={e => this.handleMovePage(1)}
          >
            <ul className={this.getCheckPage("Home") ? "orange-color" : null}>
              <li>
                <AiFillHome />
              </li>
              <li className="text-xs pt-2">홈</li>
            </ul>
          </IconButton>
          <IconButton
            className="tab-item"
            onClick={e => this.handleMovePage(2)}
          >
            <ul
              className={this.getCheckPage("/Search") ? "orange-color" : null}
            >
              <li>
                <GoSearch />
              </li>
              <li className="text-xs pt-2">검색</li>
            </ul>
          </IconButton>
          <button className="middle-button" onClick={e => this.handleMovePage(5)}>
            <div className="plus-icon-div">
              <AiOutlinePlus size="40px" />
            </div>
          </button>
          <IconButton
            className="tab-item"
            onClick={e => this.handleMovePage(3)}
          >
            <ul
              className={this.getCheckPage("/Analysis") ? "orange-color" : null}
            >
              <li>
                <AiOutlineLineChart />
              </li>
              <li className="text-xs pt-2">분석</li>
            </ul>
          </IconButton>
          <IconButton
            className="tab-item"
            onClick={e => this.handleMovePage(4)}
          >
            <ul
              className={this.getCheckPage("/UserPage") ? "orange-color" : null}
            >
              <li>
                <AiOutlineUser />
              </li>
              <li className="text-xs pt-2">MY</li>
            </ul>
          </IconButton>
        </div>
      </div>
    );
  }
}
