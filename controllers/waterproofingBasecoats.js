var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingPrimer.js');
const notfoundstring = 'No such waterproofing primer';
// see app.js for the root request this controller handles

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingPrimers.query;
    res.send(JSON.stringify(data));
});

// GET to this controller root URI
api.get("/", function (req, res) {
  return res.render('waterproofing_basecoats/index.ejs');
});





module.exports = api;