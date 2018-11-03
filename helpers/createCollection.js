const db = require('../models');

module.exports = (articles) => {
  db.Article.create(articles)
    .then(dbArticles => console.log(dbArticles))
    .catch(err => console.log(err));
};
