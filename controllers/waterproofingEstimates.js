var express = require('express');
var api = express.Router();

//Base:  api/waterproofingEstimate
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/waterproofingPrimer.js');
const notfoundstring = 'No such waterproofing primer';

//GET /api/waterproofingEstimate
api.get("/", function (request, response) {
  response.render("waterproofing/waterproofing.ejs");
});

// GET /api/waterproofingEstimate/{id}


//GET create 
api.get("/create", function (request, response) {
  response.render("waterproofing/create.ejs");
});

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.waterproofingEstimates.query;
    res.send(JSON.stringify(data));
});


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------

module.exports = api;

