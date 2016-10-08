//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let Todo = require("../models").Todo;


//-----------------------------------------------------------------------------
// Public functions
//-----------------------------------------------------------------------------
class TodoConverter {
    toApi(rows) {
      return Array.isArray(rows) ? rows.map(row => new TodoPojo(row)) : new TodoPojo(rows);
    }

    toModel(request) {
      return new Todo(request.params.id, request.body.text, request.body.completed);
    }
}


//-----------------------------------------------------------------------------
// Private functions
//-----------------------------------------------------------------------------
class TodoPojo {
    constructor(row) {
      this.id = row._id;
      this.text = row.text;
      this.completed = row.completed;
    }
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.TodoConverter = TodoConverter
