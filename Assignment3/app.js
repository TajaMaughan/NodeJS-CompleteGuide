const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const routes = require('./routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
