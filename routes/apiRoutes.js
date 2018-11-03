const db = require('../models');
const axios = require('axios');
const cheerio = require('cheerio');
const createArticle = require('../helpers/createArticle');

module.exports = app => {
  app.get('/scrape', (req, res) => {
    axios.get('https://news.blizzard.com/en-us').then(response => {
      
      createArticle(response);
    });
  });
};
