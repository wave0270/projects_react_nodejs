// Example express application adding the parse-server module to expose Parse
// compatible API routes.

var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var path = require('path');

var databaseUri = process.env.DATABASE_URI || process.env.MONGOLAB_URI;

if (!databaseUri) {
  console.log('DATABASE_URI not specified, falling back to localhost.');
}

// http://localhost:1338/parse/classes/MenuItem
var PORT = '1338';
var api = new ParseServer({
  databaseURI: databaseUri || 'mongodb://localhost:27017/dev',  //define mongo db server
  cloud: process.env.CLOUD_CODE_MAIN || __dirname + '/cloud/main.js', //define for Cloud code area
  appId: process.env.APP_ID || 'Value-ID-X-Parse-Application', //X-Parse-Application-Id
  masterKey: process.env.MASTER_KEY || '', //Add your master key here. Keep it secret!
  serverURL: process.env.SERVER_URL || 'http://localhost:'+PORT+'/parse',  // Don't forget to change to https if needed
  liveQuery: {
    classNames: ["Posts", "Comments"] // List of classes to support for query subscriptions
  }
});
// Client-keys like the javascript key or the .NET key are not necessary with parse-server
// If you wish you require them, you can set them as options in the initialization above:
// javascriptKey, restAPIKey, dotNetKey, clientKey

var app = express();

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, api);


// Parse Server plays nicely with the rest of your web routes
app.get('/', function(req, res) {
  res.status(200).send('<h1 style="color:red"><a href="#" download="public/test.html" id="btnExport" >Export data into Excel</a>Make sure to star the parse-server repo on GitHub!</h1>');
});

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/file', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

app.get('/test', function(req, res) {
  query = ParseServer.Query("Review");
  // query.equalTo("stars", 1);
  console.log(JSON.stringify(query));
  var str = JSON.stringify(query.toJSON());
  res.status(200).send(str);
});


var port = process.env.PORT || PORT;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
    console.log('parse-server-example running on port ' + port + '.');
});

// This will enable the Live Query real-time server
ParseServer.createLiveQueryServer(httpServer);
