const Itinerary = require('../models/itinerary');

module.exports = {
    index,
    show,
    new: newItinerary,
    create
}

async function index(req, res) {
    const itineraries = await Itinerary.find({user: req.user._id});
    res.render('itineraries/index', {itineraries, user: req.user, title: 'User Itineraries'});
}

async function show(req, res) {
    try {
      const itinerary = await Itinerary.findById(req.params.id);
      if (!itinerary) {
        return res.status(404).send('Itinerary not found');
      }
      const destinationAdded = itinerary.destinations.length > 0;
      res.render('itineraries/show', { itinerary, title: itinerary.name, destinationAdded });
    } catch (error) {
      res.status(500).send(error);
    }
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