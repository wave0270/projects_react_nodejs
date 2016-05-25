"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/*Manual Component*/

var _componentsBrowserDetection = require("../components/BrowserDetection");

var _componentsBrowserDetection2 = _interopRequireDefault(_componentsBrowserDetection);

var _materialUiLibRaisedButton = require('material-ui/lib/raised-button');

var _materialUiLibRaisedButton2 = _interopRequireDefault(_materialUiLibRaisedButton);

exports["default"] = _react2["default"].createClass({
	displayName: "test_client_page",

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Test Client page'
		};
	},
	getInitialState: function getInitialState() {
		return {
			BrowserDetection: ""
		};
	},
	showBrowserInfo: function showBrowserInfo() {
		this.setState({ BrowserDetection: _react2["default"].createElement(_componentsBrowserDetection2["default"], null) });
	},
	render: function render() {
		return _react2["default"].createElement(
			"div",
			null,
			_react2["default"].createElement(
				"p",
				{ className: "title-component" },
				"Hello ",
				this.props.name
			),
			_react2["default"].createElement("br", null),
			_react2["default"].createElement(_materialUiLibRaisedButton2["default"], { onClick: this.showBrowserInfo, label: "Show Detection", primary: true }),
			this.state.BrowserDetection
		);
	}
});
module.exports = exports["default"];