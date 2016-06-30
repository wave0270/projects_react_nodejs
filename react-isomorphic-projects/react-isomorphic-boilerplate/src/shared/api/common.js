import request from 'superagent';

export function get(url, params, callBack) {
  request
  .get(url)
  .set('Content-Type', "application/json")
  .end(function(err, res){
    callBack(err,res)
  });
}
export function post(url, params, callBack) {
  request
  .post(url)
  .send(params)
  .set('Content-Type', "application/json")
  .end(function(err, res){
    callBack(err, res)
  });
}
