 var https = require('https');
 var express = require('express');
 exports.getMenu = function(req, res){
 console.log("param~ " + req.params.id);
 var end_point = "/v1.0/menu/" +  req.params.id;

  var options = {
    host: 'cms.ddev1.worldnow.com',
    path: end_point,
     //url: 'https://cms.ddev1.worldnow.com/v1.0/menu/6',
     method: 'GET',
     headers: {
       'Authorization': 'struong~worldnow113~6',
       'Content-Type': 'application/xml',
       'access-control-allow-origin': '*'
     }
  };

  // do the GET request
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  var reqGet = https.request(options, function(response) {
      response.on('data', function(d) {
        res.render('view1', { title: d })
      });

  });

  reqGet.end();
  reqGet.on('error', function(e) {
      console.error(e);
  });
};
