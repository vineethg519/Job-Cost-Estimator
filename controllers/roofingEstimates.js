var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/roofingEstimate.js');
const notfoundstring = 'No such roofing Estimates';

// roofing routing relative to views folder declared in app.js
// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)
// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.roofingEstimates.query;
    res.send(JSON.stringify(data));
});
// GET roofing default page
api.get("/", function (request, response) {
  response.render("roofing/roofing.ejs");
});

// GET to this controller root URI
api.get("/create", function (request, response) {
  response.render("roofing/create.ejs");
});

module.exports = api;
