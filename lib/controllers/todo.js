//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var router      = require('express').Router();
var Repository  = require('../dao/repository').Repository;
var converter   = require('../converters/todo');
// Utils
var utils       = require('../utils');


//-----------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------
var repository  = new Repository('todos');
var resUtils    = new utils.ResponseUtils();
var resHandler  = new utils.ResponseHandler(converter);
var basePath    = "/todos";
var idPath      = basePath.concat("/:id");


//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------
router.get(basePath, (request, response) => repository.all(resHandler.json(response)));

router.get(idPath, (request, response) => repository.findById(converter.toModel(request).id, resHandler.json(response)));

router.post(basePath, (request, response) => {
    var model = converter.toModel(request);
    model.isValid() ? repository.save(model, resHandler.json(response)) : resUtils.badRequest(response);
});

router.put(idPath, (request, response) => {
    var model = converter.toModel(request);
    model.hasState() ? repository.save(model, resHandler.ok(response)) : resUtils.badRequest(response);
});

router.delete(idPath, (request, response) => repository.removeById(converter.toModel(request), resHandler.ok(response)));


//-----------------------------------------------------------------------------
// Export
//----------------------------------------------------------------------------- 
module.exports = router;