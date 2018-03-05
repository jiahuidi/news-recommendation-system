const express = require('express');
const path = require('path');
// const favicon = require('serve-favicon');

const index = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use(favicon(path.join(__dirname, '../client/build', 'favicon.ico')));
app.use('/static', express.static(path.join(__dirname, '../client/build/static')));

app.use('/', index);

// catch 404 
app.use(function(req, res, next) {
  res.status(404);
});

module.exports = app;
