import request from 'superagent';

export function post(url, params, callBack) {
  request
  .post(url)
  .send(params)
  .set('Content-Type', "application/json")
  .end(function(err, res){
    callBack(err, res)
  });
}

export function getImage(url, callBack) {
  request
  .get(url)
  .end(function(err, res){
    console.log(res)
  });
}
