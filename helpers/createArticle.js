const cheerio = require('cheerio');
const createCollection = require('./createCollection');

module.exports = response => {
  const $ = cheerio.load(response.data);

  $('.ArticleListItem').each((i, element) => {
    const Articles = {};

    Articles.url =
      'https://news.blizzard.com' +
      $(element)
        .children()
        .attr('href');

    Articles.label = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children()
      .children()
      .children()
      .text();

    Articles.title = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children('h3')
      .text();

    Articles.description = $(element)
      .children()
      .next()
      .children('.ArticleListItem-contentGrid')
      .children('.ArticleListItem-description')
      .children('.h6')
      .text();

    createCollection(Articles);
  });
};
