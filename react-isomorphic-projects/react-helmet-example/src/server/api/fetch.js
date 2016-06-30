var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    superagent = require('superagent'),
    fs = require('fs'),
    fetchUrl = require("fetch").fetchUrl,
    getMeta = require("lets-get-meta");


app.post('/fetch', function(req, res) {
  fetchUrl(req.body.url, function(error, meta, body){
    res.json({error: error, meta: meta, body: body.toString()});
  });
});

app.post('/read-meta-tag', function(req, res) {
  superagent
    .get(req.body.url)
    .end(function(err, data){
          if(!err){
            var meta=getMeta(data.text);
            res.json({meta: meta, body: data.text } )
          }else{
            res.write("<div>Khong co trang nay ton tai nhe!</div>");
          }

    });
});

app.post('/read-file', function(req, res) {
  var path=require('path');
  var configPath = path.resolve(__dirname);
  var fullData =fs.readFileSync(path.resolve(configPath,"offline","test.html"), 'utf8');
  console.log(fullData)
  res.json({ body: fullData } )
});

module.exports = app;
