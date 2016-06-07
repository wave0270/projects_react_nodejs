"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require("react-helmet");

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

exports["default"] = _react2["default"].createClass({
	displayName: "home_page",

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Home page'
		};
	},
	render: function render() {
		return _react2["default"].createElement(
			"div",
			null,
			_react2["default"].createElement(_reactHelmet2["default"], {
				htmlAttributes: { "lang": "en", "amp": undefined }, // amp takes no value
				title: "My Title",
				titleTemplate: "MySite.com - %s" }),
			_react2["default"].createElement(
				"h1",
				null,
				"Hello ",
				this.props.name,
				" sad"
			)
		);
	}
});
module.exports = exports["default"];