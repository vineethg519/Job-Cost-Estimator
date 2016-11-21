var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var WaterproofingBasecoatSchema = new Schema({
    _id: { type: Number, required: true },
    name:  { type: String, required: true },
    unit:  { type: String, required: true },
    displayorder:  { type: String, required: true },
    price:  { type: Number, required: true }
})

var waterproofingBasecoat = mongoose.model('WaterproofingBasecoat', WaterproofingBasecoatSchema)
module.exports = waterproofingBasecoat

// This model is managed by Team 3-14
// Navyatha Vegesna
// Durga Bhavani
