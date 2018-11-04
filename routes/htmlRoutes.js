const db = require('../models');
const axios = require('axios');
const createArticles = require('../helpers/createArticle');

module.exports = app => {
  app.get('/home', (req, res) => {
    db.Article.find()
      .then(articles => res.render('home', { articles }));
  });
};
