import express from "express";
import React from "react";
// import ReactDom from "react-dom";
import Router from "react-router";
const app = express();

// app.set('view engine', 'jade');
// app.set('views', './views');

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

import routes from "../shared/routes";

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    console.log("Server-1***********************************")
    // console.log("req***************************************")
    // console.log(req)
    // console.log(req.url)
    // console.log(req.path)
    // console.log(req)
    // console.log("routes******************************************")
    // // console.log(Handler.namedRoutes[])
    // console.log(Handler)
    // console.log(Handler.namedRoutes)
    // console.log(Handler.props)
    res.render('Html.jsx', { content: <Handler /> });
  });
});

var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});


// var app = express();
//
// app.set('views','./views');
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());
// app.get('/', require('./routes').index);
