"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

exports["default"] = _react2["default"].createClass({
  displayName: "login_page",

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Home page'
    };
  },
  render: function render() {
    return _react2["default"].createElement(
      "div",
      { className: "container" },
      _react2["default"].createElement(
        "form",
        { className: "form-signin" },
        _react2["default"].createElement(
          "h2",
          { className: "form-signin-heading" },
          "Please sign in"
        ),
        _react2["default"].createElement(
          "label",
          { htmlFor: "inputEmail", className: "sr-only" },
          "Email address"
        ),
        _react2["default"].createElement("input", { type: "email", id: "inputEmail", className: "form-control", placeholder: "Email address", required: "", autofocus: "" }),
        _react2["default"].createElement(
          "label",
          { htmlFor: "inputPassword", className: "sr-only" },
          "Password"
        ),
        _react2["default"].createElement("input", { type: "password", id: "inputPassword", className: "form-control", placeholder: "Password", required: "" }),
        _react2["default"].createElement(
          "div",
          { className: "checkbox" },
          _react2["default"].createElement(
            "label",
            null,
            _react2["default"].createElement("input", { type: "checkbox", value: "remember-me" }),
            " Remember me"
          )
        ),
        _react2["default"].createElement(
          "button",
          { className: "btn btn-lg btn-primary btn-block", type: "submit" },
          "Sign in"
        )
      )
    );
  }
});
module.exports = exports["default"];