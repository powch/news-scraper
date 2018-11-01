const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger('dev'));
app.use(express.static('public'));

require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);

app.listen(PORT, () => console.log(`==> Listening on port: ${PORT}`));