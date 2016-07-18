//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var Todo = require("../models").Todo;


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
module.exports = new function() {
    this.toApi = (rows) => Array.isArray(rows) ? rows.map(Pojo) : Pojo(rows);
    this.toModel = (request) => {
        return new Todo(request.params.id, request.body.text, request.body.isCompleted);
    };
}


//-----------------------------------------------------------------------------
// Private functions
//-----------------------------------------------------------------------------
function Pojo(row) {
    return {
        id: row._id,
        text: row.text,
        isCompleted: row.isCompleted,
    };
}

