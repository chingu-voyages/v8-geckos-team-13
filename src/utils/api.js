import NewsAPI from 'newsapi';
import { key } from '../config.js';
const newsapi = new NewsAPI(key);

const sources = 'bbc-news,the-verge,the-new-york-times,techradar,reuters,bloomberg,associated-press,techcrunch,wired,cnn,fortune,the-economist,the-washington-post,the-wall-street-journal,time,associated-press';

const news = (input) => { return newsapi.v2.everything({
   q: input,
   sources,
   language: 'en',
   sortBy: 'relevancy',
   page: 2
  })
};

const headlines = () => { return newsapi.v2.topHeadlines({
  sources,
  language: 'en',
  })
};

export {
  news,
  headlines
}
