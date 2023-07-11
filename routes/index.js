var express = require('express');
var router = express.Router();
const passport = require('passport');

router.get('/auth/google', passport.authenticate(
  'google',
  {
    scope: ['profile', 'email'],
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

router.get('/', function(req, res, next) {
  res.redirect('/itineraries');
});

module.exports = router;
