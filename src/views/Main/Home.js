import React, { PureComponent } from 'react'
import Redirect from '../../security/Redirect';
import { Button } from "react-bootstrap";
import { List, ListItem, ListItemText, ListItemIcon} from "@material-ui/core"

// css import
import '../../assets/sass/main/home.scss';
import petImg from '../../assets/img/shiba.jpg';

export default class Home extends PureComponent {
    constructor(props) {
        super(props);
        
        //로그인이 되지 않으면 자동 리다이렉트
        new Redirect().CheckRedirect();

        //날짜 및 유저 정보 설정
        const date = new Date();
        this.state = {
            member : JSON.parse(window.sessionStorage.getItem('member')),
            pet : JSON.parse(window.sessionStorage.getItem('pet')),
            month : date.getMonth() + 1,
            day : date.getDate()
        }
    }

    render() {
        return (
            <div className="home">
                <div className="top-div">
                    <div className="textBox">
                        <span className="line-1">{this.state.month}월 {this.state.day}일</span><br/>
                        <span className="line-2">{this.state.pet.name}는 지금,</span><br/>
                        <span className="line-3"> 소고기 킬러 ></span>
                    </div>
                    <div className="imgBox">
                        <img src={petImg} alt="illust Box"/>
                    </div>
                </div>
                <div className="middle-div">
                <Button variant="dark"><span>입력 BTN</span></Button>
                </div>
                
                <div className="bottom-div">
                    <List>
                        {[0, 1, 2, 3].map(value => {
                            return (
                               <ListItem>
                                   <ListItemIcon></ListItemIcon>
                                   <ListItemText>hello</ListItemText>
                                   <ListItemIcon></ListItemIcon>
                               </ListItem>
                            )
                        })}
                    </List>
                </div>
            </div>
        )
    }
}