"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
  displayName: "BrowserDetection",

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Define User Component'
    };
  },

  showNavigation: function showNavigation() {
    var arr = [];
    for (var k in navigator) {
      if (typeof navigator[k] !== "function") {
        var item = _react2["default"].createElement(
          "p",
          { className: true },
          typeof navigator[k] + k + " : " + JSON.stringify(navigator[k])
        );
        arr.push(item);
      } else {
        // console.log(typeof(navigator[k])+k+":")
      }
    }
    return arr;
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      null,
      _react2["default"].createElement(
        "h1",
        null,
        "Hello ",
        this.props.name
      ),
      this.showNavigation().map(function (item) {
        return item;
      })
    );
  }
});
module.exports = exports["default"];