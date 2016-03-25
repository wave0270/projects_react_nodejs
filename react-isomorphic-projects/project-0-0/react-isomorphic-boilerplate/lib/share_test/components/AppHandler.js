'use strict';

var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Layout = require('../components/Layout.jsx');

var AppHandler = React.createClass({
	displayName: 'AppHandler',

	render: function render() {
		return React.createElement(
			Layout,
			this.props,
			React.createElement(RouteHandler, this.props)
		);
	}
});

module.exports = AppHandler;