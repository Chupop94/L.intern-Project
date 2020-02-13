import React from 'react';
import Login from './views/Login/Login';
import { Route } from 'react-router-dom';
import {Home} from './views/Main';
import PetInfo from './views/Input/PetInfo';
import SearchPage from './views/Search/SearchPage';
import UserPage from './views/User/UserPage';
import Register from './views/Input/Register';
import ListPage from './views/ListPage/ListPage';
import InputPage from './views/Search/InputPage';
import Compare from './views/Compare/ComparePage';

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
      <Route path="/InputPage" component={InputPage} />
      <Route path="/Compare" component={Compare} />
      {
      (window.sessionStorage.getItem('pet') != null)
        ? 
        <div className="div-tab-block"></div>
        : null
      }
    </div>
  );
}

export default React.memo(App);