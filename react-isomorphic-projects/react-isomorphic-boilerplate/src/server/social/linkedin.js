var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();


/*Constant*/
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

var scope = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
// var scope = ['r_basicprofile', 'r_fullprofile', 'r_emailaddress', 'r_network', 'r_contactinfo', 'rw_nus', 'rw_groups', 'w_messages'];
var linkedinData = {};

/*common functions:*/
export function get(res, params) {
  request
  .get(params.api+'&oauth2_access_token='+linkedinData.results.access_token)
  .end(function(err, response){
    res.json({data: response, err: err, linkedinData: linkedinData});
  });
}
export function post(res, params) {
  request
  .post(params.api+'&oauth2_access_token='+linkedinData.results.access_token)
  .send(params.data)
  .end(function(err, response){
    delete linkedinData.data;
    res.json({data: response, err: err, linkedinData: linkedinData});
  });
}
/*
* Oauthen:
*/
app.get('/linkedin/calloauth/:page', function(req, res) {
    if(!linkedinData.params || linkedinData.params.client_id){
      linkedinData.params =  {
	      client_id: "75hebds55kuzda",
	      client_secret: "E3fleb4ZN96CYKXb",
	      redirect_uri: "http://localhost:7000/linkedin/oauth/callback"
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
      switch(req.query.page){
        case 'linkedin-publishing':
          request
          .post('https://api.linkedin.com/v1/people/~/shares?format=json&oauth2_access_token='+linkedinData.results.access_token)
          .send(linkedinData.data)
          .end(function(err, response){
            delete linkedinData.data;
            return res.redirect('/'+req.query.page+'?status='+response.status);
          });
          break;
        default:
          return res.redirect('/'+req.query.page);
      };
    });
});
/*
* Profile - Share main page
*/
var APILIST = {
  'profile' : 'https://api.linkedin.com/v1/people/~:(headline,id,num-connections,picture-url)?format=json'
};
app.get('/linkedin-get-profile', function(req, res) {
  console.log(req.params)
  if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
    console.log("call Oauth again")
    return res.redirect("/linkedin/calloauth/linkedin-get-profile");
  }else{
    console.log("not cal Oauth")
    var params = {
      api: APILIST['profile']
    }
    get(res, params);
  }
});


app.post('/linkedin-call', function(req, res) {
  /*share post to connections*/
  console.log('/linkedin-call')
  linkedinData.data = req.body.post;
  linkedinData.params = req.body.config;
  return res.end();

  // if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
  //   console.log("call Oauth again")
  //   // return res.redirect("/linkedin/calloauth/linkedin-publishing");
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
/*
* Company:
*/
app.get('/linkedin-get-companies', function(req, res) {
  if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
    console.log("call Oauth again")
    return res.redirect("/linkedin/calloauth/linkedin-get-companies");
  }else{
    console.log("not cal Oauth")
    var params = {
      api: 'https://api.linkedin.com/v1/companies?format=json&is-company-admin=true'
    }
    get(res, params);
  }
});
app.get('/linkedin-share-companies-id-:id', function(req, res) {
  //share to a specific company //10783197:
  if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
    console.log("call Oauth again")
    return res.redirect("/linkedin/calloauth/linkedin-share-companies-id-"+req.params.id);
  }else{
    console.log("not cal Oauth")
    request
    .post('https://api.linkedin.com/v1/companies/'+req.params.id+'/shares?format=json&oauth2_access_token='+linkedinData.results.access_token)
    .send(TEMPDATA)
    .end(function(err, response){
      res.json({data: response, access_token: linkedinData.results});
    });
  }
});

app.get('/linkedin-add-comment-companies-id-:id', function(req, res) {
  //share to a specific company:
  if(!linkedinData.results || (linkedinData.oauthTime+linkedinData.results.expires_in-10)< new Date().getTime()){
    console.log("call Oauth again")
    return res.redirect("/linkedin/calloauth/linkedin-add-comment-companies-id-"+req.params.id);
  }else{
    console.log("not cal Oauth")
    request
    .post('https://api.linkedin.com/v1/companies/'+req.params.id+'/updates/key=UPDATE-c2414183-5986959985467285504/update-comments-as-company?format=json&oauth2_access_token='+linkedinData.results.access_token)
    .send(TEMPDATA)
    .end(function(err, response){
      res.json({data: response, access_token: linkedinData.results});
    });
  }
});

module.exports = app;
