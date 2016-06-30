"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var API = require('../api/common');

exports["default"] = _react2["default"].createClass({
	displayName: "linkedin-publishing-connect",

	componentDidMount: function componentDidMount() {
		if (window.location.search && window.location.search.indexOf("connectStatus=200") >= 0) {
			localStorage.setItem('isLinkedinConnect', 'true');
		} else {
			localStorage.setItem('isLinkedinConnect', 'false');
		}
		window.close();
	},
	render: function render() {
		return _react2["default"].createElement("div", null);
	}
});
module.exports = exports["default"];