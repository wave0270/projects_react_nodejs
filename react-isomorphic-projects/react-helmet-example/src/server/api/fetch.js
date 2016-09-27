var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    superagent = require('superagent'),
    fs = require('fs'),
    fetchUrl = require("fetch").fetchUrl,
    getMeta = require("lets-get-meta"),
    jsdom = require("jsdom");



app.post('/fetch', function(req, res) {
  fetchUrl(req.body.url, function(error, meta, body){
    if(error){
      res.json({error: error, meta: meta, body: 'error!'});
    }else{
      res.json({error: error, meta: meta, body: body.toString()});
    }
  });
});

app.post('/read-meta-tag', function(req, res) {
  superagent
    .get(req.body.url)
    .end(function(err, data){
          if(!err){
            var meta=getMeta(data.text);
            res.json({meta: meta, body: data.text } );
          }else{
            res.json({meta: 'none',body: JSON.stringify(err)} );
          }

    });
});
app.post('/read-meta-tag-with-jsdom', function(req, res) {
  superagent
    .get(req.body.url)
    .end(function(err, data){
          if(!err){
            var bodytext = `
                    <p>This is image</p>
                    <p>image normal: 2 image</p>
                    <img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" />
                    <img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" />
                    <p>end image normal</p>
                    <div>
                      <p>p
                        <span>
                          span
                          <b>
                            b
                      <img alt="fff" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" />
                          </b>
                        </span>
                      </p>
                    </div>
                    <h1>h1<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></h1>
                    <h2>h2<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></h2>
                    <h4>h4<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></h4>
                    <h5>h5<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></h5>
                    <h6>h6<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></h6>
                    <span>span<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></span>
                    <h3><img width="560" height="315" alt="" src="http://economictimes.indiatimes.com/thumb/msid-52953295,width-600,resizemode-4/news/et-tv/pm-modi-on-frankly-speaking-with-arnab-goswami-exclusive-full-interview.jpg" style="height:344px; width:600px" /></h3>

                    <h2><p><span>h2 p span<img alt="" src="https://clduncan75.files.wordpress.com/2014/07/everything-is-a-miracle.jpg" style="height:386px; width:580px" /></span></p></h2>

                    <p>This is youtube video</p>
                    <div data-oembed-url="https://www.youtube.com/watch?v=NGtNBRKnUng">
                       <div>
                        <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 56.2493%;">
                          <iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="https://www.youtube.com/embed/NGtNBRKnUng?wmode=transparent&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;" webkitallowfullscreen="true"></iframe></div>
                       </div>
                    </div>
                    <p>zzasd 1</p>
                      <div data-oembed-url="https://www.youtube.com/watch?v=NGtNBRKnUng">
                         <div>
                          <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 56.2493%;">
                            <iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="https://www.youtube.com/embed/NGtNBRKnUng?wmode=transparent&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;" webkitallowfullscreen="true"></iframe></div>
                         </div>
                      </div>
                      <p>zzasd 2</p>
                        <div data-oembed-url="https://www.youtube.com/watch?v=NGtNBRKnUng">
                           <div>
                            <div style="left: 0px; width: 100%; height: 0px; position: relative; padding-bottom: 56.2493%;">
                              <iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="https://www.youtube.com/embed/NGtNBRKnUng?wmode=transparent&amp;rel=0&amp;autohide=1&amp;showinfo=0&amp;enablejsapi=1" style="top: 0px; left: 0px; width: 100%; height: 100%; position: absolute;" webkitallowfullscreen="true"></iframe></div>
                           </div>
                        </div>
                        <p>zzasd 3</p>`;
            bodytext = '<div id="modify-bodytext">'+bodytext+'</div>';
            /*jsdom exaple*/
            jsdom.env(
              bodytext,
              function (err, window) {
                var onGetInvalidParent = function(childDom){
                  var inValidTagArr = ['P','H1','H2','H3','H4','H5','H6','SPAN','B','I','A'];
                  var parentNode = childDom.parentNode;
                  var isInvalid = false;
                  for(var i=0; i<inValidTagArr.length; i++){
                    if(parentNode && parentNode.tagName === inValidTagArr[i]){
                      isInvalid = true;
                      break;
                    }
                  }
                  if(isInvalid){
                    childDom = onGetInvalidParent(parentNode);
                  }
                  return childDom;
                };
                /*replace videos*/
                var arr = window.document.querySelectorAll("div[data-oembed-url]");
                console.log("video count: "+arr.length)
                for(var i=0; i < arr.length; i++){
                  console.log(i+" video=================")
                  var domTMP = arr[i];
                  var src = domTMP.querySelector("iframe").src;
                  var figureStr = `<div><figure class="op-interactive">
                                        <iframe width="560" height="315" src="`+src+`"></iframe>
                                    </figure></div>`
                  domTMP.outerHTML = figureStr;
                }

                /*replace images*/
                var imgArr = window.document.querySelectorAll("img");
                console.log("video count: "+imgArr.length)
                for(var i=0; i < imgArr.length; i++){
                  console.log(i+' image==============')
                  /*search invalid parent*/
                  var domTMP = imgArr[i];
                  var parent = onGetInvalidParent(domTMP)
                  /*init new dom*/
                  var figureStr = '<figure><img src="'+domTMP.src+'" /></figure>';
                  var div = window.document.createElement('div');
                  div.innerHTML = figureStr;
                  /*insert dom*/
                  var bigParentNode = parent.parentNode;
                  bigParentNode.insertBefore(div.firstChild,parent);
                  /*remove old dom*/
                  var parentOldDom = domTMP.parentNode;
                  parentOldDom.removeChild(domTMP);
                }
                res.json({body: window.document.querySelector('#modify-bodytext').innerHTML});
              }
            );
          }else{
            res.json({meta: 'none',body: JSON.stringify(err)} );
          }

    });
});

app.post('/read-file', function(req, res) {
  var path=require('path');
  var configPath = path.resolve(__dirname);
  var fullData =fs.readFileSync(path.resolve(configPath,"offline","test.html"), 'utf8');
  console.log(fullData)
  res.json({ body: fullData } )
});

module.exports = app;
