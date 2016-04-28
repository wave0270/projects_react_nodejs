"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _serverConfig = require('../../server/config');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

var _componentsConnectDatabase = require("../components/ConnectDatabase");

var _componentsConnectDatabase2 = _interopRequireDefault(_componentsConnectDatabase);

exports["default"] = _react2["default"].createClass({
  displayName: "test_server_page",

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Home page'
    };
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement("img", { style: { width: "10px", height: "10px" }, src: _serverConfig2["default"].getFullDomain() + "/src/images/cat.gif" }),
      _react2["default"].createElement("br", null),
      _react2["default"].createElement(_componentsConnectDatabase2["default"], null)
    );
  }
});
module.exports = exports["default"];