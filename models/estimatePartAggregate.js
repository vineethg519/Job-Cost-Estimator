var mongoose = require('mongoose')
    , Schema = mongoose.Schema
    , AggregateMaterial = require('./aggregateMaterial.js')

var EstimatePartAggregateSchema = new Schema({
    _id:{type:Number, required: true},
    isUsed: { type: Boolean, required: true, default: false },
    aggregateTypeSelection: { type: String, required: true, default: 'Sand',  enum: ['Sand', 'Quartz', 'Flake', 'Glass Beads']  },
    aggregateMaterialSelection: [{ type: Number, ref: AggregateMaterial, required: false}],
    coverageSqFt:  { type: Number, required: true},
    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartAggregate = mongoose.model('EstimatePartAggregate', EstimatePartAggregateSchema)
module.exports = estimatePartAggregate


// This model is managed by Team 3-09

// Upashana Ghimire
// Lohita Reddy Vanga