//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var router      = require('express').Router();
var repository  = require('../repository/todo');
var converter   = require('../converters/todo');
// Utils
var utils       = require('../utils');
var resUtils    = new utils.ResponseUtils();
var resHandler  = new utils.ResponseHandler(converter);


//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------
router.get('/todos', function(request, response) { 
    repository.all(resHandler.toJsonCallback(response));
});

router.get('/todos/:id', function(request, response) {
    repository.findById(converter.toModel(request).id, resHandler.toJsonCallback(response));
});

router.post('/todos', function(request, response) {
    var todo = converter.toModel(request);
    todo.isValid() ? repository.save(todo, resHandler.toJsonCallback(response)) : resUtils.badRequest(response);
});

router.put('/todos/:id', function(request, response) {
    var todo = converter.toModel(request);
    todo.hasState() ? repository.save(todo, resHandler.errorHandlerCallback(response)) : resUtils.badRequest(response);
});

router.delete('/todos/:id', function(request, response) {
    repository.removeById(converter.toModel(request), resHandler.errorHandlerCallback(response));
});


//-----------------------------------------------------------------------------
// Export
//----------------------------------------------------------------------------- 
module.exports = router;