import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('caa53685d9e948c391382626e7bce93e');

const news = (input) => { return newsapi.v2.everything({
   q: input,
   sources: 'bbc-news,the-verge,the-new-york-times,techradar,reuters,bloomberg,associated-press,techcrunch,wired',
   language: 'en',
   sortBy: 'relevancy',
   page: 2
  })
};

const headlines = () => { return newsapi.v2.topHeadlines({
  language: 'en',
  })
};

export {
  news,
  headlines
}
