//App component is our main container,ie. all components will be imported here

import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import ShareBox from './Components/ShareBox/ShareBox';
import {news, headlines} from './utils/api';

export default class extends Component {
  state = {
      articles : [],
      firstPost: '',
      loaded: false,
      category: this.props.category,
      shareActive: false,
      shareUrl: '',
  }

  searchNews = (input, category = this.state.category) => {
    this.setState({ loaded: false, category });
    news(input)
    .then(response => {
        this.setState({
            loaded: true,
            articles: response.articles,
            firstPost: response.articles[Object.keys(response.articles)[0]],
            category
        });
    });
  }

  share = (url) => {
    this.setState({ shareActive: true, shareUrl: url})
  }

  closeShare = () => {
    this.setState({ shareActive: false, shareUrl: '' })
  }

  componentDidMount() {
      if (this.state.category === "featured") {
        headlines()
        .then(response => {
          this.setState({
            loaded: true,
            articles: response.articles,
            firstPost: response.articles[Object.keys(response.articles)[0]]
        })
      })
      } else if (this.props.query) {
        this.searchNews(this.props.query)
      } else {
        this.searchNews(this.state.category)
      }
    }

  render() {
    const { loaded, articles, firstPost } = this.state;

    const loading =
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const articlesBox =
    <div>
    <ArticleLarge article={firstPost} share = {this.share} />
    <ArticleGrid articles = {articles} category = {this.state.category} share = {this.share}/>;
    </div>;

    const articlesLoaded = loaded === true ? articlesBox : loading;

    return (
      <div className="App">
          <ShareBox show = {this.state.shareActive} close = {this.closeShare} url = {this.state.shareUrl} />
          <TopBar menu = {this.props.menu} search = {this.searchNews} />
          <MainHeader category = {this.state.category}/>
          {articlesLoaded}
      </div>
    );
  }
}
