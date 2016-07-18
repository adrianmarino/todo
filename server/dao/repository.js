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

    this.save = (model, callback) => {
        if(model.id) {
            db.update(newId(model.id), { $set: model.state() }, {}, callback);
        } else {
            db.save(model.state(), callback)
        }
    }

    this.removeById = (model, callback) => db.remove(newId(model.id), '', callback);
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Repository = Repository;