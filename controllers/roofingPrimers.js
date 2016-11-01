var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/roofingPrimer.js');
const notfoundstring = 'No such roofingPrimers';

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('roofing_primers/index.ejs');
});

api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.roofingPrimers.query;
res.send(JSON.stringify(data));
});

module.exports = api;
// This model is managed by Team 3-13
// Gajula, Vineeth
// Emani, Venkata Sainath Reddy
