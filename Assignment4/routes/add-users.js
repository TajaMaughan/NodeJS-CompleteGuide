const express = require('express');
const router = express.Router();
const users = [];

router.get('/add-users', (req, res, next) => {
  res.render('add-users', {
    pageTitle: 'Add Users',
    path: '/add-users'
  });
});

router.post('/add-users', (req, res, next) => {
  users.push({ user: req.body.user });
  res.redirect('/');
});

exports.routes = router;
exports.users = users;
