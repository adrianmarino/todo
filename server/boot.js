//-----------------------------------------------------------------------------
// Require
//-----------------------------------------------------------------------------
let config          = require('./config/config');
let express         = require("express");
let path            = require("path");
let logger          = require("morgan");
let cookieParser    = require("cookie-parser");
let bodyParser      = require("body-parser");
let ejs             = require("ejs");
// Routes
let todos           = require("./controllers/todo");


//-----------------------------------------------------------------------------
// Config
//-----------------------------------------------------------------------------
let app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1/', todos);

let server = app.listen(config.server.port, () => {
    let host = 'localhost';
    let port = server.address().port;
    console.log('App listening at http://%s:%s', host, port);
});

module.exports = app;
