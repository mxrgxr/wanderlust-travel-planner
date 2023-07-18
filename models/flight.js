const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  flightNo: {
    type: Number,
    required: true
  },
  airline: {
    name: String,
    iataCode: String,
  },
  departure: {
    iataCode: String,
    city: String,
    time: Date,
  },
  arrival: {
    iataCode: String,
    city: String,
    time: Date,
  },
  date: Date,
  destination: { type: Schema.Types.ObjectId, ref: 'Destination' },
});

module.exports = mongoose.model('Flight', flightSchema);