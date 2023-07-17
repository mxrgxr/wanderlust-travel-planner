const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    name: { type: String, required: true },
    address: {
        street: String,
        city: String,
        state: String,
        country: String,
        postalCode: String
    },
    googlePlaceType: String,
    destination: { type: Schema.Types.ObjectId, ref: 'Destination' },
});

module.exports = mongoose.model('Place', placeSchema);