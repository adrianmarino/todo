//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function wasDefined(value) {
    return typeof value !== 'undefined';
}

function ResponseUtils() {
    this.internalServerError    = (response, error) => response.status(500).send({ error: error });
    this.notFound               = (response) => response.status(404).send({ message: "Not Found" });
    this.badRequest             = (response) => response.status(400).send({ message: "Bad Request" });
}

function ResponseHandler(converter) {
    var converter  = converter;
    var util       = new ResponseUtils();
    var that       = this;

    var isEmpty = (result) => Array.isArray(result) ? !result[0] : result == null;
    
    var toJson = (response, result) => response.json(converter.toApi(result));

    this.json = (response) => {
        return (error, result) => {
            if (error)
                util.internalServerError(response, error);
            else
                isEmpty(result) ? util.notFound(response) : toJson(response, result)
        };
    };

    this.ok = (response) => (error, result) => error ? that.util.internalServerError(response, error) : response.end();
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.ResponseUtils   = ResponseUtils;
exports.ResponseHandler = ResponseHandler;
exports.isEmpty = isEmpty;
exports.wasDefined = wasDefined;