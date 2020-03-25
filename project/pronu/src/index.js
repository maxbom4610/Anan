import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Bisec from './Bisec';
import False from './False';
import New from './New';
import One from './One'
import { BrowserRouter, Switch, Route } from 'react-router-dom'



ReactDOM.render((
  <BrowserRouter>
    <Switch path="/">
      <App />
    </Switch>
    <Switch>
      <Route path="/Bisec">
        <Bisec />
      </Route>
      <Route path="/False">
        <False />
      </Route>
      <Route path="/New">
        <New />
      </Route>
      <Route path  = "/One">
        <One />
      </Route>
    </Switch>
  </BrowserRouter>
), document.getElementById('root'))




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
