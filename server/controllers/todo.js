//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let router          = require('express').Router();
let MongoRepository = require('../dao/repository').MongoRepository;
let TodoConverter   = require('../converters/todo').TodoConverter;
let utils           = require('../utils');


//-----------------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------------
let converter   = new TodoConverter();
let repository  = new MongoRepository('todos');
let resUtils    = new utils.ResponseUtils();
let resHandler  = new utils.ResponseHandler(converter);
let basePath    = "/todos";
let idPath      = basePath.concat("/:id");


//-----------------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------------
router.get(basePath, (request, response) =>
  repository.all(resHandler.json(response)));

router.get(idPath, (request, response) => repository.findById(
    converter.toModel(request).id,
    resHandler.json(response)
));

router.post(basePath, (request, response) => {
    let model = converter.toModel(request);
    model.text ? repository.save(model, resHandler.json(response)) : resUtils.badRequest(response);
});

router.put(idPath, (request, response) => {
    let model = converter.toModel(request);
    model.hasState() ? repository.save(model, resHandler.ok(response)) : resUtils.badRequest(response);
});

router.delete(idPath, (request, response) =>
    repository.removeById(converter.toModel(request), resHandler.ok(response)));


//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = router;
