//this folders purpose is only to import and render the App component
import React from 'react';
import {render} from 'react-dom';//i use destructuring whenever i can- if it confuses you just use the syntax u are comfortable with
import qs from 'query-string';
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import error from './Components/Error/Error';


const menu = ['featured', 'technology', 'news', 'entertainment', 'design', 'health'];
const options = menu.slice(1).map(route => {
  return <Route
    exact path = {`/${route}`}
    key = {route}
    render={(props) => <App {...props} category = {route} menu = {menu} />}
  />
})
const query = qs.parse(window.location.search);
const routing = (
  <Router>
    <>
      <Switch>
      <Route exact path = "(/|/featured)"
      render={(props) => <App {...props} category = "featured" menu = {menu}/>} />
      {options}
      <Route exact path = "/search"
      render={(props) => <App {...props} category = "search" menu = {menu} query = {query.q}/>} />
      <Route component = {error}/>
      </Switch>
    </>
  </Router>
)

render(routing, document.getElementById('root'));
