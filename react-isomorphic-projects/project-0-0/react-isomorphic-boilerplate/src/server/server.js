import express from "express";
import React from "react";
import Router from "react-router";
const app = express();
// var ReactEngine = require('react-engine');


app.set('view engine', 'jade');
app.set('views', './views');

import routes from "../shared/routes";

app.get('/*', function (req, res) {
  Router.run(routes, req.url, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

var server = app.listen(7000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
