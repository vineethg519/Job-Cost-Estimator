var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("aggregate_cost/index.ejs");
});
// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("aggregate_cost/create.ejs",
        { title: "Estimate Part Aggregate", layout: "layout.ejs" });
});


// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/details.ejs',
        {
            title: "Estimate Part Aggregate",
            layout: "layout.ejs",
            estimatePartAggregates: item
        });
});
>>>>>>> 6cda3bd03c20768ee40c5dbf7e1609ecff8140d6



module.exports = api;