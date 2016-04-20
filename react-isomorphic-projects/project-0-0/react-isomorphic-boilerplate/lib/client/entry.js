"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require("react-router");

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _sharedRoutes = require("../shared/routes");

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

var _sharedPagesLogin_page = require("../shared/pages/login_page");

var _sharedPagesLogin_page2 = _interopRequireDefault(_sharedPagesLogin_page);

console.log("entry.js - not run in server");
_reactRouter2["default"].run(_sharedRoutes2["default"], _reactRouter2["default"].HistoryLocation, function (Handler, state) {
  var auth = false;
  if (state.path === '/admin' && !auth) {
    // Handler = LoginPage;
    window.location.href = "/login";
  } else {
    console.log(state);
    console.log(_sharedPagesLogin_page2["default"]);
    _reactDom2["default"].render(_react2["default"].createElement(Handler, null), document.getElementById('app'));
  }
});