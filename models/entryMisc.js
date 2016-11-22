var mongoose = require('mongoose')
    , Schema = mongoose.Schema

var EntryMiscSchema = new Schema({
	_id : { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    cost: { type: Number, required: true, default: 0 }
})

var entryMisc = mongoose.model('EntryMisc', EntryMiscSchema)
module.exports = entryMisc