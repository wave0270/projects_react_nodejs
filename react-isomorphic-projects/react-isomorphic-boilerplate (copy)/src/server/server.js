// import express from "express";
// import React from "react";
// // import ReactDom from "react-dom";
// import Router from "react-router";
//
// const app = express();
//
// var download = require('download-file');
// var request = require('superagent');
// var bodyParser = require('body-parser');
//
// app.set('views', './views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.use(bodyParser.urlencoded({	extended: false	}));
// // parse application/json
// app.use(bodyParser.json());
// app.use(bodyParser.text());
//
// import routes from "../shared/routes";
//
// app.get('/download', function (req, res) {
//   var url = "http://i.imgur.com/G9bDaPH.jpg"
//   var options = {
//   	directory: "src/images/",
//   	filename: "cat.jpg"
//   }
//   download(url, options, function(err){
//   	if (err) throw err
//   })
//   res.send('Download Finished!');
// });
//
// app.get('/get-content', function (req, res) {
//   res.json({data: 'Get Content Finished!'});
// });
//
// // call to publish social app configuration function
// app.use(require('./api/linkedin'));
// // call to get content of url
// app.use(require('./api/fetch'));
//
// /*****************************/
// app.get('/*', function (req, res) {
//   console.log("render global")
//   Router.run(routes, req.url, Handler => {
//     console.log("Server-1***********************************")
//     res.render('Html.jsx', { content: <Handler /> });
//   });
// });
//
//
//
//
//
//
// var server = app.listen(7000, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//   console.log('Example app listening at http://%s:%s', host, port);
// });
//

import express from 'express';

import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

import routes from '../share/routes';
import config from './config';
var domain = config.getFullDomain();

/* create express server */
let app = express();

/* static files served from "public" through url /static/ */
// app.use('/static', express.static('public'));


/* a single request handler receives every server request
   and routes through react-router */
app.get('*', function(req, res) {
    /* create a router and give it our routes
       and the requested path */
    let router = Router.create({
        location: req.url,
        routes: routes,
    });

    router.run(function(Root, state) {
        /* render `Root` (the complete document) to string
           and rewind Helmet for access to its data.

           Read about why rewinding is necessary on the server:
           https://github.com/nfl/react-helmet#server-usage */
        let renderedBody = React.renderToString(<Root />);
        let head = Helmet.rewind();
        /* render document with Helmet-rendered `<head>` info
           and React-rendered body. then, initialize the client
           side via `client.js`.

           Note: Helmet will update your page's `<head`> on the client
                 side, but you must construct `<head>` manually
                 on the server. */
        let html = `
            <!doctype html>
            <html ${head.htmlAttributes.toString()}>
                <head>
                    <!--ALL PAGE 2324-->
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
                    <meta charset="utf-8" />
                    <!--TITLE -->
                    ${head.title.toString()}
                    <!--META -->
                    ${head.meta.toString()}
                    <!--LINK -->
                    ${head.link.toString()}
                    <!--SCRIPT -->
                    ${head.script.toString()}
                </head>
                <body>
                    <div id="app">${renderedBody}</div>

                    <script src=${domain+'/js/app.js'}></script>
                </body>
            </html>
        `;

        /* write html, close connection */
        res.write(html);
        res.end();
    });
});


var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
