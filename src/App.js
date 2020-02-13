import React from "react";
import Login from "./views/Login/Login";
import { Route } from "react-router-dom";
import { Home } from "./views/Main";
import PetInfo from "./views/Input/PetInfo";
import SearchPage from "./views/Search/SearchPage";
import UserPage from "./views/User/UserPage";
import Register from "./views/Input/Register";
import ListPage from "./views/ListPage/ListPage";
import Compare from "./views/Compare/ComparePage";

import Test from "./Popup/test2";

function App() {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/Register" component={Register} />
      <Route path="/PetInfo" component={PetInfo} />
      <Route path="/SearchPage" component={SearchPage} />
      <Route path="/UserPage" component={UserPage} />
      <Route path="/ListPage" component={ListPage} />
      <Route path="/Compare" component={Compare} />

      {window.sessionStorage.getItem("pet") != null ? <div className="div-tab-block"></div> : null}
    </div>
  );
}

export default React.memo(App);

/**
 *  <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
      <Route path="/Register" component={Register} />
      <Route path="/PetInfo" component={PetInfo} />
      <Route path="/SearchPage" component={SearchPage} />
      <Route path="/UserPage" component={UserPage} />
      <Route path="/ListPage" component={ListPage} />
      <Route path="/EvalPage" component={EvalPage} />
      {window.sessionStorage.getItem("pet") != null ? <div className="div-tab-block"></div> : null}
 */
