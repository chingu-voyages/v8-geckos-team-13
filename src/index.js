//this folders purpose is only to import and render the App component
import React from 'react';
import {render} from 'react-dom';//i use destructuring whenever i can- if it confuses you just use the syntax u are comfortable with
import 'bootstrap/dist/css/bootstrap.css';
import './fonts.css';
import './index.css';
import App from './App';


render(<App />, document.getElementById('root'));


