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
      remainingArticles: [],//load remaining articles on infinite scroll (limited to 100)
      firstPost: '',
      loaded: false,
      category: this.props.category,
      shareActive: false,
      shareUrl: '',
      hasMore: true,
  }

  searchNews = (input, category = this.state.category) => {
    this.setState({ loaded: false, category });
    news(input)
    .then(response => {
        this.setState({
            loaded: true,
            articles: response.articles.slice(1, 21),
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
            articles: response.articles.slice(1, 21),
            remainingArticles: response.articles.slice(21),
            firstPost: response.articles[Object.keys(response.articles)[0]]
        });
      });
    } else {
        this.searchNews(this.state.category);
      }
    }

  loadMoreArticles = () => {
      if (this.state.remainingArticles.length) {
        setTimeout(() => {
          this.setState(prevState => ({
            articles: prevState.articles.concat(prevState.remainingArticles.slice(0, 8)),
            remainingArticles: prevState.remainingArticles.slice(9)
          }))
        }, 1000)
      } else {
        this.setState({hasMore: false})
      }
    };

  render() {
    const { loaded, articles, firstPost } = this.state;

    const loading =
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const articlesBox =
    <div>
    <ArticleLarge article={firstPost} share = {this.share} />
    <ArticleGrid articles = {articles} category = {this.state.category} share = {this.share}/>
    </div>;

    const articlesLoaded = loaded === true ? articlesBox : null;// we still need this for when the articles initially load, the infinite scroll loader is for subsequent articles

    return (
      <div className="App">
          <ShareBox show = {this.state.shareActive} close = {this.closeShare} url = {this.state.shareUrl} />
          <TopBar menu = {this.props.menu} search = {this.searchNews} />
          <MainHeader category = {this.state.category}/>

          <InfiniteScroll
           dataLength = {this.state.articles.length}
           next = {this.loadMoreArticles}
           hasMore = {this.state.hasMore}
           loader= {loading}
          >
            {articlesLoaded}
          </InfiniteScroll>
      </div>
    );
  }
}
