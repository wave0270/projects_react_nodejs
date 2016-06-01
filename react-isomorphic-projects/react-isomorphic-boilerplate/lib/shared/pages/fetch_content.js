'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var API = require('../api/common');
// var rawBookmarks = require('~/.mozilla/firefox/profile-id/bookmarkbackups/bookmarks-YYYY-MM-DD.json');
// var BookmarkCollection = require('firefox-bookmarks');
// var bookmarks = new BookmarkCollection(rawBookmarks);

exports['default'] = _react2['default'].createClass({
	displayName: 'fetch_content',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Fetch Content'
		};
	},
	getInitialState: function getInitialState() {
		console.log('getInitialState');
		return {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
	},
	componentDidMount: function componentDidMount() {
		console.log('componentWillMount');
	},
	componentWillUnmount: function componentWillUnmount() {},
	callGetFetch: function callGetFetch() {
		var that = this;
		var params = {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
		API.post('/fetch', params, function (err, res) {
			if (res) {
				console.log(res.body.meta);
				that.setState({ body: res.body.body });
			}
		});
	},
	callGet: function callGet() {
		var that = this;
		var params = {
			fetchUrl: 'http://khoahoc.tv/day-la-7-hang-o-tiem-nang-nhat-nguoi-ngoai-hanh-tinh-co-the-dang-tru-ngu-73181'
		};
		API.post('/read-meta-tag', params, function (err, res) {
			if (res) {
				console.log(res.body.meta);
				// that.renderHtml(res.body.body)
				that.setState({ body: res.body.body });
			}
		});
	},
	getGeoLocation: function getGeoLocation() {
		navigator.geolocation.getCurrentPosition(function (position) {
			console.log(position);
		});
		// Output simplified bookmark info
		// bookmarks.toJSON();
	},
	renderHtml: function renderHtml(html) {
		var myElement = document.getElementById("intro");
		document.getElementById("demo").innerHTML = html;
	},
	handlerOnChange: function handlerOnChange(key, e) {
		this.state[key] = e.target.value;
		this.setState(this.state);
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'container' },
			_react2['default'].createElement('input', { value: this.state.fetchUrl, onChange: this.handlerOnChange.bind(this, 'url') }),
			_react2['default'].createElement(
				'div',
				{ className: 'row' },
				_react2['default'].createElement(
					'a',
					{ onClick: this.callGet },
					'Get Content'
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'row' },
				_react2['default'].createElement(
					'a',
					{ onClick: this.callGetFetch },
					'Get Content By Fetch'
				)
			),
			_react2['default'].createElement(
				'div',
				{ className: 'row' },
				_react2['default'].createElement(
					'a',
					{ onClick: this.getGeoLocation },
					'Get Location'
				)
			),
			_react2['default'].createElement('div', { className: 'content row', dangerouslySetInnerHTML: { __html: this.state.body } }),
			_react2['default'].createElement('div', { id: 'demo' })
		);
	}
});
module.exports = exports['default'];