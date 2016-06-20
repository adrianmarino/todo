//-----------------------------------------------------------------------------
// Public function
//-----------------------------------------------------------------------------
function Todo(id, text, isCompleted) {
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;

    this.isValid = ()  => this.text && this.isCompleted;
    this.hasState = () => this.text || this.isCompleted;
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Todo = Todo;