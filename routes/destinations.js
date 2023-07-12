const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/itinerary/:id/destinations', destinationsCtrl.new);
router.post('/itinerary/:id/destination', destinationsCtrl.create);

module.exports = router;