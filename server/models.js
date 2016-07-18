//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var utils = require('./utils');


//-----------------------------------------------------------------------------
// Public function
//-----------------------------------------------------------------------------
class Todo {
    constructor(id, text, isCompleted) {
        this.id = id;
        this.text = text;
        this.isCompleted = isCompleted;
    }

    hasState() { 
        return !utils.isEmpty(this.state());
    }

    state() {
        let state = {};
        if(this.text) state.text = this.text
        if(utils.wasDefined(this.isCompleted)) state.isCompleted = this.isCompleted
        return state;
    }
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Todo = Todo;