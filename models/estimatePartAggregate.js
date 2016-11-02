var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartAggregate.js');
const notfoundstring = 'No such estimatePartAggregate';


var EstimatePartAggregateSchema = new Schema({
    isUsed: { type: Boolean, required: true, default: false },
    aggregateTypeSelection: { type: String, required: true, default: 'Sand',  enum: ['Sand', 'Quartz', 'Flake', 'Glass Beads']  },
    aggregateMaterialSelection: [{ type: Schema.Types.ObjectId, ref: AggregateMaterial, required: false}],
    coverageSqFt:  { type: Number, required: true},
    subtotal: { type: Number, required: true, default: 0 }
})

var estimatePartAggregate = mongoose.model('EstimatePartAggregate', EstimatePartAggregateSchema)
module.exports = estimatePartAggregate

// This model is managed by Team 3-09

// Upashana Ghimire
// Lohita Reddy Vanga