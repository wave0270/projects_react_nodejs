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
    this.showLocation();
    var arr = [];
    console.log("navigator: ");
    console.log(navigator);
    for (var k in navigator) {
      var type = typeof navigator[k];
      if (type !== "function" && type !== "object") {
        var item = _react2["default"].createElement(
          "div",
          { className: "row" },
          _react2["default"].createElement(
            "div",
            { className: "col-sm-3" },
            typeof navigator[k] + k + " : ",
            " "
          ),
          _react2["default"].createElement(
            "div",
            { className: "col-sm-9" },
            JSON.stringify(navigator[k])
          )
        );
        arr.push(item);
      }
    }
    return arr;
  },
  showLocation: function showLocation() {
    console.log(window);
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