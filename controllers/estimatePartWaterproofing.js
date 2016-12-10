var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
//var Model = require('../models/waterproofingPrimer.js');  // not primer model
var Model = require('../models/waterproofingPrimer.js');  // use the associated model
const notfoundstring = 'No such estimatePartWaterproofing';


// see app.js for the root request this controller handles

// HANDLE VIEW DISPLAY REQUESTS --------------------------------------------
api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartWaterproofings.query;
    res.send(JSON.stringify(data));
});

api.get('/findone/:id', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});
// GET to this controller root URI
// GET all
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('waterproofing_cost/index.ejs',
        { title: "cost", layout: "layout.ejs" });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("./waterproofing_cost/create.ejs",
        { title: "cost", layout: "layout.ejs" });
});

// GET /delete/:id
api.get('/delete/:id', function(req, res) {
    console.log("Handling GET /delete/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_cost/delete.ejs',
        {
            title: "cost",
            layout: "layout.ejs",
            estimatePartWaterproofing: item
        });
});

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_cost/details.ejs',
        {
            title: "cost",
            layout: "layout.ejs",
            estimatePartWaterproofing: item
        });
});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('waterproofing_cost/edit.ejs',
        {
            title: "cost",
            layout: "layout.ejs",
            estimatePartWaterproofing: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);

    item.productType = req.body.productType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneSelection = req.body.urethaneSelection;

    var water = req.app.locals.flooringCoatings.query;
    var wSelection = find(water, { 'name': req.body.urethaneSelection });
    if (!wSelection) { return res.end("No matching urethane product found ("+req.body.urethaneSelection+")."); }
    // then save each sub field individually...
    item.urethaneSelection._id = wSelection._id;
    item.urethaneSelection.name = wSelection.name;
    item.urethaneSelection.price = wSelection.price;
    item.urethaneSelection.unit = wSelection.unit;
    item.urethaneSelection.displayorder = parseInt(wSelection.displayorder);
    // console.log("----------------");
    // console.log("urethaneSelection was: " + req.body.urethaneSelection);
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;

    item.usesExpoxy = req.body.usesExpoxy ? true: false; 
    item.expoxySelection = req.body.expoxySelection;
    var water1 = req.app.locals.flooringCoatings.query;
    var wSelection1 = find(water1, { 'name': req.body.expoxySelection });
    if (!wSelection1) { return res.end("No matching epoxy product found ("+req.body.expoxySelection+")."); }
    // then save each sub field individually...
    item.expoxySelection._id = wSelection1._id;
    item.expoxySelection.name = wSelection1.name;
    item.expoxySelection.price = wSelection1.price;
    item.expoxySelection.unit = wSelection1.unit;
    item.expoxySelection.displayorder = parseInt(wSelection1.displayorder);
    item.epoxyCoverageSqFt = req.body.epoxyCoverageSqFt;
    // item.productType = req.body.productType;
    // item.usesUrethane = req.body.usesUrethane;
    // item.usesUrethanePrimer = req.body.usesUrethanePrimer ? true: false; 
    // item.urethanePrimerSelection.name = req.body.urethanePrimerSelection;
    // var water2 = req.app.locals.waterproofingPrimers.query;
    // var wSelection2 = find(products1, { 'name': req.body.expoxySelection });
    // if (!wSelection2) { return res.end("No matching epoxy product found ("+req.body.expoxySelection+")."); }

    item.usesPrimer = req.body.usesPrimer ? true: false; 
    item.primerSelection = req.body.primerSelection;
    var water2 = req.app.locals.waterproofingPrimers.query;
    var wSelection2 = find(water2, { 'name': req.body.primerSelection });
    if (!wSelection2) { return res.end("No matching epoxy product found ("+req.body.primerSelection+")."); }
    // then save each sub field individually...
    item.primerSelection._id = wSelection2._id;
    item.primerSelection.name = wSelection2.name;
    item.primerSelection.price = wSelection2.price;
    item.primerSelection.unit = wSelection2.unit;
    item.primerSelection.displayorder = parseInt(wSelection2.displayorder);
    item.primerCoverageSqFt = req.body.primerCoverageSqFt;

    item.usesTopcoat = req.body.usesTopcoat ? true: false; 
    item.topcoatSelection = req.body.topcoatSelection;
    var water3 = req.app.locals.waterproofingTopcoats.query;
    var wSelection3 = find(water3, { 'name': req.body.topcoatSelection });
    if (!wSelection2) { return res.end("No matching epoxy product found ("+req.body.topcoatSelection+")."); }
    // then save each sub field individually...
    item.topcoatSelection._id = wSelection3._id;
    item.topcoatSelection.name = wSelection3.name;
    item.topcoatSelection.price = wSelection3.price;
    item.topcoatSelection.unit = wSelection3.unit;
    item.topcoatSelection.displayorder = parseInt(wSelection3.displayorder);
    item.topcoatCoverageSqFt = req.body.topcoatCoverageSqFt;

    item.usesBasecoat = req.body.usesBasecoat ? true: false; 
    item.basecoatSelection = req.body.basecoatSelection;
    var water4 = req.app.locals.waterproofingBasecoats.query;
    var wSelection4 = find(water4, { 'name': req.body.basecoatSelection });
    if (!wSelection2) { return res.end("No matching epoxy product found ("+req.body.basecoatSelection+")."); }
    // then save each sub field individually...
    item.basecoatSelection._id = wSelection4._id;
    item.basecoatSelection.name = wSelection4.name;
    item.basecoatSelection.price = wSelection4.price;
    item.basecoatSelection.unit = wSelection4.unit;
    item.basecoatSelection.displayorder = parseInt(wSelection4.displayorder);
    item.basecoatCoverageSqFt = req.body.basecoatCoverageSqFt;

    item.subtotal = req.body.subtotal;
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartWaterproofing');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));

    item.productType = req.body.productType;
    item.usesUrethane = req.body.usesUrethane ? true: false;   
    item.urethaneSelection = req.body.urethaneSelection;
    item.urethaneCoverageSqFt = req.body.urethaneCoverageSqFt;

    item.usesExpoxy = req.body.usesExpoxy ? true: false; 
    item.expoxySelection.name = req.body.expoxySelection;
    item.epoxyCoverageSqFt = req.body.epoxyCoverageSqFt;

    item.usesPrimer = req.body.usesPrimer ? true: false; 
    item.primerSelection.name = req.body.primerSelection;
    item.primerCoverageSqFt = req.body.primerCoverageSqFt;

    item.usesTopcoat = req.body.usesTopcoat ? true: false; 
    item.topcoatSelection.name = req.body.topcoatSelection;
    item.primerCoverageSqFt = req.body.primerCoverageSqFt;

    item.usesTopcoat = req.body.usesTopcoat ? true: false; 
    item.topcoatSelection.name = req.body.topcoatSelection;
    item.topcoatCoverageSqFt = req.body.topcoatCoverageSqFt;

    item.usesBasecoat = req.body.usesBasecoat ? true: false; 
    item.basecoatSelection.name = req.body.basecoatSelection;
    item.basecoatCoverageSqFt = req.body.basecoatCoverageSqFt;

    // item.productType = req.body.productType;
    // item.usesUrethane = req.body.usesUrethane;
    item.subtotal = req.body.subtotal;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartWaterproofing');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartWaterproofings.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartWaterproofing');
});


module.exports = api;


// These Views are managed by Team 03-07 
// Peddireddy Tarun
// Aditya Sreeram Reddy Morugadi