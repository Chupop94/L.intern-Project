import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

export default class Home extends Component {
    userdata = null;

    constructor(props) {
        super(props);
        //userdata 가져오는 부분 테스트
        this.userdata = JSON.parse(window.sessionStorage.getItem('user'));
    }

    LogOut = (e) => {
        window.sessionStorage.clear();
        window.location.href="/";
    }

    render() {
        return (
            <div>
            ID : {this.userdata.username}<br/>
            PW : {this.userdata.password}<br/>
            로그아웃 : <Button onClick={this.LogOut}>Logout</Button>
            </div>
        )
    }
}