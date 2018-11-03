const axios = require('axios');
const createArticles = require('../helpers/createArticle');
const updateArticle = require('../helpers/updateArticle');

module.exports = app => {
  app.get('/scrape', (req, res) => {
    axios
      .get('https://news.blizzard.com/en-us')
      .then(response => {
        createArticles(response);
      });
  });
};
