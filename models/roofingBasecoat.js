var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var RoofingBasecoatsSchema = new Schema({
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var roofingBasecoat = mongoose.model('RoofingBasecoat', RoofingBasecoatsSchema)
module.exports = roofingBasecoat
// This model is managed by Team 3-13
// Gajula, Vineeth
// Emani, Venkata Sainath Reddy