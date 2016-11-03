var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFootage.js');
const notfoundstring = 'No such estimatePartFootage';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
response.render("footage/index.ejs");
});

module.exports = api;

// See app.js to find default view folder (e.g.,"views")
// see app.js to find default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.estimatePartFootages.query;
res.send(JSON.stringify(data));
});

// This model is managed by Team 3-4
//Abhinav Ekka
//Pradeep Vunnam