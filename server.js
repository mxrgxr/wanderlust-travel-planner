var createError = require('http-errors');
var express = require('express');
var path = require('path');
var methodOverride = require('method-override');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var { Client } = require('@googlemaps/google-maps-services-js');

require('dotenv').config();
require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const itinerariesRouter = require('./routes/itineraries');
const destinationsRouter = require('./routes/destinations');
const flightsRouter = require('./routes/flights');

const hotelsRouter = require('./routes/hotels');
const placesRouter = require('./routes/places');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());

app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter);
app.use('/itineraries', itinerariesRouter);
app.use('/', destinationsRouter);
app.use('/', hotelsRouter);
app.use('/', placesRouter);
app.use('/', flightsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
