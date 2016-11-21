var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryMileageSchema = new Schema({
	_id: { type: Number, required: true },
    description: { type: String, required: true },
    numberOfVehicles: { type: Number, required: true, default:1 },
    startLocation: { type: String, required: false},
    endLocation: { type: String, required: false},
    startDate: { type: Date, required: false},
    milesPerDrive: { type: Number, required: true, default: 0 }
})

var entryMileage = mongoose.model('EntryMileage', EntryMileageSchema)
module.exports = entryMileage

// This model is managed by Team 5-11
// Monish Verma
// Abhilash Pochampally