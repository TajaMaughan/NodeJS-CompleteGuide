const express = require('express');

const app = express();

app.use('/users', (_req, res, _next) => {
  console.log('This is the second middleware!');
  res.send('<h1>This is the user page!</h1>');
})

app.use('/', (_req, res) => {
  console.log('This is the first middleware!');
  res.send('<h1>This is the homepage!</h1>');
})

app.listen(3000);

