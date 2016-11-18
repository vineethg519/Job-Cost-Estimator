var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFlooring.js');
const notfoundstring = 'No such estimatePartFlooring';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("flooring_cost/index.ejs");
});




module.exports = api;
// See app.js to find default view folder (e.g.,"views")
// see app.js to find default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.estimatePartFloorings.query;
res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

api.get("/delete", function(request, response){
response.render("flooring_cost/delete.ejs")
});
api.get("/create", function(request, response){
response.render("flooring_cost/create.ejs")
});
api.get("/edit", function(request, response){
response.render("flooring_cost/edit.ejs")
});
api.get("/details", function(request, response){
response.render("flooring_cost/details.ejs")
});


// This model is managed by Team 3-5
// AjithReddy Pati
// Sai Rama Rao Nayeni