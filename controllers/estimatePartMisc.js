var express = require('express');
var api = express.Router();


// see app.js for the root request this controller handles

api.get('/delete/:id', function(req, res){
    // res.setHeader('Content-Type', 'application/html');
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    id = req.params.id;
    var item = data.find(function(dt){
    	return dt._id==id;
    });
    console.log("delete data ",item);
    if(!item){
    	 res.end(notfoundstring);
    }
    console.log("RETURNING VIEW FOR"+ JSON.stringify(item));
     res.render('misc_cost/delete.ejs',{
    	title: "Miscellaneous Costs",
    	layout: "layout.ejs",
    	estimatePartMisc: item
    });
});

// GET create
api.get("/create", function(req, res) {
    console.log('Handling GET /create' + req);
    res.render("misc_cost/create.ejs",
        { title: "Miscellaneous Item", layout: "layout.ejs", newID: genrateUID(req.app.locals.estimatePartMiscs.query[0].entries) });
});


module.exports = api;

// GET to this controller root URI
api.get("/", function (request, response) {
  response.render("mileage_cost/index.ejs");
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

// // GET /delete/:id
// api.get('/delete/:id', function(req, res) {
//     console.log("Handling GET /delete/:id " + req);
//     var id = parseInt(req.params.id);
//     var data = req.app.locals..estimatePartMiscs.query[0].entries;
//     var item = find(data, { '_id': id });
//     if (!item) { return res.end(notfoundstring); }
//     console.log("RETURNING VIEW FOR" + JSON.stringify(item));
//     return res.render('waterproofing_primers/delete.ejs',
//         {
//             title: "WP Primers",
//             layout: "layout.ejs",
//             waterproofingPrimer: item
//         });
// });

// GET /details/:id
api.get('/details/:id', function(req, res) {
    console.log("Handling GET /details/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('misc_cost/details.ejs',
        {
            title: "Esitmate Part Misc",
            layout: "layout.ejs",
            estimatePartMisc: item
        });

});

// GET one
api.get('/edit/:id', function(req, res) {
    console.log("Handling GET /edit/:id " + req);
    var id = parseInt(req.params.id);
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("RETURNING VIEW FOR" + JSON.stringify(item));
    return res.render('misc_cost/edit.ejs',
        {
            title: "estimatePartMisc",
            layout: "layout.ejs",
            estimatePartMisc: item
        });
});

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', function(req, res) {
    console.log("Handling POST " + req);
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    var item = new Model;
    console.log("NEW ID " + req.body._id);
    item._id = parseInt(req.body._id);
    item.description = req.body.description;
    item.cost = req.body.cost;
    
    data.push(item);
    console.log("SAVING NEW ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartMisc');
});

// POST update
api.post('/save/:id', function(req, res) {
    console.log("Handling SAVE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling SAVING ID=" + id);
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    var item = find(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("ORIGINAL VALUES " + JSON.stringify(item));
    console.log("UPDATED VALUES: " + JSON.stringify(req.body));
    item.description = req.body.description;
    item.cost = req.body.cost;
    item.displayorder = req.body.displayorder;
    console.log("SAVING UPDATED ITEM " + JSON.stringify(item));
    return res.redirect('/estimatePartMisc');
});

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', function(req, res, next) {
    console.log("Handling DELETE request" + req);
    var id = parseInt(req.params.id);
    console.log("Handling REMOVING ID=" + id);
    var data = req.app.locals.estimatePartMiscs.query[0].entries;
    var item = remove(data, { '_id': id });
    if (!item) { return res.end(notfoundstring); }
    console.log("Deleted item " + JSON.stringify(item));
    return res.redirect('/estimatePartMisc');
});
// see app.js for the root request this controller handles

// GET to this controller root URI
api.get("/", function (request, response) {
	// console.log(request.app.locals.estimatePartMiscs.query[0].entries);
 response.render("misc_cost/index.ejs");
});

module.exports = api;

/**This controller is managed by Team 5-11
Monish Verma
Abhilash Pochampally
*/

