import React, { PureComponent } from "react";
import { FormGroup, FormLabel, FormControl } from "react-bootstrap";
import { Card, CardContent, CardHeader } from "@material-ui/core";

// css
import "../../assets/sass/Input/petinfo.scss";
import HttpConnect from "../../http/HttpConnect";

export default class Register extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      emailError: null,
      password: "",
      passwordError: null,
      name : "", // 닉네임
      age : "",
      ageError : null,
      phone : "",
      phoneError : null,
    };
  }

  // 이메일(계정) 검사
  handleLoginEmail(event) {
    this.setState({
      email: event.target.value
    });
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    re.test(event.target.value) === false && event.target.value.length > 0
      ? this.setState({
          emailError: (
            <small className="text-danger">
              이메일 형식이 맞지 않습니다. <i>john@doe.com</i>.
            </small>
          )
        })
      : this.setState({ emailError: null });
  }

  // 비밀번호 검사
  handleLoginPassword(event) {
    this.setState({
      password: event.target.value
    });

    event.target.value.length > 0 && event.target.value.length < 6
      ? this.setState({
          passwordError: (
            <small className="text-danger">
              비밀번호는 최소 6자리 이상 입력해야 합니다.
            </small>
          )
        })
      : this.setState({ passwordError: null });
  }

  // 나이 검사
  handleLoginAge = e => {
    this.setState({
        age: e.target.value
    });

    var regexp = /^[0-9]*$/;

    regexp.test(e.target.value) === false ?
        this.setState({
            ageError: (
              <small className="text-danger">
                나이는 숫자만 입력해야 합니다.
              </small>
            )
        })
    : this.setState({ageError : null});
  };

  // 전화번호 검사
  handleLoginPhone = e => {
    this.setState({
        phone : e.target.value
    });
    var regexp = /^[0-9]*$/;

    regexp.test(e.target.value) === false ?
        this.setState({
            phoneError: (
              <small className="text-danger">
                핸드폰 번호는 숫자만 입력해야 합니다.
              </small>
            )
        })
    : (e.target.value.length < 11 ?
    this.setState({
        phoneError: (
          <small className="text-danger">
            핸드폰 번호는 11자리를 반드시 입력해야 합니다.
          </small>
        )
    }) :
    this.setState({phoneError : null}));
  };

  // 이름 변경
  handleLoginName = e => {
      this.setState({
          name : e.target.value
      });
  }

   //필수입력 값이 제대로 채워져있는지 확인. (없으면 0, 모두 있으면 1)
   onCheckForm = () => {
    if(this.state.emailError != null || 
        this.state.passwordError != null || 
        this.state.name === '' ||
        this.state.ageError != null || 
        this.state.phoneError != null) {
      return 0;
    }
    return 1;
  };

  // 데이터 전송
  submitMemberData = (e) => {
    const checkform = this.onCheckForm();

    if(checkform === 0) {
      alert("필수 입력칸이 비었거나, 잘못 입력되었습니다.");
      return;
    }

    const http = new HttpConnect();
    http.url = "/member/insert";
    // JSON.parse(window.sessionStorage.getItem('member')).member_No,
    http.data = JSON.stringify({
      name : this.state.name,
      age : this.state.age,
      phoneNum : this.state.phone,
      email : this.state.email,
      password : this.state.password
    });

    console.log(http.data);

    http.getCallData().then(data => {
      console.log(data);

      if (data === 1 ){
        alert("회원가입에 성공했습니다. !");
        window.location.href='/';
      } else {
        alert("회원가입에 실패했습니다. !");
      }
    });
  }

  render() {
    return (
      <Card>
      <CardHeader 
      title="회원가입"
      />
        <div className="float-right mr-1">
        <span className="star">*</span>는 필수입력
      </div>
      <CardContent>
        <FormGroup>
          <FormLabel>
            이메일 주소(계정) <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email}
            onChange={event => this.handleLoginEmail(event)}
          />
          {this.state.emailError}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            비밀번호 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="password"
            name="password"
            value={this.state.password}
            onChange={event => this.handleLoginPassword(event)}
          />
          {this.state.passwordError}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            이름 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="name"
            value={this.state.name}
            onChange={event => this.handleLoginName(event)}
          />
        </FormGroup>
        <FormGroup>
          <FormLabel>
            나이 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="age"
            value={this.state.age}
            onChange={event => this.handleLoginAge(event)}
          />
          {this.state.ageError}
        </FormGroup>
        <FormGroup>
          <FormLabel>
            핸드폰 번호 <span className="star">*</span>
          </FormLabel>
          <FormControl
            type="text"
            name="phone"
            maxLength="11"
            value={this.state.phone}
            onChange={event => this.handleLoginPhone(event)}
          />
          {this.state.phoneError}
        </FormGroup>
        <FormGroup className="text-center pt-10">
          <button className="button button1" onClick={event => this.submitMemberData(event)}>입력완료</button>
        </FormGroup>
        </CardContent>
      </Card>
    );
  }
}
