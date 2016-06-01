'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();
var fetchUrl = require("fetch").fetchUrl;

app.get('/fetch', function (req, res) {
  fetchUrl("http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181", function (error, meta, body) {
    res.json({ error: error, meta: meta, body: body.toString() });
    // console.log(body.toString());
  });
});

module.exports = app;