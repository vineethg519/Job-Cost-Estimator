var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingTopcoatSchema = new Schema({
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var roofingTopcoat = mongoose.model('RoofingTopcoat', RoofingTopcoatSchema)
module.exports = roofingTopcoat
// This model is managed by Team 3-13
// Gajula, Vineeth
// Emani, Venkata Sainath Reddy