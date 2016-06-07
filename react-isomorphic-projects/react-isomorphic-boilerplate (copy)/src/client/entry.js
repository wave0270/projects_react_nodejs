// import React from "react";
// import ReactDom from "react-dom";
// import Router from "react-router";
// import routes from "../shared/routes";
//
//
// console.log("entry.js - not run in server")
// Router.run(routes, Router.HistoryLocation, (Handler, state) => {
//   ReactDom.render(<Handler />, document.getElementById('app'));
// });

/* global window, document */

import React from 'react';
import Router from 'react-router';

window.React = React;

let routes = require('../share/routes');

Router.run(routes, Router.HistoryLocation, function(Root, state) {
    React.render(<Root />, document.getElementById('app'));
    console.log('Rendered app on client');
});
