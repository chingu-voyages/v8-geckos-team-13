import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const sources = 'bbc-news,the-verge,the-new-york-times,techradar,reuters,associated-press,techcrunch,wired,fortune,the-economist,the-washington-post,the-wall-street-journal,time,associated-press';

const key = process.env.NEWS_KEY;

exports.handler = (event, context, callback) => {
  const { q } = event.queryStringParameters;
  if (q === 'headlines') {
    axios.get(`https://newsapi.org/v2/top-headlines?sources=${sources}&pageSize=100&language=en&apiKey=${key}`)
      .then((res) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res.data),
        });
      })
      .catch((err) => {
        callback(err);
      });
  } else {
    axios.get(`https://newsapi.org/v2/everything?sources=${sources}&q=${q}&pageSize=100&sortBy=relevancy&language=en&apiKey=${key}`)
      .then((res) => {
        callback(null, {
          statusCode: 200,
          body: JSON.stringify(res.data),
        });
      })
      .catch((err) => {
        callback(err);
      });
  }
};
