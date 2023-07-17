const express = require('express');
const router = express.Router();
const placesCtrl = require('../controllers/places');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.post('/itineraries/:itineraryId/destinations/:destinationId/places', ensureLoggedIn, placesCtrl.create);

module.exports = router;