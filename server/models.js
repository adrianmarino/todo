//-----------------------------------------------------------------------------
// Public function
//-----------------------------------------------------------------------------
function Todo(id, text, isCompleted) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted || false;

    this.isValid = ()  => this.text;
    this.hasState = () => this.text || this.isCompleted;
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Todo = Todo;