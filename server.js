const express = require('express');
const logger = require('morgan');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

const app = express();

app.engine('.hbs', exphbs({ defaultLayout: 'main' }));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.static('public'));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/newsdb';

mongoose.connect(
  MONGODB_URI,
  { useNewUrlParser: true }
);

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => console.log(`==> Listening on port: ${PORT}`));
