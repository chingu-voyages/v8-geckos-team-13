import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import MainHeader from './Components/MainHeader/MainHeader';
import ArticleLarge from './Components/ArticleLarge/ArticleLarge';
import ArticleGrid from './Components/ArticleGrid/ArticleGrid';
import ShareBox from './Components/ShareBox/ShareBox';
import InfiniteScroll from "react-infinite-scroll-component";
import qs from "query-string";
import axios from "axios";

export default class extends Component {
  state = {
      articles : [],
      remainingArticles: [],
      firstPost: '',
      loaded: false,
      category: this.props.category,
      shareActive: false,
      shareUrl: '',
      hasMore: true,
      query: qs.parse(this.props.location.search).q
  }

  searchNews = (input, category = this.state.category) => {
    this.setState({ loaded: false, category });
    axios(`.netlify/functions/news?q=${input}`)
    .then(response => response.data)
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

  getHeadlines = () => {
    axios('.netlify/functions/news?q=headlines')
    .then(response => response.data)
    .then(response => {
      this.setState({
        loaded: true,
        articles: response.articles.slice(1, 21),
        remainingArticles: response.articles.slice(21),
        firstPost: response.articles[Object.keys(response.articles)[0]]
      })
    })
  }

  share = (url) => {
    this.setState({ shareActive: true, shareUrl: url})
  }

  closeShare = () => {
    this.setState({ shareActive: false, shareUrl: '' });
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

  componentDidMount() {
      window.scrollTo(0,0);
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

  render() {
    const { loaded, articles, firstPost } = this.state;

    const loading =
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

    const articlesBox =
    <div>
    <ArticleLarge article={firstPost} share = {this.share} />
    <ArticleGrid articles = {articles} category = {this.state.category} share = {this.share}/>
    </div>;

    const badSearch =
    <div className = "bad-search">
    <h3>Sorry no results found.</h3>
    </div>

    const articleSuccess = this.state.articles.length !== 0 ? articlesBox : badSearch;

    const articlesLoaded = loaded === true ? articleSuccess : "";

    return (
      <div className="App">
          <ShareBox show = {this.state.shareActive} close = {this.closeShare} url = {this.state.shareUrl} />
          <TopBar menu = {this.props.menu}/>
          <MainHeader category = {this.state.category}/>

          <InfiniteScroll
           dataLength = {this.state.articles.length}
           next = {this.loadMoreArticles}
           hasMore = {this.state.hasMore}
           loader = {loading}
          >
            {articlesLoaded}
          </InfiniteScroll>
      </div>
    );
  }
}
