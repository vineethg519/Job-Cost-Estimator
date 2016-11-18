var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartAbouts.query;
    res.send(JSON.stringify(data));
});

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("about/index.ejs");
});


api.get("/details", function (request, response) {
  response.render("about/details.ejs");
});

api.get("/edit", function (request, response) {
  response.render("about/edit.ejs");
});


module.exports = api;