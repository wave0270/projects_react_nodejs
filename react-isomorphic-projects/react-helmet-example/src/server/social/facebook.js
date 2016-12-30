var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();

var fbData = {};

app.get('/fb/calloauth/:page', function(req, res) {
    if(!fbData.params || fbData.params.client_id){
      fbData.params =  {
	      client_id: "75n88ic26xprbz",
	      redirect_uri: "http://localhost:5005/fb/oauth/callback"
	    };
    }
  //   https://www.facebook.com/dialog/oauth?
  // client_id={app-id}
  // &redirect_uri={redirect-uri}
    console.log('/linkedin/calloauth/:page')
    var redirect_uri = fbData.params.redirect_uri+"?page="+req.params.page;
    res.redirect('https://www.facebook.com/dialog/oauth?client_id='+fbData.params.client_id+'&redirect_uri='+redirect_uri);
});
app.get('/fb/oauth/callback', function(req, res) {
    console.log('/linkedin/oauth/callback')
    var redirect_uri = fbData.params.redirect_uri+"?page="+req.query.page;
    return res.json(req.query)
    request
    .post('https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code='+req.query.code+'&client_id='+fbData.params.client_id+'&client_secret='+fbData.params.client_secret+'&redirect_uri='+redirect_uri)
    .set('Content-Type','application/x-www-form-urlencoded')
    .end(function(err, response){
      // res.json({data: response, err: err});
      fbData.results = JSON.parse(response.text);
      switch(req.query.page){
        case 'linkedin-publishing':
          request
          .post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token='+fbData.results.access_token)
          .send(fbData.data)
          .end(function(err, response){
            delete fbData.data;
            return res.redirect('/'+req.query.page+'?status='+response.status);
          });
          break;
        default:
          return res.redirect('/'+req.query.page+'?connectStatus='+response.status);
      };
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
