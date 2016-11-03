var express = require('express');
var api = express.Router();

// see app.js for the root request this controller handles

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