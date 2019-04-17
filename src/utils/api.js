import NewsAPI from 'newsapi';
const newsapi = new NewsAPI('caa53685d9e948c391382626e7bce93e');

export default (input) => {

 return newsapi.v2.everything({
         q: input,
         sources: 'bbc-news,the-verge',
         domains: 'bbc.co.uk, techcrunch.com',
         language: 'en',
         sortBy: 'relevancy',
         page: 2
       })
}
