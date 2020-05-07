var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var sslRedirect = require('heroku-ssl-redirect');

var membersRouter = require('./routes/members');

var app = express();

// enable ssl redirect
// app.use(sslRedirect());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/members', membersRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;