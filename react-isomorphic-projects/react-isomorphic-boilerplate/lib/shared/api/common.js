'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.get = get;
exports.post = post;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function get(url, params, callBack) {
  _superagent2['default'].get(url).set('Content-Type', "application/json").end(function (err, res) {
    callBack(err, res);
  });
}

function post(url, params, callBack) {
  _superagent2['default'].post(url).send(params).set('Content-Type', "application/json").end(function (err, res) {
    callBack(err, res);
  });
}