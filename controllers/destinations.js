const Itinerary = require('../models/itinerary');

module.exports = {
    new: renderNewDestinationForm,
    create,
    renderEditForm,
    update: updateDestination,
    delete: deleteDestination
};

async function renderNewDestinationForm(req, res) {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
        return res.redirect('/itineraries');
    }
    res.render('destinations/new', { itinerary, title: 'Add Destination to Itinerary' });
}

async function create(req, res) {
    const itinerary = await Itinerary.findById(req.params.id);
    if (!itinerary) {
        return res.redirect('/itineraries');
    }

    const destination = {
        city: req.body.city,
        startDate: req.body.startDate,
        endDate: req.body.endDate
    };

    itinerary.destinations.push(destination);
    try {
        await itinerary.save();
    } catch (err) {
        console.log(err);
    }
    res.redirect(`/itineraries/${itinerary._id}`);
}

async function renderEditForm(req, res) {
    const itinerary = await Itinerary.findById(req.params.id);
    const destination = itinerary.destinations.find(dest => dest._id.toString() === req.params.destinationId);
    if (!itinerary || !destination) {
      return res.redirect('/itineraries');
    }
    res.render('destinations/new', { itinerary, destination, title: 'Edit Destination' });
}

async function updateDestination(req, res) {
    const itinerary = await Itinerary.findById(req.params.id);
    const destination = itinerary.destinations.find(dest => dest._id.toString() === req.params.destinationId);
    if (!itinerary || !destination) {
      return res.redirect('/itineraries');
    }
  
    destination.city = req.body.city;
    destination.startDate = req.body.startDate;
    destination.endDate = req.body.endDate;
  
    try {
      await itinerary.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/itineraries/${itinerary._id}`);
}

async function deleteDestination(req, res) {
    try {
      const itinerary = await Itinerary.findById(req.params.id);
      const destinationId = req.params.destinationId;
  
      if (!itinerary || !destinationId) {
        return res.redirect('/itineraries');
      }
  
      itinerary.destinations.pull({ _id: destinationId });
      await itinerary.save();
      res.redirect(`/itineraries/${itinerary._id}`);
    } catch (error) {
      console.error('Error details:', error);
      res.status(500).json({ message: 'Error deleting destination', error });
    }
}