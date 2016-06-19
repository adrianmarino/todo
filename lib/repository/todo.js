//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var mongo = require('./mongo');
var MongoDao = mongo.MongoDao;
var mongojs = mongo.mongojs;


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
module.exports = new function() {
    var dao = MongoDao(['todos']);

    this.all = function(callback) {
        dao.todos.find(callback);
    }

    this.findById = function(id, callback) {
        dao.todos.findOne({ _id: mongojs.ObjectId(id) }, callback);
    }

    this.save = function(todo, callback) {
        if(!todo.id) {
            dao.todos.save(todo, callback);
        } else {
            dao.todos.update({ _id: mongojs.ObjectId(todo.id) }, todo, {}, callback);
        }
    }

    this.removeById = function(todo, callback) {
        dao.todos.remove({ _id: mongojs.ObjectId(todo.id)}, '', callback);
    }
}