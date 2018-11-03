const cheerio = require('cheerio');
const createCollection = require('./createCollection');

module.exports = response => {
  const $ = cheerio.load(response.data);

  $('.ArticleListItem').each((i, element) => {
    const articles = {};

    articles.url =
      'https://news.blizzard.com' +
      $(element)
        .children()
        .attr('href');

    articles.label = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children()
      .children()
      .children()
      .text();

    articles.title = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children('h3')
      .text();

    articles.description = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children('.ArticleListItem-description')
      .children('.h6')
      .text();

    createCollection(articles);
  });
};
