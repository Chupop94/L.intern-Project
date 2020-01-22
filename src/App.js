import React from 'react';
import logo from './logo.svg';
import Login from './views/Login/Login';
import { Route } from 'react-router-dom';
import {Home, Footer} from './views/Main';

function App() {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route path="/Home" component={Home}/>
      <Footer></Footer>
    </div>
  );
}

export default App;
