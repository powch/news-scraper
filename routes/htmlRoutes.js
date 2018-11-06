const db = require('../models');

module.exports = app => {
  app.get('/home', (req, res) => {
    db.Article.find().populate('comment')
      .then(articles => res.render('home', { articles }));
  });
};
