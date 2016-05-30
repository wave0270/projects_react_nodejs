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

var _pagesLogin_page = require("./pages/login_page");

var _pagesLogin_page2 = _interopRequireDefault(_pagesLogin_page);

var _pagesContact_page = require("./pages/contact_page");

var _pagesContact_page2 = _interopRequireDefault(_pagesContact_page);

var _pagesLinkedinPublishing = require("./pages/linkedin-publishing");

var _pagesLinkedinPublishing2 = _interopRequireDefault(_pagesLinkedinPublishing);

//test page:
var _pagesTest_bootstrap_page = require("./pages/test_bootstrap_page");

var _pagesTest_bootstrap_page2 = _interopRequireDefault(_pagesTest_bootstrap_page);

var _pagesTest_server_page = require("./pages/test_server_page");

var _pagesTest_server_page2 = _interopRequireDefault(_pagesTest_server_page);

var _pagesTest_client_page = require("./pages/test_client_page");

var _pagesTest_client_page2 = _interopRequireDefault(_pagesTest_client_page);

var auth = true;
console.log("Run client!");
exports["default"] = _react2["default"].createElement(
  _reactRouter.Route,
  { path: "/" },
  _react2["default"].createElement(_reactRouter.Route, { name: "home", handler: _pagesHome_page2["default"], path: "/" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "jsx", handler: _pagesJsx_page2["default"], path: "/jsx" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "login", handler: _pagesLogin_page2["default"], path: "/login" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "contact", handler: _pagesContact_page2["default"], path: "/contact" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "linkedin-publishing", handler: _pagesLinkedinPublishing2["default"], path: "/linkedin-publishing" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "bootstrap", handler: _pagesTest_bootstrap_page2["default"], path: "/bootstrap" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "test-server", handler: _pagesTest_server_page2["default"], path: "/test-server" }),
  _react2["default"].createElement(_reactRouter.Route, { name: "test-client", handler: _pagesTest_client_page2["default"], path: "/test-client" })
);
module.exports = exports["default"];