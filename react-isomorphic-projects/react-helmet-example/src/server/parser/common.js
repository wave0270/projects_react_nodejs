var express = require('express'),
    bodyParser = require('body-parser'),
    superagent = require('superagent'),
    app = express();
/*Parse Server Config*/
var PARSEID = 'Value-ID-X-Parse-Application';
var ROOTURL = 'http://localhost:1338/parse/classes/';
/*end*/

export function getResult(res, error, response, url) {
  if(error){
    res.json({error: error, response: null,url: url})
  }else{
    res.json({error: error, response: response.body,url: url})
  }
}
app.post('/parse-data', function(req,res){
  var url = ROOTURL+req.body.table;
  if(req.body.where){
    url = url+'?where='+JSON.stringify(req.body.where);
  }
  switch(req.body.method){
    case 'get':
      superagent
      .get(url)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(res, error, response, url);
      });
      break;
    case 'post':
      superagent
      .post(url)
      .send(req.body.params)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(res, error, response, url);
      });
      break;
    case 'put':
      url += req.body.params.objectId;
      superagent
      .put(url)
      .send(req.body.params)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(res, error, response, url);
      });
      break;
    case 'del':
      url += req.body.params.objectId;
      superagent
      .del(url)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(res, error, response, url);
      });
      break;
  }
});

module.exports = app;
