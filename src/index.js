//this folders purpose is only to import and render the App component
import React from 'react';
import {render} from 'react-dom';//i use destructuring whenever i can- if it confuses you just use the syntax u are comfortable with
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './index.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';


const menu = ['featured', 'technology', 'news', 'entertainment', 'design', 'health'];
const options = menu.slice(1).map(route => {
  return <Route
    path = {`/${route}`}
    key = {route}
    render={(props) => <App {...props} category = {route} menu = {menu} />}
  />
})
const routing = (
  <Router>
    <div>
      <Route exact path = "/" render={(props) => <App {...props} category = "top" menu = {menu}/>} />
      <Route path = "/featured" render={(props) => <App {...props} category = "top" menu = {menu}/>} />
      {options}
    </div>
  </Router>
)

render(routing, document.getElementById('root'));
