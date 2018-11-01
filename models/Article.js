const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  headline: {
    type: String,
    required: 'Headline is required'
  },
  summary: {
    type: String,
    required: 'Summary is required'
  },
  url: {
    type: String,
    required: 'URL is required',
    match: [
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      'Please enter a valid URL'
    ]
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;