const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  label: {
    type: String,
    required: 'Label is required'
  },
  title: {
    type: String,
    required: 'Title is required'
  },
  url: {
    type: String,
    required: 'Description is required',
    match: [
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
      'Please enter a valid URL'
    ]
  },
  description: {
    type: String,
    required: 'Description is required'
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;