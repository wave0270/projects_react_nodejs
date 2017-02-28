//https://medium.com/startup-study-group/40-npm-modules-we-can-t-live-without-36e29e352e3a#.sm38wgvpi
/*not yet use modules:
- mini: bcryptjs, compression, fs-extra, get-value, object-set
- big:  bluebird (mean promise), jsdom, react-grid-layout(dev: react-resizable, react-draggable)
*/
import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';
import express from 'express';
import reactElementToJSXString from 'react-element-to-jsx-string';

import routes from '../share/routes';
var io = require('socket.io')(3030);

var compression = require('compression'); //It compresses server responses so the data travels faster across the internet
var bodyParser = require('body-parser');
/* create express server */
let app = express();
/*********************************/
/*parse application/json*/
app.use(bodyParser.urlencoded({	extended: false	}));
app.use(bodyParser.json());
app.use(bodyParser.text());
/*********************************/

/*compresses server responses*/
app.use(compression());
/*********************************/
/* static files served from "public" through url /static/ */
app.use('/static', express.static('public'));
/*********************************/

// call to publish social app configuration function
app.use(require('./social/linkedin'));
/* static files served from "public" through url /static/ */
app.use(require('./social/facebook'));
/*execute Database*/
app.use(require('./parser/common'));
/*API for get content of web page*/
app.use(require('./api/fetch'));
/*API bitly*/
app.use(require('./api/bitly'));
/*API Base64*/
app.use(require('./api/base64.js'));
/*API sequelize*/
app.use(require('./sequelizeApi/route/users'));


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
        let renderedBody = reactElementToJSXString(<Root />);
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
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
                    <link rel="stylesheet" href="static/css/style.css">

                    <!--ALL PAGE 2324-->
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
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js">
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
                    <script src="static/client.js"></script>
                </body>
            </html>
        `;

        /* write html, close connection */
        res.write(html);
        res.end();
    });
});

/*********************************/

/*config server*/
var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

/*init socket listen*/
io.on('connection', function(client) {
    console.log('Client connected...');
    /*listen 'join' event on client*/
    client.on('join', function(data) {
        console.log(data);
    });

    /*listen 'messages' event on client*/
    client.on('messages', function(data) {
       /*send to specified client which send 'messages' event*/
       client.emit('broad', data);
       /*send to all client which listening 'broad' event*/
       console.log(data)
       client.broadcast.emit('broad',data);
    });
});
/*End : init socket listen*/


/*********************************/
