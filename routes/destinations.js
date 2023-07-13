const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/itineraries/:id/destinations', ensureLoggedIn, destinationsCtrl.new);
router.post('/itineraries/:id/destinations', ensureLoggedIn, destinationsCtrl.create);
router.get('/itineraries/:id/destinations/:destinationId/edit', ensureLoggedIn, destinationsCtrl.renderEditForm);
router.put('/itineraries/:id/destinations/:destinationId', ensureLoggedIn, destinationsCtrl.update);

module.exports = router;