var BlogController = function(){

    var mongoose = require('mongoose');
    var db = mongoose.connection;
    var model = require('../model/BlogModel.js');

    this.getAll = function(callback){
        model.getAll().then(function(blogs) {
            callback(blogs);
        }).catch(function(err){
            callback({
                error: true,
                message: err.message
            });
        }).done(function(){
            console.log("get all blog done!");
        });
    };

    this.findById = function(id, callback){
        model.findById(id).then(function(blog){
            callback(blog);
        }).catch(function(err){
            callback({
                error: true,
                message: err.message
            });
        }).done(function(){
            console.log("get blog by id done!");
        });
    };

    this.post = function(data, callback){
        model.post(data).then(function(){
            callback({
                status: true,
                message: 'post success'
            });
        }).catch(function(err){
            callback({
                status: false,
                message: err.message
            });
        }).finally(function(){
            console.log("post blog done!");
        });
    };
};

module.exports = new BlogController();
