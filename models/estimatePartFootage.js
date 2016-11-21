var mongoose = require('mongoose')
    , Schema = mongoose.Schema
	, EntryFootage = require('./entryFootage.js')

var EstimatePartFootageSchema = new Schema({
	entries: [{
        entry: { type: Schema.Types.ObjectId, ref: EntryFootage },
    }],
    _id: { type: Number, required: true },
	sqft: { type: Number, required: true },
	length: { type: Number, required: true },
	width: { type: Number, required: true },
	displayorder: { type: Number, required: true }
})

var estimatePartFootage = mongoose.model('EstimatePartFootage', EstimatePartFootageSchema)
module.exports = estimatePartFootage

// This model is managed by Team 3-4
//Abhinav Ekka
//Pradeep Vunnam
