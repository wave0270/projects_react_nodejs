var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();
/*local parse server*/
var parseAPI = require('../parser/social');

/*
* CONTAINS
*/
var SOCIALCONFIG = {
  linkedin: {
    client_id: "75n88ic26xprbz",
    client_secret: "4rFtPUpSa8L33acL",
    accessToken: [],
  },
  facebook: {
    client_id: "75n88ic26xprbz",
    client_secret: "4rFtPUpSa8L33acL",
    accessToken: [],
  }
};

var LINKEDINCONFIG={};
/*
* END CONTAINS
*/
parseAPI.get(null,function(err,res){
  if(res && res.status === 200){
    LINKEDINCONFIG = res.body.results[0];
  }
});
/*common functions:*/
export function get(res, params) {
  request
  .get(params.api+'&oauth2_access_token='+LINKEDINCONFIG.access_token)
  .end(function(err, response){
    // res.json({data: JSON.parse(response.text), err: err, linkedinData: linkedinData});
    res.json({response: response, err: err});
  });
}
export function post(res, params) {
  request
  .post(params.api+'&oauth2_access_token='+LINKEDINCONFIG.access_token)
  .send(params.data)
  .end(function(err, response){
    res.json({response: response, err: err});
  });
}

/*STATIC PARAMS*/
var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};

// app.post('/linkedin_calloauth', function(req, res) {
//   var redirect_uri = req.body.redirect_uri;
//   res.redirect('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id='+req.body.client_id+'&state=mA4op-iWJox155Bk&redirect_uri='+redirect_uri+'&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share');
// });

app.get('/linkedin/calloauth/:page/:domain', function(req, res) {
    console.log('/linkedin/calloauth/:page')
    if(!linkedinData.params || linkedinData.params.client_id){
      /*wave0270@gmail.com*/
      // linkedinData.params =  {
	    //   client_id: "75hebds55kuzda",
	    //   client_secret: "E3fleb4ZN96CYKXb",
	    //   redirect_uri: "http://localhost:7000/linkedin/oauth/callback"
	    // };
      /*dequoc410@gmail.com*/
      linkedinData.params =  {
	      client_id: "75n88ic26xprbz",
	      client_secret: "4rFtPUpSa8L33acL",
	      redirect_uri: "http://"+req.params.domain+"/linkedin/oauth/callback"
	    };
    }

    var redirect_uri = linkedinData.params.redirect_uri+"?page="+req.params.page;
    console.log("https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id='+linkedinData.params.client_id+'&state=mA4op-iWJox155Bk&redirect_uri='+redirect_uri+'&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share")
    res.redirect('https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id='+linkedinData.params.client_id+'&state=mA4op-iWJox155Bk&redirect_uri='+redirect_uri+'&scope=r_basicprofile%20r_emailaddress%20rw_company_admin%20w_share');
});
app.get('/linkedin/oauth/callback', function(req, res) {
    console.log('/linkedin/oauth/callback')
    var redirect_uri = linkedinData.params.redirect_uri+"?page="+req.query.page;
    request
    .post('https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code='+req.query.code+'&client_id='+linkedinData.params.client_id+'&client_secret='+linkedinData.params.client_secret+'&redirect_uri='+redirect_uri)
    .set('Content-Type','application/x-www-form-urlencoded')
    .end(function(err, response){
      if(response.status === 200){
        console.log(LINKEDINCONFIG)
        LINKEDINCONFIG.linkedin.access_token = JSON.parse(response.text).access_token;
        console.log(response.text)
        parseAPI.put({linkedin: JSON.parse(response.text)},function(errParse,resParse){
          if(resParse){
            // console.log('/'+req.query.page+'?connectStatus=')
            return res.redirect('/'+req.query.page+'?connectStatus='+response.status);
          }else{
            return res.redirect('/'+req.query.page+'?connectStatus=500');
          }
        });
      }
    });
});

/*CONSTANT data*/
var APILIST = {
  'get-profile'   : 'https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url,firstName,lastName,headline,siteStandardProfileRequest)?format=json',
  'get-companies' : 'https://api.linkedin.com/v1/companies?format=json&is-company-admin=true',
  'post-share'    : 'https://api.linkedin.com/v1/people/~/shares?format=json',
  'post-company'  : 'https://api.linkedin.com/v1/companies/10783197/shares?format=json'
};

app.post('/linkedin-call', function(req, res) {
  // res.json(LINKEDINCONFIG)
  if(LINKEDINCONFIG && LINKEDINCONFIG.access_token){
    LINKEDINCONFIG.access_token = 'AQVbrQBjg_J3KrGsZS3veTX-HZPreh7Swj6TO72OAyG4gF9Yi2TAG3k6TQ3Vj-oUp9qqomcUq1JREDJb8vH_hCVoPNQsG3Fn9Prf2Coq7MUsG-VKoPno7KKZ4yb9Dtt0NUF89YKmBGPy6ZLygUpt-WymsLDqiEwsabrURVTwEx5qsbsJu28'
    var params = {
      api: APILIST[req.body.key]
    }
    switch(req.body.method){
      case 'post':
        params.data = req.body.post;
        post(res, params);
        break;
      case 'get':
        get(res, params);
        break;
    }
  }else{
    res.json({err: true, response: {} });
  }
});

module.exports = app;
