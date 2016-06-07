var superagent = require('superagent');

var PARSEID = 'Value-ID-X-Parse-Application';
var ROOTURL = 'http://localhost:1338/parse/classes/SocialConfig?where={"objectId": "sA7sNOun2k"}';

// export function post(url,params,callback) {
//   superagent
//   .post(ROOTURL + url)
//   .send(params)
//   .set('X-Parse-Application-Id', PARSEID )
//   .end(function(err, res){
//     callback(err, res)
//   });
// }

export function put(params,callback) {
  superagent
  .post(ROOTURL)
  .send(params)
  .set('X-Parse-Application-Id', PARSEID )
  .end(function(err, res){
    callback(err, res)
  });
}
