var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "AYAYA!",
    user: "Aya",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "User",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form');
});

router.post('/new', function(req, res, next) {
  let a = req.body.name;
  let b = req.body.text;
  messages.push({text: b, user: a, added: new Date()});
  res.redirect('/');
});

module.exports = router;