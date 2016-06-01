import express from "express";
import React from "react";
// import ReactDom from "react-dom";
import Router from "react-router";

const app = express();

var download = require('download-file');
var request = require('superagent');
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.urlencoded({	extended: false	}));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());

import routes from "../shared/routes";

app.get('/download', function (req, res) {
  var url = "http://i.imgur.com/G9bDaPH.jpg"
  var options = {
  	directory: "src/images/",
  	filename: "cat.jpg"
  }
  download(url, options, function(err){
  	if (err) throw err
  })
  res.send('Download Finished!');
});

app.get('/get-content', function (req, res) {
  res.json({data: 'Get Content Finished!'});
});

// call to publish social app configuration function
app.use(require('./api/linkedin'));
// call to get content of url
app.use(require('./api/fetch'));

/*****************************/
app.get('/*', function (req, res) {
  console.log("render global")
  Router.run(routes, req.url, Handler => {
    console.log("Server-1***********************************")
    res.render('Html.jsx', { content: <Handler /> });
  });
});






var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


// var app = express();
//
// app.set('views','./views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.get('/', require('./routes').index);
