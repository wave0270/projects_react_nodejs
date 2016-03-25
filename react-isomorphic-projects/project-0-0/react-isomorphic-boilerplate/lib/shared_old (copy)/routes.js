"use strict";

Object.defineProperty(exports, "__esModule", {
		value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentsAppHandler = require("./components/AppHandler");

var _componentsAppHandler2 = _interopRequireDefault(_componentsAppHandler);

var _componentsBinh = require("./components/binh");

var _componentsBinh2 = _interopRequireDefault(_componentsBinh);

var _componentsJsxComponent = require("./components/jsxComponent");

var _componentsJsxComponent2 = _interopRequireDefault(_componentsJsxComponent);

var auth = true;
console.log(auth);
exports["default"] = _react2["default"].createElement(
		_reactRouter.Route,
		null,
		_react2["default"].createElement(_reactRouter.Route, { handler: _componentsAppHandler2["default"], path: "/" }),
		_react2["default"].createElement(_reactRouter.Route, { handler: _componentsBinh2["default"], path: "/binh" }),
		_react2["default"].createElement(_reactRouter.Route, { handler: _componentsJsxComponent2["default"], path: "/jsx" })
);
module.exports = exports["default"];