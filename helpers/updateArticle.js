const db = require('../models');

module.exports = () => {
  db.Article.find()
    .then(current => {
      db.Article.update(current, scrape, {upsert: true, multi: true});
    })
    .catch(err => console.log(err));
  
};