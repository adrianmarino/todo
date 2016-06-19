//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var router      = require('express').Router();
var repository  = require('../repository/todo');
var converter   = require('../converters/todo');
// Utils
var utils       = require('../utils');


//-----------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------
var resUtils    = new utils.ResponseUtils();
var resHandler  = new utils.ResponseHandler(converter);
var basePath    = "/todos";
var idPath      = basePath.concat("/:id")


//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------
router.get(basePath, function(request, response) { repository.all(resHandler.json(response)); });

router.get(idPath, function(request, response) {
    repository.findById(converter.toModel(request).id, resHandler.json(response));
});

router.post(basePath, function(request, response) {
    var todo = converter.toModel(request);
    todo.isValid() ? repository.save(todo, resHandler.json(response)) : resUtils.badRequest(response);
});

router.put(idPath, function(request, response) {
    var todo = converter.toModel(request);
    todo.hasState() ? repository.save(todo, resHandler.ok(response)) : resUtils.badRequest(response);
});

router.delete(idPath, function(request, response) {
    repository.removeById(converter.toModel(request), resHandler.ok(response));
});


//-----------------------------------------------------------------------------
// Export
//----------------------------------------------------------------------------- 
module.exports = router;