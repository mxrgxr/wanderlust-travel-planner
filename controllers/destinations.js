const Itinerary = require('../models/itinerary');

module.exports = {
    create,
};

async function create(req, res) {
  try {
    const itinerary = await Itinerary.findById(req.params.itineraryId);
    if (!itinerary) {
      return res.status(404).send('Itinerary not found');
    }

    const destinationData = {
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      itinerary: itinerary._id,
    };

    const newDestination = new Destination(destinationData);
    await newDestination.save();

    itinerary.destinations.push(newDestination);
    await itinerary.save();

    res.redirect(`/itineraries/${itinerary._id}`);
  } catch (error) {
    res.status(500).send(error);
  }
}