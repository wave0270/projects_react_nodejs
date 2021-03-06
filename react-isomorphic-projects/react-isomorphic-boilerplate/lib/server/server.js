"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// import ReactDom from "react-dom";

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var app = (0, _express2["default"])();

var download = require('download-file');
var request = require('superagent');
var bodyParser = require('body-parser');

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());

app.get('/download', function (req, res) {
  var url = "http://i.imgur.com/G9bDaPH.jpg";
  var options = {
    directory: "src/images/",
    filename: "cat.jpg"
  };
  download(url, options, function (err) {
    if (err) throw err;
  });
  res.send('Download Finished!');
});

app.get('/get-content', function (req, res) {
  res.json({ data: 'Get Content Finished!' });
});

// call to publish social app configuration function
app.use(require('./api/linkedin'));
// call to get content of url
app.use(require('./api/fetch'));

/*****************************/
app.get('/*', function (req, res) {
  console.log("render global");
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler) {
    console.log("Server-1***********************************");
    res.render('Html.jsx', { content: _react2["default"].createElement(Handler, null) });
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