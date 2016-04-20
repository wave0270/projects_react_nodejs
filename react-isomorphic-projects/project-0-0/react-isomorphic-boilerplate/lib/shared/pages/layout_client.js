"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
  displayName: "layout_client",

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Home page'
    };
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      "Hello App Handler lkh asda"
    );
  }
});
module.exports = exports["default"];