const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseDelete = require('mongoose-delete');

const destinationSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    startDate: {
        type: Date
    },
    endDate: {
        type: Date
    },
    itinerary: { type: Schema.Types.ObjectId, ref: 'Itinerary' },
});

const itinerarySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

itinerarySchema.plugin(mongooseDelete, {
    overrideMethods: 'all',
  });

destinationSchema.pre('delete', async function (next) {
    await Hotel.deleteMany({ destination: this._id });
  
    next();
});
module.exports = mongoose.model('Itinerary', itinerarySchema);