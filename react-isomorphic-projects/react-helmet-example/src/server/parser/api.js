var superagent = require('superagent');

var PARSEID = 'Value-ID-X-Parse-Application';
var ROOTURL = 'http://localhost:1338/parse/classes/SocialConfig/sA7sNOun2k';

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
  params.objectId = "sA7sNOun2k";
  console.log(params)
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
