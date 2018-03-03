// importing modules or dependencies
var express  = require('express');
var app      = express();
var bodyParser   = require('body-parser');
var path=require('path');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Point static path to dist
app.use(express.static(path.join(__dirname,'../../', 'dist')));


// API routes
require('../app/routes/routes.js')(app);



module.exports = app;
