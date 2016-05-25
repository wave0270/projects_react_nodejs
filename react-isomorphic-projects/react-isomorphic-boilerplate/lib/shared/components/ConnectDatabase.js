'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var request = require('superagent');

exports['default'] = _react2['default'].createClass({
	displayName: 'ConnectDatabase',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'ConnectDatabase Component'
		};
	},
	getInitialState: function getInitialState() {
		return {
			data: ""
		};
	},
	getContent: function getContent() {
		console.log("getContent");
		var that = this;
		request.get('http://localhost:1338/parse/classes/MenuItem').set("X-Parse-Application-Id", "Value-ID-X-Parse-Application").set("Content-Type", "application/json").end(function (err, res) {
			var data = "No data";
			if (res && res.body && res.body.results && res.body.results.length > 0) {
				var l = res.body.results.length;
				data = JSON.stringify(res.body.results[l - 1]);
			}
			that.setState({ data: data });
			console.log(res);
		});
	},
	addContent: function addContent() {
		var date = JSON.stringify(new Date());
		request.post('http://localhost:1338/parse/classes/MenuItem').send({ date: date }).set("X-Parse-Application-Id", "Value-ID-X-Parse-Application").set("Content-Type", "application/json").end(function (err, res) {
			// var data = "No data";
			// if(res && res.body && res.body.results && res.body.results.length>0){
			// 	var l = res.body.results.length;
			// 	data = JSON.stringify(res.body.results[l-1]);
			// }
			// that.setState({data: data});
			console.log(res);
		});
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			null,
			_react2['default'].createElement(
				'button',
				{ onClick: this.getContent },
				' Get Data '
			),
			this.state.data,
			_react2['default'].createElement('br', null),
			_react2['default'].createElement(
				'button',
				{ onClick: this.addContent },
				' add Data '
			),
			_react2['default'].createElement('br', null),
			_react2['default'].createElement(
				'button',
				{ onClick: this.updateContent },
				' update Data '
			),
			_react2['default'].createElement('br', null),
			_react2['default'].createElement(
				'button',
				{ onClick: this.deleteContent },
				' delete Data '
			)
		);
	}
});
module.exports = exports['default'];