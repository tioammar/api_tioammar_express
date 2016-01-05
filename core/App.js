// This file contain all routing logic for this app
// routing schema :
// 1. GET /blog -> get all blog
// 2. GET /blog/:id -> get blog by id
// 3. GET /blog/:category -> get blog by category
// 4. POST /add -> post a new blog
// 5. PUT /update/:id -> update a blog by id
// 6. DELETE /delete/:id -> delete a blog by id

var express = require('express')
var bodyParser = require('body-parser')
var app = express();

// Blog controller
var blogController = require('../controller/BlogController.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET
app.get('/', function (req, res) {
	res.send('Tioammar API');
});

app.get('/blog', function(req, res){
    blogController.getAll(function(callback){
		res.send(JSON.stringify(callback));
	});
});

app.get('/blog/:id', function(req, res){
	var id = req.params.id;
	blogController.findById(function(id, callback){
	    res.send(JSON.stringify(callback));
	})
});

app.get('/blog/category/:id', function(req, res){
    var id = req.params.id;
});

// POST
app.post('/add', function(req, res){
	// getting data request
	var blogData = {
		title: req.body.title,
		content: req.body.content,
		date: req.body.date,
		author: req.body.author,
		category: req.body.category
	};

	// saving data
	blogController.post(blogData, function(callback){
		res.send(callback);
	});
})

module.exports = app;
