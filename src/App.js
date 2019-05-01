//App component is our main container,ie. all components will be imported here

import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import ShareBox from './Components/ShareBox/ShareBox';
import {news, headlines} from './utils/api';
import InfiniteScroll from "react-infinite-scroll-component";

export default class extends Component {
  state = {
      articles : [],//render this only
      remainingArticles: [],//load remaining articles on infinite scroll (limited to fifty)
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
            articles: response.articles.slice(0, 20),
            remainingArticles: response.articles.slice(21),
            firstPost: response.articles[Object.keys(response.articles)[0]],
            category
        });
    });
  }

  share = (url) => {
    this.setState({ shareActive: true, shareUrl: url})
  }

  closeShare = () => {
    this.setState({ shareActive: false, shareUrl: '' });
  }

  componentDidMount() {
      if (this.state.category === "featured") {
        headlines()
        .then(response => {
           this.setState({
            loaded: true,
            articles: response.articles.slice(0, 20), 
            remainingArticles: response.articles.slice(21), 
            firstPost: response.articles[Object.keys(response.articles)[0]]
        });
      });
    } else {
        this.searchNews(this.state.category);
      }
    }

    fetchMoreData = () => {
      // 29 more articles in 2 secs
      setTimeout(() => {
          this.setState({
            articles: this.state.articles.concat(this.state.remainingArticles)
          })
      }, 2000);
    };

  render() {
    const { loaded, articles, firstPost } = this.state;

    const loading =
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const articlesBox =
    <div>
    <ArticleLarge article={firstPost} share = {this.share} />
    <ArticleGrid articles = {articles} category = {this.state.category} share = {this.share}/>;
    </div>;

    const articlesLoaded = loaded === true ? articlesBox : null;//there is also loading animation from infinite scroll feature, we don't need two xD

    return (
      <div className="App">
          <ShareBox show = {this.state.shareActive} close = {this.closeShare} url = {this.state.shareUrl} />
          <TopBar menu = {this.props.menu} search = {this.searchNews} />
          <MainHeader category = {this.state.category}/>
          
          <InfiniteScroll
           dataLength = {this.state.articles.length}
           next = {this.fetchMoreData}
           hasMore = {true}
           loader= {loading}
          >
               {articlesLoaded}
          </InfiniteScroll>
      </div>
    );
  }
}
