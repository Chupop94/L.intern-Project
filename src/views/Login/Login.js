import React, { Component } from "react";

import {
  Grid,
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  FormLabel
} from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
          /// Login
          emailLogin: "",
          emailErrorLogin: null,
          passwordLogin: "",
          passwordErrorLogin: null,
        };
      }

    handleLoginEmail(event) {
        this.setState({
          emailLogin: event.target.value
        });
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        (re.test(event.target.value) === false && event.target.value.length > 0)
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
        
        (event.target.value.length > 0 && event.target.value.length < 6)
          ? this.setState({
              passwordErrorLogin: (
                <small className="text-danger">
                  비밀번호는 최소 6자리 이상 입력해야 합니다.
                </small>
              )
            })
          : this.setState({ passwordErrorLogin: null });
      }

      handleLoginSubmit() {
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

        

      }

  render() {
    return (
      <div className='scroll_fix'>
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
              <Button
                size='lg'
                onClick={this.handleLoginSubmit.bind(this)}
              >
                  로그인
            </Button>
            }
          />
        </form>
      </div>
    );
  }
}
