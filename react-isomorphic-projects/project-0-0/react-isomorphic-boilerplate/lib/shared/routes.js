"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// import AppHandler from "./components/AppHandler";

var _componentsBinh = require("./components/binh");

var _componentsBinh2 = _interopRequireDefault(_componentsBinh);

var _componentsJsxComponent = require("./components/jsxComponent");

var _componentsJsxComponent2 = _interopRequireDefault(_componentsJsxComponent);

var auth = true;
console.log("Run client!");
console.log(_componentsBinh2["default"]);
exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  null,
  _react2["default"].createElement(_reactRouter.Route, { newtest: "a", name: "home", handler: _componentsBinh2["default"], path: "/" }),
  _react2["default"].createElement(_reactRouter.Route, { newtest: "a", name: "jsx", handler: _componentsJsxComponent2["default"], path: "/jsx" })
);
module.exports = exports["default"];