const Itinerary = require('../models/itinerary');

module.exports = {
    new: renderNewDestinationForm,
    create,
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
