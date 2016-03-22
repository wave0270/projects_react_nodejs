/*
fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
    console.log( data );
    res.end( data );
});
*/
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');
  var https = require('https');
  var request = require('request');
  var fs = require("fs")

  var app = module.exports = express.createServer();

// Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes
//app.get('/', routes.index1);

app.get('/menu/:id', routes.index1);

app.listen(3000, function(){
//console.log("dir: " + process.cwd());
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
