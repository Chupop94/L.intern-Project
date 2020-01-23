import React, { Component } from "react";

import { FormGroup, FormControl, FormLabel } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import HttpConnect from "../../http/HttpConnect";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /// Login
      emailLogin: "",
      emailErrorLogin: null,
      passwordLogin: "",
      passwordErrorLogin: null
    };

    window.sessionStorage.clear();
  }

  handleLoginEmail(event) {
    this.setState({
      emailLogin: event.target.value
    });
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(event.target.value) === false && event.target.value.length > 0
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              이메일 형식이 맞지 않습니다. <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailErrorLogin: null });
  }
  handleLoginPassword(event) {
    this.setState({
      passwordLogin: event.target.value
    });

    event.target.value.length > 0 && event.target.value.length < 6
      ? this.setState({
          passwordErrorLogin: (
            <small className="text-danger">
              비밀번호는 최소 6자리 이상 입력해야 합니다.
            </small>
          )
        })
      : this.setState({ passwordErrorLogin: null });
  }

  handleLoginSubmit = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(this.state.emailLogin) === false
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              이메일 형식이 맞지 않습니다. <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailErrorLogin: null });
    this.state.passwordLogin.length < 6
      ? this.setState({
          passwordErrorLogin: (
            <small className="text-danger">
              비밀번호는 최소 6자리 이상 입력해야 합니다.
            </small>
          )
        })
      : this.setState({ passwordErrorLogin: null });

    if (
      this.state.passwordErrorLogin === null &&
      this.state.emailErrorLogin === null
    ) {
      console.log("pass");
      const http = new HttpConnect();
      http.url = "/demoBoard/login";
      http.data = JSON.stringify({
        username: this.state.emailLogin,
        password: this.state.passwordLogin
      });

      //데이터 통신 후 해당 데이터를 저장
      //username : 아이디, password : 비밀번호
      http.getCallData().then(data => {
        //return 된 데이터가 0일경우 아이디/비밀번호가 틀린 것으로 판정
        if (data === 0) {
          alert(
            "로그인에 실패했습니다. 아이디/비밀번호를 확인 해 주세요."
          );
        } else {
          window.sessionStorage.setItem(`user`, JSON.stringify(data));
          window.location.href = "/Home";
        }
      });
    }
  };

  render() {
    return (
      <div className="scroll_fix">
        <form className="test">
          <Card
            textCenter
            title="Login"
            content={
              <div>
                <FormGroup>
                  <FormLabel>
                    이메일 주소: <span className="star">*</span>
                  </FormLabel>
                  <FormControl
                    type="text"
                    name="email"
                    onChange={event => this.handleLoginEmail(event)}
                  />
                  {this.state.emailErrorLogin}
                </FormGroup>
                <FormGroup>
                  <FormLabel>
                    비밀번호: <span className="star">*</span>
                  </FormLabel>
                  <FormControl
                    type="password"
                    name="password"
                    onChange={event => this.handleLoginPassword(event)}
                  />
                  {this.state.passwordErrorLogin}
                </FormGroup>
                <div className="category">
                  <span className="star">*</span> 필수 입력
                </div>
              </div>
            }
            ftTextCenter
            legend={
              <Button size="lg" onClick={this.handleLoginSubmit.bind(this)}>
                로그인
              </Button>
            }
          />
        </form>
      </div>
    );
  }
}
