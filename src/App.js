import React from "react";
import Login from "./views/Login/Login";
import { Route } from "react-router-dom";
import { Home } from "./views/Main";
import PetInfo from "./views/Input/PetInfo";
import SearchPage from "./views/Search/SearchPage";
import UserPage from "./views/User/UserPage";
import ListPage from "./views/ListPage/ListPage";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/petInfo" component={PetInfo} />
      <Route path="/SearchPage" component={SearchPage} />
      <Route path="/UserPage" component={UserPage} />
      <Route path="/ListPage" component={ListPage} />

      {window.sessionStorage.getItem("member") != null ? <div className="div-tab-block"></div> : null}
    </div>
  );
}

export default React.memo(App);
