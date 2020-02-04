import React from 'react';
import Login from './views/Login/Login';
import { Route } from 'react-router-dom';
import {Home} from './views/Main';
import PetInfo from './views/Input/PetInfo';
import SelectTodayList from './views/Menu/Tests';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
      <Route path="/petInfo" component={PetInfo}/>
      <Route path="/stl" component={SelectTodayList}/>
      {
      (window.sessionStorage.getItem('member') != null)
        ? 
        <div className="div-tab-block"></div>
        : null
      }
    </div>
  );
}

export default React.memo(App);
