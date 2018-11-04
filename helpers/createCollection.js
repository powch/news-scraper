const db = require('../models');

module.exports = (articles) => {
  db.Article.find()
    .then(found => {
      if (found.length !== 0) {
        for (article in articles) {
          db.Article.find({title: article.title}, (err, doc) => {
            if (!doc) {
              db.Article.insert(article);
            };
          });
        };
      } else {
        db.Article.create(articles)
          .then(dbArticles => console.log(dbArticles))
          .catch(err => console.log(err));
      }
    });
};
