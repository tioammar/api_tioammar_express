// This is the server module for this app
// This file contain all core dependencies to run this app
// This app will run on port 3000

var mongoose = require('mongoose');
var app = require('./core/App.js');

mongoose.connect('mongodb://localhost:27017/tioammar_db');

var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Start server on %s:%s', host, port);
});
