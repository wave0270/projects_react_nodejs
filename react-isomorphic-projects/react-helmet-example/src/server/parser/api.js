var superagent = require('superagent');

var PARSEID = 'Value-ID-X-Parse-Application';
var ROOTURL = 'http://localhost:1338/parse/classes/SocialConfig';

export function post(params,callback) {
  superagent
  .post(ROOTURL)
  .send(params)
  .set('X-Parse-Application-Id', PARSEID )
  .end(function(err, res){
    callback(err, res)
  });
}

export function put(params,callback) {
  superagent
  .put(ROOTURL)
  .send(params)
  .set('X-Parse-Application-Id', PARSEID )
  .end(function(err, res){
    callback(err, res)
  });
}

export function get(params,callback) {
  superagent
  .get(ROOTURL)
  .set('X-Parse-Application-Id', PARSEID )
  .end(function(err, res){
    callback(err, res)
  });
}
