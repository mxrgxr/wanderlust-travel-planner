const express = require('express');
const router = express.Router();
const hotelsCtrl = require('../controllers/hotels');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/itineraries/:itineraryId/destinations/:destinationId/hotels/new', ensureLoggedIn, hotelsCtrl.new);
router.post('/itineraries/:itineraryId/destinations/:destinationId/hotels', ensureLoggedIn, hotelsCtrl.create);

module.exports = router;
