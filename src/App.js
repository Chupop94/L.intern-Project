import React from "react";
import logo from "./logo.svg";
import Login from "./views/Login/Login";
import { Route } from "react-router-dom";
import { Home, Footer } from "./views/Main";
import UserPage from "./views/User/UserPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
      <Route path="/UserPage" component={UserPage}/>
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
