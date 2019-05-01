//this folders purpose is only to import and render the App component
import React from 'react';
import {render} from 'react-dom';//i use destructuring whenever i can- if it confuses you just use the syntax u are comfortable with
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import error from './Components/Error/Error';


const menu = ['featured', 'technology', 'news', 'entertainment', 'design', 'health'];
const options = menu.map(route => {
  return <Route
    exact path = {`/${route}`}
    key = {route}
    render={(props) => <App {...props} category = {route} menu = {menu} />}
  />
})
const routing = (
  <Router>
    <>
      <Switch>
      <Route
      exact path = "/"
      key = "home"
      render={(props) => <App {...props} category = "featured" menu = {menu}/>}
      />
      {options}
      <Route
      exact path = "/search"
      key = "search"
      render={(props) => <App {...props} category = "search" menu = {menu}/>}
      />
      <Route component = {error}/>
      </Switch>
    </>
  </Router>
)

render(routing, document.getElementById('root'));
