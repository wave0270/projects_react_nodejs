'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.get = get;
exports.post = post;
var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();

/*tem*/
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
var STATICDATA = {
  results: {
    expires_in: 989895,
    access_token: 'AQVbrQBjg_J3KrGsZS3veTX-HZPreh7Swj6TO72OAyG4gF9Yi2TAG3k6TQ3Vj-oUp9qqomcUq1JREDJb8vH_hCVoPNQsG3Fn9Prf2Coq7MUsG-VKoPno7KKZ4yb9Dtt0NUF89YKmBGPy6ZLygUpt-WymsLDqiEwsabrURVTwEx5qsbsJu28'
  }
};

/*common functions:*/

function get(res, params) {
  request.get(params.api + '&oauth2_access_token=' + linkedinData.results.access_token).end(function (err, response) {
    // res.json({data: JSON.parse(response.text), err: err, linkedinData: linkedinData});
    res.json({ response: response, err: err, linkedinData: linkedinData });
  });
}

function post(res, params) {
  request.post(params.api + '&oauth2_access_token=' + linkedinData.results.access_token).send(params.data).end(function (err, response) {
    // res.json({data: JSON.parse(response.text), err: err, linkedinData: linkedinData});
    res.json({ response: response, err: err, linkedinData: linkedinData });
  });
}

var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};
linkedinData = STATICDATA;
/*
* Oauthen:
*/
app.get('/linkedin/calloauth/:page', function (req, res) {
  if (!linkedinData.params || linkedinData.params.client_id) {
    linkedinData.params = {
      client_id: "75hebds55kuzda",
      client_secret: "E3fleb4ZN96CYKXb",
      redirect_uri: "http://localhost:7000/linkedin/oauth/callback"
    };
  }
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
      case 'linkedin-publishing':
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
/*CONSTANT data*/
var APILIST = {
  'get-profile': 'https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url,firstName,lastName,headline,siteStandardProfileRequest)?format=json',
  'get-companies': 'https://api.linkedin.com/v1/companies?format=json&is-company-admin=true',
  'post-share': 'https://api.linkedin.com/v1/people/~/shares?format=json',
  'post-company': 'https://api.linkedin.com/v1/companies/param_id/shares?format=json'
};
app.post('/linkedin-call', function (req, res) {
  if (linkedinData.results && linkedinData.results.access_token) {
    var params = {
      api: APILIST[req.body.key]
    };
    switch (req.body.method) {
      case 'post':
        params.data = req.body.post;
        post(res, params);
        break;
      case 'get':
        get(res, params);
        break;
    }
  } else {
    res.json({ error: true, linkedinData: linkedinData });
  }
});

/*
* Company:
*/
app.get('/linkedin-share-companies-id-:id', function (req, res) {
  //share to a specific company //10783197:
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

module.exports = app;