const db = require('../models');

module.exports = (app) => {

  app.get('/', (req, res) => {
    db.Article.find()
      .then(articles => {
        console.log(articles);
        res.render('home', {articles});
      });
  });

};