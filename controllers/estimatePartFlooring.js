var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartFlooring.js');
const notfoundstring = 'No such waterproofing primer';


// See app.js to find default view folder (e.g.,"views")
// see app.js to find  default URI for this controller (e.g., "waterproofingPrimer")
// Specify the handler for each required combination of URI and HTTP verb 
// HTML5 forms can only have GET and POST methods (use POST for DELETE)


// HANDLE JSON REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartFloorings.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});

// GET to this controller root URI
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('flooring_cost/index.ejs',
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("flooring_cost/create.ejs",
        { title: "WP Primers", layout: "layout.ejs" });
});

// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/delete.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/details.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});


// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('flooring_cost/edit.ejs',
        {
            title: "WP Primers",
            layout: "layout.ejs",
            estimatePartFlooring: item
        });
});
// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
// api.post('/save', function(req, res) {
//     console.log("Handling POST " + req);
//     var data = req.app.locals.estimatePartFloorings.query;
//     var item = new Model;
//     console.log("NEW ID " + req.body._id);
//     item._id = parseInt(req.body._id);
//     item.floorSystemType = req.body.floorSystemType;
//     item.subtotal = req.body.subtotal;
//     item.usesUrethane = req.body.usesUrethane;
//     data.push(item);
//     console.log("SAVING NEW ITEM " + JSON.stringify(item));
//     return res.redirect('/estimatePartFlooring');
// });

api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = req.body._id;    
    item.floorSystemType = req.body.floorSystemType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneProductSelection.name = req.body.urethaneProductSelection;
    var products = req.app.locals.flooringCoatings.query;
    var uSelection = find(products, { 'name': req.body.urethaneProductSelection });
    if (!uSelection) { return res.end("No matching urethane product found ("+req.body.urethaneProductSelection+")."); }
    // then save each sub field individually...
    item.urethaneProductSelection._id = uSelection._id;
    item.urethaneProductSelection.name = uSelection.name;
    item.urethaneProductSelection.price = uSelection.price;
    item.urethaneProductSelection.unit = uSelection.unit;
    item.urethaneProductSelection.displayorder = parseInt(uSelection.displayorder);
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;
    item.usesEpoxy = req.body.usesEpoxy ? true: false; 
    item.expoxyProductSelection.name = req.body.expoxyProductSelection;

    var products1 = req.app.locals.flooringCoatings.query;
    var eSelection = find(products1, { 'name': req.body.expoxyProductSelection });
    if (!eSelection) { return res.end("No matching epoxy product found ("+req.body.expoxyProductSelection+")."); }
    // then save each sub field individually...
    item.expoxyProductSelection._id = eSelection._id;
    item.expoxyProductSelection.name = eSelection.name;
    item.expoxyProductSelection.price = eSelection.price;
    item.expoxyProductSelection.unit = eSelection.unit;
    item.expoxyProductSelection.displayorder = parseInt(eSelection.displayorder);

    item.expoxyCoverageSqFt = req.body.expoxyCoverageSqFt;
    item.subtotal = req.body.subtotal;
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
});

// POST update
// api.post('/save/:id', function(req, res) {
//     console.log("Handling SAVE request" + req);
//     var id = parseInt(req.params.id);
//     console.log("Handling SAVING ID=" + id);
//     var data = req.app.locals.estimatePartFloorings.query;
//     var item = find(data, { '_id': id });
//     if (!item) { return res.end(notfoundstring); }
//     console.log("ORIGINAL VALUES " + JSON.stringify(item));
//     console.log("UPDATED VALUES: " + JSON.stringify(req.body));
//     item.floorSystemType = req.body.floorSystemType;
//     item.subtotal = req.body.subtotal;
//     item.usesUrethane = req.body.usesUrethane;
//     console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
//     return res.redirect('/estimatePartFlooring');
// });

api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.floorSystemType = req.body.floorSystemType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneProductSelection.name = req.body.urethaneProductSelection;    
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;
    item.usesEpoxy = req.body.usesEpoxy ? true: false; 
    item.expoxyProductSelection.name = req.body.expoxyProductSelection;
    item.expoxyCoverageSqFt = req.body.expoxyCoverageSqFt;
    item.subtotal = req.body.subtotal;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartFloorings.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartFlooring');
});
module.exports = api;


// This model is managed by Team 3-5
// AjithReddy Pati
// Sai Rama Rao Nayeni