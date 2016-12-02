var express = require('express');
var api = express.Router();
var find = require('lodash.find');
var remove = require('lodash.remove');
var findIndex = require('lodash.findindex');
var Model = require('../models/estimatePartLabor.js');
const notfoundstring = 'No such estimate Part Labor found';


// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("labor_cost/index.ejs");
});

module.exports = api;

api.get('/findall', function(req, res){
    res.setHeader('Content-Type', 'application/json');
    var data = req.app.locals.estimatePartLabors.query;
    res.send(JSON.stringify(data));
});


api.get('/findone/:id', function(req, res){
     res.setHeader('Content-Type', 'application/json');
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    res.send(JSON.stringify(item));
});
api.get('/', function(req, res) {
    console.log("Handling GET " + req);
    return res.render('labor_cost/index.ejs',
        { title: "Labor", layout: "layout.ejs" });

});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("labor_cost/create.ejs",
        { title: "Labor", layout: "layout.ejs", newID: genrateUID(req.app.locals.estimatePartLabors.query[0].entries) });
});

function genrateUID(items){
    var ids = [];
    var UID = items.length+1; //Unique ID
    //check if above id is already exists, then generate new id if already exists else return this  unique id
    for(var i=0; i<items.length; i++){
        if(items[i]._id==UID)
            UID++;
    }
    return UID;
}


// DELETE
api.get('/delete/:id', function(req, res){
    // res.setHeader('Content-Type', 'application/html');
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    id = req.params.id;
    var item = data.find(function(dt){
    	return dt._id==id;
    });
    console.log("delete data ",item);
    if(!item){
    	 res.end(notfoundstring);
    }
    console.log("RETURNING VIEW FOR"+ JSON.stringify(item));
     res.render('labor_cost/delete.ejs',{
    	title: "Estimate Part Labors",
    	layout: "layout.ejs",
    	estimatePartLabor: item
    });
});



// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/details.ejs',
        {
            title: "Esitmate Labor",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});


// GET one
// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/edit.ejs',
        {
            title: "estimatePartLabor",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});


// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartLabors.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.type = req.body.type;
    item.count = req.body.count;
    item.hoursPerPerson = req.body.hoursPerPerson;
    item.dollarsPerHour = req.body.dollarsPerHour;
    item.nightsPerPerson = req.body.nightsPerPerson;
    item.costPerNight = req.body.costPerNight;

    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.type = req.body.type;
    item.count = req.body.count;
    item.hoursPerPerson = req.body.hoursPerPerson;
    item.dollarsPerHour = req.body.dollarsPerHour;
    item.nightsPerPerson = req.body.nightsPerPerson;
    item.costPerNight = req.body.costPerNight;

    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartLabors.query;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

api.get("/", function (request, response) {
	
 response.render("labor_cost/index.ejs");
});
/**This controller is managed by Team 3-10 
Vineetha Boppishetty
Renu Kappara */

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("labor_cost/create.ejs",
        { title: "Labor", layout: "layout.ejs", newID: genrateUID(req.app.locals.estimatePartLabors.query[0].entries) });
});

function genrateUID(items){
    var ids = [];
    var UID = items.length+1; //Unique ID
    //check if above id is already exists, then generate new id if already exists else return this  unique id
    for(var i=0; i<items.length; i++){
        if(items[i]._id==UID)
            UID++;
    }
    return UID;
}


// DELETE
api.get('/delete/:id', function(req, res){
    // res.setHeader('Content-Type', 'application/html');
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    id = req.params.id;
    var item = data.find(function(dt){
    	return dt._id==id;
    });
    console.log("delete data ",item);
    if(!item){
    	 res.end(notfoundstring);
    }
    console.log("RETURNING VIEW FOR"+ JSON.stringify(item));
     res.render('labor_cost/delete.ejs',{
    	title: "Estimate Part Labors",
    	layout: "layout.ejs",
    	estimatePartLabor: item
    });
});



// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/details.ejs',
        {
            title: "Esitmate Labor",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});


// GET one
// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('labor_cost/edit.ejs',
        {
            title: "estimatePartLabor",
            layout: "layout.ejs",
            estimatePartLabor: item
        });
});


// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartLabors.query;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.type = req.body.type;
    item.count = req.body.count;
    item.hoursPerPerson = req.body.hoursPerPerson;
    item.dollarsPerHour = req.body.dollarsPerHour;
    item.nightsPerPerson = req.body.nightsPerPerson;
    item.costPerNight = req.body.costPerNight;

    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartLabors.query;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.type = req.body.type;
    item.count = req.body.count;
    item.hoursPerPerson = req.body.hoursPerPerson;
    item.dollarsPerHour = req.body.dollarsPerHour;
    item.nightsPerPerson = req.body.nightsPerPerson;
    item.costPerNight = req.body.costPerNight;

    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartLabors.query[0].entries;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartLabor');
});

api.get("/", function (request, response) {
	
 response.render("labor_cost/index.ejs");
});


