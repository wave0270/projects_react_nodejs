var express = require('express'),
    bodyParser = require('body-parser'),
    superagent = require('superagent'),
    app = express();
/*Parse Server Config*/
var PARSEID = 'Value-ID-X-Parse-Application';
var ROOTURL = 'http://localhost:1338/parse/classes/';
/*end*/

export function getResult(method, res, error, response, url, objectId ) {
  if(error){
    res.json({error: true, response: response,url: url})
  }else{
    switch(method){
      // case 'post':
      //   superagent
      //   .get(ROOTURL+req.body.table+'/'+response.body.objectId)
      //   .set('X-Parse-Application-Id', PARSEID )
      //   .end(function(error2, response2){
      //     getResult('get',res, error2, response2, url);
      //   });
      //   break;
      // case 'put':
      //   superagent
      //   .get(ROOTURL+req.body.table+'/'+objectId)
      //   .set('X-Parse-Application-Id', PARSEID )
      //   .end(function(error2, response2){
      //     getResult('get',res, error2, response2, url);
      //   });
      //   break;
      default:
        res.json({error: false, response: response.body,url: url})
    }

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
        getResult(req.body.method,res, error, response, url);
      });
      break;
    case 'post':
      superagent
      .post(url)
      .send(req.body.params)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(req.body.method,res, error, response, url);
      });
      break;
    case 'put':
      url = url+'/'+req.body.params.objectId;
      superagent
      .put(url)
      .send(req.body.params)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(req.body.method,res, error, response, url, req.body.params.objectId);
      });
      break;
    case 'del':
      url = url+'/'+req.body.params.objectId;
      superagent
      .del(url)
      .set('X-Parse-Application-Id', PARSEID )
      .end(function(error, response){
        getResult(req.body.method,res, error, response, url);
      });
      break;
  }
});

module.exports = app;
