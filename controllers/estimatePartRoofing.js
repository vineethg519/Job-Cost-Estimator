var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
//Add a comment to this line
var Model = require('../models/estimatePartRoofing.js');
const notfoundstring = 'No such estimatePartRoofing';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("roofing_cost/index.ejs");
});

api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
//Add a comment to this line
var data = req.app.locals.roofingBasecoats.query;
res.send(JSON.stringify(data));
});

module.exports = api;

// This model is managed by by team 03-R06
// S.SunilKumar,K.Deepak