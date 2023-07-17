const Place = require('../models/place');

module.exports = {
    create
}

async function create(req, res) {
    const place = new Place(req.body);
    place.destination = req.params.destinationId;
  
    try {
      await place.save();
      res.redirect(`/itineraries/${req.params.itineraryId}/destinations/${req.params.destinationId}`);
    } catch (err) {
      res.redirect('back');
    }
}