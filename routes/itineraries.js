const express = require('express');
const router = express.Router();
const itinerariesCtrl = require('../controllers/itineraries');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, itinerariesCtrl.index);

module.exports = router;