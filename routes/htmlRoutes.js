const db = require('../models');
const axios = require('axios');
const createArticles = require('../helpers/createArticle');

module.exports = app => {
  app.get('/home', (req, res) => {
    db.Article.find().populate('comment')
      .then(articles => res.render('home', { articles }));
  });
};
