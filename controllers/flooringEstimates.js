


var express = require('express');
var api = express.Router();
var Movie = require('../models/flooringEstimate');

// flooring routing ....................................

// GET flooring default page
api.get("/", function (request, response) {
 response.render("flooring/flooring.ejs");
});

// GET flooring-new
api.get("/create", function (request, response) {
  response.render("flooring/create.ejs");
});

module.exports = api;
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.flooringEstimates.query;
    res.send(JSON.stringify(data));
});


// This model is managed by Team 3-01
// Avinash varma Mandapati
// Vipul Reddy Maddadi