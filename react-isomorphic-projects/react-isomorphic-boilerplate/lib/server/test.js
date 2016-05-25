"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;

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

var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};
var linkedin;
var Linkedin;
/*Oauth*/
app.get('/linkedin/calloauth/:page', function (req, res) {
  linkedinData.params = {
    clientId: "75hebds55kuzda",
    clientSecret: "E3fleb4ZN96CYKXb",
    callbackUrl: "http://localhost:7000/linkedin/oauth/callback"
  };
  linkedinData.oauthTime = new Date().getTime();
  console.log(linkedinData.params);
  // This will ask for permisssions etc and redirect to callback url.
  Linkedin = require('node-linkedin')(linkedinData.params.clientId, linkedinData.params.clientSecret);
  Linkedin.setCallback(linkedinData.params.callbackUrl + "?page=" + req.params.page);
  Linkedin.auth.authorize(res, scope);
});
app.get('/linkedin/oauth/callback-1', function (req, res) {
  console.log('/linkedin/oauth/callback');
  Linkedin.auth.getAccessToken(res, req.query.code, req.query.state, function (err, results) {
    if (err) return console.error(err);

    /**
     * Results have something like:
     * {"expires_in":5184000,"access_token":". . . ."}
     */
    linkedinData.results = results;
    linkedin = Linkedin.init(linkedinData.results.access_token, {
      timeout: 86400000 /* 10 seconds , 86400000: 1day*/
    });
    switch (req.query.page) {
      case 'refresh':
        res.end();
        break;
      case 'publishing-linkedin':
        request.post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(linkedinData.data).end(function (err, response) {
          delete linkedinData.data;
          return res.redirect('/' + req.query.page);
        });
        break;
      default:
        return res.redirect('/' + req.query.page);
    };
  });
});

app.get('/linkedin/calloauth-2/:page', function (req, res) {
  console.log(req.params.page);
  linkedinData.params = {
    client_id: "75hebds55kuzda",
    client_secret: "E3fleb4ZN96CYKXb",
    redirect_uri: "http://localhost:7000/linkedin/oauth/callback"
  };
  var redirect_uri = linkedinData.params.redirect_uri + '?page=' + req.params.page;
  linkedinData.oauthTime = new Date().getTime();
  res.redirect('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=' + linkedinData.params.client_id + '&state=mA4op-iWJox155Bk&redirect_uri=' + redirect_uri + '&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share');
});
app.get('/linkedin/oauth/callback', function (req, res) {
  var redirect_uri = linkedinData.params.redirect_uri;
  request.post('https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code=' + req.query.code + '&client_id=' + linkedinData.params.client_id + '&client_secret=' + linkedinData.params.client_secret + '&redirect_uri=' + redirect_uri).set('Content-Type', 'application/x-www-form-urlencoded').end(function (err, response) {
    res.json({ data: response, err: err });
  });
});

/*Sign In with LinkedIn*/
app.get('/linkedin-get-profile', function (req, res) {
  // res.json(linkedinData)
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-get-profile");
  } else {
    console.log("not cal Oauth");
    linkedin.people.me(function (err, $in) {
      res.json({ data: $in, access_token: linkedinData.results, err: err });
    });
  }
});

function get(res, params) {
  request.get(params.api + '&oauth2_access_token=' + params.access_token).end(function (err, response) {
    res.json({ data: response, access_token: params, err: err });
  });
}

app.get('/linkedin-get-profile-2', function (req, res) {
  /*hardcode access_token*/
  //AQWycskXgSDdEACEmKmvf3sE1lrzmM4Z5Mvd5MqHgUlKu-X_ZjrxOgXAImM33mbWv3VP2WeQWFbb1Mi-o-7yhQeKIfwonBjAIiVJanPELqQmZP3WZ3uFbCG4aPaDcRfQWirvDLpbzzOvATBTKzHBejE2BiBEbakXjct3lNnWPoLfd0WBSk8
  var params = {
    access_token: 'AQVBzwd3YRlMQuR2thZFH3e1VLeJbFzMhRqSwMob193a5LzMpH9so0rmkaayidOKh4TvUt7hQGK67forlkiq3QMYFDC2m_Gnr8Mq8nIzvbFrF87bFdjdUbJBVoTUpJbn7fQnMLZaXQ90-2pv1rK5rrYllztQiaph15gim1NHwHVPA3L4Zj0',
    api: 'https://api.linkedin.com/v1/people/~?format=json'
  };
  get(res, params);
});

app.post('/linkedin-call', function (req, res) {
  console.log('/linkedin-call');
  linkedinData.data = req.body;
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.json({});
  } else {
    console.log("not cal Oauth");
    request.post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(linkedinData.data).end(function (err, response) {
      delete linkedinData.data;
      res.json({ data: response, access_token: linkedinData.results });
    });
  }
});

app.get('/linkedin-share', function (req, res) {
  /*Share to home page of all connections*/
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-share");
  } else {
    console.log("not cal Oauth");
    var newstring = {
      "comment": "Check out developer.linkedin.com!",
      "content": {
        "title": "LinkedIn Developers Resources 3",
        "description": "Leverage LinkedIn's APIs to maximize engagement",
        "submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
        "submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
      },
      "visibility": {
        "code": "anyone"
      }
    };
    request.post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(newstring).end(function (err, response) {
      res.json({ data: response, access_token: linkedinData.results });
    });
  }
});

/*Manage Company Pages*/
app.get('/linkedin-get-companies-name-:name', function (req, res) {
  // var value = req.params.name? req.params.name: "";
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-get-companies-name-" + req.params.name);
  } else {
    console.log("not cal Oauth");
    linkedin.companies_search.name(req.params.name, 1, function (err, companies) {
      res.json({ data: companies, access_token: linkedinData.results });
    });
  }
});

app.get('/linkedin-get-companies-id-:id', function (req, res) {
  //message: "Member does not have permission to get company.",
  //2414183
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-get-companies-id-" + req.params.id);
  } else {
    console.log("not cal Oauth");
    linkedin.companies.company(req.params.id, function (err, company) {
      res.json({ data: company, access_token: linkedinData.results });
    });
  }
});

app.get('/linkedin-share-companies-id-:id', function (req, res) {
  //share to a specific company:
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-share-companies-id-" + req.params.id);
  } else {
    console.log("not cal Oauth");
    var newstring = {
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
    request.post('https://api.linkedin.com/v1/companies/' + req.params.id + '/shares?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(newstring).end(function (err, response) {
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
    var newstring = {
      "comment": "Testing a full company share!2",
      "content": {
        "title": "Test Share with Content asd a new",
        "description": "content description",
        "submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
        "submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
      },
      "visibility": {
        "code": "anyone"
      }
    };
    request.post('https://api.linkedin.com/v1/companies/' + req.params.id + '/updates/key=UPDATE-c2414183-5986959985467285504/update-comments-as-company?format=json&oauth2_access_token=' + linkedinData.results.access_token).send(newstring).end(function (err, response) {
      res.json({ data: response, access_token: linkedinData.results });
    });
  }
});

/*CONNECTIONS*/
app.get('/linkedin-get-connections', function (req, res) {
  if (!linkedinData.results || linkedinData.oauthTime + linkedinData.results.expires_in - 10 < new Date().getTime()) {
    console.log("call Oauth again");
    return res.redirect("/linkedin/calloauth/linkedin-get-connections");
  } else {
    console.log("not cal Oauth");
    linkedin.connections.retrieve(function (err, connections) {
      res.json({ data: connections, access_token: linkedinData.results });
    });
  }
});

/*****************************/

var linkedin_client = require('linkedin-js')('75hebds55kuzda', 'E3fleb4ZN96CYKXb', 'http://localhost:7000/linkedin/oauth/callback');
app.get('/auth', function (req, res) {
  // the first time will redirect to linkedin
  linkedin_client.getAccessToken(req, res, function (error, token) {
    // will enter here when coming back from linkedin
    req.session.token = token;

    res.render('auth');
  });
});

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