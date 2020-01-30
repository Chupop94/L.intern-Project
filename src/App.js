import React from 'react';
import Login from './views/Login/Login';
import { Route } from 'react-router-dom';
import {Home, Footer} from './views/Main';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
      {
      (window.sessionStorage.getItem('member') != null)
        ? 
        <div className="div-tab-block"></div>
        : null
      }
    </div>
  );
}

export default App;
