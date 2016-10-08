//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

function wasDefined(value) {
    return typeof value !== 'undefined';
}

class ResponseUtils {
    internalServerError(response, error) {
      response.status(500).send({ error: error });
    }

    notFound(response) {
      response.status(404).send({ message: "Not Found" });
    }

    badRequest(response) {
      response.status(400).send({ message: "Bad Request" });
    }
}

class ResponseHandler {

    constructor(converter) {
      this.converter  = converter;
      this.util       = new ResponseUtils();
    }

    toJson(response, result) {
      response.json(this.converter.toApi(result));
    }

    json(response) {
      return (error, result) => {
          if (error)
              this.util.internalServerError(response, error);
          else
              this._isEmpty(result) ? this.util.notFound(response) : this.toJson(response, result)
      };
    }

    ok(response) {
      return (error, result) => error ? this.util.internalServerError(response, error) : response.end();
    }

    // Private

    _isEmpty(result) {
      return Array.isArray(result) ? !result[0] : result == null;
    }
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.ResponseUtils   = ResponseUtils;
exports.ResponseHandler = ResponseHandler;
exports.isEmpty = isEmpty;
exports.wasDefined = wasDefined;