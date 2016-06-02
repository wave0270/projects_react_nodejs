'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var API = require('../api/common');

exports['default'] = _react2['default'].createClass({
	displayName: 'linkedin-publishing',

	getDefaultProps: function getDefaultProps() {
		return {
			name: 'Publishing Linkedin page'
		};
	},
	getInitialState: function getInitialState() {

		console.log('getInitialState');
		return {
			config: {
				client_id: "75hebds55kuzda",
				client_secret: "E3fleb4ZN96CYKXb",
				redirect_uri: ""
			},
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
			},
			isLoading: false
		};
	},
	componentDidMount: function componentDidMount() {
		console.log('componentWillMount');
		this.state.config.redirect_uri = window.location.origin + "/linkedin/oauth/callback";
		if (sessionStorage.getItem('save')) {
			sessionStorage.removeItem('save');
			if (window && window.location.search) {
				var res = window.location.search.slice(1, window.location.search.length);
				var arr = res.split('=');
				this.setState({ status: arr[1] });
				window.history.pushState('object or string', 'Title', '/linkedin-publishing');
			}
		}
	},
	componentWillUnmount: function componentWillUnmount() {
		console.log('componentWillUnMount');
		if (sessionStorage.getItem('save')) {
			sessionStorage.removeItem('save');
		}
	},

	callSharing: function callSharing() {
		this.setState({ isLoading: true });
		var that = this;
		var params = {
			method: 'post',
			key: 'post-share',
			post: this.state.post
		};
		API.post('/linkedin-call', params, function (err, res) {
			console.log(res);
			if (res.body && res.body.response) {
				switch (res.body.response.status) {
					case 201:
						var msg = 'Linkedin post successfully!' + res.body.response.text;
						var isMessage = 'success';
						window.open(JSON.parse(res.body.response.text).updateUrl, '_blank');
						break;
					default:
						var isMessage = 'error';
						var msg = JSON.parse(res.body.response.text).message;
				}
				that.setState({ message: msg, isMessage: isMessage, isLoading: false });
			}
		});
	},
	callShareToCompany: function callShareToCompany() {
		this.setState({ isLoading: true });
		var that = this;
		var params = {
			method: 'post',
			key: 'post-company',
			post: this.state.post
		};
		API.post('/linkedin-call-id', params, function (err, res) {
			console.log(res);
			if (res.body && res.body.response) {
				switch (res.body.response.status) {
					case 201:
						var msg = 'Linkedin post successfully!' + res.body.response.text;
						var isMessage = 'success';
						window.open(JSON.parse(res.body.response.text).updateUrl, '_blank');
						break;
					default:
						var isMessage = 'error';
						var msg = JSON.parse(res.body.response.text).message;
				}
				that.setState({ message: msg, isMessage: isMessage, isLoading: false });
			}
		});
	},
	callGet: function callGet(key) {
		this.state[key] = '';
		this.setState({ isLoading: true });
		var that = this;
		var params = {
			method: 'get',
			key: 'get-' + key
		};
		API.post('/linkedin-call', params, function (err, res) {
			console.log(res);
			if (res.body && res.body.response) {
				switch (res.body.response.status) {
					case 200:
						var msg = res.body.response.text;
						var isMessage = 'success';
						break;
					default:
						var isMessage = 'error';
						var msg = res.body.response.text;
				}
				that.setState({ message: msg, isMessage: isMessage, isLoading: false });
			}
		});
	},
	handlerOnChange: function handlerOnChange(name, event) {
		var post = this.state.post;
		post.content[name] = event.target.value;
		this.setState({ post: post, status: "" });
	},
	handlerOnChangeComment: function handlerOnChangeComment(name, event) {
		var post = this.state.post;
		post[name] = event.target.value;
		this.setState({ post: post, status: "" });
	},
	render: function render() {
		return _react2['default'].createElement(
			'div',
			{ className: 'container' },
			this.state && this.state.isMessage === 'success' && !this.state.isLoading && _react2['default'].createElement(
				'p',
				{ className: 'text-primary' },
				this.state.message,
				' '
			),
			this.state && this.state.isMessage === 'error' && !this.state.isLoading && _react2['default'].createElement(
				'p',
				{ className: 'text-danger' },
				this.state.message
			),
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
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.callSharing, disabled: this.state.isLoading },
					'Share '
				),
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.callShareToCompany, disabled: this.state.isLoading },
					'Share to Company'
				),
				_react2['default'].createElement('hr', null),
				_react2['default'].createElement(
					'p',
					null,
					'Profile:'
				),
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.callGet.bind(this, 'profile'), disabled: this.state.isLoading },
					'Get profile'
				),
				_react2['default'].createElement(
					'p',
					null,
					'Company:'
				),
				_react2['default'].createElement(
					'button',
					{ className: 'btn btn-default', onClick: this.callGet.bind(this, 'companies'), disabled: this.state.isLoading },
					'Get companies'
				)
			)
		);
	}
});
module.exports = exports['default'];