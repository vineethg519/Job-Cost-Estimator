var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , FlooringCoating = require('./flooringCoating.js')

var EstimatePartFlooringSchema = new Schema({
  _id: { type: Number, required: true },
  floorSystemType: { type: String, required: true, default: 'Epoxy', enum: ['Epoxy', 'Decorative Expoxy', 'Urethane'] },
  usesUrethane: { type: Boolean, required: true, default: false },
  urethaneProductSelection: [{ type: Schema.Types.ObjectId, ref: FlooringCoating, required: false }],
  urethaneCoverageSqFt: { type: Number, required: true },
  usesEpoxy: { type: Boolean, required: true, default: false },
  expoxyProductSelection: [{ type: Schema.Types.ObjectId, ref: FlooringCoating, required: false }],
  expoxyCoverageSqFt: { type: Number, required: true },
  subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartFlooring = mongoose.model('EstimatePartFlooring', EstimatePartFlooringSchema)
module.exports = estimatePartFlooring


// This data is managed by Team 5-03
// AjithReddy Pati
// Sai Rama Rao Nayeni
