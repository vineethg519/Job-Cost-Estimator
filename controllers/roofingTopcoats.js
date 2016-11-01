var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/roofingTopcoat.js');
const notfoundstring = 'No such roofingTopcoats';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  return response.render('roofing_topcoats/index.ejs');
});
api.get('/findall', function(req, res){
res.setHeader('Content-Type', 'application/json');
var data = req.app.locals.roofingTopcoats.query;
res.send(JSON.stringify(data));
});

// see app.js for the root request this controller handles

module.exports = api;
// This model is managed by Team 3-13
// Gajula, Vineeth
// Emani, Venkata Sainath Reddy
