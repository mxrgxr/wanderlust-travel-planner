const express = require('express');
const router = express.Router();
const itinerariesCtrl = require('../controllers/itineraries');
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', ensureLoggedIn, itinerariesCtrl.index);
router.get('/new', ensureLoggedIn, itinerariesCtrl.new);
router.post('/new', ensureLoggedIn, itinerariesCtrl.create);
router.get('/:id', ensureLoggedIn, itinerariesCtrl.show);
router.get('/:id/edit', ensureLoggedIn, itinerariesCtrl.render);
router.put('/:id', ensureLoggedIn, itinerariesCtrl.update);

module.exports = router;