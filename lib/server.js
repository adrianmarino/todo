//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
var config          = require('./config/config').config();
var express         = require("express");
var path            = require("path");
var logger          = require("morgan");
var cookieParser    = require("cookie-parser");
var bodyParser      = require("body-parser");
var ejs             = require("ejs");
// Routes
var todos           = require("./controllers/todo");


//-----------------------------------------------------------------------------
// Config
//-----------------------------------------------------------------------------
var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));

app.use('/api/v1/', todos);

var server = app.listen(config.server.port, () => {
    var host = 'localhost';
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});
 
module.exports = app;