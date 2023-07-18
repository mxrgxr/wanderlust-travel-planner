const Flight = require('../models/flight');

module.exports = {
    new: renderNewFlightForm,
    create
}

function renderNewFlightForm(req, res) {
    res.render('flights/new', {
      itineraryId: req.params.itineraryId,
      destinationId: req.params.destinationId
    });
}

async function create(req, res) {
    const flight = new Flight(req.body);
    flight.destination = req.params.destinationId;
  
    if (req.body.departure && req.body.departure.time) {
      flight.departure.time = new Date(req.body.departure.time);
    }
  
    if (req.body.arrival && req.body.arrival.time) {
      flight.arrival.time = new Date(req.body.arrival.time);
    }
  
    try {
      await flight.save();
      res.redirect(`/itineraries/${req.params.itineraryId}/destinations/${req.params.destinationId}`);
    } catch (err) {
      res.redirect('back');
    }
}