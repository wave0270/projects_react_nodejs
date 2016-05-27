"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.post = post;

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

/*Constant*/

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

var TEMPDATA = {
  "comment": "Testing a full company share!",
  "content": {
    "title": "Test Share with Content 2",
    "description": "content description",
    "submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
    "submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
  },
  "visibility": {
    "code": "anyone"
  }
};
/*common functions:*/

function get(res, params) {
  request.get(params.api + '&oauth2_access_token=' + linkedinData.results.access_token).end(function (err, response) {
    res.json({ data: response, err: err, linkedinData: linkedinData });
  });
}

function post(res, params) {
  request.post(params.api + '&oauth2_access_token=' + linkedinData.results.access_token).send(params.data).end(function (err, response) {
    delete linkedinData.data;
    res.json({ data: response, err: err, linkedinData: linkedinData });
  });
}

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

var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};
var linkedin;
var Linkedin;

app.get('/linkedin/calloauth/:page', function (req, res) {
  console.log('/linkedin/calloauth/:page');
  var redirect_uri = linkedinData.params.redirect_uri + "?page=" + req.params.page;
  res.redirect('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=' + linkedinData.params.client_id + '&state=mA4op-iWJox155Bk&redirect_uri=' + redirect_uri + '&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share');
});
app.get('/linkedin/oauth/callback', function (req, res) {
  console.log('/linkedin/oauth/callback');
  var redirect_uri = linkedinData.params.redirect_uri + "?page=" + req.query.page;
  request.post('https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code=' + req.query.code + '&client_id=' + linkedinData.params.client_id + '&client_secret=' + linkedinData.params.client_secret + '&redirect_uri=' + redirect_uri).set('Content-Type', 'application/x-www-form-urlencoded').end(function (err, response) {
    // res.json({data: response, err: err});
    linkedinData.results = JSON.parse(response.text);
    switch (req.query.page) {
      case 'refresh':
        res.end();
        break;
      case 'publishing-linkedin':
        request.post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(linkedinData.data).end(function (err, response) {
          delete linkedinData.data;
          return res.redirect('/' + req.query.page + '?status=' + response.status);
        });
        break;
      default:
        return res.redirect('/' + req.query.page);
    };
  });
});
/*Sign In with LinkedIn*/
app.get('/linkedin-get-profile', function (req, res) {
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-get-profile");
  } else {
    console.log("not cal Oauth");
    var params = {
      api: 'https://api.linkedin.com/v1/people/~?format=json'
    };
    get(res, params);
  }
});

app.post('/linkedin-call', function (req, res) {
  console.log('/linkedin-call');
  linkedinData.data = req.body.post;
  linkedinData.params = req.body.config;
  return res.end();

  // if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
  //   console.log("call Oauth again")
  //   // return res.redirect("/linkedin/calloauth/publishing-linkedin");
  //   return res.json({});
  // }else{
  //   console.log("not cal Oauth")
  //   var params = {
  //     api: 'https://api.linkedin.com/v1/people/~/shares?format=json',
  //     data: linkedinData.data
  //   }
  //   post(res, params);
  // }
});

//===========================

app.get('/linkedin-share-companies-id-:id', function (req, res) {
  //share to a specific company:
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-share-companies-id-" + req.params.id);
  } else {
    console.log("not cal Oauth");
    request.post('https://api.linkedin.com/v1/companies/' + req.params.id + '/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(TEMPDATA).end(function (err, response) {
      res.json({ data: response, access_token: linkedinData.results });
    });
  }
});

app.get('/linkedin-add-comment-companies-id-:id', function (req, res) {
  //share to a specific company:
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-add-comment-companies-id-" + req.params.id);
  } else {
    console.log("not cal Oauth");
    request.post('https://api.linkedin.com/v1/companies/' + req.params.id + '/updates/key=UPDATE-c2414183-5986959985467285504/update-comments-as-company?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(TEMPDATA).end(function (err, response) {
      res.json({ data: response, access_token: linkedinData.results });
    });
  }
});

/*****************************/
app.get('/*', function (req, res) {
  console.log("render global");
  _reactRouter2["default"].run(_sharedRoutes2["default"], req.url, function (Handler) {
    console.log("Server-1***********************************");
    // console.log(routes)
    // console.log("req-1***********************************")
    // console.log(req)
    // console.log(req.url)
    // console.log(req.path)
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