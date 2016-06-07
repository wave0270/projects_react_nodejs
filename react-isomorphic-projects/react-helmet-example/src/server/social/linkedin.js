var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();

var parseAPI = require('../parser/api');
/*common functions:*/
export function get(res, params) {
  request
  .get(params.api+'&oauth2_access_token='+linkedinData.results.access_token)
  .end(function(err, response){
    // res.json({data: JSON.parse(response.text), err: err, linkedinData: linkedinData});
    res.json({response: response, err: err, linkedinData: linkedinData});
  });
}
export function post(res, params) {
  request
  .post(params.api+'&oauth2_access_token='+linkedinData.results.access_token)
  .send(params.data)
  .end(function(err, response){
    // res.json({data: JSON.parse(response.text), err: err, linkedinData: linkedinData});
    res.json({response: response, err: err, linkedinData: linkedinData});
  });
}

/*STATIC PARAMS*/
var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};

app.get('/linkedin/calloauth/:page', function(req, res) {
    if(!linkedinData.params || linkedinData.params.client_id){
      // linkedinData.params =  {
	    //   client_id: "75hebds55kuzda",
	    //   client_secret: "E3fleb4ZN96CYKXb",
	    //   redirect_uri: "http://localhost:7000/linkedin/oauth/callback"
	    // };
      linkedinData.params =  {
	      client_id: "75n88ic26xprbz",
	      client_secret: "4rFtPUpSa8L33acL",
	      redirect_uri: "http://localhost:5005/linkedin/oauth/callback"
	    };
    }
    console.log('/linkedin/calloauth/:page')
    var redirect_uri = linkedinData.params.redirect_uri+"?page="+req.params.page;
    res.redirect('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id='+linkedinData.params.client_id+'&state=mA4op-iWJox155Bk&redirect_uri='+redirect_uri+'&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share');
});
app.get('/linkedin/oauth/callback', function(req, res) {
    console.log('/linkedin/oauth/callback')
    var redirect_uri = linkedinData.params.redirect_uri+"?page="+req.query.page;
    request
    .post('https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code='+req.query.code+'&client_id='+linkedinData.params.client_id+'&client_secret='+linkedinData.params.client_secret+'&redirect_uri='+redirect_uri)
    .set('Content-Type','application/x-www-form-urlencoded')
    .end(function(err, response){
      // res.json({data: response, err: err});
      linkedinData.results = JSON.parse(response.text);
      parseAPI.put({linkedin: linkedinData.results},function(errParse,resParse){
        switch(req.query.page){
            default:
              return res.redirect('/'+req.query.page+'?connectStatus='+response.status);
          };
      });
      // request
      // .post('http://localhost:1338/parse/classes/SocialConfig')
      // .send({linkedin: linkedinData.results})
      // .set('X-Parse-Application-Id', 'Value-ID-X-Parse-Application')
      // .end(function(errParse, responseParse){
      //   switch(req.query.page){
      //     default:
      //       return res.redirect('/'+req.query.page+'?connectStatus='+response.status);
      //   };
      // });
    });
});

/*CONSTANT data*/
var APILIST = {
  'get-profile'   : 'https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url,firstName,lastName,headline,siteStandardProfileRequest)?format=json',
  'get-companies' : 'https://api.linkedin.com/v1/companies?format=json&is-company-admin=true',
  'post-share'    : 'https://api.linkedin.com/v1/people/~/shares?format=json',
  'post-company'  : 'https://api.linkedin.com/v1/companies/10783197/shares?format=json'
};

module.exports = app;
