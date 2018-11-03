const db = require('../models');
const axios = require('axios');
const createArticles = require('../helpers/createArticle');

module.exports = app => {
  app.get('/scrape', (req, res) => {
    axios
      .get('https://news.blizzard.com/en-us')
      .then(response => {
        return createArticles(response);
      })
      .then(articles => {
        console.log(articles);
      });
  });
};
