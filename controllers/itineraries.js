const Itinerary = require('../models/itinerary');

module.exports = {
    index,
    new: newItinerary,
    create
}

async function index(req, res) {
    const itineraries = await Itinerary.find({user: req.user._id});
    res.render('itineraries/index', {itineraries, user: req.user, title: 'User Itineraries'});
}

function newItinerary(req, res) {
    res.render('itineraries/new', { title: 'Create New Itinerary' });
  }

async function create(req, res) {
const itineraryData = {
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    user: req.user._id,
};

const newItinerary = new Itinerary(itineraryData);
await newItinerary.save();

res.redirect('/itineraries');
}