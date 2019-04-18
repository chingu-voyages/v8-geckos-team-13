//App component is our main container,ie. all components will be imported here

import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import {news, headlines} from './utils/api';

export default class extends Component {
  state = {
      articles : [],
      loaded: false,
      category: this.props.category
  }

  searchNews = (input, category = this.state.category) => {
    news(input)
    .then(response => {
        this.setState({
            loaded: true,
            articles: response.articles,
            category
        });
    });
  }

  componentDidMount() {
      if (this.state.category === "featured") {
        headlines()
        .then(response => {
          this.setState({
              loaded: true,
              articles: response.articles,
        })
      })
    } else {
        this.searchNews(this.state.category)
      }
    }

  render() {
    const { loaded, articles } = this.state;
    return (
      <div className="App">
          <TopBar menu = {this.props.menu} search = {this.searchNews} />
          <MainHeader category = {this.state.category}/>
          <ArticleLarge />
          <ArticleGrid articles = {articles} category = {this.state.category} loaded = {loaded}/>
      </div>
    );
  }
}
