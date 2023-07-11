const Itinerary = require('../models/itinerary');

module.exports = {
    index,
}

async function index(req, res) {
    const itineraries = await Itinerary.find({user: req.user._id});
    res.render('itineraries/index', {itineraries, user: req.user, title: 'User Itineraries'});
}