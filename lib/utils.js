//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function ResponseUtils() {
    this.internalServerError = function(response, error) {
        response.status(500).send({ error: error });
    };

    this.notFound = function(response) {
        response.status(404).send({ message: "Not Found" });
    };

    this.badRequest = function(response) {
        response.status(400).send({ message: "Bad Request" });
    };
}

function ResponseHandler(converter) {
    var converter  = converter;
    var util       = new ResponseUtils();
    var that       = this;

    var isEmpty = function(result) {
        return Array.isArray(result) ? !result[0] : result == null;
    }
    var toJson = function(response, result) {
        response.json(converter.toApi(result));
    }

    this.json = function(response) {
        return function(error, result) {
            if (error)
                util.internalServerError(response, error);
            else
                isEmpty(result) ? util.notFound(response) : toJson(response, result)
        };
    };

    this.ok = function(response) {
        return function(error, result) {
            error ? that.util.internalServerError(response, error) : response.end();
        };
    };
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.ResponseUtils   = ResponseUtils;
exports.ResponseHandler = ResponseHandler;