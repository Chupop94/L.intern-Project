import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import FormInputs from "components/FormInputs/FormInputs.jsx";
import UserCard from "components/Card/UserCard.jsx";
//import Button from "components/CustomButton/CustomButton.jsx";
import avatar from "assets/img/puppy.jpg";
import { Pane, Text, Heading, Button, Menu, TextInput } from "evergreen-ui";
//https://evergreen.segment.com/components/layout-primitives 참고 바람

export default class UserPage extends Component {
  render() {
    return (
      <div className="main-content">
        <Row>
          <Col>
            <Pane display="flex" justifyContent="space-between" padding={5} background="tint2" borderRadius={3}>
              <TextInput width="60%" height={38} placeholder="Search.." />
              <Button marginRight={16}>확인</Button>
              <Button appearance="primary">설정</Button>
            </Pane>
          </Col>
          <Col md={100}>
            <UserCard
              bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
              avatar={avatar}
              name="댕댕이"
              userName="핑크젤리"
              description={
                <span>
                  "아무거나
                  <br />
                  적어보자
                  <br />
                  다데기"
                </span>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Pane borderBottom display="felx" alignitems="stretch" background="yellowTint">
              <Menu>
                <Menu.Group>
                  <Menu.Item>설정</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>공지사항</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>로그아웃</Menu.Item>
                  <Menu.Divider />
                  <Menu.Item>회원탈퇴</Menu.Item>
                </Menu.Group>
                <Menu.Divider />
              </Menu>
            </Pane>
          </Col>
        </Row>
      </div>
    );
  }
}
