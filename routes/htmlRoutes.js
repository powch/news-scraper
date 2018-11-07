const db = require('../models');

module.exports = app => {
  app.get('/home', (req, res) => {
    db.Article.find()
      .then(articles => res.render('home', { articles }));
  });
};
