var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartMisc.js');
const notfoundstring = 'No such estimate part misc';

// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)

// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartMiscs.query;
    res.send(JSON.stringify(data));
});

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("misc_cost/index.ejs");
});


// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("mileage_cost/index.ejs");
});

//GET create 
api.get('/create', function (request, response) {
   response.render("misc_cost/create.ejs");
});

//GET delete 
api.get('/delete', function (request, response) {
   response.render("misc_cost/delete.ejs");
});

//GET details 
api.get('/details', function (request, response) {
   response.render("misc_cost/details.ejs");
});

//GET edit 
api.get('/edit', function (request, response) {
   response.render("misc_cost/edit.ejs");
});


module.exports = api;

/**This controller is managed by Team 5-11
Monish Verma
Abhilash Pochampally
*/