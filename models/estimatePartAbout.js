var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var EstimatePartAboutSchema = new Schema({
  _id: { type: Number, required: true },
  client: { type: String, required: true },
  address: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: String, required: false },
  latitude: { type: Number, required: false },
  longitude: { type: Number, required: false },
})

var estimatePartAbout = mongoose.model('EstimatePartAbout', EstimatePartAboutSchema)
module.exports = estimatePartAbout

// This model is managed by Team 5-08
// Konkepudi Naga Rahul Tejas
// Kona Arun
