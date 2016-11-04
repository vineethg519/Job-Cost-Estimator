var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartLabor.js');
const notfoundstring = 'No such estimatePartLabor';

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "estimatePartLabor")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartLabors.query;
    res.send(JSON.stringify(data));
});

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("labor_cost/index.ejs");
});




module.exports = api;