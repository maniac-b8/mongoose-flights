const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PDX']
    },
    arrival: {
        type: Date,
        required: true
    }
})

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'PDX']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    
    },
    departs: {
        type: Date,
        default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    },
    destinations: [destinationSchema]
    }, {
        timestamps: true
    });

    module.exports = mongoose.model('Flight', flightSchema);