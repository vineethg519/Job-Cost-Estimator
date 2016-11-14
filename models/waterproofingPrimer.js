var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var WaterproofingPrimerSchema = new Schema({
  _id: { type: Number, required: true },
  name: { type: String, required: true },
  unit: { type: String, required: true },
  displayorder: { type: Number, required: true },
  price: { type: Number, required: true }
})

var waterproofingPrimer = mongoose.model('WaterproofingPrimer', WaterproofingPrimerSchema)
module.exports = waterproofingPrimer

// This model is managed by Team 3-14
// Navyatha Vegesna
// Durga Bhavani