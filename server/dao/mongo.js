//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let config  = require('../config/config');
let util    = require('util');
let mongojs = require('mongojs');


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
class MongoClientFactory {
  create(collections) {
      let url = this._buildConnectionUrl(config);
      console.info("Connect to MongoDB - URL: %s)", url);
      return mongojs(url, collections || []);
  }

  // Private

  _buildConnectionUrl(config) {
    return util.format(
        'mongodb://%s:%s@%s:%s/%s',
        config.database.username,
        config.database.password,
        config.database.hostname,
        config.database.port,
        config.database.name
    );
  }
}


//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
exports.clientFactory = new MongoClientFactory();
exports.mongojs = mongojs;
