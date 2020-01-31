import React, { Component, PureComponent } from "react";
import { FormGroup, FormControl, FormLabel, Button } from "react-bootstrap";
import HttpConnect from "../../http/HttpConnect";
import { Card, CardContent, Container } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import KakaoLoginProps from "react-kakao-login";

import styled from "styled-components";
//css
import "../../assets/sass/Login/login.scss";

//PureComponent : 컴포넌트 최적화
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

  // Google Login
  responseGoogle = res => {
    this.setState({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
  };

  // Kakao Login
  // Google Login
  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname,
      provider: "kakao",
    });
  };

  // L
  responseFail = err => {
    console.error(err);
  };

  handleLoginEmail(event) {
    this.setState({
      emailLogin: event.target.value,
    });
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(event.target.value) === false && event.target.value.length > 0
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              이메일 형식이 맞지 않습니다. <i>john@doe.com</i>.
            </small>
          ),
        })
      : this.setState({ emailErrorLogin: null });
  }
  handleLoginPassword(event) {
    this.setState({
      passwordLogin: event.target.value,
    });

    event.target.value.length > 0 && event.target.value.length < 6
      ? this.setState({
          passwordErrorLogin: <small className="text-danger">비밀번호는 최소 6자리 이상 입력해야 합니다.</small>,
        })
      : this.setState({ passwordErrorLogin: null });
  }

  /*
   * 로그인 실패 시 Input 창을 모두 비워주는 메서드
   */
  clearInput = () => {
    this.setState({
      emailLogin: "",
      passwordLogin: "",
    });
  };

  /*
   * 로그인 시도
   * email : 아이디, password : 비밀번호
   */
  getLogin = () => {
    const http = new HttpConnect();

    http.url = "/member/login";

    http.data = JSON.stringify({
      email: this.state.emailLogin,
      password: this.state.passwordLogin,
    });

    http.getCallData().then(data => {
      console.log(data);

      // return 된 데이터가 '' (null)일 경우 아이디/비밀번호가 틀린 것으로 판정.
      if (data === "") {
        this.clearInput();
        alert("로그인에 실패했습니다. 아이디/비밀번호를 확인 해 주세요.");
      } else {
        //유저 정보를 sessionStorage(로컬)에 저장
        window.sessionStorage.setItem(`member`, JSON.stringify(data));

        //유저 정보를 바탕으로 펫 정보를 가져옴
        this.getPetData(data.memberNo);
      }
    });
  };

  /*
   * 로그인 성공 시 펫 데이터를 가져오는 메서드
   */
  getPetData = memberNo => {
    const http = new HttpConnect();

    http.url = "/pet/data";

    http.data = memberNo;

    http.getCallData().then(data => {
      console.log(data);

      // return 된 데이터가 '' (null)일 경우 펫 정보가 없는 것으로 판정.
      // (1)'처음 로그인' 또는 (2)'펫 정보를 입력하지 않았을 경우' 이동.

      if (data === "") {
        // 펫 입력하는 화면으로 이동하는 부분 (추후 추가)
      } else {
        // 펫 정보를 sessionStorage(로컬)에 저장
        window.sessionStorage.setItem(`pet`, JSON.stringify(data));
        // 홈 화면으로 이동
        window.location.href = "/Home";
      }
    });
  };

  handleLoginSubmit = () => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(this.state.emailLogin) === false
      ? this.setState({
          emailErrorLogin: (
            <small className="text-danger">
              이메일 형식이 맞지 않습니다. <i>john@doe.com</i>.
            </small>
          ),
        })
      : this.setState({ emailErrorLogin: null });
    this.state.passwordLogin.length < 6
      ? this.setState({
          passwordErrorLogin: <small className="text-danger">비밀번호는 최소 6자리 이상 입력해야 합니다.</small>,
        })
      : this.setState({ passwordErrorLogin: null });
  };
  /*
    // 로그인
    if (
      this.state.passwordErrorLogin === null &&
      this.state.emailErrorLogin === null
    ) {
      this.getLogin();
    }
  };
*/
  render() {
    return (
      <div className="scroll_fix">
        <form className="mt-40">
          <Card>
            <CardContent>
              <h2 className="text-center">Login</h2>
              <div>
                <FormGroup>
                  <FormLabel>
                    이메일 주소: <span className="star">*</span>
                  </FormLabel>
                  <FormControl type="text" name="email" onChange={event => this.handleLoginEmail(event)} />
                  {this.state.emailErrorLogin}
                </FormGroup>
                <FormGroup>
                  <FormLabel>
                    비밀번호: <span className="star">*</span>
                  </FormLabel>
                  <FormControl type="password" name="password" onChange={event => this.handleLoginPassword(event)} />
                  {this.state.passwordErrorLogin}
                </FormGroup>
                <div className="category">
                  <span className="star">*</span> 필수 입력
                </div>

                <div class="flex items-start">
                  <div class="flex-1 text-center">
                    {" "}
                    <GoogleLogin
                      clientId={process.env.React_APP_Google}
                      buttonText="Google"
                      onSuccess={this.responseGoogle}
                      onFailure={this.responseFail}
                    />
                  </div>
                  <div class="flex-1 flex-center">
                    <KakaoButton
                      jsKey={process.env.React_APP_Kakao}
                      buttonText="Kakao"
                      onSuccess={this.responseKakao}
                      onFailure={this.responseFail}
                      getProfile="true"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button variant="info" size="lg" onClick={this.handleLoginSubmit.bind(this)}>
                  로그인
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    );
  }
}

const KakaoButton = styled(KakaoLoginProps)`
  padding 0;
  width: 190px;
  height: 44px;
  line-height:44px;
  color: #783c00;
  background-color: #FFEB00;
  border : 1px solid transparent;
  border-radius: 3px;
  font-size:16px;
  font-weight: bold;
  text-align : center;
`;
