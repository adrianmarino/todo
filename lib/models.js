//-----------------------------------------------------------------------------
// Public function
//-----------------------------------------------------------------------------
function Todo(id, text, isCompleted) {
    var that = this;
    
    this.id = id;
    this.text = text;
    this.isCompleted = isCompleted;

    this.isValid = ()  => that.text && that.isCompleted;
    this.hasState = () => that.text || that.isCompleted;
}


//-----------------------------------------------------------------------------
// Exports
//-----------------------------------------------------------------------------
exports.Todo = Todo;