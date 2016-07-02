//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var mongo = require('./mongo');
var MongoDao = mongo.MongoDao;
var mongojs = mongo.mongojs;


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function Repository(collection) {
    var dao = MongoDao([collection]);
    var db = eval("dao.".concat(collection));    
    var newId = (id) => { return {_id: mongojs.ObjectId(id)}; };

    this.all = (callback) => db.find(callback);

    this.findById = (id, callback) => db.findOne(newId(id), callback);

    this.save = (model, callback) => !model.id ? db.save(model, callback) : db.update(newId(model.id), model, {}, callback);

    this.removeById = (model, callback) => db.remove(newId(model.id), '', callback);
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Repository = Repository;