var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("mileage_cost/index.ejs");
});

//GET create 
api.get('/create', function (request, response) {
   response.render("mileage_cost/create.ejs");
});

//GET delete 
api.get('/delete', function (request, response) {
   response.render("mileage_cost/delete.ejs");
});

//GET details 
api.get('/details', function (request, response) {
   response.render("mileage_cost/details.ejs");
});

//GET edit 
api.get('/edit', function (request, response) {
   response.render("mileage_cost/edit.ejs");
});






module.exports = api;

/**This controller is managed by Team 5-11
Monish Verma
Abhilash Pochampally
*/

