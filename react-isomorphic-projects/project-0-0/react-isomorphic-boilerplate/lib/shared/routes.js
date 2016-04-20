"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _reactRouter = require("react-router");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

// import AppHandler from "./components/AppHandler";

var _pagesHome_page = require("./pages/home_page");

var _pagesHome_page2 = _interopRequireDefault(_pagesHome_page);

var _pagesJsx_page = require("./pages/jsx_page");

var _pagesJsx_page2 = _interopRequireDefault(_pagesJsx_page);

var auth = true;
console.log("Run client!");
exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  null,
  _react2["default"].createElement(_reactRouter.Route, { newtest: "a", name: "home", handler: _pagesHome_page2["default"], path: "/" }),
  _react2["default"].createElement(_reactRouter.Route, { newtest: "a", name: "jsx", handler: _pagesJsx_page2["default"], path: "/jsx" })
);
module.exports = exports["default"];