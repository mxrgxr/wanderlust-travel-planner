const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/itineraries/:id/destinations', ensureLoggedIn, destinationsCtrl.new);
router.post('/itineraries/:id/destinations', ensureLoggedIn, destinationsCtrl.create);
router.get('/itineraries/:id/destinations/:destinationId', ensureLoggedIn, destinationsCtrl.show);
router.get('/itineraries/:id/destinations/:destinationId/edit', ensureLoggedIn, destinationsCtrl.renderEditForm);
router.put('/itineraries/:id/destinations/:destinationId', ensureLoggedIn, destinationsCtrl.update);
router.delete('/itineraries/:id/destinations/:destinationId', ensureLoggedIn, destinationsCtrl.delete);

module.exports = router;