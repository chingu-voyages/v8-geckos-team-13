//App component is our main container,ie. all components will be imported here

import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import news from './utils/api';


//u use 'default' keyword only when ur exporting ONE thing, and u don't need to name it, because 'default' allows you to name ur modules freely at place of ur import
//for example; i can say: import MyCoolModule from './App.js', regardles of the name in the App.js (when there is one) file xD (hope this is good explanation xD)
//practice: in index.js file try to change import App from './App'; to ' import whateverYouWant from ./App.js'
export default class extends Component {
  state = {
      articles : [],
      loaded: false
  }


  componentDidMount(){
      news('technology')//you can do this in a few ways, what you wanna control is the argument of the function, if its dinamycal u would need a helper function, but be carefull..i haven't had the time to do everytthing, but u should have enough to get you going
          .then(response => { //the componentDidMount is Reacts (built in) lifecycle method, it runs after the render method.So when u change the state, the render method (and all dependencies) gets trigered automatocally..it reacts!!
              this.setState({
                  loaded: true,//i set the load for testing purposes, and left it for ur testing purposes ;)
                  articles: response.articles
              });
          });
  }
  render() {
    const menu = ['FEATURED', 'TECHNOLOGY', 'NEWS', 'ENTERTAINMENT', 'DESIGN', 'HEALTH'];
    const { loaded, articles } = this.state;
    return (
      <div className="App">
          <TopBar menu = {menu} />
          <MainHeader />
          <ArticleLarge />
          <ArticleGrid articles = {articles} loaded = {loaded}/>
      </div>
    );
  }
}
