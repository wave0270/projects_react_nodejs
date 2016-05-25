'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var request = require('superagent');

exports['default'] = _react2['default'].createClass({
  displayName: 'DownloadFile',

  getDefaultProps: function getDefaultProps() {
    return {
      name: 'Download Component'
    };
  },
  getContent: function getContent() {
    console.log("getContent");
    request.get('http://localhost:1338/parse/classes/MenuItem').set("X-Parse-Application-Id", "Value-ID-X-Parse-Application").set("Content-Type", "application/json").end(function (err, res) {
      console.log(res);
    });
  },
  render: function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'p',
        null,
        'Hello ',
        this.props.name
      ),
      _react2['default'].createElement(
        'button',
        { onClick: this.getContent },
        ' new '
      )
    );
  }
});
module.exports = exports['default'];