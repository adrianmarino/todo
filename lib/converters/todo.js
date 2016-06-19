//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var Todo = require("../models").Todo;


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
function Pojo(row) {
    return {
        id: row._id,
        text: row.text,
        isCompleted: row.isCompleted,
    };
}

module.exports = new function() {
    this.toApi = function(rows) {
        return Array.isArray(rows) ? rows.map(Pojo) : Pojo(rows);
    }
    this.toModel = function(request) {
        return new Todo(request.params.id, request.body.text, request.body.isCompleted);
    }
}