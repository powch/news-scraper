const db = require('../models');

module.exports = (Articles) => {
  db.Article.find()
    .then(found => {
      if (found.length !== 0) {
        for (article in Articles) {
          db.Article.find({title: article.title}, (err, doc) => {
            if (!doc) {
              db.Article.insert(article);
            }
          });
        }
      } else {
        db.Article.create(Articles)
          .then(dbArticles => console.log(dbArticles))
          .catch(err => console.log(err));
      }
    });
};
