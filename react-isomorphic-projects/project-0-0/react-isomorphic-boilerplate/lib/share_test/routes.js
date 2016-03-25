'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AppHandler = require('./components/AppHandler.jsx');
var ProductHandler = require('./components/ProductHandler.jsx');

var Routes = React.createElement(
	Route,
	{ name: 'app', path: '/', handler: AppHandler },
	React.createElement(Route, { name: 'products', path: '/products/:category', handler: ProductHandler })
);