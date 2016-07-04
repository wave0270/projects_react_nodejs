/**
 * External dependencies
 */
var express = require('express'),
  bodyParser = require('body-parser'),
  superagent = require('superagent'),
  app = express(),
  Bitly = require('bitly');

// get token from setting
var bitly = new Bitly('a3b3c203e37140ff24e679a181f912d37cb5a0a4');
// call API to get short link
app.post('/bitly/create', function(req, res) {
  bitly.shorten(req.body.url).then(function(response) {
    res.json({
      status: response.status_code,
      shortUrl: response.data.url,
      error: false
    });
  }, function(error) {
    res.json({
      status: response.status_code,
      shortUrl: '',
      error: error
    });
  });
});


module.exports = app;
