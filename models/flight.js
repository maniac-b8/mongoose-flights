const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
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
        required: true,
		default: () => new Date(new Date().setFullYear(new Date().getFullYear() + 1))
    }
    });

    module.exports = mongoose.model('Flight', flightSchema);