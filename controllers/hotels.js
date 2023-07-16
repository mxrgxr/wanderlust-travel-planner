const Hotel = require('../models/hotel');

module.exports = {
    new: renderNewHotelForm,
    create
}

function renderNewHotelForm(req, res) {
    res.render('hotels/new', {
      itineraryId: req.params.itineraryId,
      destinationId: req.params.destinationId
    });
}

async function create(req, res) {
    const hotel = new Hotel(req.body);
    hotel.destination = req.params.destinationId;
  
    try {
      await hotel.save();
      res.redirect(`/itineraries/${req.params.itineraryId}/destinations/${req.params.destinationId}`);
    } catch (err) {
      res.redirect('back');
    }
  }