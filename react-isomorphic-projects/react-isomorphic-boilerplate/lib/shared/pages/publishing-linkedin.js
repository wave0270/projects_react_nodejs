'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

exports['default'] = _react2['default'].createClass({
	displayName: 'publishing-linkedin',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Publishing Linkedin page'
		};
	},
	getInitialState: function getInitialState() {
		console.log('getInitialState');
		return {
			post: {
				"comment": "",
				"content": {
					"title": "",
					"description": "",
					"submitted-url": "http://khoahoc.tv/dong-dat-72-do-richter-o-ecuador-72888",
					"submitted-image-url": "http://7428.net/wp-content/uploads/2014/02/Valentines-Day-I-Love-You-Vector.jpg"
				},
				"visibility": {
					"code": "anyone"
				}
			}
		};
	},
	componentDidMount: function componentDidMount() {
		console.log('componentWillMount');
		if (sessionStorage.getItem('save')) {
			sessionStorage.removeItem('save');
			this.setState({ message: 'Post successfully' });
		}
	},
	publishing: function publishing() {
		var that = this;
		// window.open('http://localhost:7000/linkedin/calloauth/linkedin-call');
		_superagent2['default'].post('/linkedin-call').send(this.state.post).set('Accept', 'application/json').end(function (error, result) {
			if (result.body && result.body.data) {
				var json = JSON.parse(result.body.data.text);
				if (json.message) {
					that.setState({ message: json.message });
				} else {
					that.setState({ message: 'Post successfully' });
				}
			} else {
				sessionStorage.setItem('save', 'true');
				window.open('/linkedin/calloauth/publishing-linkedin', '_self');
			}
		});
	},
	handlerOnChange: function handlerOnChange(name, event) {
		var post = this.state.post;
		post.content[name] = event.target.value;
		this.setState({ post: post, message: "" });
	},
	handlerOnChangeComment: function handlerOnChangeComment(name, event) {
		var post = this.state.post;
		post[name] = event.target.value;
		this.setState({ post: post, message: "" });
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'container' },
			_react2['default'].createElement(
				'h1',
				null,
				this.props.name
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Title:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Title', value: this.state.post.content.title, onChange: this.handlerOnChange.bind(this, 'title') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Description:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Description', value: this.state.post.content.description, onChange: this.handlerOnChange.bind(this, 'description') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Image Link:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Image', value: this.state.post.content['submitted-image-url'], onChange: this.handlerOnChange.bind(this, 'submitted-image-url') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Link:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Link', value: this.state.post.content['submitted-url'], onChange: this.handlerOnChange.bind(this, 'submitted-url') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				_react2['default'].createElement(
					'label',
					{ htmlFor: '' },
					'Comment:'
				),
				_react2['default'].createElement('input', { className: 'form-control', placeholder: 'Comment', value: this.state.post.comment, onChange: this.handlerOnChangeComment.bind(this, 'comment') })
			),
			_react2['default'].createElement(
				'div',
				{ className: 'form-group' },
				this.state && this.state.message && _react2['default'].createElement(
					'p',
					{ className: 'text-primary' },
					this.state ? this.state.message : ''
				),
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.publishing },
					'Publishing'
				)
			)
		);
	}
});
module.exports = exports['default'];