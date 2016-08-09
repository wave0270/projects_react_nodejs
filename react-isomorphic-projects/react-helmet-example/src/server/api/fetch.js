var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    superagent = require('superagent'),
    fs = require('fs'),
    fetchUrl = require("fetch").fetchUrl,
    getMeta = require("lets-get-meta"),
    jsdom = require("jsdom");



app.post('/fetch', function(req, res) {
  fetchUrl(req.body.url, function(error, meta, body){

    res.json({error: error, meta: meta, body: body.toString()});
  });
});

app.post('/read-meta-tag', function(req, res) {
  superagent
    .get(req.body.url)
    .end(function(err, data){
      console.log(err)
          if(!err){
            if(data.text.indexOf('Invalid redirect URI')>-1){
              res.json({meta: 's',body: data.text} );
            }else{
              res.json({meta: 's',body: 'Client Id error'} );
            }

            // var meta=getMeta(data.text);
            // // res.json({meta: meta, body: data.text } )
            // jsdom.env(
            //   data.text,
            //   ["http://code.jquery.com/jquery.js"],
            //   function (err, window) {
            //     res.json({meta: meta, body: window.$(".content.post-detail")[0].outerHTML } );
            //     // res.end();
            //   }
            // );

            /*jsdom exaple*/
            // jsdom.env(
            //   '<p><a class="the-link" href="https://github.com/tmpvar/jsdom">jsdom! nguyen thai binh</a><a id="the-link-2" href="https://github.com/tmpvar/jsdom">nguyen thai binh</a></p>',
            //   ["http://code.jquery.com/jquery.js"],
            //   function (err, window) {
            //     res.json({meta: meta, body: window.$("#the-link-2")[0].outerHTML } );
            //   }
            // );

          }else{
            res.json({meta: 's',body: JSON.stringify(err)} );
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
