//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var config  = require('../config/config').config();
var util    = require('util'); 
var mongojs = require('mongojs');

//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function MongoDao(collections) {
    var url = function(config) {
        return util.format(
            'mongodb://%s:%s@%s:%s/%s',
            config.database.username,
            config.database.password,
            config.database.hostname,
            config.database.port,
            config.database.name
        );
    };
    var url = url(config);
    console.info("Connect to MongoDB - URL: %s)", url);
    return mongojs(url, collections || []);
};


//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
exports.MongoDao = MongoDao;
exports.mongojs = mongojs;