const express = require('express');
const router = express.Router();
const itinerariesCtrl = require('../controllers/itineraries');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, itinerariesCtrl.index);
router.get('/new', ensureLoggedIn, itinerariesCtrl.new);
router.post('/new', ensureLoggedIn, itinerariesCtrl.create);

module.exports = router;