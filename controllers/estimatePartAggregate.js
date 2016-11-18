var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartAggregate.js');
const notfoundstring = 'No such estimatePartAggregate';


// see app.js for the root request this controller handles
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartAggregates.query;
    res.send(JSON.stringify(data));
});
api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});


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
            estimatePartAggregate: item
        });
});

api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/edit.ejs',
        {
            title: "Estimate Part Aggregate",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
});
// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('aggregate_cost/delete.ejs',
        {
            title: "Estimate Part Aggregate",
            layout: "layout.ejs",
            estimatePartAggregate: item
        });
});
// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartAggregates.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.usesAggregate = req.body.usesAggregate;
    item.radio = req.body.radio;
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
	item.coverageSqFt = req.body.coverageSqFt;
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.waterproofingPrimers.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item._id = parseInt(req.body._id);
    item.usesAggregate = req.body.usesAggregate;
    item.radio = req.body.radio;
    item.aggregateMaterialSelection = req.body.aggregateMaterialSelection;
	item.coverageSqFt = req.body.coverageSqFt;
    data.push(item);
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartAggregate');
});

module.exports = api;