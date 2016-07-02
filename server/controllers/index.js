//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var router = require('express').Router();


//-----------------------------------------------------------------------------
// Route
//-----------------------------------------------------------------------------
router.get('/', function(request, response, next) { 
    response.render('index.html');
});


//-----------------------------------------------------------------------------
// Export
//-----------------------------------------------------------------------------
module.exports = router;