//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let utils = require('./utils');


//-----------------------------------------------------------------------------
// Public function
//-----------------------------------------------------------------------------
class Todo {
    constructor(id, text, completed) {
        this.id = id;
        this.text = text;
        this.completed = utils.wasDefined(completed) && completed;
    }

    hasState() {
        return !utils.isEmpty(this.state());
    }

    state() {
        let state = {};
        if(this.text) state.text = this.text
        state.completed = this.completed
        return state;
    }
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Todo = Todo;
