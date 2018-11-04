const axios = require('axios');
const createArticles = require('../helpers/createArticle');

module.exports = app => {
  app.get('/', (req, res) => {
    axios
      .get('https://news.blizzard.com/en-us')
      .then(response => {
        createArticles(response);
        res.redirect('/home');
      });
  });
};
