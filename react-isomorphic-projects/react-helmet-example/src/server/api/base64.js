/**
 * External dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  superagent = require('superagent'),
  app = express();

import base64Img from "base64-img";


// call API to get short link
app.post('/image/base64', function(req, res) {
  base64Img.requestBase64(req.body.url, function(err, res2, body) {
    res.json({
      base64Str: body,
      err: err
    });
  });
});


module.exports = app;
