var express = require('express'),
    bodyParser = require('body-parser'),
    request = require('superagent'),
    app = express();
var fetchUrl = require("fetch").fetchUrl;
var getMeta = require("lets-get-meta");
var fs = require('fs');

var URL = 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
// var URL = 'http://edition.cnn.com/2016/05/31/africa/nigeria-cities-pollution/index.html'
// var URL = 'https://www.linkedin.com/updates?discuss=&scope=503433939&stype=M&topic=6143688338592329728&type=U&a=Y1I3'
// var URL = "https://www.linkedin.com/nhome/updates?topic=6143688338592329728"
// var URL = "./offline/LinkedIn.html"
app.post('/fetch', function(req, res) {
  console.log('fetch')
  console.log(req.params)
  fetchUrl(URL, function(error, meta, body){
    res.json({error: error, meta: meta, body: body.toString()});
  });
});
app.post('/read-meta-tag', function(req, res) {

  request
    .get(URL)
    .end(function(err, data){
          if(!err){
            var meta=getMeta(data.text);
            res.json({meta: meta, body: data.text } )
          }else{
            res.write("<div>Khong co trang nay ton tai nhe!</div>");
          }

    });
});



app.post('/read-file', function(req, res) {
  var path=require('path');
  var configPath = path.resolve(__dirname);
  var fullData =fs.readFileSync(path.resolve(configPath,"offline","Linkedin.html"), 'utf8');
  res.json({ body: fullData } )
  // console.log(fullData);
  // res.write(fullData);
});



module.exports = app;
