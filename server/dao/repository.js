//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let mongo = require('./mongo');


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
class MongoRepository {
    constructor(collection) {
        let client = mongo.clientFactory.create([collection]);
        this.client = eval("client.".concat(collection));
    }

    all(callback) {
        this.client.find(callback);
    }

    findById(id, callback) {
        this.client.findOne(this._newId(id), callback)
    }

    save(model, callback) {
        if(model.id)
            this.client.update(this._newId(model.id), { $set: model.state() }, {}, callback);
        else
            this.client.save(model.state(), callback);
    }

    removeById(model, callback) {
        this.client.remove(this._newId(model.id), '', callback);
    }

    // Private

    _newId(id) {
        return {_id: mongo.mongojs.ObjectId(id)};
    }
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.MongoRepository = MongoRepository;
