const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: { type: String, required: true },
    address: {
      street: String,
      city: String,
      state: String,
      country: String,
      postalCode: String
    },
    checkIn: { type: Date },
    checkOut: { type: Date },
    destination: { type: Schema.Types.ObjectId, ref: 'Destination' },
  });

module.exports = mongoose.model('Hotel', hotelSchema);