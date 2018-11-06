const axios = require('axios');
const db = require('../models');
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

  app.post('/comment/:id', (req, res) => {
    db.Comment.create(req.body)
      .then(dbNote => {
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { comment: dbNote._id }, { new: true });
      })
      .then(dbArticle => {
        res.json(dbArticle);
      })
      .catch(err => res.json(err));
  });
};
