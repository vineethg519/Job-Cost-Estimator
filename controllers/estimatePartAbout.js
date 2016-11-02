var express = require('express');
var api = express.Router();

// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
response.render("about/index.ejs");
});

<<<<<<< HEAD
api.get("/findall", function (request, response) {
response.render("about/findAll.ejs");
=======

api.get("/details", function (request, response) {
  response.render("about/details.ejs");
});

api.get("/edit", function (request, response) {
  response.render("about/edit.ejs");
>>>>>>> 65674c5e427ffd975cb7448c4865c5dfda7300b0
});


module.exports = api;