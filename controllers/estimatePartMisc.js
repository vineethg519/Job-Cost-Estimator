var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
 response.render("misc_cost/index.ejs");
});


<<<<<<< HEAD


module.exports = api;
=======
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
>>>>>>> 6cda3bd03c20768ee40c5dbf7e1609ecff8140d6
