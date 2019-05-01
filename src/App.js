import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import ShareBox from './Components/ShareBox/ShareBox';
import {news, headlines} from './utils/api';
import qs from "query-string";

export default class extends Component {
  state = {
      articles : [],
      firstPost: '',
      loaded: false,
      category: this.props.category,
      shareActive: false,
      shareUrl: '',
      query: qs.parse(this.props.location.search).q
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

  getHeadlines = () => {
    headlines()
    .then(response => {
      this.setState({
        loaded: true,
        articles: response.articles,
        firstPost: response.articles[Object.keys(response.articles)[0]]
      })
    })
  }

  share = (url) => {
    this.setState({ shareActive: true, shareUrl: url})
  }

  closeShare = () => {
    this.setState({ shareActive: false, shareUrl: '' })
  }

  componentDidMount() {
      if (this.state.category === "featured") {
        this.getHeadlines();
      } else if (this.state.category === "search" && this.state.query) {
        this.searchNews(this.state.query)
      } else if (this.state.category === "search") {
        this.getHeadlines();
      } else {
        this.searchNews(this.state.category)
      }
    }

// componentDidUpdate can be used to re-fetch the news data when the search query changes (a change in search query by itself doesn't cause the component to reload with the new query), but it's also possible to retrigger the route by changing the component key every time a new search is made (see index.js)

  // componentDidUpdate(prevProps, prevState) {
  //   const newQuery = qs.parse(this.props.location.search).q
  //   const pathName = this.props.location.pathname;
  //   if (pathName === '/search' && prevState.query !== newQuery) {
  //     this.setState({ query: newQuery })
  //     this.searchNews(newQuery);
  //   };
  //   return;
  // }

  render() {
    const { loaded, articles, firstPost } = this.state;

    const loading =
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const articlesBox =
    <div>
    <ArticleLarge article={firstPost} share = {this.share} />
    <ArticleGrid articles = {articles} category = {this.state.category} share = {this.share}/>;
    </div>;

    const badSearch =
    <div className = "bad-search">
    <h3>Sorry no results found.</h3>
    </div>

    const articleSuccess = this.state.articles.length !== 0 ? articlesBox : badSearch;

    const articlesLoaded = loaded === true ? articleSuccess : loading;

    return (
      <div className="App">
          <ShareBox show = {this.state.shareActive} close = {this.closeShare} url = {this.state.shareUrl} />
          <TopBar menu = {this.props.menu}/>
          <MainHeader category = {this.state.category}/>
          {articlesLoaded}
      </div>
    );
  }
}
