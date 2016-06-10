/* global window, document */

import React from 'react';
import Router from 'react-router';
/*listen event*/
// var ee = require('event-emitter');
// var emitter = ee({}), listener;

window.React = React;

let routes = require('../share/routes');

Router.run(routes, Router.HistoryLocation, function(Root, state) {
    React.render(<Root />, document.getElementById('app'));
    console.log('Rendered app on client');
});
