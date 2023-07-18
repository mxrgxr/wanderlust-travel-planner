const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/itineraries/:itineraryId/destinations/:destinationId/flights/new', ensureLoggedIn, flightsCtrl.new);
router.post('/itineraries/:itineraryId/destinations/:destinationId/flights', ensureLoggedIn, flightsCtrl.create);

module.exports = router;
