//App component is our main container,ie. all components will be imported here

import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';

//u use 'default' keyword only when ur exporting ONE thing, and u don't need to name it, because 'default' allows you to name ur modules freely at place of ur import
//for example; i can say: import MyCoolModule from './App.js', regardles of the name in the App.js (when there is one) file xD (hope this is good explanation xD)
//practice: in index.js file try to change import App from './App'; to ' import whateverYouWant from ./App.js'
export default class extends Component {
  render() {
    return (
      <div className="App">
          <TopBar />
          <MainHeader />
          <ArticleLarge />
          <ArticleGrid />
      </div>
    );
  }
}
