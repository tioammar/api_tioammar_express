var BlogModel = function(){
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var q = require('q');

    var blog_schema = new Schema({
        title: String, content: String, date: String, author: String, category: String
    });

    var model = mongoose.model('Blog', blog_schema);

    this.getAll = function(){
        var def = q.defer();
        model.find(function(err, blogs){
            if (err) def.reject(err);
            else def.resolve(blogs);
        });
        return def.promise;
    };

    this.post = function(data){
        var def = q.defer();
        var blog = new model(data);
        blog.save(function(err, blogs){
            if (err) def.reject(err);
            else def.resolve(blogs);
        });
        return def.promise;
    };

    this.findById = function(id){
        var def = q.defer();
        model.findById(id, function(err, blog){
            if (err) def.reject(err);
            else def.resolve(blog)
        });
        return def.promise;
    };
};

module.exports = new BlogModel();
